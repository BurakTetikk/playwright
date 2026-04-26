import {expect, test} from "@playwright/test";

test("CSS Locator", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/");

    // tag#id
    //const searchInput = page.locator("input#small-searchterms");
    //await searchInput.fill("Computer");

    await expect(page.locator("input#small-searchterms")).toBeVisible();
    await page.locator("#small-searchterms").fill("Computer"); // tag olmadan da id ile locates edebiliriz.

    // tag.class
    await page.locator("input.search-box-text").fill("Computer");
    await page.locator(".search-box-text").fill("Computer"); // tag olmadan da class ile locates edebiliriz.

    // tag[attribute=value]
    await page.locator("input[name=q]").fill("Computer");
    await page.locator("[name=q]").fill("Computer");


    // tag.class[attribute=value]
    await page.locator("input.search-box-text[value='Search store']").fill("Computer");
    await page.locator(".search-box-text[value='Search store']").fill("Computer");

    



    await page.waitForTimeout(2000);

});