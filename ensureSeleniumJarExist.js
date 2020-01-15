//Following code checks for the existense of selenium.jar before running our test
const BINPATH='./node_modules/nightwatch/bin';
var selenium = require('selenium-download');

selenium.ensure(BINPATH, function (error) {
    if (error) console.error(error.stack);
    process.exit(0);
});