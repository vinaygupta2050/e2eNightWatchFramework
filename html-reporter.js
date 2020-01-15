var HTMLReporter = require('nightwatch-html-reporter');
var reporter = new HTMLReporter({
    openBrowser:false,
    reportsDirectory: __dirname + '/reports',
    separateReportPerSuite:true,
    uniqueFilename:false,
    themeName: 'default',
    hideSuccess: false
});
module.exports={
    write:function (results,options,done) {
        reporter.fn(results,done);
    }
}