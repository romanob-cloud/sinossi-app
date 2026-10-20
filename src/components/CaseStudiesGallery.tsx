import React, { useState } from 'react';
import { Tv, Sparkles, Feather, MapPin, Users, Cpu, FileText, CheckCircle2, BookOpen } from 'lucide-react';

interface CaseStudyItem {
  id: string;
  series: string;
  creator: string;
  network: string;
  genre: string;
  highConcept: string;
  logline: string;
  arena: string;
  characterDynamic: string;
  seriesEngine: string;
  pilotBreakdown: string;
  keyTakeaway: string;
}

const EXTENDED_CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'breaking-bad',
    series: 'Breaking Bad',
    creator: 'Vince Gilligan',
    network: 'AMC',
    genre: 'Crime Drama / Tragedia Moderna',
    highConcept: 'Un professore di chimica del liceo malato terminale decide di cucinare metanfetamina con un suo ex studente sbandato per lasciare un patrimonio alla famiglia, risvegliando il suo ego criminale (Heisenberg).',
    logline: 'Quando a un mite insegnante di chimica viene diagnosticato un cancro incurabile, si allea con un ex spacciatore per costruire un impero della droga nel New Mexico, prima che la malattia o la polizia federale guidata da suo cognato lo fermino.',
    arena: 'Albuquerque, New Mexico: deserto abbagliante, sobborghi piccolo-borghesi, laboratori improvvisati in camper e ristoranti fast-food come facciate di cartelli criminali.',
    characterDynamic: 'Walter White (Desire: fare soldi per la famiglia; Need: sentirsi vivo e potente; Flaw: orgoglio smisurato; Ghost: svendita della Gray Matter). Jesse Pinkman funge da coscienza morale speculare.',
    seriesEngine: 'Motore basato sul dilemma morale e sulle conseguenze a catena: ogni soluzione criminale genera un problema dieci volte più grande (il cadavere nella vasca, la vendita ai distributori locali, Tuco, Gus Fring).',
    pilotBreakdown: 'Incipit in medias res (pantaloni che volano nel deserto e camper a folle corsa), flashback sulla diagnosi del cancro, primo cuoco con Jesse, scontro coi criminali e salvataggio con fosfuro d’idrogeno.',
    keyTakeaway: "La serie TV come arco trasformativo estremo: 'Mr. Chips che diventa Scarface'."
  },
  {
    id: 'succession',
    series: 'Succession',
    creator: 'Jesse Armstrong',
    network: 'HBO',
    genre: 'Satira Corporativa / Dramma Shakespeariano',
    highConcept: 'L’anziano patriarca di un colosso dei media globale minaccia di non cedere il comando, scatenando una guerra cannibale tra i suoi quattro figli emotivamente mutilati che bramano la sua approvazione.',
    logline: 'Quando il magnate di un conglomerato mediatico viene colpito da un ictus ma rifiuta di nominare un erede, i suoi eredi disfunzionali complottano per scalare il consiglio d’amministrazione distruggendo i propri legami famigliari.',
    arena: 'Manhattan, elicotteri privati, ville negli Hamptons e yacht extralusso: un mondo dorato e asettico dove le relazioni umane sono solo transazioni commerciali.',
    characterDynamic: 'Logan Roy (il tiranno inavvicinabile) e i tre pretendenti: Kendall (il figlio prediletto ma fragile), Shiv (l’ambiziosa cinica che finge superiorità morale) e Roman (il provocatore masochista).',
    seriesEngine: 'Motore circolare della tragedia: tentativi di scalata ostile, voti di sfiducia, scandali legali e l’illusione continua che Logan abdichi.',
    pilotBreakdown: 'Logan compie 80 anni; Kendall è pronto a firmare l’acquisizione di una media company digitale; Logan ritratta all’ultimo momento e cambia lo statuto di famiglia; Logan ha un’emorragia cerebrale sull’elicottero.',
    keyTakeaway: "I personaggi non cambiano mai: la ripetizione ossessiva del trauma genera comedy e tragedia altissima."
  },
  {
    id: 'gomorra',
    series: 'Gomorra - La Serie',
    creator: 'Roberto Saviano, Stefano Sollima',
    network: 'Sky Studios',
    genre: 'Gangster Drama Realistico',
    highConcept: 'Il racconto della camorra contemporanea narrato esclusivamente dall’interno dei clan criminali delle Vele di Scampia, senza poliziotti buoni o redenzioni morali.',
    logline: 'Quando il boss del clan Savastano finisce in carcere, il suo fedele luogotenente Ciro Di Marzio istruisce l’immaturo erede Genny, tramando nell’ombra per conquistare il controllo delle piazze di spaccio di Napoli Nord.',
    arena: 'Le Vele di Scampia, Secondigliano e la periferia partenopea: labirinti di cemento armato, ballatoi claustrofobici e bunker blindati con arredamento barocco kitsch.',
    characterDynamic: 'Ciro "L’Immortale" (la lucidità calcolatrice senza scrupoli) e Genny Savastano (il rampollo viziato costretto a trasformarsi in un mostro spietato in Honduras).',
    seriesEngine: 'Guerra per bande e piazze di spaccio: il motore è la sfiducia endemica e la cannibalizzazione progressiva di alleati e padrini.',
    pilotBreakdown: 'Ciro dà fuoco alla casa della madre del boss rivale Conte; Don Pietro ordina una rappresaglia; sparatoria in un bar; Don Pietro testa la lealtà di Ciro facendogli bere la sua urina.',
    keyTakeaway: "Punto di vista radicale: eliminare il controcanto delle forze dell’ordine per immergere lo spettatore nel codice criminale."
  },
  {
    id: 'the-bear',
    series: 'The Bear',
    creator: 'Christopher Storer',
    network: 'FX / Hulu',
    genre: 'Dramedy / Workplace Drama Frenetico',
    highConcept: 'Uno chef prodigio dei ristoranti stellati mondiali eredita la disastrata paninoteca di manzo di Chicago del fratello suicida, lottando contro il debito e il lutto.',
    logline: 'Quando il fratello maggiore si toglie la vita lasciandogli una tavola calda piena di debiti, un premiato chef dell’alta cucina torna a Chicago per rimettere in sesto il locale, affrontando una brigata ribelle e la propria ansia cronica.',
    arena: 'La cucina stretta e bollente di The Beef: piani in acciaio inox unti, pentole a pressione, gridi di "Yes, Chef!", orologi che ticchettano e il traffico di Chicago fuori dalla porta.',
    characterDynamic: 'Carmy Berzatto (talento puro distrutto da ansia e perfezionismo) e Richie (il migliore amico del fratello defunto, ancorato alla tradizione per non ammettere il proprio fallimento).',
    seriesEngine: 'Il servizio del pranzo e della cena come campo di battaglia quotidiano: ogni giorno una crisi pratica (un forno rotto, la carne avariata, l’ispettore sanitario) che svela le crepe emotive della squadra.',
    pilotBreakdown: 'Carmy si sveglia su un ponte con un orso in gabbia; lotta per vendere i suoi jeans vintage per pagare i fornitori di carne; scontro feroce con Richie; introduce il sistema della brigata alla francese tra lo scetticismo generale.',
    keyTakeaway: "Il ritmo sensoriale e il montaggio sonoro trasformano un lavoro ordinario in un thriller ad altissima tensione emotiva."
  }
];

