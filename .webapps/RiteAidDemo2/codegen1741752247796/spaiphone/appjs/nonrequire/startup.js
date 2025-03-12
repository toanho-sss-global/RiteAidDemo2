voltmx.appinit.setApplicationMetaConfiguration("appid", "Sample");
voltmx.appinit.setApplicationMetaConfiguration("build", "debug");
//startup.js
var appConfig = {
    appId: "Sample",
    appName: "SampleRiteAid",
    appVersion: "1.0.0",
    isturlbase: "https://m100004273001.demo-hclvoltmx.net/services",
    isDebug: true,
    hotReloadURL: "ws://10.1.0.115:9099",
    isMFApp: true,
    appKey: "540b58e5ec8f0f48ac488274c64b771a",
    appSecret: "5bdce3fc2c74925c7f103181c167655d",
    serviceUrl: "https://100004273.auth.demo-hclvoltmx.net/appconfig",
    svcDoc: {
        "selflink": "https://100004273.auth.demo-hclvoltmx.net/appconfig",
        "app_version": "1.0",
        "integsvc": {
            "_internal_logout": "https://m100004273001.demo-hclvoltmx.net/services/IST",
            "VendureApis": "https://m100004273001.demo-hclvoltmx.net/services/VendureApis"
        },
        "service_doc_etag": "000001958858E8B8",
        "appId": "068a5c69-ff8f-4fb8-ba85-1622b18f3bb5",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "SampleRiteAid",
        "reportingsvc": {
            "session": "https://m100004273001.demo-hclvoltmx.net/services/IST",
            "custom": "https://m100004273001.demo-hclvoltmx.net/services/CMS"
        },
        "baseId": "892eacf7-9d72-47b2-b8c6-8f04092b89c7",
        "app_default_version": "1.0",
        "services_meta": {
            "VendureApis": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://m100004273001.demo-hclvoltmx.net/services/VendureApis"
            }
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: [],
};
sessionID = "";

function setAppBehaviors() {
    voltmx.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        APILevel: 8300,
        strictMode: false,
        isCompositeApp: false
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: voltmx.appinit.getStaticContentPath() + 'spaiphone/appjs'
    });
    require(['kvmodules'], function() {
        applicationController = require("applicationController");
        callAppMenu();
        voltmx.application.setApplicationInitializationEvents({
            init: applicationController.appInit,
            postappinit: applicationController.postAppInitCallBack,
            showstartupform: function() {
                new voltmx.mvc.Navigation("Login").navigate();
            }
        });
    });
};

function loadResources() {
    _kony.mvc.initCompositeApp(false);
    voltmx.theme.packagedthemes(["default"]);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl,
    }
    voltmx.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    voltmx.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    voltmx.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //This is the entry point for the application.When Locale comes,Local API call will be the entry point.
    loadResources();
};
debugger;