var spreeProductCommand = {
    verifyPageLoad: function () {
        return this.waitForElementVisible('#content > div > h1', 1000)
            .verify.visible('@lblShoppingCart').assert.containsText('@lblShoppingCart',"Shopping Cart");
    },
    verifySelectedProduct: function(productName){
        return this.verify.visible('@lblProductName').assert.containsText('@lblProductName',productName);
    },
    verifyQtyandPrice(price)
    {
        return this.verify.visible('@lblPrice').assert.containsText('@lblPrice',price);
    }
    ,
    clickOnCheckOut: function () {
        console.log("Clicking on checkout button");
        return this.click('@btnCheckOut');
    }
}

module.exports = {
    commands: [spreeProductCommand],
    url: function () {
        return this.api.launch_url+"/cart";
    },
    elements: {
        lblShoppingCart:
            {
                selector: '#content > div > h1'
            },
        lblProductName:
            {
                selector: '#line_items > tr > td.cart-item-description > h4 > a'
            },
        lblPrice:
            {
                selector: '#line_items > tr > td.lead.text-primary.cart-item-price'
            },
        txtQuantity:
            {
                selector:'#order_line_items_attributes_0_quantity'
            },
        btnCheckOut:
            {
                selector:'#checkout-link'
            },
        lblUserEmail:
            {
                selector:'#jas-content > div.jas-container > div > div > div > div > div.jas-table-responsive > table > tbody > tr:nth-child(2) > td:nth-child(2)'
            }
    }
}