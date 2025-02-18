"use client";

import { Challenge } from "./Challenge";
import { QRCode } from "./QRCode";
import Calculator from "./mortgage-calculator-components/Calculator";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Challenge title="Challenge 1" className="theme-project1">
        <QRCode />
      </Challenge>
      <Challenge title="Challenge 2" className="theme-project2">
        <Calculator />
      </Challenge>
      <Challenge
        title="🚧Challenge 3🚧 Under Construction🚧"
        className="theme-project3"
      >
        <CharacterCount />
      </Challenge>
    </div>
  );
}

function CharacterCount() {
  return (
    <div className="theme-project3 h-[42rem] bg-neutral-slate-900">
      {/* Container for UI */}
      <div className="flex flex-col bg-neutral-slate-900">
        <Header />
        <Title />
        <Inputs />
        {/* Graphics Display */}
        {/* Letter Density Display*/}
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="m-4 flex items-center justify-between">
      <div className="text-dm-sans flex text-neutral-white">
        <Image
          src="/character-count/logo-dark-theme.svg"
          alt="sun"
          width={150}
          height={20}
          className=""
        />
      </div>
      <button>
        <div className="items-center rounded-sm bg-neutral-slate-700 p-1">
          <Image
            src="/character-count/icon-sun.svg"
            alt="sun"
            width={20}
            height={20}
            className="bg-neutral-slate-700"
          />
        </div>
      </button>
    </div>
  );
}

function Title() {
  return (
    <div className="text-dm-sans mx-4 my-8 text-center text-3xl font-bold text-neutral-slate-100">
      Analyze your text in real-time.
    </div>
  );
}

function Inputs() {
  return (
    <>
      <div className="mx-4">
        <textarea
          placeholder="Type your text here..."
          className="h-48 w-full rounded-lg bg-neutral-slate-700 p-4 text-sm font-light text-neutral-slate-100"
        />
      </div>

      {/* Conditional render for character lenght exceeding limits */}
      <div className="text-accent-orange-light mx-4 flex text-xs">
        <Image
          src="/character-count/icon-info.svg"
          alt="sun"
          width={10}
          height={10}
          className="mr-2 bg-neutral-slate-900"
        />
        Limit reached! Your text exceeded 300 characters.
      </div>

      <div className="m-4 flex flex-col">
        <div className="mb-2 flex items-center">
          <input
            type="checkbox"
            id="spacesCheckbox"
            // checked={}
            // onChange={handleCheckboxChange}
            className="form-checkbox mr-2 h-4 w-4 bg-neutral-slate-900 accent-[var(--primary)]"
          />
          <label
            htmlFor="spacesCheckbox"
            className="text-sm font-light text-neutral-slate-100"
          >
            Exclude Spaces
          </label>
        </div>

        <div className="mb-2 flex items-center">
          <input
            type="checkbox"
            id="characterLimitsCheckbox"
            // checked={}
            // onChange={handleCheckboxChange}
            className="form-checkbox mr-2 h-4 w-4 accent-[var(--primary)]"
          />
          <label
            htmlFor="characterLimitsCheckbox"
            className="text-sm font-light text-neutral-slate-100"
          >
            Set Character Limits
          </label>
        </div>

        <div className="text-sm font-light text-neutral-slate-100">
          Approx. reading time 1m
        </div>
      </div>
    </>
  );
}
