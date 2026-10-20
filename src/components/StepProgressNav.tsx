import React from 'react';
import { StepId, SeriesProject } from '../types/project';
import { Sparkles, Feather, MapPin, Users, Cpu, FileText, CheckCircle2 } from 'lucide-react';
import { MASTERCLASS_STEPS } from '../data/masterclassData';

interface StepProgressNavProps {
  currentStep: StepId;
  onSelectStep: (step: StepId) => void;
  project: SeriesProject;
}

const STEP_ICONS: Record<StepId, React.ReactNode> = {
  concept: <Sparkles className="w-3.5 h-3.5" />,
  logline: <Feather className="w-3.5 h-3.5" />,
  arena: <MapPin className="w-3.5 h-3.5" />,
  characters: <Users className="w-3.5 h-3.5" />,
  engine: <Cpu className="w-3.5 h-3.5" />,
  synopsis: <FileText className="w-3.5 h-3.5" />,
};

export const StepProgressNav: React.FC<StepProgressNavProps> = ({
  currentStep,
  onSelectStep,
  project,
}) => {
  // Calculate completion per step
  const checkCompletion = (step: StepId): boolean => {
    switch (step) {
      case 'concept':
        return Boolean(project.highConcept.trim() && project.whatIf.trim());
      case 'logline':
        return Boolean(project.logline.trim() && project.tagline.trim());
      case 'arena':
        return Boolean(project.arenaSetting.trim() && project.arenaRules.trim());
      case 'characters':
        return project.characters.length > 0 && Boolean(project.characters[0].name.trim() && project.characters[0].desire.trim());
      case 'engine':
        return Boolean(project.horizontalArc.trim() && project.verticalEngine.trim());
      case 'synopsis':
        return Boolean(project.pilotIncitingIncident.trim() && project.pilotAct3Climax.trim() && project.seasonArcMovement2.trim());
      default:
        return false;
    }
  };

  const completedCount = MASTERCLASS_STEPS.filter((s) => checkCompletion(s.id)).length;
  const progressPercent = Math.round((completedCount / MASTERCLASS_STEPS.length) * 100);

  return (
    <div className="bg-[#101726] border-b border-white/5 px-4 md:px-8 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Progress pill & project summary */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span className="font-semibold text-white tracking-wide uppercase text-[11px]">Sviluppo Progetto</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="font-mono tabular-nums text-amber-400 font-medium">{progressPercent}% completato</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400 font-mono text-[11px]">{completedCount}/6 tappe</span>
          </div>
        </div>

        {/* Steps Ribbon */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {MASTERCLASS_STEPS.map((step, idx) => {
            const isCompleted = checkCompletion(step.id);
            const isCurrent = currentStep === step.id;

            return (
              <button
                key={step.id}
                onClick={() => onSelectStep(step.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isCurrent
                    ? 'bg-amber-400/15 border border-amber-400/40 text-amber-300 shadow-sm'
                    : isCompleted
                    ? 'bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-800'
                    : 'bg-slate-900/40 border border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                }`}
              >
                <span className="flex items-center justify-center">
                  {isCompleted ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <span className="text-amber-400/80">{STEP_ICONS[step.id]}</span>
                  )}
                </span>
                <span className="font-mono text-[11px] text-slate-400">0{idx + 1}.</span>
                <span>{step.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
