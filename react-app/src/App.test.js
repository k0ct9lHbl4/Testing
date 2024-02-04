// !!! Чтобы были доступны jest-dom подсказки, смотри jsconfig.json !!!

import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("TEST APP", () => {
  test("renders elements", () => {
    // Передаем компонент, который хотим протестировать
    render(<App />);

    const helloWorldElement = screen.getByText(/hello world!/i);
    // Роль можно переопределять, например на div навесить роль button
    // и с точки зрения семантики этот блок будет являться кнопкой
    const buttonElement = screen.getByRole("button");
    const inputElement = screen.getByPlaceholderText(/input value/i);

    // Проверяем, что элемент появился в dom дереве
    expect(helloWorldElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();

    // Возвращает разметку, которая сгенерировалась после того, как мы отрендерили компонент
    // screen.debug();

    // Если кто-то изменит элемент (например, изменит placeholder), то тест упадет
    expect(inputElement).toMatchSnapshot();
  });

  test("async renders, selectors types", async () => {
    render(<App />);

    // Есть типы селекторов, начинающиеся с find(By/All), get(By/All) и query(By/All)
    // findBy пытается найти один элемент, findAll возвращает массив элементов
    // get должен найти элемент. Если не находится - ошибка и тест падает
    // find - для работы с каким-то асинхронным кодом (сравнить типа getByText и findByText)
    // query - можем убедиться, что какого-то элемента нет. Если элемент не получим, ...
    // ... то можем убедиться, что значение переменной null и ошибки не будет

    // Проверили, что такого элемента нет
    const helloWorldElement = screen.queryByText(/world2/i);
    expect(helloWorldElement).toBeNull();

    // screen.debug(); - блока div нету
    const dataAsyncElement = await screen.findByText(/data/i);
    expect(dataAsyncElement).toBeInTheDocument();
    // screen.debug(); - блок div есть

    expect(dataAsyncElement).toHaveStyle({ color: "red" });
  });

  test("click event", () => {
    render(<App />);

    const buttonElement = screen.getByTestId("toggle-btn");

    // Это статичная переменная, то есть в ней ничего не изменится, если нажмем на кнопку
    // const toggleElement = screen.queryByTestId("toggle-elem");

    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    // fireEvent - объект, предназначенный для работы с событиями
    fireEvent.click(buttonElement);
    expect(screen.getByTestId("toggle-elem")).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  });

  test("input event", async () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText(/input value/i);

    expect(screen.queryByTestId("value-elem")).toContainHTML("");
    // fireEvent - искусственное событие. То есть когда мы работаем с клавиатурой, мышкой...
    // ... у нас помимо события click, происходят события mouseDown, mouseUp
    // Для эмуляции полного поведения пользователя есть модуль userEvent

    // fireEvent.input(inputElement, {
    //   target: { value: "test" },
    // });

    // Близко к пользователю (ругается на act, но решение не нашел)
    await userEvent.type(inputElement, "test");
    expect(screen.queryByTestId("value-elem")).toContainHTML("test");
  });
});
