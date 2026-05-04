import {test} from "@playwright/test";

test("Hidden Bootstrap Dropdown", async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Login steps
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", {name: "Login"}).click();

    await page.getByText("PIM").click();

    await page.locator("form i").nth(2).click();

    await page.waitForTimeout(3000);

    const listboxOptions = page.locator("div[role='listbox'] span");
    const optionCount = await listboxOptions.count();
    console.log("Option count:", optionCount);

    console.log("All Options:", await listboxOptions.allTextContents());

    for (let i = 0; i < optionCount; i++) {
        console.log("Option text:", await listboxOptions.nth(i).textContent());
    }

    for (let i = 0; i < optionCount; i++) {
        const textContent: string = await listboxOptions.nth(i).innerText();
        if (textContent === "QA Engineer") {
            await listboxOptions.nth(i).click();
            break;
        }
    }


    await page.waitForTimeout(5000);

});