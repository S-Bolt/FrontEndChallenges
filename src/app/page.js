"use client";

import { Challenge } from "./Challenge";
import { QRCode } from "./QRCode";
import Calculator from "./mortgage-calculator-components/Calculator";
import { CharacterCount } from "./characteCount-components/CharacterCount";

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
