import React, { useState, useEffect } from 'react';
import { StepId, SeriesProject } from './types/project';
import { MASTERCLASS_STEPS } from './data/masterclassData';
import { SAMPLE_PROJECTS, EMPTY_PROJECT_TEMPLATE } from './data/sampleProjects';
import { Header } from './components/Header';
import { StepProgressNav } from './components/StepProgressNav';
import { StepTheoryPanel } from './components/StepTheoryPanel';
import { StepEditorPanel } from './components/StepEditorPanel';
import { PitchPreviewDocument } from './components/PitchPreviewDocument';
import { ExportModal } from './components/ExportModal';
import { ProjectManagerModal } from './components/ProjectManagerModal';
import { CaseStudiesGallery } from './components/CaseStudiesGallery';
import { ProducerGlossary } from './components/ProducerGlossary';
import { AiCritiqueModal } from './components/AiCritiqueModal';
import { AiSynopsisModal } from './components/AiSynopsisModal';
import { GeneratedSynopsisResponse } from './services/geminiService';
import { BookOpen, PenTool, Eye, Split, Sparkles, Layers } from 'lucide-react';

const STORAGE_PROJECTS_KEY = 'showrunner_projects_v1';
const STORAGE_ACTIVE_ID_KEY = 'showrunner_active_project_id_v1';