export const CaseStudiesGallery: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('breaking-bad');

  const selectedStudy = EXTENDED_CASE_STUDIES.find((c) => c.id === activeId) || EXTENDED_CASE_STUDIES[0];

  return (
    <div className="space-y-6 max-w-6xl mx-auto text-slate-100">
      {/* Header */}
      <div className="border-b border-white/10 pb-5">
        <div className="flex items-center gap-2 text-xs text-amber-400 font-medium mb-1">
          <Tv className="w-4 h-4" />
          <span>Analisi Comparata</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">Masterclass delle Grandi Serie TV</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-title tracking-tight text-white">
          Anatomia delle Serie Cult
        </h2>
        <p className="text-sm text-slate-300 mt-1.5 leading-relaxed max-w-3xl">
          Studia come gli showrunner più celebrati hanno articolato le 6 tappe fondamentali: dall'accensione dell'High Concept alla struttura del Pilot e al motore seriale.
        </p>
      </div>

      {/* Series Selector Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {EXTENDED_CASE_STUDIES.map((study) => (
          <button
            key={study.id}
            onClick={() => setActiveId(study.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              activeId === study.id
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-[#121929] border border-white/5 text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Tv className="w-4 h-4" />
            <span>{study.series}</span>
          </button>
        ))}
      </div>

      {/* Detailed Case View */}
      <div className="bg-[#0F1523] border border-white/10 rounded-2xl p-6 md:p-8 space-y-8 shadow-2xl">
        {/* Title & Network */}
        <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-baseline justify-between gap-3">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-2xl md:text-3xl font-bold font-serif-title text-white">
                {selectedStudy.series}
              </h3>
              <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded">
                {selectedStudy.network}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Ideata da: <strong className="text-slate-200">{selectedStudy.creator}</strong> · Genere: <strong className="text-slate-200">{selectedStudy.genre}</strong>
            </p>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/20 px-3.5 py-2 rounded-xl text-xs text-amber-300 max-w-sm">
            <strong className="block text-amber-400 mb-0.5">Lezione Showrunner:</strong>
            {selectedStudy.keyTakeaway}
          </div>
        </div>

        {/* 6 Step Decomposition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* 1. High Concept */}
          <div className="bg-[#141C2E] rounded-xl p-5 border border-white/5 space-y-2">
            <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>01. Il Nucleo & High Concept</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
              {selectedStudy.highConcept}
            </p>
          </div>

          {/* 2. Logline */}
          <div className="bg-[#141C2E] rounded-xl p-5 border border-white/5 space-y-2">
            <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <Feather className="w-3.5 h-3.5" />
              <span>02. Logline Ufficiale</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-200 italic font-serif-title leading-relaxed">
              "{selectedStudy.logline}"
            </p>
          </div>

          {/* 3. Arena */}
          <div className="bg-[#141C2E] rounded-xl p-5 border border-white/5 space-y-2">
            <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>03. L'Arena & Barriere del Mondo</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
              {selectedStudy.arena}
            </p>
          </div>

          {/* 4. Personaggi */}
          <div className="bg-[#141C2E] rounded-xl p-5 border border-white/5 space-y-2">
            <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <Users className="w-3.5 h-3.5" />
              <span>04. Personaggi & Motivi Psico-Drammatici</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
              {selectedStudy.characterDynamic}
            </p>
          </div>

          {/* 5. Motore Seriale */}
          <div className="bg-[#141C2E] rounded-xl p-5 border border-white/5 space-y-2">
            <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>05. Il Motore Seriale (Series Engine)</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
              {selectedStudy.seriesEngine}
            </p>
          </div>

          {/* 6. Pilot Breakdown */}
          <div className="bg-[#141C2E] rounded-xl p-5 border border-white/5 space-y-2">
            <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-3.5 h-3.5" />
              <span>06. Anatomia del Pilot (Episodio 1)</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
              {selectedStudy.pilotBreakdown}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
