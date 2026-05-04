import {test} from "@playwright/test";

test("Auto Suggest Dropdown", async ({page}) => {
    await page.goto("https://www.flipkart.com/");

    await page.locator("span[role='button']").click();

    await page.locator("form>div>div>input[name='q']").fill("smart");

    await page.waitForTimeout(2000);

    const options = page.locator("ul>li");

    const totalSuggestedOptions = await options.count();
    console.log("Total suggested options:", totalSuggestedOptions);

    console.log("5 th options text:", await options.nth(4).textContent());

    console.log("==================")

    for (let i = 0; i < totalSuggestedOptions; i++) {
        console.log(`Option text(${i}):`, await options.nth(i).textContent());
    }

    for (let i = 0; i < totalSuggestedOptions; i++) {
        if (await options.nth(i).textContent() === "smartphone") {
            await options.nth(i).click();
            break;
        }
    }


    await page.waitForTimeout(5000);
})