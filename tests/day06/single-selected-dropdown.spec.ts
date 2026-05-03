import {expect, Locator, test} from "@playwright/test";

test("Single Selected Dropdown", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //await page.locator("#country").selectOption("Japan"); // visible text
    //await page.locator("#country").selectOption({label: "United States"}); // visible label
    //await page.locator("#country").selectOption({value: "brazil"}); // value
    //await page.locator("#country").selectOption({index: 3}); // index


    const optionsLocator: Locator = page.locator("#country>option");

    await expect(optionsLocator).toHaveCount(10);

    const allTextContents: string[] = (await optionsLocator.allTextContents()).map(element => element.trim());

    expect(allTextContents).toContain("Japan");

    allTextContents.forEach(element => {
        console.log("Element:", element);
    })


    //await page.waitForTimeout(5000);


});