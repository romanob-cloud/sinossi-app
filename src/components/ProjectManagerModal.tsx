import React from 'react';
import { SeriesProject } from '../types/project';
import { SAMPLE_PROJECTS, EMPTY_PROJECT_TEMPLATE } from '../data/sampleProjects';
import { X, Plus, Folder, Copy, Trash2, CheckCircle2, Sparkles } from 'lucide-react';

interface ProjectManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: SeriesProject[];
  currentProjectId: string;
  onSelectProject: (id: string) => void;
  onCreateNewProject: () => void;
  onLoadSampleProject: (sample: SeriesProject) => void;
  onDuplicateProject: (project: SeriesProject) => void;
  onDeleteProject: (id: string) => void;
}

export const ProjectManagerModal: React.FC<ProjectManagerModalProps> = ({
  isOpen,
  onClose,
  projects,
  currentProjectId,
  onSelectProject,
  onCreateNewProject,
  onLoadSampleProject,
  onDuplicateProject,
  onDeleteProject,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0F1523] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block mb-1">
              Archivio & Gestione
            </span>
            <h3 className="text-xl font-bold font-serif-title text-white">
              I Tuoi Progetti di Serie TV
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action bar: Create new project */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-[#141C2E] rounded-xl border border-white/5">
          <div>
            <h4 className="text-sm font-semibold text-white">Nuova Serie da Zero</h4>
            <p className="text-xs text-slate-400">Inizia una nuova scheda pitch vuota con la guida a tappe.</p>
          </div>
          <button
            onClick={() => {
              onCreateNewProject();
              onClose();
            }}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Crea Nuovo Progetto</span>
          </button>
        </div>

        {/* User saved projects list */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            I Tuoi Progetti Salvati ({projects.length})
          </h4>

          <div className="space-y-2.5">
            {projects.map((p) => {
              const isCurrent = p.id === currentProjectId;
              return (
                <div
                  key={p.id}
                  className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isCurrent
                      ? 'bg-amber-400/10 border-amber-400/40 text-white'
                      : 'bg-[#121929] border-white/5 text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <div
                    onClick={() => {
                      onSelectProject(p.id);
                      onClose();
                    }}
                    className="space-y-1 cursor-pointer flex-1"
                  >
                    <div className="flex items-center gap-2">
                      <Folder className={`w-4 h-4 ${isCurrent ? 'text-amber-400' : 'text-slate-400'}`} />
                      <strong className="text-sm font-semibold text-white">{p.title || 'Senza Titolo'}</strong>
                      {isCurrent && (
                        <span className="text-[11px] font-mono text-amber-300 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> In Lavorazione
                        </span>
                      )}
                    </div>
                    {p.logline && (
                      <p className="text-xs text-slate-400 line-clamp-1 italic">
                        "{p.logline}"
                      </p>
                    )}
                    <div className="text-[11px] text-slate-500 font-mono flex items-center gap-2">
                      <span>{p.genre || 'Genere non specificato'}</span>
                      <span aria-hidden="true">·</span>
                      <span>{p.format || 'Formato libero'}</span>
                      <span aria-hidden="true">·</span>
                      <span>Modificato il {new Date(p.lastModified).toLocaleDateString('it-IT')}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1.5 self-end sm:self-center">
                    <button
                      onClick={() => onDuplicateProject(p)}
                      className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                      title="Duplica progetto"
                    >
                      <Copy className="w-4 h-4" />
                    </button>

                    {projects.length > 1 && (
                      <button
                        onClick={() => onDeleteProject(p.id)}
                        className="p-2 text-slate-500 hover:text-rose-400 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                        title="Elimina progetto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Load Sample Projects */}
        <div className="space-y-3 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Carica Esempi Professionali Già Compilati
            </h4>
          </div>
          <p className="text-xs text-slate-400">
            Puoi caricare una mini-bibbia completa per studiarne la struttura, le dinamiche di motore e i personaggi prima di scrivere il tuo:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SAMPLE_PROJECTS.map((sample) => (
              <div
                key={sample.id}
                className="p-4 rounded-xl bg-[#121929] border border-white/10 space-y-2 hover:border-amber-400/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <h5 className="text-sm font-semibold text-white">{sample.title}</h5>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                    {sample.genre.split('/')[0].trim()}
                  </span>
                </div>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {sample.highConcept}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      onLoadSampleProject(sample);
                      onClose();
                    }}
                    className="w-full py-1.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-amber-300 border border-white/5 transition-colors cursor-pointer"
                  >
                    Carica ed Esamina Esempio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
