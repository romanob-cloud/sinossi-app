export type StepId = 'concept' | 'logline' | 'arena' | 'characters' | 'engine' | 'synopsis';

export interface CharacterItem {
  id: string;
  name: string;
  role: 'Protagonista' | 'Antagonista' | 'Coprotagonista' | 'Mentore' | 'Foil / Specchio' | 'Altro';
  age: string;
  archetype: string;
  desire: string; // Desiderio conscio (Cosa vuole ottenere nel plot)
  need: string; // Bisogno interiore (Cosa deve imparare emotivamente o eticamente)
  ghost: string; // La ferita del passato / trauma originale
  fatalFlaw: string; // Il difetto tragico che crea ostacoli
  loglineBio: string; // Breve sintesi in 2-3 righe
}

export interface SeriesProject {
  id: string;
  title: string;
  workingTitle?: string;
  author: string;
  genre: string;
  subgenre: string;
  format: string; // Es: 8 episodi da 50' - Drama / Miniserie
  targetAudience: string;
  
  // Fase 1: Nucleo Drammatico
  highConcept: string;
  whatIf: string;
  themeStatement: string; // Di cosa parla veramente (il tema universale)
  
  // Fase 2: Logline & Pitch
  logline: string;
  tagline: string;
  compTitles: string; // Es: Succession incontra The Bear
  
  // Fase 3: Arena & Mondo
  arenaSetting: string; // Luogo geografico e tempo storico
  arenaRules: string; // Le regole invisibili e la legge del mondo
  socialContrast: string; // Conflitti sociali, culturali o fisici
  toneAndMood: string; // Tono visivo e narrativo
  
  // Fase 4: Personaggi
  characters: CharacterItem[];
  
  // Fase 5: Motore Seriale (Series Engine)
  formatType: 'Orizzontale (Serial puro)' | 'Verticale (Procedurale / Caso di puntata)' | 'Ibrido (Arco orizzontale + caso di puntata)';
  horizontalArc: string; // La domanda drammatica di stagione
  verticalEngine: string; // Cosa genera i singoli episodi (es. indagini, pazienti, minacce, contratti)
  cliffhangerStrategy: string; // Come si chiudono le puntate
  multiSeasonPotential: string; // Come può rigenerarsi nella seconda stagione
  
  // Fase 6: Sinossi Pilot & Arco di Stagione
  pilotIncitingIncident: string; // L'incidente scatenante che rompe l'equilibrio ordinario
  pilotAct1: string; // Primo Atto: mondo ordinario e chiamata
  pilotAct2: string; // Secondo Atto: superamento della soglia e complicazioni
  pilotAct3Climax: string; // Terzo Atto: climax del pilot e punto di non ritorno
  pilotCliffhanger: string; // Cliffhanger finale della puntata 1
  
  seasonArcMovement1: string; // Inizio stagione (Episodi 1-2): assestamento nel nuovo mondo
  seasonArcMovement2: string; // Metà stagione (Episodi 3-5): il punto di non ritorno (Midpoint) e caduta
  seasonArcMovement3: string; // Climax e finale di stagione (Episodi 6-8): resa dei conti e nuovo status quo
  
  lastModified: number;
}

export interface StepGuide {
  id: StepId;
  stepNumber: number;
  title: string;
  shortDesc: string;
  badge: string;
  iconName: string;
  theory: {
    definition: string;
    keyQuestions: string[];
    rulesOfThumb: string[];
    commonMistakes: string[];
  };
  caseStudies: {
    title: string;
    work: string;
    content: string;
    takeaway: string;
  }[];
  formulaTemplate?: {
    label: string;
    structure: string;
    example: string;
  };
  checklist: string[];
}
