import {expect, test} from "@playwright/test";

test("Verify dropdown sorted", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //const animalsDropdownOptions = page.locator("#animals>option");
    const colorsDropdownOptions = page.locator("#colors>option");
    const dropdownOptionTexts = (await colorsDropdownOptions.allTextContents()).map(element => element.trim());

    const originalDropdownOptionTexts = [...dropdownOptionTexts];

    const sortedDropdownOptionTexts = [...dropdownOptionTexts].sort();

    expect(originalDropdownOptionTexts).toEqual(sortedDropdownOptionTexts);


    await page.waitForTimeout(5000);


});