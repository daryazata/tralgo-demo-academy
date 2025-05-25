import type { Lection, Phase } from "./data/data";

export function getNextAllowedLectionIndex(content: Lection[]): number {
  return content.findIndex((l) => !l.done);
}

export function getDonePhase(phase: Phase) {
  return phase.content?.find((item) => item.done);
}

export function getNextLectionToPlayFromAll(
  phases: Phase[]
): Lection | undefined {
  for (const phase of phases) {
    const lection = phase.content?.find((l) => !l.done);
    if (lection) return lection;
  }
}

type FlatLection = {
  phase: Phase;
  lection: Lection;
};

function getFlatLections(phases: Phase[]): FlatLection[] {
  const list: FlatLection[] = [];

  for (const phase of phases) {
    if (!phase.content) continue;
    for (const lection of phase.content) {
      list.push({ phase, lection });
    }
  }

  return list;
}

export function getNextLectionStatus(
  phases: Phase[],
  selectedLection: Lection
): { next?: Lection; done?: boolean } {
  const flat = getFlatLections(phases);

  const index = flat.findIndex((f) => f.lection.id === selectedLection.id);
  const next = flat[index + 1];

  if (!next) return { next: undefined, done: undefined };

  return {
    next: next.lection,
    done: next.lection.done,
  };
}
