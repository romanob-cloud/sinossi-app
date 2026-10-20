import { StepGuide } from '../types/project';

export const MASTERCLASS_STEPS: StepGuide[] = [
  {
    id: 'concept',
    stepNumber: 1,
    title: 'Il Nucleo Drammatico & High Concept',
    shortDesc: "Dall'intuizione primordiale al 'What-If' che sostiene un'intera serie televisiva.",
    badge: 'Fase 01',
    iconName: 'Sparkles',
    theory: {
      definition: "L'High Concept è l'idea di base di una serie che possiede una fortissima immediatezza visiva ed emotiva, riassumibile in una frase ad alto impatto. Non è la trama, ma la premessa paradossale o rivoluzionaria che promette decine di ore di racconto.",
      keyQuestions: [
        "Qual è l'evento o la premessa straordinaria che costringe persone ordinarie (o straordinarie) ad agire?",
        "Qual è il 'What If' (E se...?) che accende l'universo narrativo?",
        "Qual è il tema morale profondo? Di cosa parla DAVVERO la serie al di là del genere?"
      ],
      rulesOfThumb: [
        "Una buona idea per serie TV deve essere 'inesauribile': non deve risolversi in due ore come un film.",
        "Il contrasto interno deve essere insito nella premessa: un professore integerrimo che produce metanfetamina; una famiglia miliardaria lacerata per il potere; una ragazzina coi poteri telecinetici sperduta in una provincia anni '80.",
        "Il tema universale dà spessore emotivo: ad esempio, Breaking Bad parla di orgoglio e mortalità, non solo di droga."
      ],
      commonMistakes: [
        "Scrivere un'idea che è in realtà un film lungo, priva di un motore per generare puntate.",
        "Confondere l'ambientazione con l'idea drammatica (es: 'Una serie ambientata a Napoli' non è un concept).",
        "Avere un tema vago o predicatorio invece che un dilemma morale esplorabile da più punti di vista."
      ]
    },
    caseStudies: [
      {
        title: 'Breaking Bad',
        work: 'Vince Gilligan / AMC',
        content: "What If: E se un mite professore di chimica del liceo, scoprendo di avere un cancro terminale, decidesse di produrre cristalli di metanfetamina per garantire un futuro alla sua famiglia, scoprendo in sé un talento spietato?",
        takeaway: "L'High Concept trasforma un dramma medico in un'ascesa criminale implacabile fondata sulla contraddizione morale del protagonista."
      },
      {
        title: 'Succession',
        work: 'Jesse Armstrong / HBO',
        content: "What If: E se il patriarca di un impero mediatico globale stesse per cedere il potere, scatenando una guerra all'ultimo sangue tra i suoi quattro figli nevrotici e disperatamente affamati della sua approvazione?",
        takeaway: "Re Lear ambientato a Manhattan: il potere e il trauma intergenerazionale alimentano conflitti infiniti."
      },
      {
        title: 'Gomorra - La Serie',
        work: 'Sollima, Cupellini, Comencini / Sky Studios',
        content: "What If: E se raccontassimo la camorra esclusivamente dal punto di vista interno dei criminali, eliminando del tutto le figure rassicuranti delle forze dell'ordine e mostrando la progressiva cannibalizzazione dei clan?",
        takeaway: "Scelta radicale di punto di vista che rende il concept crudo, shakespeariano e claustrofobico."
      }
    ],
    formulaTemplate: {
      label: 'Formula del What-If Seriale',
      structure: 'E se [SITUAZIONE O PARADOSSO INIZIALE], costringendo [PROTAGONISTA CON LIMITE] a [AZIONE ESTREMA], mettendo a rischio [POSTA IN GIOCO MASSIMA]?',
      example: 'E se il primario di un ospedale modello perdesse la memoria degli ultimi dodici anni dopo un attentato, dovendo ricostruire la propria vita scoprendo di essere diventato un uomo cinico e detestato da tutti?'
    },
    checklist: [
      'Il concept può sostenere almeno 8-10 episodi di conflitto continuo?',
      'Il dilemma del protagonista non è risolvibile facilmente con una semplice telefonata o chiarimento?',
      'La premessa incuriosisce un lettore o produttore in meno di 20 secondi?'
    ]
  },
  {
    id: 'logline',
    stepNumber: 2,
    title: 'La Logline & Il Pitch Formula',
    shortDesc: 'La carta d’identità commerciale e creativa del progetto in 25-40 parole.',
    badge: 'Fase 02',
    iconName: 'Feather',
    theory: {
      definition: "La logline è la sintesi definitiva della serie: in una o due frasi deve condensare il protagonista con aggettivo caratterizzante, l'evento scatenante (inciting incident), l'obiettivo attivo e la posta in gioco (stakes). È il primo elemento letto dai produttori e broadcaster.",
      keyQuestions: [
        "Chi è il protagonista e qual è il suo tratto dominante o paradosso?",
        "Quale evento stravolge la sua esistenza ordinaria (Incidente Scatenante)?",
        "Cosa cerca attivamente di ottenere durante la prima stagione?",
        "Cosa rischia di perdere per sempre se fallisce?"
      ],
      rulesOfThumb: [
        "Evita i nomi propri se non sono figure storiche universalmente note: scrivi 'un timido perito assicurativo', non 'Marco Rossi'.",
        "Usa verbi d'azione forti (combattere, smascherare, ricattare, sopravvivere), mai verbi passivi (riflettere, imparare, capire).",
        "Includi i 'Comp Titles' (Titoli di confronto): orientano immediatamente il tono e il mercato di riferimento."
      ],
      commonMistakes: [
        "Scrivere uno slogan pubblicitario vago al posto di una logline drammatica ('Un viaggio nel cuore oscuro dell'animo umano').",
        "Nascondere il finale o la posta in gioco con inutili misteri invece di chiarire il motore del racconto.",
        "Dimenticare il contrasto o l'antagonista principale."
      ]
    },
    caseStudies: [
      {
        title: 'Stranger Things',
        work: 'The Duffer Brothers / Netflix',
        content: "Logline: Quando un ragazzino scompare misteriosamente in una sonnolenta cittadina dell'Indiana nel 1983, i suoi tre amici nerd, una madre disperata e lo sceriffo locale scoprono esperimenti governativi segreti e una misteriosa bambina dotata di poteri telecinetici.",
        takeaway: "Definisce epoca, incidente, gruppo di protagonisti e svela subito l'elemento sovrannaturale."
      },
      {
        title: 'The Bear',
        work: 'Christopher Storer / FX - Disney+',
        content: "Logline: Un giovane e brillante chef dell'alta ristorazione newyorkese torna a Chicago per gestire la caotica paninoteca di famiglia dopo l'inaspettato suicidio del fratello, scontrandosi con una brigata ostile, debiti soffocanti e i propri traumi irrisolti.",
        takeaway: "Netto contrasto di mondi (fine dining vs paninoteca degradata) e posta in gioco emotiva e finanziaria altissima."
      }
    ],
    formulaTemplate: {
      label: 'Formula Classica della Logline',
      structure: 'Quando [INCIDENTE SCATENANTE], un [PROTAGONISTA CON DIFETTO] deve [AZIONE / OBIETTIVO ATTIVO], altrimenti [POSTA IN GIOCO / CONSEGUENZA CATASTROFICA].',
      example: 'Quando il patriarca di una famiglia camorristica viene arrestato, il suo giovane e insicuro braccio destro deve guidare la nuova generazione criminale contro i vecchi boss per evitare che la città sprofondi in una faida fratricida.'
    },
    checklist: [
      'La frase sta entro le 45 parole ed è fluida alla lettura a voce alta?',
      'Il protagonista ha un obiettivo chiaro e misurabile?',
      'È presente l’antagonismo (umano, sociale o ambientale)?',
      'I comp titles (titolo X incontra titolo Y) comunicano tono e posizionamento?'
    ]
  },
  {
    id: 'arena',
    stepNumber: 3,
    title: "L'Arena, il Mondo & il Tono",
    shortDesc: "Il perimetro geografico, morale e sociale dove la serie è intrappolata.",
    badge: 'Fase 03',
    iconName: 'MapPin',
    theory: {
      definition: "L'Arena è il recinto drammatico entro cui si svolge la serie. Non è solo la scenografia o la città: è un microcosmo con regole ferree, gerarchie invisibili, codici comportamentali e barriere che impediscono ai personaggi di scappare facilmente. L'arena produce attrito continuo.",
      keyQuestions: [
        "Quali sono le leggi non scritte di questo microcosmo (chi comanda, cosa è vietato, cosa dà prestigio)?",
        "Perché i personaggi non possono andarsene via semplicemente e chiudere la storia?",
        "Qual è il contrasto visivo e sociale dominante (lusso vs degrado, natura vs industria, luce vs ombra)?",
        "Qual è il tono di voce della serie (drammatico, tagliente, ironico, grottesco, claustrofobico)?"
      ],
      rulesOfThumb: [
        "Un'ottima arena funziona come un personaggio aggiuntivo con propri desideri e pericoli.",
        "Le migliori arene mettono a contatto ravvicinato classi sociali o valori opposti (l'alta finanza e i magazzini di provincia; un monastero medievale e l'inquisizione).",
        "Definisci l'estetica visiva (palette colori, stile di ripresa, tempo atmosferico) per dare identità forte alla bibbia."
      ],
      commonMistakes: [
        "Scegliere un'arena generica (es: 'Roma' o 'Milano') senza specificare la bolla sociale o lavorativa precisa.",
        "Non spiegare perché il mondo è claustrofobico o non concedere un motivo forte di permanenza ai protagonisti.",
        "Dimenticare il tono: una storia medica può essere tragicomica (Scrubs) o drammatica e frenetica (ER)."
      ]
    },
    caseStudies: [
      {
        title: 'Dark',
        work: 'Odar & Friese / Netflix',
        content: "Arena: Winden, una claustrofobica cittadina tedesca circondata da boschi fitti e sovrastata da una centrale nucleare in dismissione, dove piove costantemente e le famiglie sono legate da segreti genealogici su più epoche temporali.",
        takeaway: "L'isolamento geografico e la centrale nucleare diventano simboli fisici e psicologici del destino ineluttabile."
      },
      {
        title: 'Peaky Blinders',
        work: 'Steven Knight / BBC',
        content: "Arena: La Birmingham industriale del primo dopoguerra (1919), dominata dal fumo delle fonderie, canali fangosi, reduci traumatizzati dalle trincee, scommesse clandestine e la minaccia costante della rivoluzione comunista e della polizia coloniale.",
        takeaway: "L'arena è sporca, metallica e visivamente potente, dando a Tommy Shelby un terreno ferreo su cui costruire un impero."
      }
    ],
    formulaTemplate: {
      label: 'Struttura dell’Arena Drammatica',
      structure: '[NOME / DEFINIZIONE AMBIENTE]: un mondo regolato da [REGOLE / LEGGI SEGRETE], dove la sopravvivenza dipende da [FATTORE CRUCIALE], e dove il contrasto principale è tra [FORZA A] e [FORZA B].',
      example: 'I cantieri navali e le ville storiche di Trieste: un mondo di traffici portuali internazionali e aristocrazia decaduta, dove nessuno può dirsi innocente e la nebbia del golfo nasconde tanto i carichi illeciti quanto i delitti passati.'
    },
    checklist: [
      'L’arena possiede barriere fisiche, psicologiche o sociali che trattengono i personaggi?',
      'Le regole del mondo generano ostacoli naturali e dilemmi per i protagonisti?',
      'Il tono visivo e sonoro è descritto con precisione evocativa?'
    ]
  },
  {
    id: 'characters',
    stepNumber: 4,
    title: 'I Personaggi & la Rete di Relazioni',
    shortDesc: 'Maschere tragiche, bisogni profondi, desideri consci e il fatale Ghost del passato.',
    badge: 'Fase 04',
    iconName: 'Users',
    theory: {
      definition: "In una serie TV, la trama nasce dal personaggio (Character-driven). A differenza del cinema dove un protagonista cambia in due ore, nella serialità un personaggio ha un'anima stratificata: un obiettivo esterno evidente (Desire), una carenza interiore inconscia (Need), un trauma pregresso mai superato (Ghost) e una maschera sociale con cui si protegge.",
      keyQuestions: [
        "Qual è il Desiderio Conscio del protagonista (Cosa vuole ottenere concretamente nel plot)?",
        "Qual è il Bisogno Inconscio (Quale verità morale su di sé deve accettare per salvarsi l'anima)?",
        "Qual è il Ghost (La ferita originaria avvenuta prima dell'episodio 1)?",
        "Qual è il Fatal Flaw (Il difetto caratteriale che lo spinge continuamente a sabotarsi)?",
        "Chi è l'Antagonista e perché dal suo punto di vista ha ragione?"
      ],
      rulesOfThumb: [
        "Il miglior antagonista è il riflesso oscuro del protagonista: vuole la stessa cosa o condivide la stessa ferita ma agisce senza scrupoli morali.",
        "Crea contrasti tra coppie di personaggi: un razionale e un istintivo, un cinico e un idealista (Foil).",
        "In serialità il personaggio non guarisce subito: il suo difetto tragico lo spinge a fare la scelta sbagliata per molti episodi."
      ],
      commonMistakes: [
        "Personaggi piatti che 'subiscono' gli eventi invece di compiere scelte proattive e rischiose.",
        "Scrivere biografie enciclopediche piene di dettagli inutili invece di focalizzarsi su Desiderio, Bisogno e Conflitto.",
        "Antagonisti macchiettistici che sono cattivi 'per natura' senza motivazioni umane comprensibili."
      ]
    },
    caseStudies: [
      {
        title: 'Walter White (Breaking Bad)',
        work: 'Bryan Cranston / AMC',
        content: "Desire: fare soldi per la famiglia. Need: ammettere il proprio titanico bisogno di potere ed essere vivo. Ghost: aver svenduto la quota multimilionaria della Gray Matter Technologies per pochi spiccioli ai suoi ex amici. Flaw: un orgoglio patologico che distrugge ogni pietà.",
        takeaway: "Il Desiderio era una scusa nobile per alimentare il vero e pericoloso Bisogno interiore."
      },
      {
        title: 'Carmela & Tony Soprano (I Soprano)',
        work: 'David Chase / HBO',
        content: "Tony è un boss mafioso spietato ma afflitto da attacchi di panico legati alla madre castrante; Carmela accetta lussuose donazioni di denaro sporco pur confessandosi con sensi di colpa religiosi.",
        takeaway: "La contraddizione tra moralità borghese e crimine genera una delle più grandi dinamiche di coppia della TV."
      }
    ],
    checklist: [
      'Il protagonista ha un Desiderio attivo fin dal primo episodio?',
      'C’è una differenza tangibile tra ciò che il personaggio dice di volere e ciò di cui ha bisogno?',
      'L’antagonista ha una motivazione logica e coerente dal suo punto di vista?',
      'I personaggi secondari non sono cloni, ma mettono alla prova il protagonista?'
    ]
  },
  {
    id: 'engine',
    stepNumber: 5,
    title: 'Il Motore Seriale (Series Engine)',
    shortDesc: 'La macchina perpetua: linea orizzontale, linea verticale e combustibile per gli episodi.',
    badge: 'Fase 05',
    iconName: 'Cpu',
    theory: {
      definition: "Il Series Engine è il meccanismo strutturale che risponde alla domanda fondamentale di ogni broadcaster: 'Di cosa parlerà l'episodio 7? E l'episodio 23?'. Senza motore, hai solo un lungometraggio allungato. Il motore articola la Linea Orizzontale (trama di lungo corso e archi emotivi) e la Linea Verticale (il caso, la crisi o l'incarico che si apre e chiude nella singola puntata).",
      keyQuestions: [
        "La serie è orizzontale (serial puro stile Netflix), verticale (procedurale stile CSI/Law&Order) o ibrida (stile House MD, Lost, Stranger Things)?",
        "Qual è la macchina generatrice dei conflitti di puntata (es: un caso legale, un nemico del cartello, un bug tecnologico, un paziente in fin di vita)?",
        "Come si mantengono vive le tensioni senza risolvere subito il mistero principale?",
        "Qual è la domanda drammatica di fondo dell'intera stagione?"
      ],
      rulesOfThumb: [
        "Un buon motore genera complicazioni impreviste a ogni vittoria parziale del protagonista (regola del 'Sì, ma...' oppure 'No, e per di più...').",
        "Nei seriali moderni, ogni episodio ha un suo tema unificante o una svolta focale (il 'Turning Point') pur portando avanti la trama orizzontale.",
        "Il motore deve poter rigenerarsi per la Stagione 2: se risolvi tutto nel finale senza aprire un nuovo status quo, la serie muore lì."
      ],
      commonMistakes: [
        "La trappola del 'film diluito': i primi due episodi e l'ultimo sono pieni di eventi, mentre gli episodi centrali sono solo riempitivi (filler).",
        "Mancanza di regole: introdurre magie narrative o coincidenze per risolvere i vicoli ciechi della trama.",
        "Non calcolare il formato: una serie da 30 minuti richiede un ritmo e un taglio comico/dramedy molto diverso da un drama da 50 minuti."
      ]
    },
    caseStudies: [
      {
        title: 'Severance (Scissione)',
        work: 'Dan Erickson / Apple TV+',
        content: "Motore: I dipendenti della Lumon Industries subiscono una procedura chirurgica che separa i ricordi di lavoro da quelli privati. Linea Verticale: i misteri quotidiani dell'ufficio e i tentativi di fuga dell'alter ego 'Innie'. Linea Orizzontale: scoprire chi è davvero la Lumon e perché fuori dal lavoro i protagonisti sono spezzati.",
        takeaway: "Un concept fantascientifico rigoroso con un motore claustrofobico infallibile a ogni episodio."
      },
      {
        title: 'Better Call Saul',
        work: 'Gilligan & Gould / AMC',
        content: "Motore: Il costante tentativo di Jimmy McGill di essere un avvocato onesto e guadagnarsi la stima del fratello Chuck, inesorabilmente ostacolato dal suo istinto irrefrenabile per le scorciatoie truffaldine (Slippin' Jimmy).",
        takeaway: "Il motore è il dilemma etico del protagonista che cerca di fare la cosa giusta nel modo sbagliato."
      }
    ],
    checklist: [
      'È chiaro cosa genera nuovi ostacoli ogni settimana?',
      'La combinazione tra linea orizzontale e verticale è bilanciata per il formato scelto?',
      'Le puntate si chiudono con cliffhanger emotivi o narrativi efficaci?'
    ]
  },
  {
    id: 'synopsis',
    stepNumber: 6,
    title: 'Sinossi del Pilot & Arco di Stagione',
    shortDesc: 'La mappa narrativa completa: dal colpo di scena del pilota alla risoluzione della prima stagione.',
    badge: 'Fase 06',
    iconName: 'FileText',
    theory: {
      definition: "La sinossi è la prova del nove del progetto: racconta in prosa vivace al presente indicativo cosa accade esattamente sullo schermo. Si divide in: 1) Sinossi del Pilot (la puntata 1 analizzata nei suoi atti drammatici, che deve dimostrare come funziona la serie) e 2) Sinossi di Stagione (il quadro d'insieme della stagione diviso in tre grandi movimenti: impostazione, punto di rottura a metà stagione, climax e cliffhanger finale).",
      keyQuestions: [
        "Nel Pilot: come viene presentato il mondo ordinario prima che la miccia venga accesa?",
        "Qual è il punto di non ritorno alla fine del primo atto del Pilot (la Chiamata all'azione irrevocabile)?",
        "Qual è il Cliffhanger con cui si chiude la puntata pilota che costringe lo spettatore a premere 'prossimo episodio'?",
        "Qual è il Midpoint di stagione (Episodio 4 o 5) dove la posta in gioco raddoppia e non si può più tornare indietro?",
        "Come si chiude la stagione e quale nuovo problema apre la strada alla Stagione 2?"
      ],
      rulesOfThumb: [
        "Scrivi sempre al presente indicativo, stile asciutto e visivo: niente metafore letterarie o commenti d'autore (mostra, non spiegare).",
        "Ogni paragrafo della sinossi deve essere una causa o una conseguenza: usa 'Perciò...' e 'Tuttavia...', mai 'E poi succede che...'.",
        "La sinossi di stagione nella bibbia deve essere sintetica ma esaustiva (circa 1-2 cartelle), rivelando il finale senza mezze misure."
      ],
      commonMistakes: [
        "Nascondere il finale della stagione scrivendo 'Chi sopravviverà? Lo scoprirete solo guardando': i produttori devono conoscere la risoluzione!",
        "Dimenticare il Midpoint: la stagione si siede a metà se non c'è una svolta radicale nei piani dei personaggi.",
        "Risolvere i conflitti con deus ex machina o coincidenze non seminate all'inizio."
      ]
    },
    caseStudies: [
      {
        title: 'Pilot di Fleabag',
        work: 'Phoebe Waller-Bridge / BBC - Prime',
        content: "Pilot: Fleabag gestisce una caffetteria a tema porcellino d'India in perdita a Londra, dorme con partner casuali per non pensare, rompe la quarta parete parlando allo spettatore. Il climax del pilot rivela che la sua migliore amica Boo è morta suicida per colpa di un tradimento non confessato.",
        takeaway: "Umorismo tagliente che cela una tragedia sconvolgente, impostando l'intera stagione sulla redenzione."
      },
      {
        title: 'Pilot di Homeland',
        work: 'Howard Gordon & Alex Gansa / Showtime',
        content: "Pilot: L'agente della CIA Carrie Mathison, affetta da disturbo bipolare segreto, riceve una soffiata in Iraq su un prigioniero di guerra americano 'convertito' da Al-Qaeda. Pochi mesi dopo, il sergente Nicholas Brody viene liberato dopo 8 anni di prigionia e accolto come eroe nazionale. Carrie è l'unica convinta che sia una bomba a orologeria.",
        takeaway: "Incidente scatenante e scontro psicologico immediato: eroe nazionale contro spia solitaria."
      }
    ],
    checklist: [
      'Il Pilot contiene i canonici passaggi (Mondo ordinario, Incidente scatenante, Soglia, Climax e Cliffhanger)?',
      'L’Arco di Stagione presenta chiaramente il Midpoint e il culmine drammatico?',
      'Il finale della stagione chiude la domanda principale ma semina il seme per la continuazione?'
    ]
  }
];
