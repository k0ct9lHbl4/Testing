const axios = require("axios");

const getData = require("./getData");
const jsonData = require("./json.data");

// Нужно замокать данные, которые будет возвращать метод get у axios
jest.mock("axios");

describe("getData", () => {
  let response;

  // Для каждого теста мокаем данные
  beforeAll(() => {
    response = {
      // Тут несколько реальных пользователей, которых вернул нам backend
      data: jsonData,
    };
  });

  test("Корректное значение", async () => {
    // Jest подхватывает mock и навешивает его как возвращаемое значение на метод get у axios
    axios.get.mockReturnValue(response);
    const data = await getData();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(data).toEqual(["1", "2", "3", "4"]);
    // Создает папку __snapshots__ в файлом с результатом каких-то вычислений
    // Если разработчик что-то поменяет (например, в getData на 8 строке вернет просто userIds),
    // то после повторного запуска тестов, тесты упадут и сможем увидеть, что изменилось
    expect(data).toMatchSnapshot();
  });
});
