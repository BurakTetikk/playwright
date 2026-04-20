import {expect, Locator, test} from "@playwright/test";

test("XPath Axes", async ({page}) => {
    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    // 1. self
    const germanyCell: Locator = page.locator("//td[text()='Germany']/self::td");

    console.log("Germany locator with self axes:", await germanyCell.textContent());

    await expect(germanyCell).toHaveText("Germany");

    // 2. parent
    const germanyCellParent: Locator = page.locator("//td[text()='Germany']/parent::tr");
    await expect(germanyCellParent).toContainText("Alfreds Futterkiste");

    // 3. child
    const germanyCellChild: Locator = page.locator("//table[@id='customers']//tr[3]/child::td");
    await expect(germanyCellChild.first()).toHaveText("Centro comercial Moctezuma");

    await expect(germanyCellChild).toHaveCount(3);

    // 4. ancestor
    const germanyCellAncestor: Locator = page.locator("//td[text()='Germany']/ancestor::table"); // /ancestor::* -> tüm ancestors gelir
    await expect(germanyCellAncestor).toHaveAttribute("id", "customers");

    // 5. descendant
    const germanyCellDescendant: Locator = page.locator("//table[@id='customers']/descendant::td");
    await expect(germanyCellDescendant).toHaveCount(18);

    // 6. following
    const germanyCellFollowing: Locator = page.locator("//td[text()='Germany']/following::td[1]");
    await expect(germanyCellFollowing).toHaveText("Centro comercial Moctezuma");

    // 7. following-sibling
    const germanyCellFollowingSibling2: Locator = page.locator("//td[text()='Germany']/following-sibling::td");
    await expect(germanyCellFollowingSibling2).toHaveCount(0);

    // 8. preceding
    const germanyCellPreceding: Locator = page.locator("//td[text()='Germany']/preceding::td[1]");
    await expect(germanyCellPreceding).toHaveText("Maria Anders");

    // 9. preceding-sibling
    const germanyCellPrecedingSibling: Locator = page.locator("//td[text()='Germany']/preceding-sibling::td");
    await expect(germanyCellPrecedingSibling).toHaveCount(2);

    await expect(germanyCellPrecedingSibling.first()).toHaveText("Alfreds Futterkiste");
    await expect(germanyCellPrecedingSibling.nth(1)).toHaveText("Maria Anders");

})