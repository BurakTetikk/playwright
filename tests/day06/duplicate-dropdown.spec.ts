import {expect, test} from "@playwright/test";

test("Verify dropdown duplicate", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const animalsDropdownOptions = page.locator("#animals>option");
    //const colorsDropdownOptions = page.locator("#colors>option");
    const dropdownOptionTexts = (await animalsDropdownOptions.allTextContents()).map(element => element.trim());

    const mySet = new Set<string>();
    const duplicates: string[] = [];

    for (const element of dropdownOptionTexts) {
        if (mySet.has(element)) {
            duplicates.push(element);
        } else {
            mySet.add(element);
        }
    }

    expect(duplicates).toEqual([]);


    await page.waitForTimeout(5000);


});