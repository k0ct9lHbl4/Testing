const square = require("./square");

describe("square", () => {
  let mockValue;

  // Когда группирует тест-кейсы с помощью describe, у нас есть возможность
  // перед запуском каждого теста производить какие-нибудь операции с помощью beforeEach
  beforeEach(() => {
    mockValue = +(Math.random() * 5 + 2).toFixed(0);
  });
  // Будет запущена одиножды перед запуском всех тестов
  beforeAll(() => {});
  // Будет запущена после запуска каждого теста
  afterEach(() => {});
  // Будет запущена одиножды после запуска всех тестов
  afterAll(() => {});

  test("Корректное значение", () => {
    expect(square(5)).toBe(25);
    expect(square(5)).toBeLessThan(30);
    expect(square(5)).toBeGreaterThan(5);
    expect(square(5)).not.toBeUndefined();
  });
  test("Mock значение", () => {
    expect(square(mockValue)).toBe(mockValue * mockValue);
    expect(square(mockValue)).toBeLessThanOrEqual(49);
    expect(square(mockValue)).toBeGreaterThan(3);
    expect(square(mockValue)).not.toBeUndefined();
  });
});
