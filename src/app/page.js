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
        title="🚧 Challenge 3 🚧 Under Construction 🚧"
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
        <GraphicsDisplay />
        <LetterDensityDisplay />
      </div>
    </div>
  );
}

function LetterDensityDisplay() {
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

function GraphicsDisplay() {
  return (
    <div className="m-4 flex flex-col space-y-4">
      <InfoBox
        value={239}
        label={"Total Characters"}
        imageSrc={"/character-count/pattern-character-count.svg"}
        altText={"pattern-character-count"}
        bgColor={"bg-primary"}
      />
      <InfoBox
        value={50}
        label={"Word Count"}
        imageSrc={"/character-count/pattern-word-count.svg"}
        altText={"pattern-word-count"}
        bgColor={"bg-secondary"}
      />
      <InfoBox
        value={39}
        label={"Total Characters"}
        imageSrc={"/character-count/pattern-sentence-count.svg"}
        altText={"pattern-sentence-count"}
        bgColor={"bg-accent-orange-light"}
      />
    </div>
  );
}

function InfoBox({ value, label, imageSrc, altText, bgColor }) {
  return (
    <div className="flex justify-end">
      <div
        className={`flex flex-1 flex-col justify-center rounded-l-lg ${bgColor} py-6`}
      >
        <div className="text-dm-sans mx-4 mb-1 text-2xl font-bold">{value}</div>
        <div className="text-dm-sans mx-4 text-sm">{label}</div>
      </div>
      <div className="">
        <Image
          src={imageSrc}
          alt={altText}
          width={150}
          height={150}
          className={`rounded-r-lg ${bgColor}`}
        />
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
      <div className="mx-4 flex text-xs text-accent-orange-light">
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
