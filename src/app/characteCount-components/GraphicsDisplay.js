"use client";
import { InfoBox } from "./InfoBox";

export function GraphicsDisplay() {
  return (
    <div className="m-4 flex flex-col gap-4 sm:flex-row">
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
        label={"Total Sentences"}
        imageSrc={"/character-count/pattern-sentence-count.svg"}
        altText={"pattern-sentence-count"}
        bgColor={"bg-accent-orange-light"}
      />
    </div>
  );
}
