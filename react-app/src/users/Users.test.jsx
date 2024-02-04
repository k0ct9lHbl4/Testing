import { render, screen } from "@testing-library/react";
import axios from "axios";

import { Users } from "./Users";
import { jsonData } from "./json.data";

jest.mock("axios");

describe("USERS TEST", () => {
  let response;

  beforeAll(() => {
    response = {
      data: jsonData,
    };
  });

  test("users render", async () => {
    axios.get.mockReturnValue(response);
    render(<Users />);

    const users = await screen.findAllByTestId("user-item");
    expect(users).toHaveLength(4);

    // screen.debug();
  });
});
