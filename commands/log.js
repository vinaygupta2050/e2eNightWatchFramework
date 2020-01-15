exports.command = function (message) {
    return this.perform(function(browser,done){
        console.log(message);
        done();
    });
};