import type { Lection, Phase } from "../data/data";
import { getNextAllowedLectionIndex } from "../utils";
import { LectionItem } from "./LectionItem";

interface Props {
  phase: Phase;
  selectedLection: Lection;
  setSelectedLection: React.Dispatch<React.SetStateAction<Lection | undefined>>;
}

export function PhaseItem(props: Props) {
  const { phase, selectedLection, setSelectedLection } = props;
  return (
    <div className=" collapse collapse-arrow border-slate-400 shadow-md shadow-gray-500/8  dark:bg-base-100 dark:border-slate-400 border ">
      {phase.content && (
        // hardcoded
        <input type="checkbox" defaultChecked={phase.phaseNr == 4} />
      )}
      <div
        className={`collapse-title font-semibold flex items-center ${
          phase.phaseNr > 4 && `dark:text-white-opp text-gray-400 ` // hardcoded
        }`}
      >
        <span>{`Phase ${phase.phaseNr}:`}</span>
        <span className="ml-3">{phase.title}</span>
      </div>

      <div className="collapse-content text-sm">
        {phase.content?.map((item, index) => {
          const nextAllowedIndex = getNextAllowedLectionIndex(phase.content!);
          const isClickable = item.done || index === nextAllowedIndex;

          return (
            <LectionItem
              isClickable={isClickable}
              item={item}
              phase={phase}
              selectedLection={selectedLection}
              setSelectedLection={setSelectedLection}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
