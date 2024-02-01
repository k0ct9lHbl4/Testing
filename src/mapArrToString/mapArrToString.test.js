const mapArrToString = require("./mapArrToString");

describe("mapArrToString", () => {
  test("Корректное значение", () => {
    // toEqual рекурсивно сравнивает все свойства инстансов объекта
    // toStrictEqual проверяет, что объекты имеют одинаковую структуру и тип
    expect(mapArrToString([1, 2, 3, 4, 5])).toEqual(["1", "2", "3", "4", "5"]);
  });
  test("Элементы разных типов", () => {
    expect(mapArrToString([1, 2, 3, null, undefined, "Name"])).toEqual(["1", "2", "3"]);
  });
  test("Пустой массив", () => {
    expect(mapArrToString([])).toEqual([]);
  });
  test("Отрицание", () => {
    // not - для отрицания
    expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
