import React, { useState } from 'react';
import { SeriesProject } from '../types/project';
import { ConceptCritiqueResponse, requestConceptCritique } from '../services/geminiService';
import { X, Sparkles, AlertCircle, Check, Loader2, ArrowRight, Lightbulb, Users, Target } from 'lucide-react';

interface AiCritiqueModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: SeriesProject;
  onApplyLogline: (newLogline: string) => void;
  onApplyTargetAudience?: (newTarget: string) => void;
}

export const AiCritiqueModal: React.FC<AiCritiqueModalProps> = ({
  isOpen,
  onClose,
  project,
  onApplyLogline,
  onApplyTargetAudience,
}) => {
  const [loading, setLoading] = useState(false);
  const [critique, setCritique] = useState<ConceptCritiqueResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [appliedLogline, setAppliedLogline] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFetchCritique = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await requestConceptCritique(project);
      setCritique(data);
    } catch (err: any) {
      setError(err.message || 'Impossibile completare la consulenza.');
    } finally {
      setLoading(false);
    }
  };

  // Automatically start if no critique exists yet
  React.useEffect(() => {
    if (isOpen && !critique && !loading && !error) {
      handleFetchCritique();
    }
  }, [isOpen]);

  const handleSelectLogline = (text: string) => {
    onApplyLogline(text);
    setAppliedLogline(text);
    setTimeout(() => setAppliedLogline(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0F1523] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto text-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold block">
                Consulenza AI Gemini Showrunner
              </span>
              <h3 className="text-xl font-bold font-serif-title text-white">
                Feedback Critico su Logline & Target
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="py-16 text-center space-y-4">
            <div className="inline-flex p-3 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 animate-spin">
              <Loader2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-white">
                Analisi drammaturgica in corso...
              </p>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Gemini sta esaminando l'High Concept, la posta in gioco della Logline e il posizionamento per broadcaster di "{project.title || 'questo progetto'}".
              </p>
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="p-4 bg-rose-950/30 border border-rose-500/20 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-rose-400 text-sm font-semibold">
              <AlertCircle className="w-4 h-4" />
              <span>Errore nella richiesta</span>
            </div>
            <p className="text-xs text-slate-300">{error}</p>
            <button
              onClick={handleFetchCritique}
              className="px-3 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 text-xs font-medium transition-colors cursor-pointer"
            >
              Riprova analisi
            </button>
          </div>
        )}

        {/* Results view */}
        {critique && !loading && (
          <div className="space-y-6">
            {/* Verdict & Score */}
            <div className="p-4 rounded-xl bg-[#141C2E] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Verdetto dello Showrunner</span>
                <h4 className="text-base font-bold text-white mt-0.5">{critique.verdictHeadline}</h4>
              </div>
              <div className="flex items-center gap-2 sm:self-center shrink-0">
                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block font-mono">Tenuta Seriale</span>
                  <span className="text-xl font-bold font-mono text-amber-400 tabular-nums">{critique.overallScore}/10</span>
                </div>
              </div>
            </div>

            {/* Strengths & Vulnerabilities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#121929] border border-emerald-500/10 space-y-2">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Punti di Forza del Concept</span>
                </h5>
                <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
                  {critique.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-400 shrink-0">·</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#121929] border border-amber-500/10 space-y-2">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>Rischi o Vulnerabilità da Risolvere</span>
                </h5>
                <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
                  {critique.vulnerabilities.map((v, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-amber-400 shrink-0">·</span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Logline Critique & Improvements */}
            <div className="p-5 rounded-xl bg-[#131B2E] border border-amber-500/20 space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5" />
                  <span>Analisi & Riscrittura Logline</span>
                </span>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {critique.loglineCritique.evaluation}
                </p>
              </div>

              {/* Improved Options */}
              <div className="space-y-3 pt-2">
                {/* Option A */}
                <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-amber-300 font-semibold uppercase tracking-wide">
                      Proposta A · Focus su Conflitto Emotivo / Personaggio
                    </span>
                    <button
                      onClick={() => handleSelectLogline(critique.loglineCritique.improvedLoglineA)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer"
                    >
                      {appliedLogline === critique.loglineCritique.improvedLoglineA ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>Applicata!</span>
                        </>
                      ) : (
                        <>
                          <span>Usa questa</span>
                          <ArrowRight className="w-3 h-3" />
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-slate-200 font-serif-title italic leading-relaxed">
                    "{critique.loglineCritique.improvedLoglineA}"
                  </p>
                </div>

                {/* Option B */}
                <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-amber-300 font-semibold uppercase tracking-wide">
                      Proposta B · Focus su Tensione di Trama / Commerciale
                    </span>
                    <button
                      onClick={() => handleSelectLogline(critique.loglineCritique.improvedLoglineB)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer"
                    >
                      {appliedLogline === critique.loglineCritique.improvedLoglineB ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>Applicata!</span>
                        </>
                      ) : (
                        <>
                          <span>Usa questa</span>
                          <ArrowRight className="w-3 h-3" />
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-slate-200 font-serif-title italic leading-relaxed">
                    "{critique.loglineCritique.improvedLoglineB}"
                  </p>
                </div>
              </div>
            </div>

            {/* Target Audience Advice */}
            <div className="p-5 rounded-xl bg-[#121929] border border-white/5 space-y-3">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>Consigli sul Target di Pubblico & Broadcaster Fit</span>
              </h5>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div>
                  <strong className="text-slate-200 block mb-1">Piattaforme e Broadcaster Consigliati:</strong>
                  <div className="flex flex-wrap gap-1.5">
                    {critique.targetAudienceAdvice.suggestedPlatforms.map((plat, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white/5 text-amber-300 font-mono text-[11px]">
                        {plat}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <strong className="text-slate-200 block mb-1">Profilo Demografico Spettatori:</strong>
                  <p className="text-slate-300 leading-snug">{critique.targetAudienceAdvice.demographicProfile}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 text-xs">
                <strong className="text-slate-200 block mb-1">Strategia di Posizionamento:</strong>
                <p className="text-slate-300 leading-relaxed">{critique.targetAudienceAdvice.marketPositioning}</p>
              </div>
            </div>

            {/* Writers' Room Prompts */}
            <div className="p-4 rounded-xl bg-[#101726] border border-white/5 space-y-2">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Domande Provocatorie per la Writers' Room</span>
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {critique.writersRoomPrompts.map((q, i) => (
                  <li key={i} className="flex items-start gap-2 bg-white/5 p-2 rounded-lg">
                    <span className="font-mono text-amber-400 text-xs mt-0.5">0{i + 1}.</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer action */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <button
                onClick={handleFetchCritique}
                className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                ↻ Ricalcola Feedback con Gemini
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
              >
                Chiudi e Torna alla Scrittura
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
