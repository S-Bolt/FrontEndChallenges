import { useState } from "react";

export function TopLine({ onClearForm }) {
  return (
    <div className=" flex-col  md:flex md:flex-row md:justify-between md:items-center mb-4">
      <h2 className="text-2xl font-bold text-neutral-slate-900 font-family-Jakarta">
        Mortgage Calculator
      </h2>
      <button
        onClick={onClearForm}
        className="underline text-neutral-slate-500"
      >
        Clear All
      </button>
    </div>
  );
}
