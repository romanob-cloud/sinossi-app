import React from 'react';
import { SeriesProject } from '../types/project';
import { FileText, Copy, Check, Printer, Sparkles, MapPin, Users, Cpu, Film } from 'lucide-react';

interface PitchPreviewDocumentProps {
  project: SeriesProject;
  onPrint: () => void;
}

export const PitchPreviewDocument: React.FC<PitchPreviewDocumentProps> = ({
  project,
  onPrint,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyMarkdown = () => {
    const md = generateMarkdown(project);
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#0B0F17] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
      {/* Top action toolbar for preview */}
      <div className="no-print bg-[#121929] px-4 py-3 border-b border-white/10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <FileText className="w-4 h-4 text-amber-400" />
          <span className="font-semibold text-white">Scheda Pitch Ufficiale</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400 font-mono text-[11px]">Anteprima Documento</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyMarkdown}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copiato!' : 'Copia Testo'}</span>
          </button>

          <button
            onClick={onPrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Stampa / Salva PDF</span>
          </button>
        </div>
      </div>

      {/* Main Document Paper / Viewport */}
      <div className="p-6 md:p-10 space-y-8 bg-[#0F1523] print-card print:p-0 print:bg-white text-slate-100 print:text-black">
        {/* Cover / Frontespizio */}
        <div className="border-b border-white/10 print:border-gray-300 pb-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 print:text-amber-800">
            <Film className="w-3.5 h-3.5" />
            <span>Serie TV · Pitch Document & Mini-Bibbia</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold font-serif-title tracking-tight text-white print:text-black">
            {project.title || 'Titolo del Progetto'}
          </h1>

          {project.workingTitle && (
            <p className="text-xs font-mono text-slate-400 print:text-gray-600">
              Working title: {project.workingTitle}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 print:text-gray-600 pt-1 font-mono">
            <span>Autore: <strong className="text-slate-200 print:text-black">{project.author || 'Showrunner / Autore'}</strong></span>
            <span aria-hidden="true">·</span>
            <span>Genere: <strong className="text-slate-200 print:text-black">{project.genre || 'Drammatico'}</strong></span>
            <span aria-hidden="true">·</span>
            <span>Formato: <strong className="text-slate-200 print:text-black">{project.format || '8 x 50 min'}</strong></span>
          </div>
        </div>

        {/* Highlight Callout: Logline & Tagline */}
        <div className="bg-[#141C2E] print:bg-gray-50 border border-amber-500/20 print:border-gray-300 rounded-xl p-5 space-y-3">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 print:text-amber-800 font-semibold block mb-1">
              Logline
            </span>
            <p className="text-sm md:text-base font-serif-title italic text-amber-100 print:text-gray-900 leading-relaxed">
              "{project.logline || 'Nessuna logline definita ancora.'}"
            </p>
          </div>

          {(project.tagline || project.compTitles) && (
            <div className="pt-3 border-t border-white/5 print:border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {project.tagline && (
                <div>
                  <span className="text-slate-400 print:text-gray-500 font-medium">Tagline: </span>
                  <span className="text-slate-200 print:text-gray-800 italic">{project.tagline}</span>
                </div>
              )}
              {project.compTitles && (
                <div>
                  <span className="text-slate-400 print:text-gray-500 font-medium">Comp Titles: </span>
                  <span className="text-slate-200 print:text-gray-800">{project.compTitles}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sezione 1: Concept, What-If & Tema */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold font-serif-title tracking-tight text-amber-400 print:text-black flex items-center gap-2 border-b border-white/10 print:border-gray-300 pb-1.5">
            <Sparkles className="w-4 h-4 text-amber-400 print:text-gray-700" />
            <span>01. Il Nucleo Drammatico & High Concept</span>
          </h2>

          <div className="space-y-3 text-xs md:text-sm leading-relaxed text-slate-300 print:text-gray-800">
            <div>
              <strong className="text-slate-100 print:text-black block mb-1">High Concept:</strong>
              <p className="whitespace-pre-line">{project.highConcept || 'In attesa di compilazione...'}</p>
            </div>

            {project.whatIf && (
              <div className="p-3 bg-white/5 print:bg-gray-100 rounded-lg">
                <strong className="text-amber-300 print:text-amber-900 block mb-0.5">Il What If:</strong>
                <p className="italic">{project.whatIf}</p>
              </div>
            )}

            {project.themeStatement && (
              <div>
                <strong className="text-slate-100 print:text-black block mb-1">Tema Universale:</strong>
                <p>{project.themeStatement}</p>
              </div>
            )}
          </div>
        </div>

        {/* Sezione 2: Arena & Mondo Narrativo */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold font-serif-title tracking-tight text-amber-400 print:text-black flex items-center gap-2 border-b border-white/10 print:border-gray-300 pb-1.5">
            <MapPin className="w-4 h-4 text-amber-400 print:text-gray-700" />
            <span>02. L'Arena, il Mondo & il Tono</span>
          </h2>

          <div className="space-y-3 text-xs md:text-sm leading-relaxed text-slate-300 print:text-gray-800">
            <div>
              <strong className="text-slate-100 print:text-black block mb-1">Ambientazione & Coordinate:</strong>
              <p className="whitespace-pre-line">{project.arenaSetting || 'In attesa di compilazione...'}</p>
            </div>

            {project.arenaRules && (
              <div>
                <strong className="text-slate-100 print:text-black block mb-1">Le Regole del Mondo & Barriere di Fuga:</strong>
                <p>{project.arenaRules}</p>
              </div>
            )}

            {project.socialContrast && (
              <div>
                <strong className="text-slate-100 print:text-black block mb-1">Contrasto Sociale:</strong>
                <p>{project.socialContrast}</p>
              </div>
            )}

            {project.toneAndMood && (
              <div>
                <strong className="text-slate-100 print:text-black block mb-1">Tono di Voce & Atmosfera Visiva:</strong>
                <p className="italic">{project.toneAndMood}</p>
              </div>
            )}
          </div>
        </div>

        {/* Sezione 3: I Personaggi */}
        <div className="space-y-4 print-page-break">
          <h2 className="text-lg font-bold font-serif-title tracking-tight text-amber-400 print:text-black flex items-center gap-2 border-b border-white/10 print:border-gray-300 pb-1.5">
            <Users className="w-4 h-4 text-amber-400 print:text-gray-700" />
            <span>03. I Personaggi Principali</span>
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {project.characters.map((char) => (
              <div
                key={char.id}
                className="bg-[#121929] print:bg-gray-50 border border-white/5 print:border-gray-200 rounded-lg p-4 space-y-2 text-xs md:text-sm"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/5 print:border-gray-200 pb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white print:text-black text-sm">{char.name || 'Personaggio senza nome'}</span>
                    <span className="text-[11px] font-mono text-amber-400 print:text-amber-800 bg-amber-400/10 print:bg-gray-200 px-2 py-0.5 rounded">
                      {char.role}
                    </span>
                  </div>
                  {char.age && <span className="text-slate-400 print:text-gray-500 font-mono text-xs">{char.age}</span>}
                </div>

                {char.loglineBio && (
                  <p className="text-slate-200 print:text-gray-800 leading-relaxed italic">
                    "{char.loglineBio}"
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-gray-700 pt-1">
                  {char.desire && (
                    <div>
                      <strong className="text-emerald-400 print:text-green-800">Desiderio conscio:</strong> {char.desire}
                    </div>
                  )}
                  {char.need && (
                    <div>
                      <strong className="text-amber-300 print:text-amber-900">Bisogno interiore:</strong> {char.need}
                    </div>
                  )}
                  {char.ghost && (
                    <div>
                      <strong className="text-slate-400 print:text-gray-600">Ghost (trauma passato):</strong> {char.ghost}
                    </div>
                  )}
                  {char.fatalFlaw && (
                    <div>
                      <strong className="text-rose-400 print:text-red-800">Difetto fatale:</strong> {char.fatalFlaw}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sezione 4: Il Motore Seriale */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold font-serif-title tracking-tight text-amber-400 print:text-black flex items-center gap-2 border-b border-white/10 print:border-gray-300 pb-1.5">
            <Cpu className="w-4 h-4 text-amber-400 print:text-gray-700" />
            <span>04. Il Motore Seriale (Series Engine)</span>
          </h2>

          <div className="space-y-3 text-xs md:text-sm leading-relaxed text-slate-300 print:text-gray-800">
            <div>
              <strong className="text-slate-100 print:text-black">Struttura: </strong>
              <span>{project.formatType}</span>
            </div>

            {project.horizontalArc && (
              <div>
                <strong className="text-slate-100 print:text-black block mb-0.5">Linea Orizzontale (Arco di Stagione):</strong>
                <p>{project.horizontalArc}</p>
              </div>
            )}

            {project.verticalEngine && (
              <div>
                <strong className="text-slate-100 print:text-black block mb-0.5">Motore Verticale (Conflitto di Episodio):</strong>
                <p>{project.verticalEngine}</p>
              </div>
            )}

            {project.cliffhangerStrategy && (
              <div>
                <strong className="text-slate-100 print:text-black block mb-0.5">Strategia dei Cliffhanger:</strong>
                <p>{project.cliffhangerStrategy}</p>
              </div>
            )}

            {project.multiSeasonPotential && (
              <div>
                <strong className="text-slate-100 print:text-black block mb-0.5">Potenziale Rigenerativo (Stagione 2+):</strong>
                <p>{project.multiSeasonPotential}</p>
              </div>
            )}
          </div>
        </div>

        {/* Sezione 5: Sinossi Pilot & Stagione */}
        <div className="space-y-5 print-page-break">
          <h2 className="text-lg font-bold font-serif-title tracking-tight text-amber-400 print:text-black flex items-center gap-2 border-b border-white/10 print:border-gray-300 pb-1.5">
            <FileText className="w-4 h-4 text-amber-400 print:text-gray-700" />
            <span>05. Sinossi del Pilot & Arco di Stagione</span>
          </h2>

          {/* Pilot */}
          <div className="bg-[#121929] print:bg-gray-50 p-4 rounded-xl space-y-3 border border-white/5 print:border-gray-200">
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-amber-300 print:text-amber-800">
              Sinossi della Puntata Pilota
            </h3>

            {project.pilotIncitingIncident && (
              <div className="text-xs md:text-sm">
                <strong className="text-slate-200 print:text-black">Incidente Scatenante: </strong>
                <span className="text-slate-300 print:text-gray-700">{project.pilotIncitingIncident}</span>
              </div>
            )}

            {project.pilotAct1 && (
              <div className="text-xs md:text-sm">
                <strong className="text-slate-200 print:text-black">Atto 1: </strong>
                <span className="text-slate-300 print:text-gray-700">{project.pilotAct1}</span>
              </div>
            )}

            {project.pilotAct2 && (
              <div className="text-xs md:text-sm">
                <strong className="text-slate-200 print:text-black">Atto 2: </strong>
                <span className="text-slate-300 print:text-gray-700">{project.pilotAct2}</span>
              </div>
            )}

            {project.pilotAct3Climax && (
              <div className="text-xs md:text-sm">
                <strong className="text-slate-200 print:text-black">Atto 3 (Climax): </strong>
                <span className="text-slate-300 print:text-gray-700">{project.pilotAct3Climax}</span>
              </div>
            )}

            {project.pilotCliffhanger && (
              <div className="text-xs md:text-sm p-3 bg-amber-500/10 print:bg-amber-50 rounded-lg border border-amber-500/20">
                <strong className="text-amber-300 print:text-amber-900">Cliffhanger finale: </strong>
                <span className="text-slate-200 print:text-gray-900 italic">{project.pilotCliffhanger}</span>
              </div>
            )}
          </div>

          {/* Season Arc */}
          <div className="bg-[#121929] print:bg-gray-50 p-4 rounded-xl space-y-3 border border-white/5 print:border-gray-200">
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-amber-300 print:text-amber-800">
              Arco Narrativo della Prima Stagione
            </h3>

            {project.seasonArcMovement1 && (
              <div className="text-xs md:text-sm">
                <strong className="text-slate-200 print:text-black">Inizio (Episodi 1-2): </strong>
                <span className="text-slate-300 print:text-gray-700">{project.seasonArcMovement1}</span>
              </div>
            )}

            {project.seasonArcMovement2 && (
              <div className="text-xs md:text-sm">
                <strong className="text-slate-200 print:text-black">Punto di Svolta / Midpoint (Episodi 3-5): </strong>
                <span className="text-slate-300 print:text-gray-700">{project.seasonArcMovement2}</span>
              </div>
            )}

            {project.seasonArcMovement3 && (
              <div className="text-xs md:text-sm">
                <strong className="text-slate-200 print:text-black">Climax & Risoluzione di Stagione (Episodi 6-8): </strong>
                <span className="text-slate-300 print:text-gray-700">{project.seasonArcMovement3}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Markdown exporter function
function generateMarkdown(p: SeriesProject): string {
  return `# ${p.title || 'Progetto Senza Titolo'}
*Working Title: ${p.workingTitle || 'N/D'}*
**Autore:** ${p.author || 'Showrunner'} | **Genere:** ${p.genre || 'Drammatico'} | **Formato:** ${p.format || '8 x 50 min'}

---

## Logline & Pitch
> "${p.logline || 'N/A'}"

**Tagline:** ${p.tagline || 'N/A'}  
**Comp Titles:** ${p.compTitles || 'N/A'}

---

## 1. Il Nucleo Drammatico & High Concept
**High Concept:**  
${p.highConcept || 'N/A'}

**Il What If:**  
*${p.whatIf || 'N/A'}*

**Tema Universale:**  
${p.themeStatement || 'N/A'}

---

## 2. L'Arena, il Mondo & il Tono
**Ambientazione:**  
${p.arenaSetting || 'N/A'}

**Regole del Mondo:**  
${p.arenaRules || 'N/A'}

**Contrasto Sociale:**  
${p.socialContrast || 'N/A'}

**Tono & Atmosfera:**  
${p.toneAndMood || 'N/A'}

---

## 3. Personaggi Principali
${p.characters
  .map(
    (c) => `### ${c.name} (${c.role}${c.age ? `, ${c.age}` : ''})
*"${c.loglineBio}"*
- **Desiderio conscio:** ${c.desire}
- **Bisogno interiore:** ${c.need}
- **Ghost (ferita passata):** ${c.ghost}
- **Difetto fatale:** ${c.fatalFlaw}`
  )
  .join('\n\n')}

---

## 4. Il Motore Seriale (Series Engine)
- **Tipo di Struttura:** ${p.formatType}
- **Linea Orizzontale (Arco di Stagione):** ${p.horizontalArc}
- **Motore Verticale (Episodio):** ${p.verticalEngine}
- **Cliffhanger Strategy:** ${p.cliffhangerStrategy}
- **Potenziale Stagione 2:** ${p.multiSeasonPotential}

---

## 5. Sinossi del Pilot & Stagione

### Puntata Pilota
- **Incidente Scatenante:** ${p.pilotIncitingIncident}
- **Atto 1:** ${p.pilotAct1}
- **Atto 2:** ${p.pilotAct2}
- **Atto 3 (Climax):** ${p.pilotAct3Climax}
- **Cliffhanger Finale:** ${p.pilotCliffhanger}

### Arco di Stagione
- **Episodi 1-2 (Innesco):** ${p.seasonArcMovement1}
- **Episodi 3-5 (Midpoint):** ${p.seasonArcMovement2}
- **Episodi 6-8 (Climax & Finale):** ${p.seasonArcMovement3}
`;
}
