let loginPage,homePage,productPage,addToCart,loginDetails,userName,password,productToBuy,productName;

module.exports={
    before(browser) {
        console.log('## Starting Spree Shopping Platform ##')
        loginPage = browser.page.SpreePage.SpreeLoginPage();
        homePage = browser.page.SpreePage.SpreeHomePage();
        productPage = browser.page.SpreePage.SpreeProductPage();
        addToCart = browser.page.SpreePage.SpreeAddToCartPage();
        loginDetails = browser.globals.loginDetails;
        productToBuy = browser.globals.productToBuy;
        userName = loginDetails.userName;
        password = loginDetails.password;
        productName = productToBuy.rubyOnRailTote;
    },
    after(browser){
        console.log('## Closing Spree Shopping Platfrom ##');
        browser.end();
    },

    '@tags': ['wip'],
    'Verify Product CheckOut': function(browser)
    {
        loginPage.navigate().verifyPageLoad().enterUserNameAndPassword(userName,password).clickOnLoginButton();
        homePage.navigate().verifyPageLoad().useXpath().click("//*[@id=\"product_1\"]/div/div[1]/a/span[text()='Ruby on Rails Tote']").useCss();
        productPage.navigate().verifyPageLoad().verifySelectedProduct(productName).enterQuantity('1').clickOnAddToCart();
        addToCart.navigate().verifyPageLoad().verifySelectedProduct(productName).verifyQtyandPrice('$15.99').clickOnCheckOut();
    }
}