export default function App() {
  // Persistence state
  const [projects, setProjects] = useState<SeriesProject[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PROJECTS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to load projects from storage', e);
    }
    // Default seed
    return [SAMPLE_PROJECTS[0], SAMPLE_PROJECTS[1]];
  });

  const [activeProjectId, setActiveProjectId] = useState<string>(() => {
    try {
      const savedId = localStorage.getItem(STORAGE_ACTIVE_ID_KEY);
      if (savedId) return savedId;
    } catch (e) {
      // ignore
    }
    return SAMPLE_PROJECTS[0].id;
  });

  // Current step (1 to 6)
  const [currentStepId, setCurrentStepId] = useState<StepId>('concept');

  // Navigation tab
  const [activeTab, setActiveTab] = useState<'guide' | 'editor' | 'casestudies' | 'glossary' | 'preview'>('guide');

  // Workbench layout mode: 'split' (theory + preview) or 'editor-focused'
  const [splitMode, setSplitMode] = useState<'split' | 'editor' | 'preview'>('split');

  // Modals
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isAiCritiqueOpen, setIsAiCritiqueOpen] = useState(false);
  const [isAiSynopsisOpen, setIsAiSynopsisOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_PROJECTS_KEY, JSON.stringify(projects));
      localStorage.setItem(STORAGE_ACTIVE_ID_KEY, activeProjectId);
    } catch (e) {
      console.error('Failed to save to storage', e);
    }
  }, [projects, activeProjectId]);

  // Current active project
  const currentProject =
    projects.find((p) => p.id === activeProjectId) || projects[0] || SAMPLE_PROJECTS[0];

  // Update current project
  const handleUpdateCurrentProject = (updated: SeriesProject) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    );
  };

  // AI handlers
  const handleApplyAiLogline = (newLogline: string) => {
    handleUpdateCurrentProject({
      ...currentProject,
      logline: newLogline,
      lastModified: Date.now(),
    });
  };

  const handleApplyAiSynopsis = (synopsisData: GeneratedSynopsisResponse) => {
    handleUpdateCurrentProject({
      ...currentProject,
      pilotIncitingIncident: synopsisData.pilotIncitingIncident,
      pilotAct1: synopsisData.pilotAct1,
      pilotAct2: synopsisData.pilotAct2,
      pilotAct3Climax: synopsisData.pilotAct3Climax,
      pilotCliffhanger: synopsisData.pilotCliffhanger,
      seasonArcMovement1: synopsisData.seasonArcMovement1,
      seasonArcMovement2: synopsisData.seasonArcMovement2,
      seasonArcMovement3: synopsisData.seasonArcMovement3,
      lastModified: Date.now(),
    });
  };

  // Create new project from empty template
  const handleCreateNewProject = () => {
    const newProj: SeriesProject = {
      ...EMPTY_PROJECT_TEMPLATE,
      id: 'proj-' + Date.now(),
      title: 'Nuova Serie TV Senza Titolo',
      createdAt: new Date().toISOString(),
      lastModified: Date.now(),
    } as any;

    setProjects((prev) => [newProj, ...prev]);
    setActiveProjectId(newProj.id);
    setCurrentStepId('concept');
    setActiveTab('editor');
  };

  // Load sample project
  const handleLoadSampleProject = (sample: SeriesProject) => {
    const cloned: SeriesProject = {
      ...sample,
      id: 'proj-sample-' + Date.now(),
      title: `${sample.title} (Copia di Studio)`,
      lastModified: Date.now(),
    };
    setProjects((prev) => [cloned, ...prev]);
    setActiveProjectId(cloned.id);
  };

  // Duplicate project
  const handleDuplicateProject = (target: SeriesProject) => {
    const duplicated: SeriesProject = {
      ...target,
      id: 'proj-copy-' + Date.now(),
      title: `${target.title} (Copia)`,
      lastModified: Date.now(),
    };
    setProjects((prev) => [duplicated, ...prev]);
    setActiveProjectId(duplicated.id);
  };

  // Delete project
  const handleDeleteProject = (id: string) => {
    if (projects.length <= 1) return;
    const remaining = projects.filter((p) => p.id !== id);
    setProjects(remaining);
    if (activeProjectId === id) {
      setActiveProjectId(remaining[0].id);
    }
  };

  // Current step metadata
  const currentStepData =
    MASTERCLASS_STEPS.find((s) => s.id === currentStepId) || MASTERCLASS_STEPS[0];

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col font-sans">
      {/* Top Bar Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenProjectManager={() => setIsProjectModalOpen(true)}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        currentProjectTitle={currentProject.title}
      />

      {/* 6-Step Visual Progression Ribbon (Visible in Guide & Editor tabs) */}
      {(activeTab === 'guide' || activeTab === 'editor') && (
        <StepProgressNav
          currentStep={currentStepId}
          onSelectStep={(step) => setCurrentStepId(step)}
          project={currentProject}
        />
      )}

      {/* Sub-toolbar for Views in Guide / Editor */}
      {(activeTab === 'guide' || activeTab === 'editor') && (
        <div className="no-print bg-[#0D131F] border-b border-white/5 px-4 md:px-8 py-2">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="font-semibold text-slate-200">{currentProject.title || 'Progetto Senza Titolo'}</span>
              <span aria-hidden="true">/</span>
              <span className="text-amber-400 font-mono">Tappa {currentStepData.stepNumber} di 6: {currentStepData.title}</span>
            </div>

            {/* Right side tools */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 bg-[#141C2E] p-1 rounded-lg border border-white/5">
                <button
                  onClick={() => {
                    setActiveTab('guide');
                    setSplitMode('split');
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    activeTab === 'guide' && splitMode === 'split'
                      ? 'bg-amber-400 text-slate-950 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Visualizzazione affiancata con Teoria ed Anteprima Bibbia"
                >
                  <Split className="w-3.5 h-3.5" />
                  <span>Teoria & Documento</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('editor');
                    setSplitMode('editor');
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    activeTab === 'editor'
                      ? 'bg-amber-400 text-slate-950 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Pannello di scrittura e compilazione campi"
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span>Banco di Scrittura</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('preview');
                  }}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-md text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Anteprima completa per la stampa della Scheda Pitch"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Anteprima Pitch Completa</span>
                </button>
              </div>

              {/* AI Quick Triggers in toolbar */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsAiCritiqueOpen(true)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-amber-300 hover:text-amber-200 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 transition-colors cursor-pointer"
                  title="Feedback critico professionale su Logline e Target di Pubblico"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">AI Feedback Logline & Target</span>
                  <span className="sm:hidden">AI Feedback</span>
                </button>

                <button
                  onClick={() => setIsAiSynopsisOpen(true)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-amber-300 hover:text-amber-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                  title="Genera o perfeziona la sinossi del pilot e della stagione con Gemini"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Crea Sinossi con AI</span>
                  <span className="sm:hidden">Sinossi AI</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Workspace Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8">
        {/* TAB 1: Percorso Guidato (Split: Teoria a sinistra + Anteprima Documento a destra) */}
        {activeTab === 'guide' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Colonna Sinistra: Masterclass & Metodo (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  <BookOpen className="w-4 h-4" />
                  <span>Guida e Strumenti di Scrittura</span>
                </div>
                <button
                  onClick={() => setActiveTab('editor')}
                  className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span>Vai al Banco di Scrittura →</span>
                </button>
              </div>

              <StepTheoryPanel
                step={currentStepData}
                onApplyFormula={(formula) => {
                  setActiveTab('editor');
                }}
                onOpenGlossary={() => setActiveTab('glossary')}
              />
            </div>

            {/* Colonna Destra: Anteprima Scheda Pitch in tempo reale (5 cols) */}
            <div className="lg:col-span-5 sticky top-20 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <Eye className="w-4 h-4 text-amber-400" />
                  <span>Anteprima Live Documento Pitch</span>
                </div>
              </div>

              <PitchPreviewDocument
                project={currentProject}
                onPrint={() => setIsExportModalOpen(true)}
              />
            </div>
          </div>
        )}

        {/* TAB 2: Banco di Scrittura (Editor interattivo completo) */}
        {activeTab === 'editor' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Colonna Sinistra: Campi di input ed editor form (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  <PenTool className="w-4 h-4" />
                  <span>Compilazione Scheda: Tappa {currentStepData.stepNumber}</span>
                </div>
                <button
                  onClick={() => setActiveTab('guide')}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  ← Rivedi Teoria ed Esempi
                </button>
              </div>

              <StepEditorPanel
                currentStep={currentStepId}
                project={currentProject}
                onChangeProject={handleUpdateCurrentProject}
                onNavigateStep={(step) => setCurrentStepId(step)}
                onOpenAiCritique={() => setIsAiCritiqueOpen(true)}
                onOpenAiSynopsis={() => setIsAiSynopsisOpen(true)}
              />
            </div>

            {/* Colonna Destra: Anteprima Live Documento (5 cols) */}
            <div className="lg:col-span-5 sticky top-20 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <Eye className="w-4 h-4 text-amber-400" />
                  <span>Mini-Bibbia in Tempo Reale</span>
                </div>
              </div>

              <PitchPreviewDocument
                project={currentProject}
                onPrint={() => setIsExportModalOpen(true)}
              />
            </div>
          </div>
        )}

        {/* TAB 3: Casi Studio & Masterclass Comparata */}
        {activeTab === 'casestudies' && <CaseStudiesGallery />}

        {/* TAB 4: Glossario del Produttore */}
        {activeTab === 'glossary' && <ProducerGlossary />}

        {/* TAB 5: Anteprima Scheda Pitch a Schermo Intero */}
        {activeTab === 'preview' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <button
                onClick={() => setActiveTab('editor')}
                className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                ← Torna al Banco di Scrittura
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsExportModalOpen(true)}
                  className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  Stampa o Esporta PDF / Testo
                </button>
              </div>
            </div>

            <PitchPreviewDocument
              project={currentProject}
              onPrint={() => setIsExportModalOpen(true)}
            />
          </div>
        )}
      </main>

      {/* Modals */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        project={currentProject}
      />

      <ProjectManagerModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        projects={projects}
        currentProjectId={activeProjectId}
        onSelectProject={(id) => setActiveProjectId(id)}
        onCreateNewProject={handleCreateNewProject}
        onLoadSampleProject={handleLoadSampleProject}
        onDuplicateProject={handleDuplicateProject}
        onDeleteProject={handleDeleteProject}
      />

      <AiCritiqueModal
        isOpen={isAiCritiqueOpen}
        onClose={() => setIsAiCritiqueOpen(false)}
        project={currentProject}
        onApplyLogline={handleApplyAiLogline}
      />

      <AiSynopsisModal
        isOpen={isAiSynopsisOpen}
        onClose={() => setIsAiSynopsisOpen(false)}
        project={currentProject}
        onApplySynopsis={handleApplyAiSynopsis}
      />
    </div>
  );
}
