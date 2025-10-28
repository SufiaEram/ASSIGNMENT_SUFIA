const { expect } = require("@playwright/test");
const { setDefaultTimeout } = require('@cucumber/cucumber');
const {BasePage} = require("./base.page");

class Assignment  extends BasePage{

    constructor(page) {
    super(page);
    //Locators
    this.usernameInput = "input[name='user-name']";
    this.passwordInput = "input[name='password']";
    this.login ="input[name='login-button']";
    }



   async loginFunc(username,password){
    await this.type(this.usernameInput,username);
    await this.type(this.passwordInput,password);
    await this.click(this.login);
   };

  async highestPrice(){
      
    const priceElements = await this.page.$$('.inventory_item_price');

    let highestPrice = 0;
    let highestIndex = 0;

    for (let i = 0; i < priceElements.length; i++) {
      const text = await priceElements[i].textContent();
      console.log(text);
      const price = parseFloat(text.replace('$', ''));

       if (price > highestPrice) {
      highestPrice = price;
      highestIndex = i;
      }
     }
  console.log("highest price:",highestPrice)

  // Click the corresponding "Add to cart" button
  const addButtons = await this.page.$$('.inventory_item button');
  await addButtons[highestIndex].click();

  };


  async navigateToCart() {
    await this.page.click('.shopping_cart_link');
    await this.page.waitForTimeout(1000);
  };
  
  async verifyItemInCart() {
    expect(this.page.$$('.shopping_cart_link')).toBeVisible;
    await this.page.waitForTimeout(1000);
  }


} module.exports = { Assignment };