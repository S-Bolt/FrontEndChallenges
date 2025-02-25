"use client";

import { Challenge } from "./Challenge";
import Calculator from "./mortgage-calculator-components/Calculator";
import { CharacterCount } from "./characteCount-components/CharacterCount";
import { Provider } from "react-redux";
import { store } from "../app/characteCount-components/store";

export default function Home() {
  return (
    <div>
      <Challenge title="Challenge 1" className="theme-project2">
        <Calculator />
      </Challenge>

      <Challenge
        title="🚧 Challenge 2 🚧 Under Construction 🚧"
        className="theme-project3"
      >
        <Provider store={store}>
          <CharacterCount />
        </Provider>
      </Challenge>
    </div>
  );
}
