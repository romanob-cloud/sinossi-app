export interface GlossaryTerm {
  id: string;
  term: string;
  originalTerm?: string;
  category: 'Sviluppo & Ruoli' | 'Documenti di Mercato' | 'Drammaturgia & Struttura' | 'Personaggi & Conflitto' | 'Formato & Motore';
  definition: string;
  producerPerspective: string; // Perché è cruciale per un produttore o broadcaster
  example: string;
  relatedTerms: string[];
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'showrunner',
    term: 'Showrunner',
    originalTerm: 'Showrunner / Head Writer & Executive Producer',
    category: 'Sviluppo & Ruoli',
    definition: "Figura cardine della serialità televisiva moderna: è l'autore capo e produttore esecutivo con totale responsabilità creativa, produttiva ed economica sul progetto. Guida la Writers' Room, supervisiona la regia, il montaggio e il casting, garantendo coerenza estetica dall'episodio 1 all'episodio finale.",
    producerPerspective: "Per un produttore o una piattaforma, lo showrunner è il referente unico: una serie ha bisogno di una voce autoriale chiara che sappia dialogare con i budget e i tempi di consegna industriali.",
    example: "Jesse Armstrong in 'Succession', Vince Gilligan in 'Breaking Bad', Phoebe Waller-Bridge in 'Fleabag'.",
    relatedTerms: ['Series Bible', 'Writers Room', 'Executive Producer']
  },
  {
    id: 'series-bible',
    term: 'Series Bible (Bibbia di Serie)',
    originalTerm: 'Series Pitch Bible / Show Bible',
    category: 'Documenti di Mercato',
    definition: "Il documento programmatico completo che descrive in modo esaustivo l'universo narrativo di una serie TV: contiene High Concept, Logline, descrizione dell'Arena, schede psico-drammatiche dei personaggi, il Motore seriale, la sinossi del Pilot per atti e le sinossi episodiche della prima stagione (e linee future).",
    producerPerspective: "È il documento su cui si firmano i contratti di sviluppo (Development Deal) con broadcaster e distributori internazionali: deve dimostrare che la storia ha 'respiro' per decine di ore.",
    example: "La celebre 'Montauk Bible' (titolo provvisorio di Stranger Things) di 30 pagine con foto e mood visivo anni '80 dei fratelli Duffer.",
    relatedTerms: ['Pitch Deck', 'Showrunner', 'Pilot']
  },
  {
    id: 'inciting-incident',
    term: 'Inciting Incident (Incidente Scatenante)',
    originalTerm: 'Inciting Incident / Catalizzatore drammatico',
    category: 'Drammaturgia & Struttura',
    definition: "L'evento dirompente che accade all'inizio del Pilot e manda in frantumi lo status quo del mondo ordinario del protagonista. È la miccia che accende la storia: senza questo evento, il protagonista continuerebbe a vivere la sua solita vita.",
    producerPerspective: "Nel leggere una sceneggiatura, il produttore cerca l'incidente scatenante entro i primi 10-15 minuti: se arriva troppo tardi, lo spettatore cambia canale o abbandona lo streaming.",
    example: "La diagnosi di cancro terminale a Walter White in Breaking Bad, o la sparizione improvvisa di Will Byers in Stranger Things.",
    relatedTerms: ['Pilot', 'Logline', 'Midpoint']
  },
  {
    id: 'logline',
    term: 'Logline',
    category: 'Documenti di Mercato',
    definition: "La sintesi narrativa definitiva della serie in 25-45 parole. Condensa in una sola frase: il protagonista (con tratto distintivo), l'incidente scatenante, l'obiettivo attivo che persegue e la posta in gioco (cosa rischia di perdere se fallisce).",
    producerPerspective: "È il primo biglietto da visita: se la logline è debole, vaga o confusa, i lettori editoriali e i buyer delle piattaforme spesso non aprono neanche il resto del dossier.",
    example: "Quando il fratello maggiore muore suicida lasciandogli una disastrata tavola calda, un giovane e brillante chef dell'alta cucina torna a Chicago per salvare il locale affrontando debiti e una brigata ostile (The Bear).",
    relatedTerms: ['Tagline', 'High Concept', 'Comp Titles']
  },
  {
    id: 'pilot',
    term: 'Pilot (Puntata Pilota)',
    originalTerm: 'Pilot Episode',
    category: 'Drammaturgia & Struttura',
    definition: "Il primo episodio di una serie TV, concepito per presentare l'universo narrativo, stabilire il tono visivo, introdurre il protagonista nel suo mondo ordinario prima che l'incidente scatenante lo costringa a varcare la soglia, chiudendosi con un potente cliffhanger.",
    producerPerspective: "Il pilot è la prova del nove degli investimenti: un tempo i network producevano fisicamente l'episodio pilota di prova prima di ordinare la serie; oggi spesso si ordina direttamente 'straight-to-series', ma la sceneggiatura del pilot rimane la più scrutinata.",
    example: "Il pilot di 'Lost' costò circa 14 milioni di dollari e convinse la ABC a dare semaforo verde all'intera prima stagione.",
    relatedTerms: ['Inciting Incident', 'Cliffhanger', 'Series Bible']
  },
  {
    id: 'high-concept',
    term: 'High Concept',
    category: 'Documenti di Mercato',
    definition: "Un'idea narrativa caratterizzata da immediatezza, unicità e forte contrasto, riassumibile in un 'What-If' sorprendente e visivamente memorabile. Si contrappone al 'Low Concept' o 'Execution-dependent', dove la forza risiede interamente nello stile dei dialoghi e della recitazione.",
    producerPerspective: "Un progetto High Concept ha un valore commerciale esponenziale perché è facile da comunicare nei mercati internazionali, nelle locandine e sui social.",
    example: "Un'isola deserta popolata da sopravvissuti a un disastro aereo con orsi polari e mostri di fumo (Lost); un mondo in cui i ricordi di lavoro sono chirurgicamente separati da quelli personali (Severance).",
    relatedTerms: ['Logline', 'Comp Titles', 'Series Engine']
  },
  {
    id: 'arena',
    term: 'Arena Drammatica',
    originalTerm: 'The Arena / World Building',
    category: 'Drammaturgia & Struttura',
    definition: "Il perimetro geografico, sociale, istituzionale o morale entro cui si svolgono le vicende. Non è una semplice scenografia, ma un microcosmo dotato di regole invisibili, gerarchie ferree e barriere (fisiche o psicologiche) che impediscono ai personaggi di abbandonare la partita.",
    producerPerspective: "Un'arena solida riduce i costi di produzione (perché concentra le location) e conferisce alla serie un'identità visiva immediatamente riconoscibile che attrae territori e Film Commission.",
    example: "Le Vele di Scampia in 'Gomorra', la casa di cura mineraria e la centrale nucleare in 'Dark', i canali industriali di Birmingham in 'Peaky Blinders'.",
    relatedTerms: ['Series Engine', 'Format', 'High Concept']
  },
  {
    id: 'series-engine',
    term: 'Series Engine (Motore di Serie)',
    originalTerm: 'Series Engine / Story Engine',
    category: 'Formato & Motore',
    definition: "Il meccanismo narrativo che genera continuamente nuovi conflitti e ostacoli credibili a ogni puntata. Risponde alla domanda del produttore: 'Cosa accadrà nell'episodio 7? E nella seconda stagione?'. Senza un motore, l'idea iniziale si esaurisce dopo due ore.",
    producerPerspective: "È il parametro numero uno per distinguere una miniserie autoconclusiva (Limited Series) da una serie ritornante (Returning Series) capace di generare valore su più stagioni.",
    example: "In 'Better Call Saul', il motore è l'incapacità cronica di Jimmy di resistere alle scorciatoie truffaldine, scontrandosi con il giudizio del fratello e le leggi del cartello.",
    relatedTerms: ['Procedurale vs Serial', 'Linea Orizzontale', 'Linea Verticale']
  },
  {
    id: 'ghost-ferita',
    term: 'Ghost (La Ferita del Passato)',
    originalTerm: 'The Ghost / The Backstory Wound',
    category: 'Personaggi & Conflitto',
    definition: "Il trauma o l'evento doloroso accaduto al personaggio prima dell'inizio della serie, che non è mai stato superato ed è all'origine della sua paura più profonda, della sua maschera sociale e del suo difetto fatale.",
    producerPerspective: "Il Ghost dà profondità tridimensionale al protagonista e offre combustibile per flashback, rivelazioni a metà stagione e svelamenti nei momenti di massima crisi.",
    example: "La svendita della quota della Gray Matter per Walter White; la morte della moglie suicida per Mark Scout in Severance.",
    relatedTerms: ['Desire vs Need', 'Fatal Flaw', 'Maschera Drammatica']
  },
  {
    id: 'desire-need',
    term: 'Desiderio vs Bisogno (Desire vs Need)',
    category: 'Personaggi & Conflitto',
    definition: "La dicotomia fondamentale del personaggio moderno: il Desiderio (Want/Desire) è l'obiettivo esterno e conscio che persegue nella trama (es. soldi, potere, arrestare un killer); il Bisogno (Need) è la verità interiore o etica che deve accettare per guarire la propria anima.",
    producerPerspective: "Permette di costruire archi narrativi a lungo termine: il pubblico tifa per il Desiderio, ma si emoziona profondamente quando il personaggio si confronta con il Bisogno.",
    example: "Walter White: Desiderio = salvare la famiglia dalla povertà; Bisogno = ammettere il proprio titanico narcisismo ('L'ho fatto per me, mi faceva sentire vivo').",
    relatedTerms: ['Ghost (Ferita del Passato)', 'Fatal Flaw', 'Arco di Trasformazione']
  },
  {
    id: 'midpoint',
    term: 'Midpoint (Punto di Svolta)',
    originalTerm: 'Midpoint Turning Point',
    category: 'Drammaturgia & Struttura',
    definition: "Il momento cruciale a metà della stagione (negli episodi centrali, tipicamente 4 o 5 di 8) dove il piano originario fallisce, la posta in gioco raddoppia e il protagonista attraversa un punto di non ritorno emotivo o narrativo.",
    producerPerspective: "Evita la cosiddetta 'crisi del secondo atto' o 'palude di metà stagione', garantendo che lo spettatore rimanga agganciato senza cali di tensione.",
    example: "In Gomorra Stagione 1, quando Genny torna stravolto dall'Honduras e Don Pietro si finge catatonico in carcere, ribaltando completamente gli equilibri di potere.",
    relatedTerms: ['Inciting Incident', 'Climax', 'Cliffhanger']
  },
  {
    id: 'cliffhanger',
    term: 'Cliffhanger',
    category: 'Drammaturgia & Struttura',
    definition: "Un finale di scena o di episodio che si interrompe bruscamente nel momento di massima tensione, rivelando un colpo di scena inaspettato o lasciando il protagonista in imminente pericolo mortale, legale o relazionale.",
    producerPerspective: "È lo strumento primario per massimizzare la 'Completion Rate' (tasso di completamento della serie) sulle piattaforme di streaming e per stimolare il passaparola settimanale.",
    example: "I finali di puntata mozzafiato di 'Severance' o 'Dark', dove una rivelazione identitaria ribalta tutto ciò che lo spettatore credeva di sapere.",
    relatedTerms: ['Pilot', 'Series Engine', 'Midpoint']
  },
  {
    id: 'procedurale-serial',
    term: 'Procedurale vs Serializzato (Linea Verticale vs Orizzontale)',
    originalTerm: 'Procedural vs Serialized / Monster-of-the-Week vs Mytharc',
    category: 'Formato & Motore',
    definition: "La distinzione classica dei formati TV: il Procedurale (Verticale) risolve un caso, un paziente o un crimine in ogni singolo episodio; il Serializzato (Orizzontale) sviluppa una trama continuativa e archi di personaggi da una puntata all'altra stile romanzo fiume.",
    producerPerspective: "I procedurali hanno storicamente un enorme valore nelle syndication televisive e vendite estere perché le puntate possono essere viste in ordine sparso; le serie serializzate dominano lo streaming e i festival prestigiosi.",
    example: "CSI e Law & Order sono procedurali puri; Breaking Bad e Gomorra sono seriali orizzontali puri; Dr. House e X-Files sono ibridi.",
    relatedTerms: ['Series Engine', 'Format', 'Showrunner']
  },
  {
    id: 'comp-titles',
    term: 'Comp Titles (Titoli di Confronto)',
    originalTerm: 'Comparable Titles / Comps',
    category: 'Documenti di Mercato',
    definition: "Due o tre opere cinematografiche o seriali celebri utilizzate nella formula 'X incontra Y' per definire istantaneamente il genere, il tono, il pubblico di riferimento e il livello qualitativo della proposta.",
    producerPerspective: "È il linguaggio d'affari con cui i produttori presentano i progetti nei mercati (come il MIA di Roma o Séries Mania a Lille): 'È Succession che incontra The Bear' orienta immediatamente il target e i budget di produzione.",
    example: "'Stranger Things' fu pitchata come 'I Goonies incontrano Stand by Me e Stephen King con le musiche di John Carpenter'.",
    relatedTerms: ['High Concept', 'Logline', 'Pitch Deck']
  },
  {
    id: 'pitch-deck',
    term: 'Pitch Deck / Scheda Pitch',
    originalTerm: 'TV Pitch Deck',
    category: 'Documenti di Mercato',
    definition: "Una presentazione visiva e testuale sintetica (10-15 slide o 5-8 cartelle) pensata per catturare l'interesse di broadcaster, coproduttori e investitori in una riunione preliminare di pitch di 15-20 minuti.",
    producerPerspective: "Deve essere rapido da sfogliare, graficamente curato e ad alto impatto: vende la visione d'insieme prima che il broadcaster richieda la bibbia completa e il copione del pilot.",
    example: "I pitch deck contemporanei includono logline, moodboard visivo, cast ideale (wishlist), arco sintetico di stagione e note di regia.",
    relatedTerms: ['Series Bible', 'Logline', 'Comp Titles']
  },
  {
    id: 'fatal-flaw',
    term: 'Fatal Flaw (Difetto Tragico)',
    originalTerm: 'The Tragic Flaw / Hamartia',
    category: 'Personaggi & Conflitto',
    definition: "Il difetto caratteriale dominante del protagonista (arroganza, cecità morale, paura del legame, impulsività) che lo spinge a commettere errori sistematici e a sabotare le sue stesse vittorie durante la serie.",
    producerPerspective: "Un protagonista perfetto e privo di difetti è la tomba della serialità: è il difetto tragico a generare gli ostacoli per decine di ore di televisione.",
    example: "L'orgoglio incontrollabile di Walter White in Breaking Bad; l'ambizione cieca di Tommy Shelby in Peaky Blinders.",
    relatedTerms: ['Ghost (Ferita del Passato)', 'Desire vs Need', 'Arena Drammatica']
  },
  {
    id: 'tagline',
    term: 'Tagline',
    category: 'Documenti di Mercato',
    definition: "Lo slogan pubblicitario di poche parole destinato al pubblico, al poster e alla campagna marketing per riassumere l'anima evocativa o l'avvertimento della serie.",
    producerPerspective: "Aiuta i reparti marketing e le piattaforme a definire il payoff per la miniatura e il trailer di lancio.",
    example: "'Remember my name' per Breaking Bad; 'Family. Business.' per Succession.",
    relatedTerms: ['Logline', 'High Concept', 'Pitch Deck']
  },
  {
    id: 'foil',
    term: 'Foil (Personaggio Specchio)',
    originalTerm: 'Dramatic Foil Character',
    category: 'Personaggi & Conflitto',
    definition: "Un personaggio secondario le cui caratteristiche personali o scelte morali contrastano direttamente con quelle del protagonista, mettendo in risalto i suoi pregi, le sue contraddizioni o il suo difetto tragico.",
    producerPerspective: "I foil creano dialoghi brillanti e confronti serrati a basso costo di produzione, poiché mettono a nudo l'interiorità del protagonista attraverso il conflitto relazionale.",
    example: "Jesse Pinkman funge da foil morale per Walter White; Richie funge da foil caotico e tradizionalista per Carmy in The Bear.",
    relatedTerms: ['Desire vs Need', 'Fatal Flaw', 'Arena Drammatica']
  }
];
