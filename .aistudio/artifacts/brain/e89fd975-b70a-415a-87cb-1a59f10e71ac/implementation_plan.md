# Character Builder: Mappa Want/Need, Arco di Trasformazione a 4 Stadi & Assistente AI

Implementazione della sezione interattiva avanzata **Character Builder** all'interno di Showrunner Studio per consentire la creazione e l'approfondimento psicologico e drammatico dei personaggi (Protagonista, Antagonista, Coprotagonisti, Foil), con mappa analitica Want/Need/Ghost, tracciamento dell'arco a 4 stadi e suggerimenti intelligenti generati via Gemini.

## Decisioni Chiave e Revisione Utente

> [!IMPORTANT]
> **Decisioni confermate dalle risposte dell'utente:**
> - **Visualizzazione ed Esperienza**: Schede personaggio espanse con mappa visiva integrata per *Want*, *Need*, *Ghost* e *Fatal Flaw*, affiancate dall'arco narrativo progressivo.
> - **Modello di Trasformazione**: Struttura drammaturgica a **4 stadi sequenziali**:
>   1. *Stadio 1 · Status Quo & Maschera*: Le abitudini di protezione e l'illusione morale di partenza.
>   2. *Stadio 2 · Innesco della Crisi & Bivio*: La scelta forzata e il primo errore dettato dal difetto tragico.
>   3. *Stadio 3 · Midpoint (Caduta / Rivelazione)*: Il punto di non ritorno in cui la ferita passata si riapre e il vecchio sé va in frantumi.
>   4. *Stadio 4 · Esito & Nuovo Sé*: L'approdo finale (Arco di redenzione positiva, corruzione tragica o sacrificio).
> - **Integrazione AI Gemini**: Assistente integrato *"Suggerisci Arco & Motivazioni con AI"* che analizza il concept e genera spunti psicologici e drammatici coerenti con l'arena della serie.

---

## 1. Visione del Modulo & Esperienza Utente

### Flusso di Interazione
1. **Navigazione & Accesso**:
   - Accessibile direttamente all'interno della **Fase 4 (I Personaggi)** del banco di scrittura e consultabile nel **Documento Pitch / Mini-Bibbia**.
   - Possibilità di selezionare e alternare rapidamente tra i personaggi del progetto (es. Protagonista, Antagonista, Coprotagonista, Foil).
2. **Mappa Analitica Want / Need / Ghost / Flaw**:
   - Riquadro interattivo ad alto impatto visivo che mette a confronto frontale ciò che il personaggio **crede di volere** (*Desire / Want*) e ciò di cui **ha realmente bisogno per salvarsi** (*Need*), alimentato dalla **ferita del passato** (*Ghost*).
3. **Timeline dell'Arco a 4 Stadi**:
   - Tracciamento grafico orizzontale a 4 step con badge di avanzamento:
     - *01. Status Quo*
     - *02. Crisi / Bivio*
     - *03. Midpoint*
     - *04. Risoluzione*
   - Ogni stadio include domande guida dello showrunner e campo testuale dedicato.
4. **Assistente AI Gemini per il Personaggio**:
   - Pulsante *"Gemini: Suggerisci Psicologia & Arco"*: invia al server il ruolo, l'arena e il concept della serie per ricevere una proposta coerente di Desiderio, Bisogno, Ferita, Difetto e i 4 stadi dell'arco, applicabili con un clic.

---

## 2. Architettura Dati & Aggiornamento Modello Project

