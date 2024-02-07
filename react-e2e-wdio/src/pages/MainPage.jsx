import React from "react";

import { Counter } from "../components/counter/Counter";

export const MainPage = () => {
  return (
    <div data-testid="main-page">
      MainPage
      <Counter />
    </div>
  );
};
