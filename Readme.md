# NightWatch E2E Test Framework

Nightwatch is Node.js based end-to-end test framework which unables us to write end to end test quickly and effortlesly that runs against a selenium/webdriver server. The idea behind this project is to help user getting started to setup a project and start writing test. The project demostrate all the aspect which are required to jumpstart for writing test for the application in nightwatch.

## Getting Started

To get started clone project from github. Below are some component which has their significance running the test

-	Configuring and Setting up Nightwatch.js

Nightwatch.js offers an in-built test runner which expects a JSON configuration file to be passed. The default configuration file is nightwatch.json which should be present in the project’s root directory. Alternatively, the nightwatch.conf.js configuration file can also be used and will be loaded from the root directory of the project.

Note: If both the configuration files are present in the directory, the nightwatch.conf.js is given precedence as it provides us with a little more flexibility and can have comments in the file.

-	Dependency and scripts

package.json contains all the list of package which are required to run the test. It also contains custom scripts and their command with which we are running the test


### Prerequisites

There are some basic prerequisites that are required to get started with this Nightwatch JS tutorial for testing with Selenium and JavaScript. As project requires a demo application to run which is a docker image and neds to be downloaded.

```
Node.js: Nightwatch module is built on top of Node.js, it indicates that Node.js is required to be installed on the system 
```
```
Node Package Manager (npm): Once Node.js installed , the node’s package manager i.e. npm can be leveraged to install the package which is the largest ecosystem of packages.
```
```
Java – SDK: Selenium requires Java for its remote Selenium Server. Since Nightwatch relies upon the Selenium WebDriver API and also requires a Selenium WebDriver Server, hence there is also a need to install the Java Development Kit (JDK 7+) on the system and configure the JAVA environment.
```
```
Docker : As demo application is a docker image. User needs to install docker and run below command to pull the application image from docker hub

command : docker pull spreecommerce/spree
```

### Installing

Once the project is checkedout follow below step to run the application and test. Enter below commands inside project i.e "/e2eNightWatchFramework"

1- Start demo application container using below command. After execution of below command verify whether application is up by hitting url "http://localhost:3000" in browser

```
./bootApplication.sh
```

2- Run below command to dowload all the package required to run NightWatch.js test

```
npm install --save-dev
```

## Running the tests


1- Run below command to run test located "/e2eNightWatchFramework/tests" directory

```
npm run chrome
```

2- After execution reports can be located at "/e2eNightWatchFramework/reports" directory

3- Incase of failure screenshot can be located at "/e2eNightWatchFramework/screenshots" directory

## Reference

* [NightWatch](https://nightwatchjs.org/guide) - It contains a best documentation which one can refer to explorer futher

## Author

* **Vinaykumar Gupta** - [LinkedIn](https://in.linkedin.com/in/vinaygupta2050)


