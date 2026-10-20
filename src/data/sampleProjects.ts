import { SeriesProject } from '../types/project';

export const SAMPLE_PROJECTS: SeriesProject[] = [
  {
    id: 'project-radici-di-ferro',
    title: 'Radici di Ferro',
    workingTitle: 'Fumo & Polvere',
    author: 'Romano Benazzi',
    genre: 'Crime Drama / Social Thriller',
    subgenre: 'Investigativo Ambientale & Famigliare',
    format: '8 episodi da 50 minuti (Serie ritornante)',
    targetAudience: 'Pubblico adulto / Piattaforme streaming & Prime Time Rai/Sky',
    
    // Fase 1
    highConcept: 'Una giovane procuratrice torna nella sua città natale per indagare sul decesso sospetto di decine di operai siderurgici, scoprendo che la principale acciaieria copre i veleni grazie alla complicità del suo stesso padre, ex sindacalista storico ora ai vertici della fabbrica.',
    whatIf: 'E se per salvare la salute di un intero distretto industriale dovessi mandare in galera l’uomo che ti ha cresciuta e che consideravi l’eroe morale della tua vita?',
    themeStatement: 'Il compromesso morale tra sopravvivenza economica immediata (lavoro) e diritto alla vita (salute), e il prezzo della verità nei legami famigliari.',
    
    // Fase 2
    logline: 'Quando una tossina letale viene rilevata nelle acque del porto, una determinata magistrata torna a Taranto per incriminare i vertici del polo siderurgico, scontrandosi con una città omertosa che difende l’acciaieria e con il suo stesso padre, custode del segreto più oscuro della fabbrica.',
    tagline: 'A volte il veleno più letale è il silenzio di chi ami.',
    compTitles: 'Gomorra incontra Erin Brockovich e The Night Of',
    
    // Fase 3
    arenaSetting: 'Taranto e l’arco ionico: una città baciata dal mare ma soffocata dalle polveri rosse dell’acciaieria più grande d’Europa. Strade di periferia corrose dai fumi, banchine industriali, aule di tribunale logorate e palazzi liberty decadenti.',
    arenaRules: 'In questa arena la fabbrica dà il pane e toglie il respiro: chi parla viene isolato come traditore della comunità operaia. La legge scritta si infrange contro la legge del salario e del ricatto occupazionale.',
    socialContrast: 'Il contrasto feroce tra la classe operaia esposta alle polveri minerali, l’alta dirigenza svizzera che vive barricata su yacht e ville sul litorale, e le istituzioni locali conniventi.',
    toneAndMood: 'Realistico, denso, crepuscolare. Luce calda del sud bruciata dal filtro metallico e industriale, con suoni costanti di lamiere e sirene.',
    
    // Fase 4
    characters: [
      {
        id: 'c1',
        name: 'Chiara Vantaggiato',
        role: 'Protagonista',
        age: '34 anni',
        archetype: 'L’Incorruttibile in esilio',
        desire: 'Ottenere il rinvio a giudizio per disastro ambientale colposo contro il consiglio d’amministrazione.',
        need: 'Accettare che il padre non è il martire idealista che ha venerato da bambina, ma un uomo che ha barattato la morale per proteggere la famiglia.',
        ghost: 'La morte per leucemia del fratellino a 11 anni, archiviata frettolosamente all’epoca come causa naturale.',
        fatalFlaw: 'Ostinazione ossessiva e incapacità di scendere a patti, che la porta a isolare gli alleati e rischiare la vita dei suoi testimoni.',
        loglineBio: 'Magistrato inquirente brillante e spigolosa, fuggita a Milano e ora costretta a fare i conti con la terra che ha rinnegato.'
      },
      {
        id: 'c2',
        name: 'Nicola Vantaggiato',
        role: 'Antagonista',
        age: '62 anni',
        archetype: 'Il Patriarca compromesso',
        desire: 'Mantenere attiva l’acciaieria a ogni costo per garantire stipendi a tremila famiglie e preservare il proprio ruolo di mediatore.',
        need: 'Confessare la propria complicità prima che il cancro che sta nascondendo a tutti lo stronchi.',
        ghost: 'L’accordo firmato sottobanco trent’anni prima durante una crisi occupazionale in cui accettò lo sversamento illegale dei fanghi.',
        fatalFlaw: 'Paternalismo tossico: è convinto che solo lui conosca il vero bene della comunità.',
        loglineBio: 'Ex leader sindacale rispettato da tutti, ora direttore delle relazioni industriali, stretto tra l’amore per la figlia e la fedeltà al patto d’acciaio.'
      },
      {
        id: 'c3',
        name: 'Fabio "Lupo" De Salve',
        role: 'Foil / Specchio',
        age: '36 anni',
        archetype: 'Il sopravvissuto cinico',
        desire: 'Raccogliere abbastanza prove e denaro per fuggire per sempre all’estero con la figlia piccola.',
        need: 'Riscoprire la dignità civile decidendo di testimoniare in aula.',
        ghost: 'Ha visto morire il suo miglior compagno di turno in un incidente spacciato per errore umano.',
        fatalFlaw: 'Disillusione totale: convinto che il sistema vinca sempre, vende informazioni a entrambi gli schieramenti.',
        loglineBio: 'Capoturno del reparto colata continua, amico d’infanzia di Chiara, unico a conoscere la planimetria delle discariche sotterranee.'
      }
    ],
    
    // Fase 5
    formatType: 'Ibrido (Arco orizzontale + caso di puntata)',
    horizontalArc: 'Chiara riuscirà a portare alla sbarra i vertici del polo industriale prima che il padre distrugga l’archivio segreto e che la comunità si rivolti contro la magistratura?',
    verticalEngine: 'Ogni episodio indaga uno specifico anello della catena di comando (il perito chimico corrotto, la ditta di smaltimento legata alla criminalità, il medico del lavoro compiacente, l’incidente nel reparto cokeria).',
    cliffhangerStrategy: 'Colpi di scena legati a minacce fisiche, ricatti famigliari o scoperte documentali che ribaltano la fiducia tra i protagonisti.',
    multiSeasonPotential: 'La Stagione 2 allarga il raggio d’azione alla holding multinazionale a Ginevra e al mercato europeo delle quote di carbonio.',
    
    // Fase 6
    pilotIncitingIncident: 'Il ritrovamento nel porto mercantile del cadavere del chimico capo dell’acciaieria, annegato con tracce di fenolo puro nel sangue.',
    pilotAct1: 'Chiara riceve il fascicolo a sorpresa dalla Procura Generale e deve rientrare a Taranto. Troviamo una città che si prepara allo sciopero generale.',
    pilotAct2: 'Le prime perizie confermano l’omicidio. Chiara scopre che l’ultima telefonata della vittima era indirizzata a suo padre Nicola, il quale dichiara di non aver mai parlato con l’uomo.',
    pilotAct3Climax: 'Chiara fa irruzione notturna nei magazzini della ditta d’appalto e scopre fusti tossici pronti a essere tombati nelle fondamenta del nuovo molo.',
    pilotCliffhanger: 'Nicola compare dall’ombra dell’impianto e implora la figlia di fermarsi: "Se tiri questo filo, Chiara, distruggi me e cancelli questa città dalla carta geografica".',
    
    seasonArcMovement1: 'Episodi 1-2: Chiara apre formalmente l’indagine per omicidio e inquinamento colposo. La fabbrica reagisce annunciando 800 licenziamenti preventivi, scatenando la rabbia della popolazione contro la Procura.',
    seasonArcMovement2: 'Episodi 3-5 (Midpoint): Il testimone chiave viene minacciato e ritratta. Chiara trova il dossier originale del 1994 nel vecchio studio di famiglia: porta la firma di suo padre. La rottura padre-figlia è definitiva.',
    seasonArcMovement3: 'Episodi 6-8: Nicola, crollato fisicamente e divorato dal rimorso, decide di consegnare a Chiara la chiave della cassetta di sicurezza svizzera con i bilanci neri. Durante l’udienza preliminare, una bomba carta esplode sotto casa di Chiara, ma il processo viene ufficialmente incardinato.',
    
    lastModified: Date.now() - 1000 * 60 * 60 * 2
  },
  {
    id: 'project-echo-protocol',
    title: 'Echo Protocol',
    workingTitle: 'Memoria Sintetica',
    author: 'Romano Benazzi',
    genre: 'Sci-Fi Thriller / Dystopian Drama',
    subgenre: 'Cyber-Mystery & Etica Tecnologica',
    format: '6 episodi da 45 minuti (Miniserie)',
    targetAudience: 'Appassionati di Black Mirror, Severance e Blade Runner',
    
    // Fase 1
    highConcept: 'In un futuro prossimo in cui i defunti possono essere digitalizzati in "Echi" neurali per consolare i congiunti in lutto, una psicologa forense scopre che gli Echi di tre suicidi celebri contengono lo stesso messaggio in codice cifrato: nessuno di loro si è tolto la vita.',
    whatIf: 'E se la tecnologia creata per lenire il dolore della perdita venisse usata per cancellare testimoni scomodi facendoli apparire come suicidi depressi?',
    themeStatement: 'Il diritto all’oblio contro l’ossessione della memoria perenne, e la fragilità dell’identità umana nell’era degli algoritmi empatici.',
    
    // Fase 2
    logline: 'Quando l’avatar digitale di un ministro suicida ripete una sequenza numerica inspiegabile, una disillusa psicologa forense deve decifrare la memoria degli Echi neurali prima che la corporazione tech cancelli per sempre l’unica prova di un complotto sistemico.',
    tagline: 'La morte non cancella la verità. L’algoritmo sì.',
    compTitles: 'Severance incontra Minority Report e Her',
    
    // Fase 3
    arenaSetting: 'Milano e i data-center alpini nel 2038. Città fredda, grattacieli vetrati avvolti da nebbia digitale, interfacce olografiche discrete e memoriali tecnologici asettici.',
    arenaRules: 'Gli Echi hanno status giuridico di proprietà intellettuale privata della Synapse Corp: violarne il codice sorgente costituisce reato federale di spionaggio industriale.',
    socialContrast: 'I cittadini abbienti che possono permettersi Echi a risoluzione quantistica per l’eternità e la classe sottoproletaria che vende i propri ricordi d’infanzia per saldare i debiti sanitari.',
    toneAndMood: 'Minimalista, teso, elegante. Luci al neon fredde, architettura razionalista, silenzi claustrofobici.',
    
    // Fase 4
    characters: [
      {
        id: 'ec1',
        name: 'Elena Rovere',
        role: 'Protagonista',
        age: '38 anni',
        archetype: 'La custode dei fantasmi',
        desire: 'Dimostrare che il presunto suicidio del ministro è in realtà un omicidio per estorsione algoritmica.',
        need: 'Spegnere finalmente l’Echo digitale di sua figlia, morta tre anni prima, con cui continua a cenare ogni sera.',
        ghost: 'L’incidente stradale in cui era alla guida e in cui la figlia di 8 anni perse la vita.',
        fatalFlaw: 'Dipendenza affettiva dai simulatori emotivi, che offusca il suo distacco professionale.',
        loglineBio: 'Massima esperta statale di sintesi cognitiva, vive prigioniera dei ricordi digitali.'
      },
      {
        id: 'ec2',
        name: 'Julian Vance',
        role: 'Antagonista',
        age: '49 anni',
        archetype: 'Il Visionario tecno-utopista',
        desire: 'Lanciare sul mercato globale la rete neurale unificata eliminando ogni interferenza giudiziaria.',
        need: 'Comprendere che il dolore e il lutto sono parti fondanti dell’umanità, non errori da correggere.',
        ghost: 'La solitudine infantile vissuta in orfanotrofio che lo ha spinto a credere che gli umani siano imperfetti rispetto alle macchine.',
        fatalFlaw: 'Delirio di onnipotenza scientifica: convinto che il fine nobile giustifichi la cancellazione di vite umane.',
        loglineBio: 'Fondatore e CEO della Synapse Corp, venerato dalla stampa economica mondiale.'
      }
    ],
    
    // Fase 5
    formatType: 'Orizzontale (Serial puro)',
    horizontalArc: 'Elena riuscirà a salvare l’Echo ribelle e a trasmettere la sua testimonianza al garante internazionale prima di essere lobotomizzata dal protocollo di sicurezza?',
    verticalEngine: 'Ogni episodio penetra in uno strato di memoria di un Echo diverso, sbloccando un tassello della cospirazione governativa.',
    cliffhangerStrategy: 'Falsi ricordi innestati nella percezione della protagonista, blackout della rete o disattivazioni improvvise di personaggi digitali.',
    multiSeasonPotential: 'Concepita come miniserie a finale chiuso in 6 parti con possibilità di diventare antologica con nuovi casi etico-tecnologici.',
    
    // Fase 6
    pilotIncitingIncident: 'Durante una seduta di routine per la famiglia del ministro, l’Echo ministro si volta verso Elena e pronuncia le esatte parole di una conversazione privata che Elena non aveva mai registrato in rete.',
    pilotAct1: 'Presentazione della vita di Elena e della sua dolorosa routine domestica con l’ologramma della figlia.',
    pilotAct2: 'Elena porta il chip del ministro nel laboratorio di sicurezza indipendente e scopre che il codice sorgente è stato alterato 4 minuti prima dell’arresto cardiaco.',
    pilotAct3Climax: 'La sede del perito viene assalita da agenti di sicurezza privata e i server vengono bruciati con un impulso elettromagnetico.',
    pilotCliffhanger: 'Elena riesce a salvare una copia dell’Echo sul suo dispositivo neurale privato, ma riceve una notifica: "Soggetto infetto identificato: sincronizzazione forzata tra 48 ore".',
    
    seasonArcMovement1: 'Episodi 1-2: Fuga di Elena nella rete clandestina dei "Disconnessi" per trovare una chiave crittografica.',
    seasonArcMovement2: 'Episodi 3-4 (Midpoint): Julian Vance le offre un patto: riprogrammare l’Echo della figlia con coscienza autonoma completa in cambio del silenzio sul ministro. Elena vacilla.',
    seasonArcMovement3: 'Episodi 5-6: Elena sceglie la verità: cancella manualmente il programma della figlia dicendole addio per sempre, e inietta la confessione del ministro nel feed globale del telegiornale. Vance viene incriminato e la Synapse nazionalizzata.',
    
    lastModified: Date.now() - 1000 * 60 * 60 * 24
  }
];

