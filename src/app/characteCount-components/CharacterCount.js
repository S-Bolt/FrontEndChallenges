"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Inputs } from "./Inputs";
import { Title } from "./Title";
import { Header } from "./Header";
import { GraphicsDisplay } from "./GraphicsDisplay";
import { LetterDensityDisplay } from "./LetterDensityDisplay";
import { toggleDarkMode } from "./themeSlice";

export function CharacterCount() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.themeStore.darkMode);
  console.log(darkMode);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    dispatch(toggleDarkMode());
    console.log("toggled");
  };
  return (
    <div className="theme-project3 h-full bg-neutral-white dark:bg-neutral-slate-900">
      {/* Container for UI */}
      <div className="flex flex-col bg-neutral-white lg:mx-36 xl:mx-48 2xl:mx-56 dark:bg-neutral-slate-900">
        <Header onToggleTheme={toggleTheme} />
        <Title />
        <Inputs />
        <GraphicsDisplay />
        <LetterDensityDisplay />
      </div>
    </div>
  );
}
