import { getCounterValue } from "./getCounterValue";

describe("TEST COUNTER VALUE SELECTOR", () => {
  test("work with empty state", () => {
    expect(getCounterValue({})).toBe(0);
  });

  test("work with filled state", () => {
    expect(
      getCounterValue({
        counter: { value: 100 },
      })
    ).toBe(100);
  });
});
