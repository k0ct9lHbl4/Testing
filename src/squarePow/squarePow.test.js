const squarePow = require("./squarePow");

describe("squarePow", () => {
  // Хотим убедиться, что метод pow вызывается
  // В jest мы можем мокать различные модули, например axios, библиотеки
  // То есть сказать, что вызов такой-то функции будет возвращать такое-то значение
  test("Корректное значение", () => {
    // Создает mock метод pow функции Math
    const spyMathPow = jest.spyOn(Math, "pow");
    squarePow(5);
    expect(spyMathPow).toHaveBeenCalledTimes(1);
    // Есть еще toHaveBeenCalled, toHaveBeenCalledWith(args)
  });

  // Будет ошибка, если не закомментировать 10 строку (т.к. Math.pow вызовется один раз)...
  test("Корректное значение нету вызова", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    squarePow(1);
    expect(spyMathPow).toHaveBeenCalledTimes(0);
  });

  // ... Эти mocks накапливают вызовы и нам перед (или после) каждым тестом их нужно очищать
  afterEach(() => {
    jest.clearAllMocks();
  });
});
