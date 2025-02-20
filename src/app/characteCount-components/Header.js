"use client";

import Image from "next/image";
import { useSelector } from "react-redux";

export function Header({ onToggleTheme }) {
  const darkMode = useSelector((state) => state.themeStore.darkMode);
  return (
    <div className="m-4 flex items-center justify-between">
      <div className="text-dm-sans flex text-neutral-white">
        {darkMode ? (
          <Image
            src="/character-count/logo-dark-theme.svg"
            alt="Dark Theme Logo"
            width={150}
            height={20}
            className=""
          />
        ) : (
          <Image
            src="/character-count/logo-light-theme.svg"
            alt="Light Theme Logo"
            width={150}
            height={20}
            className=""
          />
        )}
      </div>
      <button onClick={onToggleTheme}>
        <div className="bg-neutral-slate-200 items-center rounded-sm p-1 dark:bg-neutral-slate-700">
          {darkMode ? (
            <Image
              src="/character-count/icon-sun.svg"
              alt="Switch to Light Mode"
              width={20}
              height={20}
              className="bg-neutral-slate-700"
            />
          ) : (
            <Image
              src="/character-count/icon-moon.svg"
              alt="Switch to Dark Mode"
              width={20}
              height={20}
              className="bg-neutral-slate-200"
            />
          )}
        </div>
      </button>
    </div>
  );
}
