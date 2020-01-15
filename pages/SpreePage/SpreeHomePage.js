var spreeLoginPageCommands = {
    verifyPageLoad: function () {
        return this.waitForElementVisible('#logo', 1000)
            .verify.visible('@lblSpreeLogo')
    },

}

module.exports = {
    commands: [spreeLoginPageCommands],
    url: function () {
        return this.api.launch_url;
    },
    elements: {
        lblSpreeLogo:
            {
                selector: '#logo'
            },
        txtUserEmail:
            {
                selector: '#spree_user_email'
            },
        txtUserPass:
            {
                selector:'#spree_user_password'
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