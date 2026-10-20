import { SeriesProject } from '../types/project';

export interface ConceptCritiqueResponse {
  overallScore: number;
  verdictHeadline: string;
  strengths: string[];
  vulnerabilities: string[];
  loglineCritique: {
    evaluation: string;
    improvedLoglineA: string;
    improvedLoglineB: string;
  };
  targetAudienceAdvice: {
    suggestedPlatforms: string[];
    demographicProfile: string;
    marketPositioning: string;
  };
  writersRoomPrompts: string[];
}

export interface GeneratedSynopsisResponse {
  pilotIncitingIncident: string;
  pilotAct1: string;
  pilotAct2: string;
  pilotAct3Climax: string;
  pilotCliffhanger: string;
  seasonArcMovement1: string;
  seasonArcMovement2: string;
  seasonArcMovement3: string;
}

export async function requestConceptCritique(project: SeriesProject): Promise<ConceptCritiqueResponse> {
  const response = await fetch('/api/ai/critique-concept', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: project.title,
      genre: project.genre,
      format: project.format,
      targetAudience: project.targetAudience,
      highConcept: project.highConcept,
      whatIf: project.whatIf,
      themeStatement: project.themeStatement,
      logline: project.logline,
      tagline: project.tagline,
      compTitles: project.compTitles,
      arenaSetting: project.arenaSetting,
      characters: project.characters.map((c) => ({
        name: c.name,
        role: c.role,
        desire: c.desire,
        need: c.need,
        fatalFlaw: c.fatalFlaw,
      })),
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Errore HTTP ${response.status}`);
  }

  const result = await response.json();
  if (!result.success) {
    throw new Error(result.error || 'Errore nella generazione del feedback');
  }

  return result.data as ConceptCritiqueResponse;
}

export async function requestGenerateSynopsis(project: SeriesProject): Promise<GeneratedSynopsisResponse> {
  const response = await fetch('/api/ai/generate-synopsis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: project.title,
      genre: project.genre,
      format: project.format,
      highConcept: project.highConcept,
      whatIf: project.whatIf,
      themeStatement: project.themeStatement,
      logline: project.logline,
      arenaSetting: project.arenaSetting,
      arenaRules: project.arenaRules,
      formatType: project.formatType,
      horizontalArc: project.horizontalArc,
      verticalEngine: project.verticalEngine,
      characters: project.characters.map((c) => ({
        name: c.name,
        role: c.role,
        desire: c.desire,
        need: c.need,
        ghost: c.ghost,
        fatalFlaw: c.fatalFlaw,
      })),
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Errore HTTP ${response.status}`);
  }

  const result = await response.json();
  if (!result.success) {
    throw new Error(result.error || 'Errore nella generazione della sinossi');
  }

  return result.data as GeneratedSynopsisResponse;
}