### Estensione `CharacterItem` (`src/types/project.ts`)
```typescript
export interface CharacterArcStages {
  stage1StatusQuo: string;   // Mondo ordinario e maschera iniziale
  stage2Crisis: string;      // Primo bivio morale e reazione al catalizzatore
  stage3Midpoint: string;    // Crisi centrale, caduta o perdita irrevocabile
  stage4Resolution: string;  // Esito finale: cambiamento morale o discesa tragica
  arcType: 'Evoluzione Positiva' | 'Corruzione / Tragedia' | 'Arco Piatto / Catalizzatore';
}

export interface CharacterItem {
  id: string;
  name: string;
  role: 'Protagonista' | 'Antagonista' | 'Coprotagonista' | 'Mentore' | 'Foil / Specchio' | 'Altro';
  age: string;
  archetype: string;
  desire: string;       // Want: obiettivo conscio esterno
  need: string;         // Need: bisogno interiore etico/emotivo
  ghost: string;        // Trauma o ferita originaria pregresso
  fatalFlaw: string;    // Difetto fatale / cecità morale
  loglineBio: string;
  arc: CharacterArcStages; // Nuovo tracciamento strutturato a 4 stadi
}
```

---

## 3. Architettura di Sistema

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Showrunner Studio App                           │
│                                                                        │
│  ┌─────────────────────── Character Builder ─────────────────────────┐  │
│  │                                                                   │  │
│  │  ┌─── Scheda Personaggio ─────────┐ ┌── Assistente AI Gemini ──┐  │  │
│  │  │ Selettore: [Protagonista #1]   │ │ Genera Want/Need coerenti │  │  │
│  │  │ Dati: Nome, Ruolo, Età, Bio    │ │ Suggerisci 4 stadi arco   │  │  │
│  │  └────────────────────────────────┘ └──────────────────────────┘  │  │
│  │                                                                   │  │
│  │  ┌─── Mappa Want vs Need (Psicologia) ──────────────────────────┐  │  │
│  │  │ [Desiderio Conscio (Want)] ── vs ── [Bisogno Inconscio]     │  │  │
│  │  │ [Ferita Passata (Ghost)]   ── vs ── [Difetto Fatale]        │  │  │
│  │  └──────────────────────────────────────────────────────────────┘  │  │
│  │                                                                   │  │
│  │  ┌─── Arco a 4 Stadi (Timeline di Stagione) ───────────────────┐  │  │
│  │  │ 01. Status Quo  ──►  02. Crisi  ──►  03. Midpoint  ──►  04. │  │  │
│  │  └─────────────────────────────────────────────────────────────┘  │  │
│  │                                                                   │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                  │                                     │
│  ┌───────────────────────────────▼───────────────────────────────────┐  │
│  │       Project State (`localStorage` + Mini-Bibbia Export PDF)       │  │
│  └───────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Piano di Esecuzione delle Modifiche

1. **Modello Dati (`src/types/project.ts`)**:
   - Aggiungere `CharacterArcStages` a `CharacterItem`.
   - Aggiornare i progetti predefiniti in `src/data/sampleProjects.ts` con archi a 4 stadi precompilati (*Radici di Ferro* e *Echo Protocol*).
2. **Server-Side AI (`server.ts`)**:
   - Aggiungere l'endpoint `POST /api/ai/suggest-character-arc` alimentato da Gemini per elaborare Want/Need e i 4 stadi dell'arco a partire dal concept e dall'arena.
3. **Componente Interattivo `CharacterBuilder` (`src/components/CharacterBuilder.tsx`)**:
   - Mappa interattiva della psicologia del personaggio con schede visive ad alto contrasto.
   - Tracciamento dei 4 stadi dell'arco con indicatori di progresso e selettore di tipologia di arco.
   - Integrazione del generatore AI con anteprima e applicazione rapida.
4. **Integrazione nel Banco di Scrittura (`src/components/StepEditorPanel.tsx`)**:
   - Integrare il nuovo `CharacterBuilder` come modulo centrale della Fase 4.
5. **Aggiornamento Scheda Pitch Document (`src/components/PitchPreviewDocument.tsx`) & Esportazione**:
   - Mostrare l'Arco di Trasformazione nella sezione personaggi della Mini-Bibbia e nell'esportazione PDF/Markdown.
