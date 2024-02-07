const { expect } = require("@wdio/globals");
const HelloPage = require("../pages/hello.page");

describe("Hello World Page", () => {
  it("should toggle", async () => {
    await HelloPage.open();

    await HelloPage.toggleTitleWithInput("hello");
    await expect(HelloPage.helloTitle).toBeExisting();
    await HelloPage.toggleButton.click();
    await expect(HelloPage.helloTitle).not.toBeExisting();
  });

  it("should not toggle", async () => {
    await HelloPage.open();

    await HelloPage.toggleTitleWithInput("not hello");
    await expect(HelloPage.helloTitle).not.toBeExisting();
  });
});
