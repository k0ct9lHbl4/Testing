import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import { Counter } from "./Counter";

import { renderWithRedux } from "../../tests/helpers/renderWithRedux";

describe("TEST COUNTER", () => {
  test("increment", async () => {
    // Функция render возвращает container с теми же методами, как у screen
    // И поиск будет производиться не по всей странице, а по компоненту
    const { getByTestId } = renderWithRedux(<Counter />, { counter: { value: 100 } });

    const incrementButton = getByTestId("increment-btn");
    expect(getByTestId("value-title")).toHaveTextContent("100");

    await act(async () => {
      await userEvent.click(incrementButton);
    });
    expect(getByTestId("value-title")).toHaveTextContent("101");
  });
});
