"use client";
import { Inputs } from "./Inputs";
import { Title } from "./Title";
import { Header } from "./Header";
import { GraphicsDisplay } from "./GraphicsDisplay";
import { LetterDensityDisplay } from "./LetterDensityDisplay";
import { Provider } from "react-redux";
import { store } from "./store";
import { useSelector, useDispatch } from "react-redux";

export function CharacterCount() {
  return (
    <Provider store={store}>
      <div className="theme-project3 h-full bg-neutral-slate-900">
        {/* Container for UI */}
        <div className="flex flex-col bg-neutral-slate-900 lg:mx-36 xl:mx-48 2xl:mx-56">
          <Header />
          <Title />
          <Inputs />
          <GraphicsDisplay />
          <LetterDensityDisplay />
        </div>
      </div>
    </Provider>
  );
}
