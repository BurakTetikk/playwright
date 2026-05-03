import {expect, test} from "@playwright/test";

test("Multi Selected Dropdown", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");


    // await page.locator("#colors").selectOption(["Red", "Green", "Blue"]); // using visible text
    // await page.locator("#colors").selectOption(["white", "yellow"]); // using value attribute
    // await page.locator("#colors").selectOption([{label: "Blue"}, {label: "White"}]); // using label
    // await page.locator("#colors").selectOption([{index: 0}, {index: 2}]); // using index

    await expect(page.locator("#colors>option")).toHaveCount(7);

    const colorOptionTexts: string[] = (await (page.locator("#colors>option").allTextContents())).map(element => element.trim());
    console.log("Color option texts:", colorOptionTexts);
    expect(colorOptionTexts).toContain("Yellow");

    colorOptionTexts.forEach(element => {
        console.log("Element:", element);
    })

    //await page.waitForTimeout(5000);


});