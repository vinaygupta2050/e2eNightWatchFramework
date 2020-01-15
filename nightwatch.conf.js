module.exports=require('./nightwatch.json');
const SCREENSHOT_PATH="./screenshots/";

//Save screenshot in case of Failures
var FILECOUNT=0;

function padLeft(count) {
    return count<10?'0'+count:count.toString();
}

function imgpath(browser) {
    var desiredCapabilities = browser.options.desiredCapabilities;
    var meta=[desiredCapabilities.platform];
    meta.push(desiredCapabilities.browserName ? desiredCapabilities.browserName:'any');
    meta.push(desiredCapabilities.version ? desiredCapabilities.version:'any');
    var metadata = meta.join('~').toLocaleLowerCase().replace(/ /g,'');
    return SCREENSHOT_PATH + metadata + '_' + padLeft(FILECOUNT++)+ '_';
}

module.exports.imgpath = imgpath;
module.exports.SCREENSHOT_PATH =  SCREENSHOT_PATH;