import React, { useState } from 'react';
import { StepId, SeriesProject, CharacterItem } from '../types/project';
import { Plus, Trash2, ArrowLeft, ArrowRight, Save, Check, UserPlus, Sparkles } from 'lucide-react';
import { MASTERCLASS_STEPS } from '../data/masterclassData';

interface StepEditorPanelProps {
  currentStep: StepId;
  project: SeriesProject;
  onChangeProject: (updated: SeriesProject) => void;
  onNavigateStep: (step: StepId) => void;
  onOpenAiCritique?: () => void;
  onOpenAiSynopsis?: () => void;
}

export const StepEditorPanel: React.FC<StepEditorPanelProps> = ({
  currentStep,
  project,
  onChangeProject,
  onNavigateStep,
  onOpenAiCritique,
  onOpenAiSynopsis,
}) => {
  const [saveToast, setSaveToast] = useState(false);

  const handleFieldChange = (field: keyof SeriesProject, value: any) => {
    onChangeProject({
      ...project,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  const handleManualSave = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  // Step transition helpers
  const currentStepIndex = MASTERCLASS_STEPS.findIndex((s) => s.id === currentStep);
  const prevStep = currentStepIndex > 0 ? MASTERCLASS_STEPS[currentStepIndex - 1].id : null;
  const nextStep = currentStepIndex < MASTERCLASS_STEPS.length - 1 ? MASTERCLASS_STEPS[currentStepIndex + 1].id : null;

  // Character operations
  const addCharacter = () => {
    const newChar: CharacterItem = {
      id: 'char-' + Date.now(),
      name: '',
      role: 'Coprotagonista',
      age: '',
      archetype: '',
      desire: '',
      need: '',
      ghost: '',
      fatalFlaw: '',
      loglineBio: '',
    };
    handleFieldChange('characters', [...project.characters, newChar]);
  };

  const updateCharacter = (id: string, field: keyof CharacterItem, val: string) => {
    const updated = project.characters.map((char) => {
      if (char.id === id) {
        return { ...char, [field]: val };
      }
      return char;
    });
    handleFieldChange('characters', updated);
  };

  const removeCharacter = (id: string) => {
    if (project.characters.length <= 1) return;
    const filtered = project.characters.filter((c) => c.id !== id);
    handleFieldChange('characters', filtered);
  };

  return (
    <div className="space-y-6">
      {/* Top Project Meta Bar */}
      <div className="bg-[#101726] border border-white/10 rounded-xl p-4 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Parametri Generali Serie
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {onOpenAiCritique && (
              <button
                type="button"
                onClick={onOpenAiCritique}
                className="flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 bg-amber-400/10 hover:bg-amber-400/20 px-3 py-1.5 rounded-lg border border-amber-400/30 transition-colors cursor-pointer"
                title="Ricevi un feedback critico da Gemini sulla logline e il target di pubblico"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>AI Feedback Logline & Target</span>
              </button>
            )}

            {onOpenAiSynopsis && (
              <button
                type="button"
                onClick={onOpenAiSynopsis}
                className="flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors cursor-pointer"
                title="Genera o perfeziona la sinossi del pilot e della stagione con Gemini"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Crea Sinossi con AI</span>
              </button>
            )}

            <button
              onClick={handleManualSave}
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/5 transition-colors cursor-pointer self-start sm:self-auto"
            >
              {saveToast ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300 font-medium">Bozza salvata!</span>
                </>
              ) : (
                <>
                  <Save className="w-3.5 h-3.5 text-slate-400" />
                  <span>Salvataggio Automatico</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">Titolo Serie (o provvisorio)</label>
            <input
              type="text"
              value={project.title}
              onChange={(e) => handleFieldChange('title', e.target.value)}
              placeholder="Es. Radici di Ferro"
              className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/60 font-medium"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">Genere & Sottogenere</label>
            <input
              type="text"
              value={project.genre}
              onChange={(e) => handleFieldChange('genre', e.target.value)}
              placeholder="Es. Crime Drama / Social Thriller"
              className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">Formato & Durata</label>
            <input
              type="text"
              value={project.format}
              onChange={(e) => handleFieldChange('format', e.target.value)}
              placeholder="Es. 8 episodi da 50 min"
              className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
            />
          </div>
        </div>
      </div>

      {/* STEP 1: Nucleo Drammatico */}
      {currentStep === 'concept' && (
        <div className="space-y-4">
          <div className="bg-[#121929] border border-white/10 rounded-xl p-5 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-semibold text-white">
                  High Concept & Premessa Centrale
                </label>
                <span className="text-[11px] text-slate-500 font-mono">
                  {project.highConcept.length} caratteri
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-2">
                Descrivi l'idea madre in modo chiaro e dirompente: qual è la situazione straordinaria o il paradosso?
              </p>
              <textarea
                rows={4}
                value={project.highConcept}
                onChange={(e) => handleFieldChange('highConcept', e.target.value)}
                placeholder="Es. Una giovane magistrata torna a Taranto per indagare sul disastro ambientale dell'acciaieria, scoprendo che a coprire le scorie tossiche è il suo stesso padre..."
                className="w-full bg-[#0B0F17] border border-white/10 rounded-lg p-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60 leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                Il "What If" (E se...?)
              </label>
              <p className="text-xs text-slate-400 mb-2">
                La domanda generatrice che accende l'universo narrativo e ne rivela il dilemma morale.
              </p>
              <input
                type="text"
                value={project.whatIf}
                onChange={(e) => handleFieldChange('whatIf', e.target.value)}
                placeholder="Es. E se per salvare la salute di una città dovessi mandare in galera l'uomo che consideravi il tuo eroe morale?"
                className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                Dichiarazione di Tema (Theme Statement)
              </label>
              <p className="text-xs text-slate-400 mb-2">
                Di cosa parla DAVVERO la serie? Qual è il conflitto etico o filosofico universale?
              </p>
              <textarea
                rows={2}
                value={project.themeStatement}
                onChange={(e) => handleFieldChange('themeStatement', e.target.value)}
                placeholder="Es. Il conflitto insanabile tra diritto al lavoro e diritto alla salute, e il costo emotivo della verità nei legami famigliari."
                className="w-full bg-[#0B0F17] border border-white/10 rounded-lg p-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
              />
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: Logline & Pitch */}
      {currentStep === 'logline' && (
        <div className="space-y-4">
          <div className="bg-[#121929] border border-white/10 rounded-xl p-5 space-y-4">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-semibold text-white">
                    Logline Ufficiale (25-45 parole)
                  </label>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {project.logline.trim() ? project.logline.trim().split(/\s+/).length : 0} parole
                  </span>
                </div>
                {onOpenAiCritique && (
                  <button
                    type="button"
                    onClick={onOpenAiCritique}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer self-start sm:self-auto"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Critica & Alternative Logline con AI</span>
                  </button>
                )}
              </div>
              <p className="text-xs text-slate-400 mb-2">
                Regola aurea: <span className="text-amber-300 font-mono">Quando [Incidente scatenante], un [Protagonista] deve [Azione/Obiettivo], altrimenti [Conseguenza catastrofica].</span>
              </p>
              <textarea
                rows={4}
                value={project.logline}
                onChange={(e) => handleFieldChange('logline', e.target.value)}
                placeholder="Es. Quando una tossina letale viene rilevata nelle acque del porto, una determinata magistrata torna a Taranto per incriminare i vertici del polo siderurgico, scontrandosi con una città omertosa e con il suo stesso padre..."
                className="w-full bg-[#0B0F17] border border-white/10 rounded-lg p-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60 leading-relaxed font-mono-code text-xs md:text-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-white mb-1">
                  Tagline Pubblicitaria (Slogan)
                </label>
                <p className="text-xs text-slate-400 mb-2">
                  La frase ad effetto per il poster / locandina.
                </p>
                <input
                  type="text"
                  value={project.tagline}
                  onChange={(e) => handleFieldChange('tagline', e.target.value)}
                  placeholder="Es. A volte il veleno più letale è il silenzio di chi ami."
                  className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60 italic"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-1">
                  Comp Titles (Titoli di Confronto)
                </label>
                <p className="text-xs text-slate-400 mb-2">
                  Titolo A incontra Titolo B per posizionare il mercato.
                </p>
                <input
                  type="text"
                  value={project.compTitles}
                  onChange={(e) => handleFieldChange('compTitles', e.target.value)}
                  placeholder="Es. Gomorra incontra Erin Brockovich e The Night Of"
                  className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: Arena & Mondo */}
      {currentStep === 'arena' && (
        <div className="space-y-4">
          <div className="bg-[#121929] border border-white/10 rounded-xl p-5 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                Ambientazione & Coordinate Spazio-Temporali
              </label>
              <p className="text-xs text-slate-400 mb-2">
                Dove e quando siamo? Qual è la texture visiva, atmosferica e geografica del mondo?
              </p>
              <textarea
                rows={3}
                value={project.arenaSetting}
                onChange={(e) => handleFieldChange('arenaSetting', e.target.value)}
                placeholder="Es. Taranto e l'arco ionico: una città baciata dal mare ma soffocata dalle polveri rosse dell'acciaieria. Fumi industriali, banchine decadenti e tribunali logorati..."
                className="w-full bg-[#0B0F17] border border-white/10 rounded-lg p-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60 leading-relaxed"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-white mb-1">
                  Le Regole del Mondo & Barriere
                </label>
                <p className="text-xs text-slate-400 mb-2">
                  Quali sono le leggi non scritte? Perché i personaggi non possono semplicemente fuggire?
                </p>
                <textarea
                  rows={3}
                  value={project.arenaRules}
                  onChange={(e) => handleFieldChange('arenaRules', e.target.value)}
                  placeholder="Es. La fabbrica dà il pane e toglie il respiro: chi denuncia viene isolato come traditore della comunità. La legge dello stipendio vince su ogni codice penale."
                  className="w-full bg-[#0B0F17] border border-white/10 rounded-lg p-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-1">
                  Contrasto Sociale & Visivo
                </label>
                <p className="text-xs text-slate-400 mb-2">
                  Quali classi, poteri o mondi opposti si scontrano in questo recinto?
                </p>
                <textarea
                  rows={3}
                  value={project.socialContrast}
                  onChange={(e) => handleFieldChange('socialContrast', e.target.value)}
                  placeholder="Es. La classe operaia esposta quotidianamente alle polveri tossiche e l'alta dirigenza multinazionale blindata nelle ville sul litorale."
                  className="w-full bg-[#0B0F17] border border-white/10 rounded-lg p-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                Tono Visivo e Moodboard Narrativo
              </label>
              <input
                type="text"
                value={project.toneAndMood}
                onChange={(e) => handleFieldChange('toneAndMood', e.target.value)}
                placeholder="Es. Realistico, cupo, contrastato. Luce mediterranea filtrata da polveri minerali, ritmo teso e claustrofobico."
                className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
              />
            </div>
          </div>
        </div>
      )}

      {/* STEP 4: Personaggi */}
      {currentStep === 'characters' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-white">Schede Personaggi & Dinamiche Relazionali</h3>
              <p className="text-xs text-slate-400">Ogni personaggio deve avere un Desiderio conscio, un Bisogno interiore e una Ferita (Ghost).</p>
            </div>
            <button
              onClick={addCharacter}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Aggiungi Personaggio</span>
            </button>
          </div>

          <div className="space-y-4">
            {project.characters.map((char, index) => (
              <div
                key={char.id}
                className="bg-[#121929] border border-white/10 rounded-xl p-4.5 space-y-3.5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-amber-400">#{index + 1}</span>
                    <input
                      type="text"
                      value={char.name}
                      onChange={(e) => updateCharacter(char.id, 'name', e.target.value)}
                      placeholder="Nome e Cognome Personaggio"
                      className="bg-transparent text-sm font-bold text-white placeholder-slate-500 focus:outline-none focus:border-b focus:border-amber-400"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={char.role}
                      onChange={(e) => updateCharacter(char.id, 'role', e.target.value as any)}
                      className="bg-[#0B0F17] border border-white/10 text-xs text-amber-300 rounded px-2.5 py-1 focus:outline-none cursor-pointer"
                    >
                      <option value="Protagonista">Protagonista</option>
                      <option value="Antagonista">Antagonista</option>
                      <option value="Coprotagonista">Coprotagonista</option>
                      <option value="Mentore">Mentore</option>
                      <option value="Foil / Specchio">Foil / Specchio</option>
                      <option value="Altro">Altro</option>
                    </select>

                    <input
                      type="text"
                      value={char.age}
                      onChange={(e) => updateCharacter(char.id, 'age', e.target.value)}
                      placeholder="Età (es. 34 anni)"
                      className="w-24 bg-[#0B0F17] border border-white/10 text-xs text-slate-300 rounded px-2 py-1 placeholder-slate-600 focus:outline-none"
                    />

                    {project.characters.length > 1 && (
                      <button
                        onClick={() => removeCharacter(char.id)}
                        className="text-slate-500 hover:text-rose-400 p-1 rounded hover:bg-white/5 transition-colors cursor-pointer"
                        title="Elimina personaggio"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-emerald-400 mb-1">
                      Desiderio Conscio (Plot Goal)
                    </label>
                    <textarea
                      rows={2}
                      value={char.desire}
                      onChange={(e) => updateCharacter(char.id, 'desire', e.target.value)}
                      placeholder="Cosa vuole ottenere concretamente nella storia? (Es. Rinvio a giudizio del CdA)"
                      className="w-full bg-[#0B0F17] border border-white/10 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-amber-300 mb-1">
                      Bisogno Inconscio (Arco Emotivo)
                    </label>
                    <textarea
                      rows={2}
                      value={char.need}
                      onChange={(e) => updateCharacter(char.id, 'need', e.target.value)}
                      placeholder="Quale verità emotiva deve accettare su di sé? (Es. Accettare le debolezze del padre)"
                      className="w-full bg-[#0B0F17] border border-white/10 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                      La Ferita Originaria (Ghost / Trauma passato)
                    </label>
                    <input
                      type="text"
                      value={char.ghost}
                      onChange={(e) => updateCharacter(char.id, 'ghost', e.target.value)}
                      placeholder="Cosa gli è successo prima dell'episodio 1?"
                      className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-rose-400 mb-1">
                      Difetto Fatale (Fatal Flaw)
                    </label>
                    <input
                      type="text"
                      value={char.fatalFlaw}
                      onChange={(e) => updateCharacter(char.id, 'fatalFlaw', e.target.value)}
                      placeholder="Il difetto caratteriale che sabota i suoi piani"
                      className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">
                    Bio Sintetica per la Bibbia (2-3 righe)
                  </label>
                  <input
                    type="text"
                    value={char.loglineBio}
                    onChange={(e) => updateCharacter(char.id, 'loglineBio', e.target.value)}
                    placeholder="Sintesi del personaggio e del suo ruolo nell'arena drammatica..."
                    className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STEP 5: Motore Seriale */}
      {currentStep === 'engine' && (
        <div className="space-y-4">
          <div className="bg-[#121929] border border-white/10 rounded-xl p-5 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Tipologia di Struttura Seriale
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {[
                  'Orizzontale (Serial puro)',
                  'Verticale (Procedurale / Caso di puntata)',
                  'Ibrido (Arco orizzontale + caso di puntata)',
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleFieldChange('formatType', type)}
                    className={`p-3 rounded-lg text-left text-xs transition-all border cursor-pointer ${
                      project.formatType === type
                        ? 'bg-amber-400/15 border-amber-400 text-amber-300 font-medium'
                        : 'bg-[#0B0F17] border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-white mb-1">
                  Linea Orizzontale (Arco di Stagione)
                </label>
                <p className="text-xs text-slate-400 mb-2">
                  Qual è la grande domanda drammatica che tiene incollato lo spettatore dall'episodio 1 all'episodio finale?
                </p>
                <textarea
                  rows={3}
                  value={project.horizontalArc}
                  onChange={(e) => handleFieldChange('horizontalArc', e.target.value)}
                  placeholder="Es. Chiara riuscirà a incriminare la multinazionale prima che il padre distrugga l'archivio e che la città si rivolti?"
                  className="w-full bg-[#0B0F17] border border-white/10 rounded-lg p-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-1">
                  Motore Verticale (Conflitto di Episodio)
                </label>
                <p className="text-xs text-slate-400 mb-2">
                  Cosa genera i singoli episodi? Qual è la miccia che si rinnova ogni 50 minuti?
                </p>
                <textarea
                  rows={3}
                  value={project.verticalEngine}
                  onChange={(e) => handleFieldChange('verticalEngine', e.target.value)}
                  placeholder="Es. Ogni puntata affronta un anello della catena di comando (il perito corrotto, il medico compiacente, la discarica abusiva)..."
                  className="w-full bg-[#0B0F17] border border-white/10 rounded-lg p-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-white mb-1">
                  Strategia dei Cliffhanger
                </label>
                <p className="text-xs text-slate-400 mb-2">
                  Come si chiudono le puntate per spingere al binge-watching?
                </p>
                <input
                  type="text"
                  value={project.cliffhangerStrategy}
                  onChange={(e) => handleFieldChange('cliffhangerStrategy', e.target.value)}
                  placeholder="Es. Rivelazioni documentali, minacce fisiche, ribaltamento di alleanze"
                  className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-1">
                  Potenziale Stagione 2 (Multi-Season)
                </label>
                <p className="text-xs text-slate-400 mb-2">
                  Come si rigenera il conflitto dopo il finale?
                </p>
                <input
                  type="text"
                  value={project.multiSeasonPotential}
                  onChange={(e) => handleFieldChange('multiSeasonPotential', e.target.value)}
                  placeholder="Es. L'allargamento dell'inchiesta alla holding finanziaria a Ginevra..."
                  className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 6: Sinossi Pilot & Stagione */}
      {currentStep === 'synopsis' && (
        <div className="space-y-6">
          {onOpenAiSynopsis && (
            <div className="p-4.5 rounded-xl bg-gradient-to-r from-amber-500/15 via-[#131B2E] to-[#121929] border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <strong className="text-sm font-semibold text-white">Generatore Sinossi con AI Gemini</strong>
                </div>
                <p className="text-xs text-slate-300">
                  Genera automaticamente l'articolazione in atti del Pilot e l'Arco di Stagione basandoti sul Concept, sui Personaggi e sul Motore di serie definiti.
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenAiSynopsis}
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Genera Sinossi con AI</span>
              </button>
            </div>
          )}

          {/* Sezione Pilot */}
          <div className="bg-[#121929] border border-white/10 rounded-xl p-5 space-y-4">
            <div className="border-b border-white/5 pb-2">
              <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wide">
                1. Sinossi Strutturata del Pilot (Episodio 1)
              </h3>
              <p className="text-xs text-slate-400">
                La puntata pilota deve dimostrare le potenzialità drammatiche dell'intera serie.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-white mb-1">
                Incidente Scatenante del Pilot (Inciting Incident)
              </label>
              <textarea
                rows={2}
                value={project.pilotIncitingIncident}
                onChange={(e) => handleFieldChange('pilotIncitingIncident', e.target.value)}
                placeholder="L'evento che rompe l'equilibrio iniziale (es. Ritrovamento del cadavere del chimico capo nel porto)..."
                className="w-full bg-[#0B0F17] border border-white/10 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-white mb-1">
                  Atto 1: Mondo Ordinario & Chiamata
                </label>
                <textarea
                  rows={3}
                  value={project.pilotAct1}
                  onChange={(e) => handleFieldChange('pilotAct1', e.target.value)}
                  placeholder="Presentazione del protagonista e del suo status quo prima della crisi..."
                  className="w-full bg-[#0B0F17] border border-white/10 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1">
                  Atto 2: Ingresso nell'Arena & Escalation
                </label>
                <textarea
                  rows={3}
                  value={project.pilotAct2}
                  onChange={(e) => handleFieldChange('pilotAct2', e.target.value)}
                  placeholder="Le prime indagini o i primi ostacoli che alzano la posta in gioco..."
                  className="w-full bg-[#0B0F17] border border-white/10 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-white mb-1">
                  Atto 3: Climax del Pilot
                </label>
                <textarea
                  rows={3}
                  value={project.pilotAct3Climax}
                  onChange={(e) => handleFieldChange('pilotAct3Climax', e.target.value)}
                  placeholder="Il momento culminante di massima tensione del primo episodio..."
                  className="w-full bg-[#0B0F17] border border-white/10 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">
                  Cliffhanger Finale Pilot (Punto di Non Ritorno)
                </label>
                <textarea
                  rows={3}
                  value={project.pilotCliffhanger}
                  onChange={(e) => handleFieldChange('pilotCliffhanger', e.target.value)}
                  placeholder="La rivelazione shock che chiude l'episodio 1..."
                  className="w-full bg-[#0B0F17] border border-white/10 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
                />
              </div>
            </div>
          </div>

          {/* Sezione Arco di Stagione */}
          <div className="bg-[#121929] border border-white/10 rounded-xl p-5 space-y-4">
            <div className="border-b border-white/5 pb-2">
              <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wide">
                2. Sinossi dell'Arco di Stagione (Season Arc)
              </h3>
              <p className="text-xs text-slate-400">
                La sintesi dell'intera stagione in tre movimenti drammatici.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-white mb-1">
                Movimento 1: L'Innesco (Episodi 1-2)
              </label>
              <textarea
                rows={2}
                value={project.seasonArcMovement1}
                onChange={(e) => handleFieldChange('seasonArcMovement1', e.target.value)}
                placeholder="I protagonisti prendono posizione, le linee di fazione si definiscono..."
                className="w-full bg-[#0B0F17] border border-white/10 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-white mb-1">
                Movimento 2: Il Punto di Svolta / Midpoint (Episodi 3-5)
              </label>
              <textarea
                rows={3}
                value={project.seasonArcMovement2}
                onChange={(e) => handleFieldChange('seasonArcMovement2', e.target.value)}
                placeholder="La crisi centrale: il piano originale fallisce, emerge una verità devastante, la posta in gioco raddoppia..."
                className="w-full bg-[#0B0F17] border border-white/10 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-white mb-1">
                Movimento 3: Climax e Risoluzione Finale di Stagione (Episodi 6-8)
              </label>
              <textarea
                rows={3}
                value={project.seasonArcMovement3}
                onChange={(e) => handleFieldChange('seasonArcMovement3', e.target.value)}
                placeholder="Lo scontro finale, le conseguenze del verdetto, chi vince, chi perde e quale nuovo equilibrio si crea per il futuro..."
                className="w-full bg-[#0B0F17] border border-white/10 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step Bottom Navigation Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div>
          {prevStep ? (
            <button
              onClick={() => onNavigateStep(prevStep)}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Step Precedente</span>
            </button>
          ) : <div />}
        </div>

        <div>
          {nextStep ? (
            <button
              onClick={() => onNavigateStep(nextStep)}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
            >
              <span>Step Successivo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <span className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
              <Check className="w-4 h-4" /> Tutte le 6 tappe completate!
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
