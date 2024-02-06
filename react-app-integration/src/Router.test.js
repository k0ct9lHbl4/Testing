import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import { renderTestApp } from "./tests/helpers/renderTestApp";
import { Navbar } from "./components/navbar/Navbar";

describe("TEST ROUTER", () => {
  test("Router", async () => {
    // render(
    //   // Когда вынесли BrowserRouter из App в index.js, появилась ошибка.
    //   // Для ее решения обернули компонент в MemoryRouter
    //   <MemoryRouter>
    //     <App />
    //   </MemoryRouter>
    // );

    renderTestApp(<Navbar />);

    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");

    await act(async () => {
      await userEvent.click(aboutLink);
    });
    expect(screen.getByTestId("about-page")).toBeInTheDocument();

    await act(async () => {
      await userEvent.click(mainLink);
    });
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("Error page", async () => {
    // render(
    //   // initialEntries - массив путей, которые будут рендериться (рендерим /meow-meow)
    //   <MemoryRouter initialEntries={["/meow-meow"]}>
    //     <App />
    //   </MemoryRouter>
    // );

    renderTestApp(null, { initialRoute: "/meow-meow" });

    const errorPage = screen.getByTestId("not-found-page");
    expect(errorPage).toBeInTheDocument();
  });
});
