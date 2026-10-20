import React, { useState } from 'react';
import { SeriesProject } from '../types/project';
import { GeneratedSynopsisResponse, requestGenerateSynopsis } from '../services/geminiService';
import { X, Sparkles, AlertCircle, Check, Loader2, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

interface AiSynopsisModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: SeriesProject;
  onApplySynopsis: (synopsis: GeneratedSynopsisResponse) => void;
}

export const AiSynopsisModal: React.FC<AiSynopsisModalProps> = ({
  isOpen,
  onClose,
  project,
  onApplySynopsis,
}) => {
  const [loading, setLoading] = useState(false);
  const [synopsis, setSynopsis] = useState<GeneratedSynopsisResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [applied, setApplied] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setApplied(false);
    try {
      const data = await requestGenerateSynopsis(project);
      setSynopsis(data);
    } catch (err: any) {
      setError(err.message || 'Impossibile generare la sinossi.');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (isOpen && !synopsis && !loading && !error) {
      handleGenerate();
    }
  }, [isOpen]);

  const handleApply = () => {
    if (!synopsis) return;
    onApplySynopsis(synopsis);
    setApplied(true);
    setTimeout(() => {
      onClose();
    }, 1500);
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
                Generatore Drammaturgico Gemini
              </span>
              <h3 className="text-xl font-bold font-serif-title text-white">
                Creazione Guidata della Sinossi (Pilot & Stagione)
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
                Stesura della sinossi seriale in corso...
              </p>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Gemini sta traducendo l'High Concept, i conflitti dei personaggi e il motore di "{project.title || 'questa serie'}" nella struttura in atti del Pilot e nell'Arco di Stagione.
              </p>
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="p-4 bg-rose-950/30 border border-rose-500/20 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-rose-400 text-sm font-semibold">
              <AlertCircle className="w-4 h-4" />
              <span>Errore nella generazione</span>
            </div>
            <p className="text-xs text-slate-300">{error}</p>
            <button
              onClick={handleGenerate}
              className="px-3 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 text-xs font-medium transition-colors cursor-pointer"
            >
              Riprova generazione
            </button>
          </div>
        )}

        {/* Generated Synopsis Output */}
        {synopsis && !loading && (
          <div className="space-y-6">
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center justify-between gap-3">
              <span>
                La sinossi è stata redatta al presente indicativo con struttura causa-effetto pronta per la bibbia.
              </span>
              <button
                onClick={handleApply}
                disabled={applied}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors whitespace-nowrap cursor-pointer shrink-0 disabled:opacity-50"
              >
                {applied ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Applicata alla Scheda!</span>
                  </>
                ) : (
                  <>
                    <span>Applica al Progetto</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

            {/* Pilot Section */}
            <div className="bg-[#121929] border border-white/10 rounded-xl p-5 space-y-4">
              <div className="border-b border-white/5 pb-2">
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">Parte 1</span>
                <h4 className="text-base font-bold text-white font-serif-title">
                  Sinossi del Pilot (Episodio 1)
                </h4>
              </div>

              <div className="space-y-3 text-xs md:text-sm">
                <div>
                  <strong className="text-amber-300 block mb-0.5">Incidente Scatenante:</strong>
                  <p className="text-slate-200 leading-relaxed bg-black/20 p-2.5 rounded-lg">
                    {synopsis.pilotIncitingIncident}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <strong className="text-slate-300 block mb-0.5">Atto 1 (Mondo Ordinario & Chiamata):</strong>
                    <p className="text-slate-300 leading-relaxed bg-black/20 p-2.5 rounded-lg">
                      {synopsis.pilotAct1}
                    </p>
                  </div>

                  <div>
                    <strong className="text-slate-300 block mb-0.5">Atto 2 (Ingresso nell'Arena & Escalation):</strong>
                    <p className="text-slate-300 leading-relaxed bg-black/20 p-2.5 rounded-lg">
                      {synopsis.pilotAct2}
                    </p>
                  </div>
                </div>

                <div>
                  <strong className="text-slate-300 block mb-0.5">Atto 3 (Climax del Pilot):</strong>
                  <p className="text-slate-200 leading-relaxed bg-black/20 p-2.5 rounded-lg">
                    {synopsis.pilotAct3Climax}
                  </p>
                </div>

                <div className="p-3 bg-amber-400/10 border border-amber-400/20 rounded-lg">
                  <strong className="text-amber-400 block mb-0.5">Cliffhanger Finale:</strong>
                  <p className="text-amber-100 italic leading-relaxed">
                    "{synopsis.pilotCliffhanger}"
                  </p>
                </div>
              </div>
            </div>

            {/* Season Arc Section */}
            <div className="bg-[#121929] border border-white/10 rounded-xl p-5 space-y-4">
              <div className="border-b border-white/5 pb-2">
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">Parte 2</span>
                <h4 className="text-base font-bold text-white font-serif-title">
                  Arco di Stagione in 3 Movimenti
                </h4>
              </div>

              <div className="space-y-3 text-xs md:text-sm">
                <div>
                  <strong className="text-slate-300 block mb-0.5">Movimento 1 (Episodi 1-2 · Innesco e Fazioni):</strong>
                  <p className="text-slate-300 leading-relaxed bg-black/20 p-2.5 rounded-lg">
                    {synopsis.seasonArcMovement1}
                  </p>
                </div>

                <div>
                  <strong className="text-amber-300 block mb-0.5">Movimento 2 (Episodi 3-5 · Punto di Svolta / Midpoint):</strong>
                  <p className="text-slate-200 leading-relaxed bg-black/20 p-2.5 rounded-lg">
                    {synopsis.seasonArcMovement2}
                  </p>
                </div>

                <div>
                  <strong className="text-slate-300 block mb-0.5">Movimento 3 (Episodi 6-8 · Climax e Risoluzione Aperta):</strong>
                  <p className="text-slate-300 leading-relaxed bg-black/20 p-2.5 rounded-lg">
                    {synopsis.seasonArcMovement3}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer action */}
            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <button
                onClick={handleGenerate}
                className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                ↻ Riscrivi Sinossi con Gemini
              </button>

              <button
                onClick={handleApply}
                disabled={applied}
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
              >
                {applied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Sinossi Applicata con Successo!</span>
                  </>
                ) : (
                  <>
                    <span>Applica alla Scheda del Progetto</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
