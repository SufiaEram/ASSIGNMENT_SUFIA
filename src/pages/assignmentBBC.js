const { expect } = require("@playwright/test");
const { setDefaultTimeout } = require('@cucumber/cucumber');
const {BasePage} = require("./base.page");

class AssignmentBBC  extends BasePage{

    constructor(page) {
    super(page);
    //Locators
    this.usernameInput = "input[name='username']";
    this.passwordInput = "input[name='password']";
    this.continue ="button[type='submit']";
    this.signIn ="button[name='Sign in']";
    this.verifyLocator = "#global-navigation > div.ssrcss-bje5xb-GlobalNavigationItem.eki2hvo21 > ul.ssrcss-lr0iia-AccountOptionsList.eki2hvo1 > li.ssrcss-1t7ltsf-GlobalNavigationProduct-GlobalNavigationAccount.eki2hvo17 > span > a"
    }


   /**
   * Logs into BBC account using provided credentials
   */
   async loginBBC(username,password){
    await this.type(this.usernameInput,username);
    await this.click(this.continue);
    await this.type(this.passwordInput,password);
    await this.click(this.continue);
   };

   /**
   * Verifies that specific text is visible in the header
   */
   async verifyText(verifyText){
    const verifyLocator = this.page.getByTestId('header-content').getByRole('link', { name: 'For you' });
    await expect(verifyLocator).toHaveText(verifyText);
   };

   /**
   * Selects a specific header link dynamically
   */
   async selectHeader(headerTitle){
    const headerLocator = this.page.getByTestId('header-content').getByRole('link', { name: headerTitle }).click;
   };


    /**
    * Finds an article on BBC Sport that has a comment section
    */
   async findArticleWithComment(){
     // console.log("Navigating to BBC Sport homepage...");
     // Collect article links like /sport/{category}/articles/{id}
    const articleLinks = await this.page.$$eval('a[href*="/sport/"]', links =>
      links
        .map(link => link.href)
        .filter(href => /\/sport\/[^/]+\/articles\/[a-zA-Z0-9]+/.test(href))
    );

      //console.log(`Found ${articleLinks.length} potential article links.`);

      // Loop through articles until one with comments is found
    for (const link of articleLinks.slice(0, 15)) {
      //console.log(`Checking: ${link}`);
      await this.page.goto(link, { waitUntil: "domcontentloaded" });
      //await this.page.waitForTimeout(2000); 

      const hasComments = await this.page
        .locator('[data-testid*="comments"], #comments, .comments, [aria-label*="comments"]')
        .first()
        .isVisible()
        .catch(() => false);

      if (hasComments) {
        console.log(`Found article with comments: ${link}`);
        return link;
      }
    }

    console.log("No article with comments found in the checked list.");
    return null;
  }

} module.exports = { AssignmentBBC };