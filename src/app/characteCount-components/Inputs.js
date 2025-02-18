"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  setText,
  toggleCharacterLimitEnabled,
  toggleExcludeSpaces,
} from "./CharacterCountSlice";

export function Inputs() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.characterCountStore.text);
  const isCharacterLimitEnabled = useSelector(
    (state) => state.characterCountStore.isCharacterLimitEnabled,
  );
  const isExcludeSpacesEnabled = useSelector(
    (state) => state.characterCountStore.isExcludeSpacesEnabled,
  );
  const { characterCount } = useSelector((state) => state.characterCountStore);
  console.log(characterCount);

  const limitExceeded = isCharacterLimitEnabled && characterCount >= 300;

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
            isCharacterLimitEnabled && characterCount >= 300 ? 300 : undefined
          }
          value={text}
          onChange={handleChange}
          placeholder="Type your text here..."
          className="h-48 w-full rounded-lg bg-neutral-slate-700 p-4 text-sm font-light text-neutral-slate-100 sm:text-base"
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
            className="mr-2 bg-neutral-slate-900"
          />
          Limit reached! Your text exceeded 300 characters.
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
              className="text-sm font-light text-neutral-slate-100"
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
              className="text-sm font-light text-neutral-slate-100"
            >
              Set Character Limits
            </label>
          </div>
        </div>

        <div className="text-sm font-light text-neutral-slate-100">
          Approx. reading time 1m
        </div>
      </div>
    </>
  );
}
