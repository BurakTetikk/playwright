import {expect, Locator, test} from "@playwright/test";

// Text Box, Text Input, Input Box
test("Text Input actions", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const textBox: Locator = page.locator("#name");

    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();

    const maxLengthAttribute: string = await textBox.getAttribute("maxlength");

    expect(maxLengthAttribute).toBe("15");

    await textBox.fill("John Doe");

    // const nameTextContent = await textBox.textContent();
    const nameTextContent = await textBox.inputValue();
    console.log("Name text box value:", nameTextContent);

    expect(nameTextContent).toBe("John Doe");

    await page.waitForTimeout(3000);

});

// Radio Buttons

test("Radio Buttons actions", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const maleLocator: Locator = page.locator("#male");

    await expect(maleLocator).toBeVisible();
    await expect(maleLocator).toBeEnabled();

    const isMaleChecked = await maleLocator.isChecked();

    expect(isMaleChecked).toBe(false);

    await maleLocator.check();

    const isMaleCheckedAfter: boolean = await maleLocator.isChecked();
    expect(isMaleCheckedAfter).toBe(true);
    await expect(maleLocator).toBeChecked();

    await page.waitForTimeout(3000);

});


test.only("CheckBox actions", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const sundayCheckBox = page.getByLabel("Sunday");
    await expect(sundayCheckBox).toBeVisible();
    // await sundayCheckBox.check();
    // await expect(sundayCheckBox).toBeChecked();

    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const dayElements: Locator[] = days.map(day => page.getByLabel(day));
    expect(dayElements.length).toBe(7);

    /*for (const dayElement of dayElements) {
        await dayElement.check();
        await expect(dayElement).toBeChecked();
    }

    for (const dayElement of dayElements.slice(-3)) {
        await dayElement.uncheck();
        await expect(dayElement).not.toBeChecked();
    }


    for (const dayElement of dayElements) {
        if (await dayElement.isChecked()) {
            await dayElement.uncheck();
            await expect(dayElement).not.toBeChecked();
        } else {
            await dayElement.check();
            await expect(dayElement).toBeChecked();
        }
    }*/

    const weekDay: string = "monday";

    for (const day of days) {
        if (day.toLowerCase() === weekDay.toLowerCase()) {
            await page.getByLabel(day).check();
            await expect(page.getByLabel(day)).toBeChecked();
        }
    }


    await page.waitForTimeout(3000);

});