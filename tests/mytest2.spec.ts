import {expect, test} from "@playwright/test";

test("Verify page URL", async ({page}) => {
    await page.goto("https://playwright.dev/");

    let url: string = page.url(); // url() methodu promise return etmiyor!!
    console.log("URL:", url);

    await expect(page).toHaveURL(/playwright/);

});