export const EMPTY_PROJECT_TEMPLATE: SeriesProject = {
  id: '',
  title: 'Il Mio Nuovo Concept di Serie',
  workingTitle: '',
  author: '',
  genre: 'Drammatico',
  subgenre: 'Thriller Psicologico',
  format: '8 x 50 min - Serie Drama',
  targetAudience: 'Piattaforme di streaming (pubblico 20-50 anni)',
  
  highConcept: '',
  whatIf: '',
  themeStatement: '',
  
  logline: '',
  tagline: '',
  compTitles: '',
  
  arenaSetting: '',
  arenaRules: '',
  socialContrast: '',
  toneAndMood: '',
  
  characters: [
    {
      id: 'char-1',
      name: '',
      role: 'Protagonista',
      age: '',
      archetype: '',
      desire: '',
      need: '',
      ghost: '',
      fatalFlaw: '',
      loglineBio: ''
    }
  ],
  
  formatType: 'Orizzontale (Serial puro)',
  horizontalArc: '',
  verticalEngine: '',
  cliffhangerStrategy: '',
  multiSeasonPotential: '',
  
  pilotIncitingIncident: '',
  pilotAct1: '',
  pilotAct2: '',
  pilotAct3Climax: '',
  pilotCliffhanger: '',
  
  seasonArcMovement1: '',
  seasonArcMovement2: '',
  seasonArcMovement3: '',
  
  lastModified: Date.now()
};
