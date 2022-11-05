$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BOACreditCardOptions.feature");
formatter.feature({
  "line": 2,
  "name": "BOA Credit Card functionality.",
  "description": "",
  "id": "boa-credit-card-functionality.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@DP003"
    }
  ]
});
formatter.before({
  "duration": 2517243400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Shop for all kinds of credit card.",
  "description": "",
  "id": "boa-credit-card-functionality.;shop-for-all-kinds-of-credit-card.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Bank of America Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Choose cards option",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click Credit card tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Shop for all credit card options should be appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "BOAHomepageSteps.open_Bank_of_America_Homepage()"
});
formatter.result({
  "duration": 762111800,
  "status": "passed"
});
formatter.match({
  "location": "BOAHomepageSteps.choose_cards_option()"
});
formatter.result({
  "duration": 477580400,
  "status": "passed"
});
formatter.match({
  "location": "BOAHomepageSteps.click_Credit_card_tab()"
});
formatter.result({
  "duration": 321541200,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d103.0.5060.53)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027NOOR\u0027, ip: \u0027192.168.1.182\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.53, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\noorr\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64776}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 173690e4c335f90082ec6f307bf96e4b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat upskill.pageAction.BOAHomepageActions.ChooseCreditCard(BOAHomepageActions.java:42)\r\n\tat upskill.stepDef.BOAHomepageSteps.click_Credit_card_tab(BOAHomepageSteps.java:38)\r\n\tat ✽.And Click Credit card tab(BOACreditCardOptions.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BOASearchResultsSteps.shop_for_all_credit_card_options_should_be_appeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("BOASearchFunctionality.feature");
formatter.feature({
  "line": 2,
  "name": "Bank of America Search Functionality",
  "description": "",
  "id": "bank-of-america-search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@DP-004"
    }
  ]
});
formatter.before({
  "duration": 1984050300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search for Home loan in Bank of America",
  "description": "",
  "id": "bank-of-america-search-functionality;search-for-home-loan-in-bank-of-america",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Open Bank of America Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click search key",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Search for Home loan",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Home loan related products should be appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "BOAHomepageSteps.open_Bank_of_America_Homepage()"
});
formatter.result({
  "duration": 795956900,
  "status": "passed"
});
formatter.match({
  "location": "BOAHomepageSteps.click_search_key()"
});
formatter.result({
  "duration": 804833100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027spa-icon circle-icon-search spa-circle-btn-icon\u0027]\"}\n  (Session info: chrome\u003d103.0.5060.53)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027NOOR\u0027, ip: \u0027192.168.1.182\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.53, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\noorr\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64852}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9c6827ae6eaca21f9c12d3b70ace99a0\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027spa-icon circle-icon-search spa-circle-btn-icon\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat upskill.pageAction.BOAHomepageActions.ClickSearchKeys(BOAHomepageActions.java:29)\r\n\tat upskill.stepDef.BOAHomepageSteps.click_search_key(BOAHomepageSteps.java:18)\r\n\tat ✽.And Click search key(BOASearchFunctionality.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BOAHomepageSteps.search_for_Home_loan()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BOAHomepageSteps.click_on_Search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BOASearchResultsSteps.home_loan_related_products_should_be_appeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("CorningBrandOutline.feature");
formatter.feature({
  "line": 3,
  "name": "Corning brand outline",
  "description": "",
  "id": "corning-brand-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@DP-002"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Search for items with products name",
  "description": "",
  "id": "corning-brand-outline;search-for-items-with-products-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "open Corning homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Search by the \"\u003cItems\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "filter by \"\u003cType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Item list should have only open by \"\u003cType\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "corning-brand-outline;search-for-items-with-products-name;",
  "rows": [
    {
      "cells": [
        "Items",
        "Type"
      ],
      "line": 13,
      "id": "corning-brand-outline;search-for-items-with-products-name;;1"
    },
    {
      "cells": [
        "Central Hub",
        "Optical"
      ],
      "line": 14,
      "id": "corning-brand-outline;search-for-items-with-products-name;;2"
    },
    {
      "cells": [
        "Flasks",
        "Medical"
      ],
      "line": 15,
      "id": "corning-brand-outline;search-for-items-with-products-name;;3"
    },
    {
      "cells": [
        "Tubing",
        "Optical"
      ],
      "line": 16,
      "id": "corning-brand-outline;search-for-items-with-products-name;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2095615500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search for items with products name",
  "description": "",
  "id": "corning-brand-outline;search-for-items-with-products-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@DP-002"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "open Corning homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Search by the \"Central Hub\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "filter by \"Optical\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Item list should have only open by \"Optical\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CorningHomepageSteps.open_Corning_homepage()"
});
formatter.result({
  "duration": 419084600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Central Hub",
      "offset": 15
    }
  ],
  "location": "CorningHomepageSteps.search_by_the(String)"
});
formatter.result({
  "duration": 87871700,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d103.0.5060.53)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027NOOR\u0027, ip: \u0027192.168.1.182\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.53, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\noorr\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64932}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0eb6535005ff9caad103e81752cefc74\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:100)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat upskill.pageAction.CorningHomepageActions.SearchItems(CorningHomepageActions.java:44)\r\n\tat upskill.stepDef.CorningHomepageSteps.search_by_the(CorningHomepageSteps.java:40)\r\n\tat ✽.When Search by the \"Central Hub\"(CorningBrandOutline.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Optical",
      "offset": 11
    }
  ],
  "location": "CorningSearchResultSteps.filter_by(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Optical",
      "offset": 36
    }
  ],
  "location": "CorningSearchResultSteps.item_list_should_have_only_open_by(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 1972851800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Search for items with products name",
  "description": "",
  "id": "corning-brand-outline;search-for-items-with-products-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@DP-002"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "open Corning homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Search by the \"Flasks\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "filter by \"Medical\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Item list should have only open by \"Medical\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CorningHomepageSteps.open_Corning_homepage()"
});
formatter.result({
  "duration": 353123400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Flasks",
      "offset": 15
    }
  ],
  "location": "CorningHomepageSteps.search_by_the(String)"
});
formatter.result({
  "duration": 61266100,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d103.0.5060.53)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027NOOR\u0027, ip: \u0027192.168.1.182\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.53, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\noorr\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64959}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c178cc51d4d5395e88eb2f362f0dfe43\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:100)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat upskill.pageAction.CorningHomepageActions.SearchItems(CorningHomepageActions.java:44)\r\n\tat upskill.stepDef.CorningHomepageSteps.search_by_the(CorningHomepageSteps.java:40)\r\n\tat ✽.When Search by the \"Flasks\"(CorningBrandOutline.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Medical",
      "offset": 11
    }
  ],
  "location": "CorningSearchResultSteps.filter_by(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Medical",
      "offset": 36
    }
  ],
  "location": "CorningSearchResultSteps.item_list_should_have_only_open_by(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 2715239800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Search for items with products name",
  "description": "",
  "id": "corning-brand-outline;search-for-items-with-products-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@DP-002"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "open Corning homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Search by the \"Tubing\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "filter by \"Optical\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Item list should have only open by \"Optical\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CorningHomepageSteps.open_Corning_homepage()"
});
formatter.result({
  "duration": 685651900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tubing",
      "offset": 15
    }
  ],
  "location": "CorningHomepageSteps.search_by_the(String)"
});
formatter.result({
  "duration": 124995800,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d103.0.5060.53)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027NOOR\u0027, ip: \u0027192.168.1.182\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.53, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\noorr\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64989}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0ca879bb7b9d4925af9130e389b3bebc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:100)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat upskill.pageAction.CorningHomepageActions.SearchItems(CorningHomepageActions.java:44)\r\n\tat upskill.stepDef.CorningHomepageSteps.search_by_the(CorningHomepageSteps.java:40)\r\n\tat ✽.When Search by the \"Tubing\"(CorningBrandOutline.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Optical",
      "offset": 11
    }
  ],
  "location": "CorningSearchResultSteps.filter_by(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Optical",
      "offset": 36
    }
  ],
  "location": "CorningSearchResultSteps.item_list_should_have_only_open_by(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("CorningSearchFunctionality.feature");
