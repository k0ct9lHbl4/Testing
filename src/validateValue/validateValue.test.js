const validateValue = require("./validateValue");

test("Валидация значения", () => {
  // toBe - для сравнения примитивных значений
  expect(validateValue(50)).toBe(true);
});

// Чтобы описать несколько сценариев
describe("validateValue", () => {
  test("Корректное значение", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("Верхняя граница корректного", () => {
    expect(validateValue(100)).toBe(true);
  });
  test("Больше корректного", () => {
    expect(validateValue(101)).toBe(false);
  });
  test("Нижняя граница корректного", () => {
    expect(validateValue(0)).toBe(true);
  });
  test("Меньше корректного", () => {
    expect(validateValue(-1)).toBe(false);
  });
});
