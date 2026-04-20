/*
 These are the recommended built-in locators.

    page.getByRole() to locate by explicit and implicit accessibility attributes.
    page.getByText() to locate by text content.
    page.getByLabel() to locate a form control by associated label's text.
    page.getByPlaceholder() to locate an input by placeholder.
    page.getByAltText() to locate an element, usually image, by its text alternative.
    page.getByTitle() to locate an element by its title attribute.
    page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import {expect, Locator, test} from "@playwright/test";

test("Built-in Locators", async ({page}) => {

    await page.goto("https://demo.nopcommerce.com/");

    // 1. page.getByAltText() to locate an element, usually image, by its text alternative.
    const logo: Locator = page.getByAltText("nopCommerce demo store");

    await expect(logo).toBeVisible();


    // 2. page.getByText() to locate by text content.
    //await expect(page.getByText("Welcome to our store")).toBeVisible(); // full string
    //await expect(page.getByText("Welcome to")).toBeVisible(); // substring
    await expect(page.getByText(/welcome/i)).toBeVisible(); // regular expression

    // 3. page.getByRole() to locate by explicit and implicit accessibility attributes.
    await page.getByRole('link', {name: 'Register'}).click();
    await expect(page.getByRole('heading', {name: 'Register'})).toBeVisible();

    // 4. page.getByLabel() to locate a form control by associated label's text.
    await page.getByLabel("First name:").fill("John");
    await page.getByLabel("Last name:").fill("Doe");
    await page.getByLabel("Email:").fill("john@doe.com");

    // 5. page.getByPlaceholder() to locate an input by placeholder.
    await page.getByPlaceholder("Search store").fill("Iphone");

    // 6. page.getByTitle() to locate an element by its title attribute.
    await page.goto("https://demo.nopcommerce.com/");
    await expect(page.getByTitle("Show products in category Electronics")).toBeVisible();

    // 7. page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).


});