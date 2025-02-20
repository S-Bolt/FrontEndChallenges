"use client";

import { useSelector, useDispatch } from "react-redux";
import { letterDensity } from "./CharacterCountSlice";
import { toggleSeeMore } from "./CharacterCountSlice";
import { LetterGraphic } from "./LetterGraphic";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function LetterDensityDisplay() {
  const dispatch = useDispatch();
  const sortedStats = useSelector(letterDensity);
  const isSeeMoreEnabled = useSelector(
    (state) => state.characterCountStore.isSeeMoreEnabled,
  );

  const statsToRender = isSeeMoreEnabled
    ? sortedStats
    : sortedStats.slice(0, 5);

  return (
    <div className="m-4">
      <div className="text-dm-san mb-4 text-lg font-bold text-neutral-slate-900 dark:text-neutral-white">
        Letter Density
      </div>

      <div className="mb-2 flex flex-col">
        {statsToRender.map(({ letter, count, percentage }) => (
          <LetterGraphic
            key={letter}
            letter={letter}
            count={count}
            percentage={percentage}
          />
        ))}
      </div>

      <button
        onClick={() => dispatch(toggleSeeMore())}
        className="text-dm-san my-4 text-neutral-slate-900 dark:text-neutral-white"
      >
        {!isSeeMoreEnabled ? (
          <span>
            See more <FontAwesomeIcon icon={faChevronDown} />
          </span>
        ) : (
          <span>
            See less <FontAwesomeIcon icon={faChevronUp} />
          </span>
        )}
      </button>
    </div>
  );
}
