import React from 'react';
import { Film, Download, FolderOpen, BookOpen, PenTool, LayoutList, Briefcase } from 'lucide-react';

interface HeaderProps {
  activeTab: 'guide' | 'editor' | 'casestudies' | 'glossary' | 'preview';
  setActiveTab: (tab: 'guide' | 'editor' | 'casestudies' | 'glossary' | 'preview') => void;
  onOpenProjectManager: () => void;
  onOpenExportModal: () => void;
  currentProjectTitle: string;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenProjectManager,
  onOpenExportModal,
  currentProjectTitle,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0B0F17]/90 backdrop-blur-md border-b border-white/10 px-4 md:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single element, no pills or tags) */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Film className="w-4 h-4" />
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight text-white font-serif-title whitespace-nowrap">
            Showrunner Studio
          </span>
        </div>

        {/* Zone 2: Clean 5 Navigation Links (Single-line, whitespace-nowrap) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => setActiveTab('guide')}
            className={`flex items-center gap-2 py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 cursor-pointer ${
              activeTab === 'guide'
                ? 'text-amber-400 border-amber-400 font-semibold'
                : 'text-slate-400 border-transparent hover:text-white hover:border-slate-600'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Percorso Guidato</span>
          </button>

          <button
            onClick={() => setActiveTab('editor')}
            className={`flex items-center gap-2 py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 cursor-pointer ${
              activeTab === 'editor'
                ? 'text-amber-400 border-amber-400 font-semibold'
                : 'text-slate-400 border-transparent hover:text-white hover:border-slate-600'
            }`}
          >
            <PenTool className="w-4 h-4" />
            <span>Banco di Scrittura</span>
          </button>

          <button
            onClick={() => setActiveTab('casestudies')}
            className={`flex items-center gap-2 py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 cursor-pointer ${
              activeTab === 'casestudies'
                ? 'text-amber-400 border-amber-400 font-semibold'
                : 'text-slate-400 border-transparent hover:text-white hover:border-slate-600'
            }`}
          >
            <LayoutList className="w-4 h-4" />
            <span>Casi Studio</span>
          </button>

          <button
            onClick={() => setActiveTab('glossary')}
            className={`flex items-center gap-2 py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 cursor-pointer ${
              activeTab === 'glossary'
                ? 'text-amber-400 border-amber-400 font-semibold'
                : 'text-slate-400 border-transparent hover:text-white hover:border-slate-600'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Glossario</span>
          </button>

          <button
            onClick={onOpenProjectManager}
            className="flex items-center gap-2 py-1 text-slate-400 border-b-2 border-transparent hover:text-white hover:border-slate-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            title="Gestisci o cambia progetto"
          >
            <FolderOpen className="w-4 h-4" />
            <span className="max-w-[140px] truncate">{currentProjectTitle || 'Progetti'}</span>
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action (Single button) */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Mobile switcher button */}
          <button
            onClick={onOpenProjectManager}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white cursor-pointer"
            aria-label="Gestione progetti"
          >
            <FolderOpen className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenExportModal}
            className="flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm hover:shadow-amber-500/20 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Esporta Pitch PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};
