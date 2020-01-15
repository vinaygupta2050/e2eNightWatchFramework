var spreeProductCommand = {
    verifyPageLoad: function () {
        return this.waitForElementVisible('#logo', 1000)
            .verify.visible('@lblSpreeLogo')
    },
    verifySelectedProduct: function(productName){
        console.log("Selecting product as :"+productName);
        return this.verify.visible('@lblProductName').assert.containsText('@lblProductName',productName)
    },
    enterQuantity(quantity)
    {
        console.log("Quantity set as :"+quantity);
        return this.waitForElementVisible('@txtQuantity').clearValue('@txtQuantity').setValue('@txtQuantity', quantity);
    }
    ,
    clickOnAddToCart: function () {
        console.log("Clicking on Add to Cart Button");
        return this.click('@btnAddToCart');
    }
}

module.exports = {
    commands: [spreeProductCommand],
    url: function () {
        return this.api.launch_url+"/products/ruby-on-rails-tote";
    },
    elements: {
        lblProductName:
            {
                selector: '#product-description > h1'
            },
        lblSpreeLogo:
            {
                selector: '#logo'
            },
        btnAddToCart:
            {
                selector: '#add-to-cart-button'
            },
        txtQuantity:
            {
                selector:'#quantity'
            },
        btnLogin:
            {
                selector:'#new_spree_user > div:nth-child(5) > input'
            },
        lblUserEmail:
            {
                selector:'#jas-content > div.jas-container > div > div > div > div > div.jas-table-responsive > table > tbody > tr:nth-child(2) > td:nth-child(2)'
            }
    }
}