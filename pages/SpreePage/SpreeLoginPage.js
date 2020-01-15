var spreeLoginPageCommands = {
    verifyPageLoad: function () {
        return this.waitForElementVisible('#logo', 1000)
            .verify.visible('@lblSpreeLogo')
    },
    enterUserNameAndPassword(email,password) {
        console.log('Entering UserName as :'+ email);
        console.log('Entering Password as :'+ password);
        this.waitForElementVisible('@txtUserEmail').clearValue('@txtUserEmail').setValue('@txtUserEmail', email);
        return this.waitForElementVisible('@txtUserPass').clearValue('@txtUserPass').setValue('@txtUserPass', password);
    },
    clickOnLoginButton(){
        console.log('Clicking on Login Button');
        return this.click('@btnLogin');
    },
    verifyAccountDetails: function (name, email) {
        return this.waitForElementVisible('@lblAccountDetails',1000)
            .verify.visible('@lblUserName')
            .verify.visible('@lblUserEmail')
            .assert.containsText('@lblUserName',name)
            .assert.containsText('@lblUserEmail',email);
        console.log('UserName :'+ this.getText('@lblUserName'))
        console.log('User Email :'+this.getText('@lblUserEmail'))
    }
}
module.exports = {
    commands: [spreeLoginPageCommands],
    url: function () {
        return this.api.launch_url+'/login';
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