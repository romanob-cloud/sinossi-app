import React, { useState } from 'react';
import { StepGuide } from '../types/project';
import { HelpCircle, Lightbulb, AlertTriangle, CheckSquare, Copy, Check, Tv, Compass, Briefcase } from 'lucide-react';

interface StepTheoryPanelProps {
  step: StepGuide;
  onApplyFormula?: (formulaText: string) => void;
  onOpenGlossary?: () => void;
}

export const StepTheoryPanel: React.FC<StepTheoryPanelProps> = ({
  step,
  onApplyFormula,
  onOpenGlossary,
}) => {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number>(0);
  const [copiedFormula, setCopiedFormula] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (item: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const handleCopyFormula = (text: string) => {
    if (onApplyFormula) {
      onApplyFormula(text);
    }
    navigator.clipboard.writeText(text);
    setCopiedFormula(true);
    setTimeout(() => setCopiedFormula(false), 2000);
  };

  const currentCase = step.caseStudies[selectedCaseIndex] || step.caseStudies[0];

  return (
    <div className="space-y-6 text-slate-200">
      {/* Step Header */}
      <div className="pb-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs text-amber-400 font-medium mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>{step.badge}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Masterclass di Sceneggiatura</span>
          </div>
          <h2 className="text-2xl font-bold text-white font-serif-title tracking-tight">
            {step.title}
          </h2>
          <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">
            {step.shortDesc}
          </p>
        </div>

        {onOpenGlossary && (
          <button
            type="button"
            onClick={onOpenGlossary}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer shrink-0 self-start"
            title="Apri il Glossario del Produttore con tutti i termini tecnici"
          >
            <Briefcase className="w-3.5 h-3.5 text-amber-400" />
            <span>Glossario Termini →</span>
          </button>
        )}
      </div>

      {/* Definition & Core Concept */}
      <div className="bg-[#131B2E] border border-white/5 rounded-xl p-4.5 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider">
          <Lightbulb className="w-4 h-4 text-amber-400" />
          <span>Concetto Fondamentale</span>
        </div>
        <p className="text-sm text-slate-200 leading-relaxed font-normal">
          {step.theory.definition}
        </p>
      </div>

      {/* Formula Box (if present) */}
      {step.formulaTemplate && (
        <div className="bg-amber-950/20 border border-amber-500/20 rounded-xl p-4 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              {step.formulaTemplate.label}
            </span>
            <button
              onClick={() => handleCopyFormula(step.formulaTemplate!.structure)}
              className="flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-1 rounded transition-colors cursor-pointer"
            >
              {copiedFormula ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedFormula ? 'Copiato!' : 'Copia Struttura'}</span>
            </button>
          </div>
          <div className="p-3 bg-black/40 rounded-lg border border-white/5 font-mono text-xs text-amber-200/90 leading-relaxed select-all">
            {step.formulaTemplate.structure}
          </div>
          <p className="text-xs text-slate-400 italic">
            <span className="text-slate-300 font-medium">Esempio applicato:</span> {step.formulaTemplate.example}
          </p>
        </div>
      )}

      {/* Key Dramatic Questions */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-slate-400" />
          <span>Domande Drammatiche Chiave</span>
        </h3>
        <ul className="space-y-2">
          {step.theory.keyQuestions.map((q, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 bg-[#141B2D]/60 p-3 rounded-lg border border-white/5">
              <span className="text-amber-400 font-mono text-xs shrink-0 mt-0.5">0{i + 1}.</span>
              <span className="leading-snug">{q}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Real-world Case Studies */}
      {step.caseStudies.length > 0 && (
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Tv className="w-4 h-4 text-slate-400" />
              <span>Esempi Reali Analizzati</span>
            </h3>
            <div className="flex items-center gap-1">
              {step.caseStudies.map((cs, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCaseIndex(idx)}
                  className={`text-[11px] px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCaseIndex === idx
                      ? 'bg-amber-400/20 text-amber-300 font-medium border border-amber-400/30'
                      : 'text-slate-400 hover:text-slate-200 bg-white/5'
                  }`}
                >
                  {cs.title}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 bg-[#111927] border border-white/10 rounded-xl space-y-2.5">
            <div className="flex items-baseline justify-between gap-2">
              <h4 className="text-sm font-semibold text-white">{currentCase.title}</h4>
              <span className="text-[11px] text-slate-400 font-mono">{currentCase.work}</span>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              {currentCase.content}
            </p>
            <div className="pt-2 border-t border-white/5 text-xs text-amber-300/90 flex items-start gap-1.5">
              <span className="font-semibold text-amber-400 shrink-0">Cosa impariamo:</span>
              <span>{currentCase.takeaway}</span>
            </div>
          </div>
        </div>
      )}

      {/* Rules of Thumb & Common Mistakes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
        {/* Rules */}
        <div className="bg-[#131B2E]/60 border border-white/5 rounded-xl p-4 space-y-2">
          <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Regole d'Oro</span>
          </h4>
          <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
            {step.theory.rulesOfThumb.map((r, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-400 shrink-0">✓</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mistakes */}
        <div className="bg-[#1A151D]/60 border border-red-500/10 rounded-xl p-4 space-y-2">
          <h4 className="text-xs font-semibold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Errori da Evitare</span>
          </h4>
          <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
            {step.theory.commonMistakes.map((m, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-rose-400 shrink-0">✕</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Self Assessment Checklist */}
      <div className="bg-[#101726] border border-white/5 rounded-xl p-4 space-y-3">
        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
          <CheckSquare className="w-4 h-4 text-amber-400" />
          <span>Checklist di Autovalutazione</span>
        </h4>
        <div className="space-y-2">
          {step.checklist.map((item, idx) => {
            const isChecked = Boolean(checkedItems[item]);
            return (
              <label
                key={idx}
                onClick={() => toggleCheck(item)}
                className="flex items-start gap-3 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  readOnly
                  className="mt-0.5 rounded border-slate-600 text-amber-500 focus:ring-0 bg-slate-900 cursor-pointer"
                />
                <span className={`text-xs md:text-sm ${isChecked ? 'text-slate-400 line-through' : 'text-slate-200'}`}>
                  {item}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};
