import { useState } from "react";
import {
  TopLine,
  MortgageAmount,
  TermAndRates,
  MortgageTypes,
  CalculatorButton,
} from "./page";

export function Challenge({ className, title, children }) {
  return (
    <div className={`${className} bg-neutral-white text-neutral-slate-900`}>
      <h2 className="font-Figtree flex h-24 items-center justify-center bg-black text-center text-white">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
}
