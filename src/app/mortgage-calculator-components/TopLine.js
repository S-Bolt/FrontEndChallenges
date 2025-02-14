import { useState } from "react";

export function TopLine({ onClearForm }) {
  return (
    <div className="mb-1 md:flex md:flex-row md:items-center md:justify-between lg:mb-2">
      <h2 className="font-family-Jakarta text-xl font-bold text-neutral-slate-900 md:text-2xl lg:mb-2">
        Mortgage Calculator
      </h2>
      <button
        onClick={onClearForm}
        className="text-neutral-slate-500 underline"
      >
        Clear All
      </button>
    </div>
  );
}
