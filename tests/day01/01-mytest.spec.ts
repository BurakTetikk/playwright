import {expect, test} from "@playwright/test";


// Syntax test method
/*
test("title", () => {

});
*/

test("Verify page title", async ({page}) => {
    await page.goto("https://playwright.dev/");

    let title : string = await page.title();
    console.log("Title:", title);

    await expect(page).toHaveTitle(/Playwright/);

});
