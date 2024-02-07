import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import { Navbar } from "./Navbar";

import { renderTestApp } from "../../tests/helpers/renderTestApp";

describe("NAVBAR TEST", () => {
  test("about link", async () => {
    renderTestApp(<Navbar />);

    const aboutLink = screen.getByTestId("about-link");

    await act(async () => {
      await userEvent.click(aboutLink);
    });
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  test("main link", async () => {
    renderTestApp(<Navbar />);

    const mainLink = screen.getByTestId("main-link");

    await act(async () => {
      await userEvent.click(mainLink);
    });
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("users link", async () => {
    renderTestApp(<Navbar />);

    const usersLink = screen.getByTestId("users-link");

    await act(async () => {
      await userEvent.click(usersLink);
    });
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });
});
