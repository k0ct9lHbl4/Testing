import counterReducer, { decrement, increment } from "./counterReducer";

describe("TEST COUNTER REDUCER", () => {
  test("increment", () => {
    expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 });
  });

  test("decrement", () => {
    expect(counterReducer({ value: 0 }, decrement())).toEqual({ value: -1 });
  });

  test("empty state", () => {
    expect(counterReducer(undefined, increment())).toEqual({ value: 1 });
    expect(counterReducer(undefined, decrement())).toEqual({ value: -1 });
  });
});
