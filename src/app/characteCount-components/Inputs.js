"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  setText,
  toggleCharacterLimitEnabled,
  toggleExcludeSpaces,
  setCharacterLimit,
} from "./CharacterCountSlice";

export function Inputs() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.characterCountStore.text);

  const characterLimit = useSelector(
    (state) => state.characterCountStore.characterLimit,
  );

  const isCharacterLimitEnabled = useSelector(
    (state) => state.characterCountStore.isCharacterLimitEnabled,
  );
  const isExcludeSpacesEnabled = useSelector(
    (state) => state.characterCountStore.isExcludeSpacesEnabled,
  );
  const { characterCount, wordCount } = useSelector(
    (state) => state.characterCountStore,
  );

  const limitExceeded =
    isCharacterLimitEnabled && characterCount >= characterLimit;

  const readingTime = () => {
    const wpm = 200;
    return wordCount < wpm ? "< 1m" : `${Math.ceil(wordCount / wpm)}m`;
  };

  const handleCharacterLimit = (e) => {
    dispatch(setCharacterLimit(Number(e.target.value)));
  };

  const handleChange = (e) => {
    dispatch(setText(e.target.value));
  };

  const handleCharacterLimitEnable = () => {
    dispatch(toggleCharacterLimitEnabled());
  };

  const handleExcludeSpacesEnable = () => {
    dispatch(toggleExcludeSpaces());
    dispatch(setText(text));
  };

  return (
    <>
      <div className="mx-4">
        <textarea
          maxLength={
            isCharacterLimitEnabled && characterCount >= characterLimit
              ? characterLimit
              : undefined
          }
          value={text}
          onChange={handleChange}
          placeholder="Type your text here..."
          // I tried to render focus via template literal, but for some reason it was inconsistent...maybe not triggering an update.
          className={
            !limitExceeded
              ? `bg-neutral-slate-200 text-dm-sans dark:text-neutral-slate-200 h-48 w-full rounded-lg p-4 text-sm font-light text-neutral-slate-900 focus:outline-primary sm:text-base dark:bg-neutral-slate-700`
              : `bg-neutral-slate-200 text-dm-sans dark:text-neutral-slate-200 h-48 w-full rounded-lg p-4 text-sm font-light text-neutral-slate-900 focus:outline-accent-orange-light sm:text-base dark:bg-neutral-slate-700`
          }
        />
      </div>

      {/* Conditional render for character lenght exceeding limits WARNING */}
      {limitExceeded && (
        <div className="mx-4 flex text-xs text-accent-orange-light">
          <Image
            src="/character-count/icon-info.svg"
            alt="sun"
            width={10}
            height={10}
            className="text-dm-sans mr-2 bg-neutral-white dark:bg-neutral-slate-900"
          />
          {`Limit reached! Your text exceeded ${characterLimit} characters.`}
        </div>
      )}

      <div className="m-4 flex flex-col sm:flex-row sm:justify-between">
        <div className="sm:flex">
          <div className="mb-2 flex items-center sm:mr-4">
            <input
              type="checkbox"
              id="spacesCheckbox"
              checked={isExcludeSpacesEnabled}
              onChange={handleExcludeSpacesEnable}
              className="form-checkbox mr-2 h-4 w-4 bg-neutral-slate-900 accent-[var(--primary)]"
            />
            <label
              htmlFor="spacesCheckbox"
              className="text-dm-sans text-sm font-light text-neutral-slate-900 dark:text-neutral-slate-100"
            >
              Exclude Spaces
            </label>
          </div>

          <div className="mb-2 flex items-center">
            <input
              type="checkbox"
              id="characterLimitsCheckbox"
              checked={isCharacterLimitEnabled}
              onChange={handleCharacterLimitEnable}
              className="form-checkbox mr-2 h-4 w-4 accent-[var(--primary)]"
            />
            <label
              htmlFor="characterLimitsCheckbox"
              className="text-dm-sans text-sm font-light text-neutral-slate-900 dark:text-neutral-slate-100"
            >
              Set Character Limits
            </label>
            {isCharacterLimitEnabled ? (
              <input
                type="text"
                value={characterLimit}
                onChange={handleCharacterLimit}
                className="dark:border-neutral-slate-600 text-dm-sans mx-1 w-10 rounded-md border border-neutral-slate-900 text-center text-sm text-neutral-slate-900 dark:bg-neutral-slate-900 dark:text-neutral-white"
              />
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="text-dm-sans text-sm font-light text-neutral-slate-900 dark:text-neutral-slate-100">
          Approx. Reading Time: {readingTime()}
        </div>
      </div>
    </>
  );
}