formatter.feature({
  "line": 2,
  "name": "Corning Search Functionality",
  "description": "",
  "id": "corning-search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@Feature03"
    }
  ]
});
formatter.before({
  "duration": 3051163300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Search for optical items",
  "description": "",
  "id": "corning-search-functionality;search-for-optical-items",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Open Corning Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click on Search box",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Search for optical",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Optical items should be appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "CorningHomepageSteps.open_Corning_Homepage()"
});
formatter.result({
  "duration": 660549900,
  "status": "passed"
});
formatter.match({
  "location": "CorningHomepageSteps.click_on_Search_box()"
});
formatter.result({
  "duration": 145648700,
  "status": "passed"
});
formatter.match({
  "location": "CorningHomepageSteps.search_for_optical()"
});
formatter.result({
  "duration": 3476236700,
  "status": "passed"
});
formatter.match({
  "location": "CorningHomepageSteps.click_on_Submit_button()"
});
formatter.result({
  "duration": 465171000,
  "status": "passed"
});
formatter.match({
  "location": "CorningSearchResultSteps.optical_items_should_be_appeared()"
});
formatter.result({
  "duration": 25627900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d \u0027product-result__product-code\u0027]\"}\n  (Session info: chrome\u003d103.0.5060.53)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027NOOR\u0027, ip: \u0027192.168.1.182\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.53, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\noorr\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65014}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 85952f1cd834a03fd716950b3c2cf330\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d \u0027product-result__product-code\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\r\n\tat upskill.pageAction.CorningSearchResultsActions.verifyOptical(CorningSearchResultsActions.java:20)\r\n\tat upskill.stepDef.CorningSearchResultSteps.optical_items_should_be_appeared(CorningSearchResultSteps.java:14)\r\n\tat ✽.Then Optical items should be appeared(CorningSearchFunctionality.feature:10)\r\n",
  "status": "failed"
});
formatter.uri("NorthwellMakeAppointment.feature");
formatter.feature({
  "line": 2,
  "name": "Northwell Make appoinment",
  "description": "",
  "id": "northwell-make-appoinment",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@DP005"
    }
  ]
});
formatter.before({
  "duration": 3213181900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Make appoinment for doctor",
  "description": "",
  "id": "northwell-make-appoinment;make-appoinment-for-doctor",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Northwell homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click make appoinment",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Find a doctor option should be appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "NorthwellHomepageSteps.open_Northwell_homepage()"
});
formatter.result({
  "duration": 5374550700,
  "status": "passed"
});
formatter.match({
  "location": "NorthwellHomepageSteps.click_make_appoinment()"
});
formatter.result({
  "duration": 2109577100,
  "status": "passed"
});
formatter.match({
  "location": "NorthwellMakeAppointmentSteps.find_a_doctor_option_should_be_appeared()"
});
formatter.result({
  "duration": 1197000,
  "error_message": "java.lang.NullPointerException\r\n\tat upskill.pageAction.NorthwellMakeAppoitmentActions.FindDoctors(NorthwellMakeAppoitmentActions.java:10)\r\n\tat upskill.stepDef.NorthwellMakeAppointmentSteps.find_a_doctor_option_should_be_appeared(NorthwellMakeAppointmentSteps.java:12)\r\n\tat ✽.Then Find a doctor option should be appeared(NorthwellMakeAppointment.feature:7)\r\n",
  "status": "failed"
});
});