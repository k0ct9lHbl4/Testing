const usersPage = require("../pages/users.page");

describe("Users Test Page", () => {
  it("load data", async () => {
    await usersPage.getUsers();
  });

  it("delete user", async () => {
    await usersPage.getUsers();
    await usersPage.deleteUser();
  });
});
