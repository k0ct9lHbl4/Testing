import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import axios from "axios";

import { Users } from "./UsersPage";
import { jsonData } from "./json.data";

import { renderWithRouter } from "../../tests/helpers/renderWithRouter";
import { renderTestApp } from "../../tests/helpers/renderTestApp";

jest.mock("axios");

describe("USERS TEST", () => {
  let response;

  beforeEach(() => {
    response = {
      data: jsonData,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("users render", async () => {
    axios.get.mockReturnValue(response);
    renderTestApp(<Users />);

    const users = await screen.findAllByTestId("user-item");
    expect(users).toHaveLength(4);
    expect(axios.get).toHaveBeenCalledTimes(1);

    // screen.debug();
  });

  test("redirect to details page", async () => {
    axios.get.mockReturnValue(response);
    renderWithRouter(null, "/users");

    const users = await screen.findAllByTestId("user-item");

    await act(async () => {
      await userEvent.click(users[0]);
    });
    expect(screen.getByTestId("user-page")).toBeInTheDocument();
  });
});
