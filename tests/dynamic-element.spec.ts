import {test} from "@playwright/test";

test("Dynamic Element with XPath", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    for (let i = 0; i < 5; i++) {
        const locator = page.locator("//button[text()='START' or text()= 'STOP']");
        await locator.click();
        await page.waitForTimeout(2000);
    }

});

test("Dynamic Element with Built-in Locator", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    for (let i = 0; i < 5; i++) {
        const locator = page.getByRole('button', {name: /START|STOP/});
        await locator.click();
        await page.waitForTimeout(2000);
    }

});