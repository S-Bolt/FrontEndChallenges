"use client";

export function LetterDensityDisplay() {
  const percentage = 16;
  const scaledPercentage = percentage * 3;
  return (
    <div className="m-4">
      <div className="text-dm-san mb-4 text-lg text-neutral-white">
        Letter Density
      </div>
      <div className="mb-2 flex items-center justify-between space-x-4">
        <div className="text-dm-san text-sm text-neutral-slate-100">E</div>
        <div className="h-3 w-full rounded-lg bg-neutral-slate-700">
          <div
            style={{ width: `${scaledPercentage}%` }}
            className="h-3 rounded-lg bg-primary"
          ></div>
        </div>
        <div className="text-dm-san text-sm text-neutral-slate-100">
          40(16.06%)
        </div>
      </div>
      <div className="text-dm-san my-4 text-neutral-white">See more 🔻</div>
    </div>
  );
}
