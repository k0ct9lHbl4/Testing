const { $ } = require("@wdio/globals");
const Page = require("./page");

class UsersPage extends Page {
  get loadingTitle() {
    return $("#users-loading");
  }

  get usersList() {
    return $("#users-list");
  }

  get userItems() {
    // Получаем массив элементов (т.к. $$), указывая название компонента
    // eslint-disable-next-line no-undef
    return browser.react$$("User");
  }

  async getUsers() {
    try {
      await this.open();
      // Ждем, пока отобразится индикатор загрузки (если за 2сек элемент не появился, будет ошибка)
      await this.loadingTitle.waitForDisplayed({ timeout: 2000 });
      await this.usersList.waitForDisplayed({ timeout: 2000 });
    } catch (error) {
      console.error(error);
      throw new Error("Не удалось загрузить пользователей");
    }
  }

  async deleteUser() {
    try {
      const usersCount = await this.userItems;

      if (!usersCount) {
        throw new Error("Пользователи не найдены");
      }

      await (await this.userItems[0]).$("#user-delete").click();

      const usersCountAfterDelete = await this.usersItems;

      if (usersCount - usersCountAfterDelete !== 1) {
        throw new Error("Удаление не произошло или удалился более чем 1 пользователь");
      }
    } catch (error) {
      throw new Error("Не удалось удалить пользователя. " + error.message);
    }
  }

  open() {
    return super.open("/users-test");
  }
}

module.exports = new UsersPage();
