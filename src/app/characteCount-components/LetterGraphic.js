"use client";
export function LetterGraphic({ letter, count, percentage }) {
  return (
    <div key={letter} className="flex items-center justify-between">
      <div className="flex w-8 justify-start">
        <div className="text-dm-san mr-4 text-sm text-neutral-slate-900 dark:text-neutral-slate-100">
          {letter}
        </div>
      </div>
      <div className="bg-neutral-slate-200 h-3 w-full rounded-lg dark:bg-neutral-slate-700">
        <div
          style={{ width: `${percentage}%` }}
          className="h-3 rounded-lg bg-primary"
        ></div>
      </div>
      <div className="flex w-28 justify-end">
        <div className="text-dm-san text-neutral-slate-900 first-letter:text-sm dark:text-neutral-slate-100">
          {count}({percentage}%)
        </div>
      </div>
    </div>
  );
}
