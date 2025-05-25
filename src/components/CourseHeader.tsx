export function CourseHeader() {
  return (
    <div className="text-lg p-2 dark:border-slate-400 border-slate-400 border-2 dark:border-1 rounded-xl flex flex-col items-center justify-center font-semibold bg-slate-100 dark:bg-slate-600">
      <span>Academy: Intraday</span>
      <div>
        {/* hardcoded val */}
        <progress className="progress w-56" value="30" max="100"></progress>
      </div>
    </div>
  );
}
