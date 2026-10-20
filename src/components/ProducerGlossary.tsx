import React, { useState, useMemo } from 'react';
import { GLOSSARY_TERMS, GlossaryTerm } from '../data/glossaryData';
import { Search, BookOpen, Briefcase, Film, Copy, Check, ArrowRight, Tag, Lightbulb } from 'lucide-react';

const CATEGORIES = [
  'Tutti',
  'Sviluppo & Ruoli',
  'Documenti di Mercato',
  'Drammaturgia & Struttura',
  'Personaggi & Conflitto',
  'Formato & Motore',
] as const;

export const ProducerGlossary: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tutti');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filtered terms
  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'Tutti' || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.term.toLowerCase().includes(q) ||
        (item.originalTerm && item.originalTerm.toLowerCase().includes(q)) ||
        item.definition.toLowerCase().includes(q) ||
        item.producerPerspective.toLowerCase().includes(q) ||
        item.example.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleCopy = (term: GlossaryTerm) => {
    const text = `${term.term} (${term.category})\nDefinizione: ${term.definition}\nPunto di vista del Produttore: ${term.producerPerspective}\nEsempio: ${term.example}`;
    navigator.clipboard.writeText(text);
    setCopiedId(term.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto text-slate-100">
      {/* Header section */}
      <div className="border-b border-white/10 pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
          <Briefcase className="w-4 h-4 text-amber-400" />
          <span>Lessico dell'Industria Audiovisiva</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">Guida per Scrittori Emergenti</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-title tracking-tight text-white">
          Glossario del Produttore
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          I termini tecnici chiave della serialità televisiva spiegati dal punto di vista di broadcaster, showrunner e investitori. Comprendere questo linguaggio è il primo passo per vendere con successo un progetto.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="space-y-4">
        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cerca un termine (es. Showrunner, Bible, Pilot, Inciting Incident, Arena, Midpoint)..."
            className="w-full bg-[#121929] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-white/5 cursor-pointer"
            >
              Cancella
            </button>
          )}
        </div>

        {/* Category Filter Buttons (Functional Segmented Buttons per constitution) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'bg-[#121929] border border-white/5 text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & unboxed metadata */}
      <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>Trovati {filteredTerms.length} termini di settore</span>
        {selectedCategory !== 'Tutti' && (
          <span>Filtro attivo: {selectedCategory}</span>
        )}
      </div>

      {/* Terms Grid */}
      {filteredTerms.length === 0 ? (
        <div className="py-16 text-center space-y-3 bg-[#121929]/40 border border-white/5 rounded-2xl p-6">
          <BookOpen className="w-8 h-8 text-slate-600 mx-auto" />
          <p className="text-sm font-semibold text-white">Nessun termine corrispondente a "{searchQuery}"</p>
          <p className="text-xs text-slate-400">Prova a cercare termini come "Showrunner", "Pilot", "Logline" o seleziona la categoria "Tutti".</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('Tutti');
            }}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer"
          >
            Reimposta Filtri
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredTerms.map((term) => (
            <div
              key={term.id}
              className="bg-[#0F1523] border border-white/10 rounded-2xl p-5 md:p-6 space-y-4 hover:border-amber-400/30 transition-all flex flex-col justify-between shadow-lg"
            >
              <div className="space-y-3">
                {/* Term title and unboxed category */}
                <div className="border-b border-white/5 pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold font-serif-title text-white tracking-tight">
                        {term.term}
                      </h3>
                      {term.originalTerm && (
                        <p className="text-[11px] font-mono text-slate-500 mt-0.5">
                          {term.originalTerm}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => handleCopy(term)}
                      className="text-slate-500 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer shrink-0"
                      title="Copia definizione completa"
                    >
                      {copiedId === term.id ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Clean unboxed metadata with separators */}
                  <div className="flex items-center gap-2 text-xs text-amber-400/90 font-mono mt-2">
                    <span>{term.category}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-400">Termine Ufficiale</span>
                  </div>
                </div>

                {/* Definition */}
                <div className="space-y-1.5">
                  <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-normal">
                    {term.definition}
                  </p>
                </div>

                {/* Producer's Insight Box */}
                <div className="bg-[#141C2E] border border-amber-500/15 rounded-xl p-3.5 space-y-1 text-xs">
                  <div className="flex items-center gap-1.5 text-amber-400 font-semibold uppercase tracking-wider text-[11px]">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Perché conta per il Produttore</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {term.producerPerspective}
                  </p>
                </div>

                {/* Real Example */}
                {term.example && (
                  <div className="text-xs text-slate-400 pt-1 flex items-start gap-1.5">
                    <span className="font-semibold text-slate-300 shrink-0">Esempio:</span>
                    <span className="italic text-slate-300">{term.example}</span>
                  </div>
                )}
              </div>

              {/* Related terms */}
              {term.relatedTerms && term.relatedTerms.length > 0 && (
                <div className="pt-3 border-t border-white/5 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                  <span className="text-slate-400">Vedi anche:</span>
                  {term.relatedTerms.map((rel, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSearchQuery(rel)}
                      className="text-amber-400 hover:text-amber-300 hover:underline cursor-pointer"
                    >
                      {rel}{idx < term.relatedTerms.length - 1 ? ',' : ''}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
