import {expect, Locator, test} from "@playwright/test";

test("XPath locators", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/");

    // 1. Absolute xpath - logo
    const absoluteLogo: Locator = page.locator("xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
    //await expect(absoluteLogo).toBeVisible(); // absolute xpath için bir problem var

    // 2. Relative xpath - logo
    const relativeLogo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(relativeLogo).toBeVisible();

    // 3. XPath - contains() method
    const computerProducts: Locator = page.locator("//h2/a[contains(@href, 'computer')]");
    const computerProductCount = await computerProducts.count();
    console.log("Computer product count:", computerProductCount);
    expect(computerProductCount).toBeGreaterThan(0);


    //console.log(await computerProducts.textContent()); // Error: strict mode violation
    console.log("First element's content text of computerProducts:", await computerProducts.first().textContent()); // Build your own cheap computer
    console.log("Last element's content text of computerProducts:", await computerProducts.last().textContent()); // Simple Computer
    console.log("Nth element's content text of computerProducts:", await computerProducts.nth(2).textContent()); // Build your own expensive computer
    console.log("All product in array form:", await computerProducts.allTextContents());

    let computerProductsName: string[] = await computerProducts.allTextContents();
    for (let computerProductName of computerProductsName) {
        console.log("Computer product name:", computerProductName);
    }

    // 4. XPath - starts-with method
    const computerProductsStartsWith: Locator = page.locator("//h2/a[starts-with(@href, '/build')]");
    const totalComputerProductsStartsWith: number = await computerProductsStartsWith.count();
    console.log("Total computer products start with:", totalComputerProductsStartsWith);
    expect(totalComputerProductsStartsWith).toBeGreaterThan(0);

    // 5. XPath - text() method (. - nokta da kullanılır)
    //const registerLinkWithNormalizeSpace: Locator = page.locator("//a[normalize-space() = 'Register']"); // web elementin text space e aldırış etmez
    const registerLink: Locator = page.locator("//a[text() = 'Register']");
    await expect(registerLink).toBeVisible();

    // 6. Xpath - last() method
    const lastLink: Locator = page.locator("//div[@class='column follow-us']//li[last()]");
    console.log("Last link's text:", await lastLink.textContent());
    await expect(lastLink).toBeVisible();

    // 7. Xpath - position() method
    const nthLinkWithPosition: Locator = page.locator("//div[@class='column follow-us']//li[position()=4]");
    console.log("Nth link's text:", await nthLinkWithPosition.textContent());
    await expect(nthLinkWithPosition).toBeVisible();

});