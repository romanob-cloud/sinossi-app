import React, { useState } from 'react';
import { SeriesProject } from '../types/project';
import { X, Printer, Download, Copy, Check, FileCode, FileText } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: SeriesProject;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generateExportText = (): string => {
    return `===========================================================
SHOWRUNNER STUDIO - SCHEDA PITCH SERIE TV
===========================================================
TITOLO: ${project.title || 'Senza Titolo'}
${project.workingTitle ? `WORKING TITLE: ${project.workingTitle}\n` : ''}AUTORE: ${project.author || 'N/D'}
GENERE: ${project.genre || 'Drammatico'} (${project.subgenre || 'N/D'})
FORMATO: ${project.format || '8 x 50 min'}
TARGET: ${project.targetAudience || 'Streaming / Prime Time'}
ULTIMA MODIFICA: ${new Date(project.lastModified).toLocaleDateString('it-IT')}

-----------------------------------------------------------
LOGLINE & PITCH COMMERCIALE
-----------------------------------------------------------
"${project.logline || 'N/A'}"

TAGLINE: ${project.tagline || 'N/A'}
COMP TITLES: ${project.compTitles || 'N/A'}

-----------------------------------------------------------
01. IL NUCLEO DRAMMATICO & HIGH CONCEPT
-----------------------------------------------------------
HIGH CONCEPT:
${project.highConcept || 'N/A'}

IL WHAT IF:
${project.whatIf || 'N/A'}

TEMA UNIVERSALE:
${project.themeStatement || 'N/A'}

-----------------------------------------------------------
02. L'ARENA, IL MONDO & IL TONO
-----------------------------------------------------------
AMBIENTAZIONE E REGOLE:
${project.arenaSetting || 'N/A'}

LE LEGGI NON SCRITTE E BARRIERE:
${project.arenaRules || 'N/A'}

CONTRASTO SOCIALE:
${project.socialContrast || 'N/A'}

TONO E MOOD:
${project.toneAndMood || 'N/A'}

-----------------------------------------------------------
03. I PERSONAGGI
-----------------------------------------------------------
${project.characters
  .map(
    (c, i) => `#${i + 1} ${c.name} (${c.role}${c.age ? `, ${c.age}` : ''})
Bio: ${c.loglineBio || 'N/D'}
- Desiderio conscio: ${c.desire || 'N/D'}
- Bisogno interiore: ${c.need || 'N/D'}
- Ghost (trauma passato): ${c.ghost || 'N/D'}
- Difetto fatale: ${c.fatalFlaw || 'N/D'}`
  )
  .join('\n\n')}

-----------------------------------------------------------
04. IL MOTORE SERIALE (SERIES ENGINE)
-----------------------------------------------------------
STRUTTURA: ${project.formatType}
LINEA ORIZZONTALE (STAGIONE):
${project.horizontalArc || 'N/A'}

MOTORE VERTICALE (EPISODIO):
${project.verticalEngine || 'N/A'}

STRATEGIA CLIFFHANGER:
${project.cliffhangerStrategy || 'N/A'}

POTENZIALE STAGIONE 2+:
${project.multiSeasonPotential || 'N/A'}

-----------------------------------------------------------
05. SINOSSI DEL PILOT & ARCO DI STAGIONE
-----------------------------------------------------------
PUNTATA PILOTA:
- Incidente Scatenante: ${project.pilotIncitingIncident || 'N/A'}
- Atto 1 (Mondo Ordinario & Chiamata): ${project.pilotAct1 || 'N/A'}
- Atto 2 (Ingresso nell'Arena & Escalation): ${project.pilotAct2 || 'N/A'}
- Atto 3 (Climax del Pilot): ${project.pilotAct3Climax || 'N/A'}
- Cliffhanger Finale Pilot: ${project.pilotCliffhanger || 'N/A'}

ARCO DI STAGIONE:
- Inizio (Episodi 1-2): ${project.seasonArcMovement1 || 'N/A'}
- Punto di Svolta / Midpoint (Episodi 3-5): ${project.seasonArcMovement2 || 'N/A'}
- Climax & Risoluzione Finale (Episodi 6-8): ${project.seasonArcMovement3 || 'N/A'}
===========================================================
Generato con Showrunner Studio
`;
  };

  const handlePrintPdf = () => {
    window.print();
  };

  const handleDownloadFile = (type: 'md' | 'txt') => {
    const content = generateExportText();
    const filename = `${(project.title || 'pitch_serie_tv')
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '_')}.${type}`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyClipboard = () => {
    const text = generateExportText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0F1523] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block mb-1">
              Esportazione & Consegna
            </span>
            <h3 className="text-xl font-bold font-serif-title text-white">
              Esporta Scheda Pitch & Mini-Bibbia
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project summary card */}
        <div className="bg-[#141C2E] rounded-xl p-4 border border-white/5 space-y-1.5">
          <h4 className="text-base font-semibold text-white">{project.title || 'Progetto Senza Titolo'}</h4>
          <p className="text-xs text-slate-400 italic">
            "{project.logline || 'Nessuna logline specificata'}"
          </p>
          <div className="pt-2 flex items-center gap-3 text-xs text-slate-400 font-mono">
            <span>{project.genre || 'Drama'}</span>
            <span aria-hidden="true">·</span>
            <span>{project.format || '8 x 50 min'}</span>
            <span aria-hidden="true">·</span>
            <span>{project.characters.length} personaggi definiti</span>
          </div>
        </div>

        {/* Export Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Print / Save PDF */}
          <button
            onClick={handlePrintPdf}
            className="flex items-start gap-3.5 p-4 rounded-xl bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 transition-all text-left group cursor-pointer"
          >
            <div className="p-2.5 rounded-lg bg-amber-400 text-slate-950 shrink-0">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-sm font-semibold text-white block group-hover:text-amber-300">
                Stampa / Salva in PDF
              </strong>
              <p className="text-xs text-slate-300 mt-1 leading-snug">
                Genera il documento impaginato in stile A4 formattato per broadcaster e produttori.
              </p>
            </div>
          </button>

          {/* Download Markdown */}
          <button
            onClick={() => handleDownloadFile('md')}
            className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left group cursor-pointer"
          >
            <div className="p-2.5 rounded-lg bg-slate-800 text-slate-200 shrink-0">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-sm font-semibold text-white block group-hover:text-amber-300">
                Scarica File Markdown (.md)
              </strong>
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                Perfetto per Notion, Obsidian, GitHub o per importare in editor di testo.
              </p>
            </div>
          </button>

          {/* Download Plain Text */}
          <button
            onClick={() => handleDownloadFile('txt')}
            className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left group cursor-pointer"
          >
            <div className="p-2.5 rounded-lg bg-slate-800 text-slate-200 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-sm font-semibold text-white block group-hover:text-amber-300">
                Scarica Testo (.txt)
              </strong>
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                Documento testuale universale per incollare rapidamente in Final Draft o Word.
              </p>
            </div>
          </button>

          {/* Copy to Clipboard */}
          <button
            onClick={handleCopyClipboard}
            className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left group cursor-pointer"
          >
            <div className="p-2.5 rounded-lg bg-slate-800 text-slate-200 shrink-0">
              {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
            </div>
            <div>
              <strong className="text-sm font-semibold text-white block group-hover:text-amber-300">
                {copied ? 'Copiato negli Appunti!' : 'Copia Testo negli Appunti'}
              </strong>
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                Copia l’intero contenuto formattato per inviarlo via email o messaggio.
              </p>
            </div>
          </button>
        </div>

        {/* Footer note */}
        <div className="text-center pt-2">
          <p className="text-xs text-slate-500 font-mono">
            Suggerimento: nella finestra di stampa del browser, seleziona "Salva come PDF" come destinazione.
          </p>
        </div>
      </div>
    </div>
  );
};
