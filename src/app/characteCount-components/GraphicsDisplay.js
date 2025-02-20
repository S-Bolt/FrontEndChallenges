"use client";
import { InfoBox } from "./InfoBox";
import { useSelector } from "react-redux";

export function GraphicsDisplay() {
  const { characterCount, wordCount, sentenceCount } = useSelector(
    (state) => state.characterCountStore,
  );

  return (
    <div className="m-4 flex flex-col gap-4 sm:flex-row">
      <InfoBox
        value={characterCount}
        label={"Total Characters"}
        imageSrc={"/character-count/pattern-character-count.svg"}
        altText={"pattern-character-count"}
        bgColor={"bg-primary"}
      />
      <InfoBox
        value={wordCount}
        label={"Word Count"}
        imageSrc={"/character-count/pattern-word-count.svg"}
        altText={"pattern-word-count"}
        bgColor={"bg-secondary"}
      />
      <InfoBox
        value={sentenceCount}
        label={"Total Sentences"}
        imageSrc={"/character-count/pattern-sentence-count.svg"}
        altText={"pattern-sentence-count"}
        bgColor={"bg-accent-orange-light"}
      />
    </div>
  );
}
