import type { Lection, Phase } from "../data/data";

interface Props {
  item: Lection;
  phase: Phase;
  isClickable: boolean;
  selectedLection: Lection;
  setSelectedLection: React.Dispatch<React.SetStateAction<Lection | undefined>>;
}

export function LectionItem(props: Props) {
  const { item, isClickable, phase, selectedLection, setSelectedLection } =
    props;
  return (
    <div
      onClick={() => {
        if (!isClickable) return;
        setSelectedLection(item);
      }}
      className={`h-14  dark:border-slate-400 ${
        isClickable
          ? ` hover:bg-slate-50 dark:hover:bg-gray-700 border-slate-400`
          : `text-gray-400 dark:text-white-opp border-slate-200`
      } shadow-md shadow-gray-500/6  border-1 rounded-lg p-4 pl-6 flex ${
        isClickable && `cursor-pointer`
      }  ${selectedLection.id == item.id && `bg-slate-100 dark:bg-gray-600`}`}
    >
      <span>{`${phase.phaseNr}.${item.lectionNr} ${item.title}`}</span>
    </div>
  );
}
