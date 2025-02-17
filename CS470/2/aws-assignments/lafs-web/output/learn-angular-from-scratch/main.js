(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./sdk/index.ts":
/*!**********************!*\
  !*** ./sdk/index.ts ***!
  \**********************/
/*! exports provided: SDKBrowserModule, CookieBrowser, StorageBrowser, LoopBackConfig, BaseStorage, InternalStorage, SDKStorage, User, Question, Answer, AccessToken, SDKToken, LoopBackAuth, ErrorHandler, JSONSearchParams, UserApi, QuestionApi, AnswerApi, SDKModels, LoggerService, BaseLoopBackApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKBrowserModule", function() { return SDKBrowserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_core_search_params__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/core/search.params */ "./sdk/services/core/search.params.ts");
/* harmony import */ var _services_core_error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/core/error.service */ "./sdk/services/core/error.service.ts");
/* harmony import */ var _services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/core/auth.service */ "./sdk/services/core/auth.service.ts");
/* harmony import */ var _services_custom_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/custom/logger.service */ "./sdk/services/custom/logger.service.ts");
/* harmony import */ var _services_custom_SDKModels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/custom/SDKModels */ "./sdk/services/custom/SDKModels.ts");
/* harmony import */ var _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage/storage.swaps */ "./sdk/storage/storage.swaps.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_cookie_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./storage/cookie.browser */ "./sdk/storage/cookie.browser.ts");
/* harmony import */ var _storage_storage_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./storage/storage.browser */ "./sdk/storage/storage.browser.ts");
/* harmony import */ var _services_custom_User__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/custom/User */ "./sdk/services/custom/User.ts");
/* harmony import */ var _services_custom_Question__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/custom/Question */ "./sdk/services/custom/Question.ts");
/* harmony import */ var _services_custom_Answer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/custom/Answer */ "./sdk/services/custom/Answer.ts");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./models/index */ "./sdk/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _models_index__WEBPACK_IMPORTED_MODULE_15__["User"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return _models_index__WEBPACK_IMPORTED_MODULE_15__["Question"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return _models_index__WEBPACK_IMPORTED_MODULE_15__["Answer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return _models_index__WEBPACK_IMPORTED_MODULE_15__["AccessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKToken", function() { return _models_index__WEBPACK_IMPORTED_MODULE_15__["SDKToken"]; });

/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/index */ "./sdk/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopBackAuth", function() { return _services_index__WEBPACK_IMPORTED_MODULE_16__["LoopBackAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return _services_index__WEBPACK_IMPORTED_MODULE_16__["ErrorHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSONSearchParams", function() { return _services_index__WEBPACK_IMPORTED_MODULE_16__["JSONSearchParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_16__["UserApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_16__["QuestionApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnswerApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_16__["AnswerApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKModels", function() { return _services_index__WEBPACK_IMPORTED_MODULE_16__["SDKModels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _services_index__WEBPACK_IMPORTED_MODULE_16__["LoggerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLoopBackApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_16__["BaseLoopBackApi"]; });

/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lb.config */ "./sdk/lb.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopBackConfig", function() { return _lb_config__WEBPACK_IMPORTED_MODULE_17__["LoopBackConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseStorage", function() { return _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_6__["BaseStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InternalStorage", function() { return _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_6__["InternalStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKStorage", function() { return _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_6__["SDKStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CookieBrowser", function() { return _storage_cookie_browser__WEBPACK_IMPORTED_MODULE_10__["CookieBrowser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageBrowser", function() { return _storage_storage_browser__WEBPACK_IMPORTED_MODULE_11__["StorageBrowser"]; });


/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/














/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
var SDKBrowserModule = /** @class */ (function () {
    function SDKBrowserModule() {
    }
    SDKBrowserModule_1 = SDKBrowserModule;
    SDKBrowserModule.forRoot = function (internalStorageProvider) {
        if (internalStorageProvider === void 0) { internalStorageProvider = {
            provide: _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_6__["InternalStorage"],
            useClass: _storage_cookie_browser__WEBPACK_IMPORTED_MODULE_10__["CookieBrowser"]
        }; }
        return {
            ngModule: SDKBrowserModule_1,
            providers: [
                _services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["LoopBackAuth"],
                _services_custom_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"],
                _services_core_search_params__WEBPACK_IMPORTED_MODULE_1__["JSONSearchParams"],
                _services_custom_SDKModels__WEBPACK_IMPORTED_MODULE_5__["SDKModels"],
                _services_custom_User__WEBPACK_IMPORTED_MODULE_12__["UserApi"],
                _services_custom_Question__WEBPACK_IMPORTED_MODULE_13__["QuestionApi"],
                _services_custom_Answer__WEBPACK_IMPORTED_MODULE_14__["AnswerApi"],
                internalStorageProvider,
                { provide: _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_6__["SDKStorage"], useClass: _storage_storage_browser__WEBPACK_IMPORTED_MODULE_11__["StorageBrowser"] }
            ]
        };
    };
    var SDKBrowserModule_1;
    SDKBrowserModule = SDKBrowserModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"]],
            declarations: [],
            exports: [],
            providers: [
                _services_core_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"]
            ]
        })
    ], SDKBrowserModule);
    return SDKBrowserModule;
}());

/**
* Have Fun!!!
* - Jon
**/








/***/ }),

/***/ "./sdk/lb.config.ts":
/*!**************************!*\
  !*** ./sdk/lb.config.ts ***!
  \**************************/
/*! exports provided: LoopBackConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoopBackConfig", function() { return LoopBackConfig; });
/* tslint:disable */
/**
* @module LoopBackConfig
* @description
*
* The LoopBackConfig module help developers to externally
* configure the base url and api version for loopback.io
*
* Example
*
* import { LoopBackConfig } from './sdk';
*
* @Component() // No metadata needed for this module
*
* export class MyApp {
*   constructor() {
*     LoopBackConfig.setBaseURL('http://localhost:3000');
*     LoopBackConfig.setApiVersion('api');
*   }
* }
**/
var LoopBackConfig = /** @class */ (function () {
    function LoopBackConfig() {
    }
    LoopBackConfig.setApiVersion = function (version) {
        if (version === void 0) { version = 'api'; }
        LoopBackConfig.version = version;
    };
    LoopBackConfig.getApiVersion = function () {
        return LoopBackConfig.version;
    };
    LoopBackConfig.setBaseURL = function (url) {
        if (url === void 0) { url = '/'; }
        LoopBackConfig.path = url;
    };
    LoopBackConfig.getPath = function () {
        return LoopBackConfig.path;
    };
    LoopBackConfig.setAuthPrefix = function (authPrefix) {
        if (authPrefix === void 0) { authPrefix = ''; }
        LoopBackConfig.authPrefix = authPrefix;
    };
    LoopBackConfig.getAuthPrefix = function () {
        return LoopBackConfig.authPrefix;
    };
    LoopBackConfig.setDebugMode = function (isEnabled) {
        LoopBackConfig.debug = isEnabled;
    };
    LoopBackConfig.debuggable = function () {
        return LoopBackConfig.debug;
    };
    LoopBackConfig.filterOnUrl = function () {
        LoopBackConfig.filterOn = 'url';
    };
    LoopBackConfig.filterOnHeaders = function () {
        LoopBackConfig.filterOn = 'headers';
    };
    LoopBackConfig.isHeadersFilteringSet = function () {
        return (LoopBackConfig.filterOn === 'headers');
    };
    LoopBackConfig.setSecureWebSockets = function () {
        LoopBackConfig.secure = true;
    };
    LoopBackConfig.unsetSecureWebSockets = function () {
        LoopBackConfig.secure = false;
    };
    LoopBackConfig.isSecureWebSocketsSet = function () {
        return LoopBackConfig.secure;
    };
    LoopBackConfig.setRequestOptionsCredentials = function (withCredentials) {
        if (withCredentials === void 0) { withCredentials = false; }
        LoopBackConfig.withCredentials = withCredentials;
    };
    LoopBackConfig.getRequestOptionsCredentials = function () {
        return LoopBackConfig.withCredentials;
    };
    LoopBackConfig.path = '//0.0.0.0:3000';
    LoopBackConfig.version = 'api';
    LoopBackConfig.authPrefix = '';
    LoopBackConfig.debug = true;
    LoopBackConfig.filterOn = 'headers';
    LoopBackConfig.secure = false;
    LoopBackConfig.withCredentials = false;
    return LoopBackConfig;
}());



/***/ }),

/***/ "./sdk/models/Answer.ts":
/*!******************************!*\
  !*** ./sdk/models/Answer.ts ***!
  \******************************/
/*! exports provided: Answer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
var Answer = /** @class */ (function () {
    function Answer(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Answer`.
     */
    Answer.getModelName = function () {
        return "Answer";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Answer for dynamic purposes.
    **/
    Answer.factory = function (data) {
        return new Answer(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Answer.getModelDefinition = function () {
        return {
            name: 'Answer',
            plural: 'Answers',
            path: 'Answers',
            idName: 'id',
            properties: {
                "answer": {
                    name: 'answer',
                    type: 'string'
                },
                "negativeVotes": {
                    name: 'negativeVotes',
                    type: 'number',
                    default: 0
                },
                "positiveVotes": {
                    name: 'positiveVotes',
                    type: 'number',
                    default: 0
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "questionId": {
                    name: 'questionId',
                    type: 'any'
                },
            },
            relations: {
                question: {
                    name: 'question',
                    type: 'Question',
                    model: 'Question',
                    relationType: 'belongsTo',
                    keyFrom: 'questionId',
                    keyTo: 'id'
                },
            }
        };
    };
    return Answer;
}());



/***/ }),

/***/ "./sdk/models/BaseModels.ts":
/*!**********************************!*\
  !*** ./sdk/models/BaseModels.ts ***!
  \**********************************/
/*! exports provided: AccessToken, SDKToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return AccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKToken", function() { return SDKToken; });
/* tslint:disable */
var AccessToken = /** @class */ (function () {
    function AccessToken(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `AccessToken`.
     */
    AccessToken.getModelName = function () {
        return "AccessToken";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of AccessToken for dynamic purposes.
    **/
    AccessToken.factory = function (data) {
        return new AccessToken(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    AccessToken.getModelDefinition = function () {
        return {
            name: 'AccessToken',
            plural: 'AccessTokens',
            properties: {
                "id": {
                    name: 'id',
                    type: 'string'
                },
                "ttl": {
                    name: 'ttl',
                    type: 'number',
                    default: 1209600
                },
                "scopes": {
                    name: 'scopes',
                    type: '["string"]'
                },
                "created": {
                    name: 'created',
                    type: 'Date'
                },
                "userId": {
                    name: 'userId',
                    type: 'string'
                },
            },
            relations: {
                user: {
                    name: 'user',
                    type: 'User',
                    model: 'User'
                },
            }
        };
    };
    return AccessToken;
}());

var SDKToken = /** @class */ (function () {
    function SDKToken(data) {
        this.id = null;
        this.ttl = null;
        this.scopes = null;
        this.created = null;
        this.userId = null;
        this.user = null;
        this.rememberMe = null;
        Object.assign(this, data);
    }
    return SDKToken;
}());



/***/ }),

/***/ "./sdk/models/Question.ts":
/*!********************************!*\
  !*** ./sdk/models/Question.ts ***!
  \********************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
var Question = /** @class */ (function () {
    function Question(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Question`.
     */
    Question.getModelName = function () {
        return "Question";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Question for dynamic purposes.
    **/
    Question.factory = function (data) {
        return new Question(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Question.getModelDefinition = function () {
        return {
            name: 'Question',
            plural: 'Questions',
            path: 'Questions',
            idName: 'id',
            properties: {
                "categorySlug": {
                    name: 'categorySlug',
                    type: 'string'
                },
                "questionSlug": {
                    name: 'questionSlug',
                    type: 'string'
                },
                "question": {
                    name: 'question',
                    type: 'string'
                },
                "negativeVotes": {
                    name: 'negativeVotes',
                    type: 'number',
                    default: 0
                },
                "positiveVotes": {
                    name: 'positiveVotes',
                    type: 'number',
                    default: 0
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
            },
            relations: {
                answers: {
                    name: 'answers',
                    type: 'Answer[]',
                    model: 'Answer',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'questionId'
                },
            }
        };
    };
    return Question;
}());



/***/ }),

/***/ "./sdk/models/User.ts":
/*!****************************!*\
  !*** ./sdk/models/User.ts ***!
  \****************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* tslint:disable */
var User = /** @class */ (function () {
    function User(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `User`.
     */
    User.getModelName = function () {
        return "User";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of User for dynamic purposes.
    **/
    User.factory = function (data) {
        return new User(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    User.getModelDefinition = function () {
        return {
            name: 'User',
            plural: 'Users',
            path: 'Users',
            idName: 'id',
            properties: {
                "realm": {
                    name: 'realm',
                    type: 'string'
                },
                "username": {
                    name: 'username',
                    type: 'string'
                },
                "email": {
                    name: 'email',
                    type: 'string'
                },
                "emailVerified": {
                    name: 'emailVerified',
                    type: 'boolean'
                },
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "password": {
                    name: 'password',
                    type: 'string'
                },
            },
            relations: {
                accessTokens: {
                    name: 'accessTokens',
                    type: 'any[]',
                    model: '',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'userId'
                },
            }
        };
    };
    return User;
}());



/***/ }),

/***/ "./sdk/models/index.ts":
/*!*****************************!*\
  !*** ./sdk/models/index.ts ***!
  \*****************************/
/*! exports provided: User, Question, Answer, AccessToken, SDKToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./sdk/models/User.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _User__WEBPACK_IMPORTED_MODULE_0__["User"]; });

/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Question */ "./sdk/models/Question.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return _Question__WEBPACK_IMPORTED_MODULE_1__["Question"]; });

/* harmony import */ var _Answer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Answer */ "./sdk/models/Answer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return _Answer__WEBPACK_IMPORTED_MODULE_2__["Answer"]; });

/* harmony import */ var _BaseModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseModels */ "./sdk/models/BaseModels.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return _BaseModels__WEBPACK_IMPORTED_MODULE_3__["AccessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKToken", function() { return _BaseModels__WEBPACK_IMPORTED_MODULE_3__["SDKToken"]; });

/* tslint:disable */






/***/ }),

/***/ "./sdk/services/core/auth.service.ts":
/*!*******************************************!*\
  !*** ./sdk/services/core/auth.service.ts ***!
  \*******************************************/
/*! exports provided: LoopBackAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoopBackAuth", function() { return LoopBackAuth; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../storage/storage.swaps */ "./sdk/storage/storage.swaps.ts");
/* harmony import */ var _models_BaseModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/BaseModels */ "./sdk/models/BaseModels.ts");




/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var LoopBackAuth = /** @class */ (function () {
    /**
     * @method constructor
     * @param {InternalStorage} storage Internal Storage Driver
     * @description
     * The constructor will initialize the token loading data from storage
     **/
    function LoopBackAuth(storage) {
        this.storage = storage;
        /**
         * @type {SDKToken}
         **/
        this.token = new _models_BaseModels__WEBPACK_IMPORTED_MODULE_3__["SDKToken"]();
        /**
         * @type {string}
         **/
        this.prefix = '$LoopBackSDK$';
        this.token.id = this.load('id');
        this.token.user = this.load('user');
        this.token.userId = this.load('userId');
        this.token.created = this.load('created');
        this.token.ttl = this.load('ttl');
        this.token.rememberMe = this.load('rememberMe');
    }
    /**
     * @method setRememberMe
     * @param {boolean} value Flag to remember credentials
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setRememberMe = function (value) {
        this.token.rememberMe = value;
    };
    /**
     * @method setUser
     * @param {any} user Any type of user model
     * @return {void}
     * @description
     * This method will update the user information and persist it if the
     * rememberMe flag is set.
     **/
    LoopBackAuth.prototype.setUser = function (user) {
        this.token.user = user;
        this.save();
    };
    /**
     * @method setToken
     * @param {SDKToken} token SDKToken or casted AccessToken instance
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setToken = function (token) {
        this.token = Object.assign({}, this.token, token);
        this.save();
    };
    /**
     * @method getToken
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials.
     **/
    LoopBackAuth.prototype.getToken = function () {
        return this.token;
    };
    /**
     * @method getAccessTokenId
     * @return {string}
     * @description
     * This method will return the actual token string, not the object instance.
     **/
    LoopBackAuth.prototype.getAccessTokenId = function () {
        return this.token.id;
    };
    /**
     * @method getCurrentUserId
     * @return {any}
     * @description
     * This method will return the current user id, it can be number or string.
     **/
    LoopBackAuth.prototype.getCurrentUserId = function () {
        return this.token.userId;
    };
    /**
     * @method getCurrentUserData
     * @return {any}
     * @description
     * This method will return the current user instance.
     **/
    LoopBackAuth.prototype.getCurrentUserData = function () {
        return (typeof this.token.user === 'string') ? JSON.parse(this.token.user) : this.token.user;
    };
    /**
     * @method save
     * @return {boolean} Whether or not the information was saved
     * @description
     * This method will save in either local storage or cookies the current credentials.
     * But only if rememberMe is enabled.
     **/
    LoopBackAuth.prototype.save = function () {
        var today = new Date();
        var expires = new Date(today.getTime() + (this.token.ttl * 1000));
        this.persist('id', this.token.id, expires);
        this.persist('user', this.token.user, expires);
        this.persist('userId', this.token.userId, expires);
        this.persist('created', this.token.created, expires);
        this.persist('ttl', this.token.ttl, expires);
        this.persist('rememberMe', this.token.rememberMe, expires);
        return true;
    };
    ;
    /**
     * @method load
     * @param {string} prop Property name
     * @return {any} Any information persisted in storage
     * @description
     * This method will load either from local storage or cookies the provided property.
     **/
    LoopBackAuth.prototype.load = function (prop) {
        return this.storage.get("" + this.prefix + prop);
    };
    /**
     * @method clear
     * @return {void}
     * @description
     * This method will clear cookies or the local storage.
     **/
    LoopBackAuth.prototype.clear = function () {
        var _this = this;
        Object.keys(this.token).forEach(function (prop) { return _this.storage.remove("" + _this.prefix + prop); });
        this.token = new _models_BaseModels__WEBPACK_IMPORTED_MODULE_3__["SDKToken"]();
    };
    /**
     * @method persist
     * @return {void}
     * @description
     * This method saves values to storage
     **/
    LoopBackAuth.prototype.persist = function (prop, value, expires) {
        try {
            this.storage.set("" + this.prefix + prop, (typeof value === 'object') ? JSON.stringify(value) : value, this.token.rememberMe ? expires : null);
        }
        catch (err) {
            console.error('Cannot access local/session storage:', err);
        }
    };
    LoopBackAuth = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_storage_storage_swaps__WEBPACK_IMPORTED_MODULE_2__["InternalStorage"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_storage_swaps__WEBPACK_IMPORTED_MODULE_2__["InternalStorage"]])
    ], LoopBackAuth);
    return LoopBackAuth;
}());



/***/ }),

/***/ "./sdk/services/core/base.service.ts":
/*!*******************************************!*\
  !*** ./sdk/services/core/base.service.ts ***!
  \*******************************************/
/*! exports provided: BaseLoopBackApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoopBackApi", function() { return BaseLoopBackApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _search_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.params */ "./sdk/services/core/search.params.ts");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error.service */ "./sdk/services/core/error.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./sdk/services/core/auth.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lb.config */ "./sdk/lb.config.ts");
/* harmony import */ var _custom_SDKModels__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../custom/SDKModels */ "./sdk/services/custom/SDKModels.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");

/* tslint:disable */










/**
* @module BaseLoopBackApi
* @author Jonathan Casarrubias <@johncasarrubias> <github:jonathan-casarrubias>
* @author Nikolay Matiushenkov <https://github.com/mnvx>
* @license MIT
* @description
* Abstract class that will be implemented in every custom service automatically built
* by the sdk builder.
* It provides the core functionallity for every API call, either by HTTP Calls or by
* WebSockets.
**/
var BaseLoopBackApi = /** @class */ (function () {
    function BaseLoopBackApi(http, models, auth, searchParams, errorHandler) {
        this.http = http;
        this.models = models;
        this.auth = auth;
        this.searchParams = searchParams;
        this.errorHandler = errorHandler;
        this.model = this.models.get(this.getModelName());
    }
    /**
     * @method request
     * @param {string}  method      Request method (GET, POST, PUT)
     * @param {string}  url         Request url (my-host/my-url/:id)
     * @param {any}     routeParams Values of url parameters
     * @param {any}     urlParams   Parameters for building url (filter and other)
     * @param {any}     postBody    Request postBody
     * @return {Observable<any>}
     * @description
     * This is a core method, every HTTP Call will be done from here, every API Service will
     * extend this class and use this method to get RESTful communication.
     **/
    BaseLoopBackApi.prototype.request = function (method, url, routeParams, urlParams, postBody, pubsub, customHeaders) {
        var _this = this;
        if (routeParams === void 0) { routeParams = {}; }
        if (urlParams === void 0) { urlParams = {}; }
        if (postBody === void 0) { postBody = {}; }
        if (pubsub === void 0) { pubsub = false; }
        // Transpile route variables to the actual request Values
        Object.keys(routeParams).forEach(function (key) {
            url = url.replace(new RegExp(":" + key + "(\/|$)", "g"), routeParams[key] + "$1");
        });
        if (pubsub) {
            console.info('SDK: PubSub functionality is disabled, generate SDK using -io enabled');
        }
        else {
            // Headers to be sent
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Content-Type', 'application/json');
            // Authenticate request
            this.authenticate(url, headers);
            // Body fix for built in remote methods using "data", "options" or "credentials
            // that are the actual body, Custom remote method properties are different and need
            // to be wrapped into a body object
            var body = void 0;
            var postBodyKeys = typeof postBody === 'object' ? Object.keys(postBody) : [];
            if (postBodyKeys.length === 1) {
                body = postBody[postBodyKeys.shift()];
            }
            else {
                body = postBody;
            }
            var filter = '';
            // Separate filter object from url params and add to search query
            if (urlParams.filter) {
                if (_lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].isHeadersFilteringSet()) {
                    headers.append('filter', JSON.stringify(urlParams.filter));
                }
                else {
                    filter = "?filter=" + encodeURIComponent(JSON.stringify(urlParams.filter));
                }
                delete urlParams.filter;
            }
            // Separate where object from url params and add to search query
            /**
            CODE BELOW WILL GENERATE THE FOLLOWING ISSUES:
            - https://github.com/mean-expert-official/loopback-sdk-builder/issues/356
            - https://github.com/mean-expert-official/loopback-sdk-builder/issues/328
            if (urlParams.where) {
              headers.append('where', JSON.stringify(urlParams.where));
              delete urlParams.where;
            }
            **/
            if (typeof customHeaders === 'function') {
                headers = customHeaders(headers);
            }
            this.searchParams.setJSON(urlParams);
            var request = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Request"](new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({
                headers: headers,
                method: method,
                url: "" + url + filter,
                search: Object.keys(urlParams).length > 0 ? this.searchParams.getURLSearchParams() : null,
                body: body ? JSON.stringify(body) : undefined,
                withCredentials: _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getRequestOptionsCredentials()
            }));
            return this.http.request(request)
                .map(function (res) { return (res.text() != "" ? res.json() : {}); })
                .catch(function (e) { return _this.errorHandler.handleError(e); });
        }
    };
    /**
     * @method authenticate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {string} url Server URL
     * @param {Headers} headers HTTP Headers
     * @return {void}
     * @description
     * This method will try to authenticate using either an access_token or basic http auth
     */
    BaseLoopBackApi.prototype.authenticate = function (url, headers) {
        if (this.auth.getAccessTokenId()) {
            headers.append('Authorization', _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getAuthPrefix() + this.auth.getAccessTokenId());
        }
    };
    /**
     * @method create
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic create method
     */
    BaseLoopBackApi.prototype.create = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method createMany
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.createMany = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .map(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); });
    };
    /**
     * @method findById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {any} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic findById method
     */
    BaseLoopBackApi.prototype.findById = function (id, filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        var _urlParams = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, _urlParams, undefined, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method find
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[+>}
     * @description
     * Generic find method
     */
    BaseLoopBackApi.prototype.find = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .map(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); });
    };
    /**
     * @method exists
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic exists method
     */
    BaseLoopBackApi.prototype.exists = function (id, customHeaders) {
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id/exists'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders);
    };
    /**
     * @method findOne
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic findOne method
     */
    BaseLoopBackApi.prototype.findOne = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'findOne'
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method updateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic updateAll method
     */
    BaseLoopBackApi.prototype.updateAll = function (where, data, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'update'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders);
    };
    /**
     * @method deleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic deleteById method
     */
    BaseLoopBackApi.prototype.deleteById = function (id, customHeaders) {
        var _this = this;
        return this.request('DELETE', [
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method count
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<{ count: number }>}
     * @description
     * Generic count method
     */
    BaseLoopBackApi.prototype.count = function (where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'count'
        ].join('/'), undefined, _urlParams, undefined, null, customHeaders);
    };
    /**
     * @method updateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic updateAttributes method
     */
    BaseLoopBackApi.prototype.updateAttributes = function (id, data, customHeaders) {
        var _this = this;
        return this.request('PUT', [
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method upsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method
     */
    BaseLoopBackApi.prototype.upsert = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method upsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method using patch http method
     */
    BaseLoopBackApi.prototype.upsertPatch = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method upsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsertWithWhere method
     */
    BaseLoopBackApi.prototype.upsertWithWhere = function (where, data, customHeaders) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method replaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceOrCreate method
     */
    BaseLoopBackApi.prototype.replaceOrCreate = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method replaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceById method
     */
    BaseLoopBackApi.prototype.replaceById = function (id, data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method createChangeStream
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<any>}
     * @description
     * Generic createChangeStream method
     */
    BaseLoopBackApi.prototype.createChangeStream = function () {
        var subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        if (typeof EventSource !== 'undefined') {
            var emit = function (msg) { return subject.next(JSON.parse(msg.data)); };
            var source = new EventSource([
                _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getPath(),
                _lb_config__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].getApiVersion(),
                this.model.getModelDefinition().path,
                'change-stream'
            ].join('/'));
            source.addEventListener('data', emit);
            source.onerror = emit;
        }
        else {
            console.warn('SDK Builder: EventSource is not supported');
        }
        return subject.asObservable();
    };
    BaseLoopBackApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_custom_SDKModels__WEBPACK_IMPORTED_MODULE_7__["SDKModels"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_search_params__WEBPACK_IMPORTED_MODULE_3__["JSONSearchParams"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _custom_SDKModels__WEBPACK_IMPORTED_MODULE_7__["SDKModels"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _search_params__WEBPACK_IMPORTED_MODULE_3__["JSONSearchParams"],
            _error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"]])
    ], BaseLoopBackApi);
    return BaseLoopBackApi;
}());



/***/ }),

/***/ "./sdk/services/core/error.service.ts":
/*!********************************************!*\
  !*** ./sdk/services/core/error.service.ts ***!
  \********************************************/
/*! exports provided: ErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return ErrorHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");

/* tslint:disable */


//import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

/**
 * Default error handler
 */
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    // ErrorObservable when rxjs version < rc.5
    // ErrorObservable<string> when rxjs version = rc.5
    // I'm leaving any for now to avoid breaking apps using both versions
    ErrorHandler.prototype.handleError = function (error) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json().error || 'Server error');
    };
    ErrorHandler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ErrorHandler);
    return ErrorHandler;
}());



/***/ }),

/***/ "./sdk/services/core/index.ts":
/*!************************************!*\
  !*** ./sdk/services/core/index.ts ***!
  \************************************/
/*! exports provided: LoopBackAuth, ErrorHandler, JSONSearchParams, BaseLoopBackApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./sdk/services/core/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopBackAuth", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["LoopBackAuth"]; });

/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.service */ "./sdk/services/core/error.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return _error_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]; });

/* harmony import */ var _search_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.params */ "./sdk/services/core/search.params.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSONSearchParams", function() { return _search_params__WEBPACK_IMPORTED_MODULE_2__["JSONSearchParams"]; });

/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./sdk/services/core/base.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLoopBackApi", function() { return _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]; });

/* tslint:disable */






/***/ }),

/***/ "./sdk/services/core/search.params.ts":
/*!********************************************!*\
  !*** ./sdk/services/core/search.params.ts ***!
  \********************************************/
/*! exports provided: JSONSearchParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONSearchParams", function() { return JSONSearchParams; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");

/* tslint:disable */


/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module JSONSearchParams
* @license MIT
* @description
* JSON Parser and Wrapper for the Angular2 URLSearchParams
* This module correctly encodes a json object into a query string and then creates
* an instance of the URLSearchParams component for later use in HTTP Calls
**/
var JSONSearchParams = /** @class */ (function () {
    function JSONSearchParams() {
    }
    JSONSearchParams.prototype.setJSON = function (obj) {
        this._usp = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["URLSearchParams"](this._JSON2URL(obj, false));
    };
    JSONSearchParams.prototype.getURLSearchParams = function () {
        return this._usp;
    };
    JSONSearchParams.prototype._JSON2URL = function (obj, parent) {
        var parts = [];
        for (var key in obj)
            parts.push(this._parseParam(key, obj[key], parent));
        return parts.join('&');
    };
    JSONSearchParams.prototype._parseParam = function (key, value, parent) {
        var processedKey = parent ? parent + '[' + key + ']' : key;
        if (value && ((typeof value) === 'object' || Array.isArray(value))) {
            return this._JSON2URL(value, processedKey);
        }
        return processedKey + '=' + value;
    };
    JSONSearchParams = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], JSONSearchParams);
    return JSONSearchParams;
}());



/***/ }),

/***/ "./sdk/services/custom/Answer.ts":
/*!***************************************!*\
  !*** ./sdk/services/custom/Answer.ts ***!
  \***************************************/
/*! exports provided: AnswerApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerApi", function() { return AnswerApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SDKModels */ "./sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/base.service */ "./sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lb.config */ "./sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/auth.service */ "./sdk/services/core/auth.service.ts");
/* harmony import */ var _core_search_params__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/search.params */ "./sdk/services/core/search.params.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/error.service */ "./sdk/services/core/error.service.ts");

/* tslint:disable */








/**
 * Api services for the `Answer` model.
 */
var AnswerApi = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnswerApi, _super);
    function AnswerApi(http, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Fetches belongsTo relation question.
     *
     * @param {any} id answer id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Answer` object.)
     * </em>
     */
    AnswerApi.prototype.getQuestion = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/answers/:id/question";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Answer` object.)
     * </em>
     */
    AnswerApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/answers";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id answer id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Answer` object.)
     * </em>
     */
    AnswerApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/answers/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Answer`.
     */
    AnswerApi.prototype.getModelName = function () {
        return "Answer";
    };
    AnswerApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_3__["SDKModels"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["LoopBackAuth"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_search_params__WEBPACK_IMPORTED_MODULE_7__["JSONSearchParams"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandler"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_3__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_6__["LoopBackAuth"],
            _core_search_params__WEBPACK_IMPORTED_MODULE_7__["JSONSearchParams"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandler"]])
    ], AnswerApi);
    return AnswerApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseLoopBackApi"]));



/***/ }),

/***/ "./sdk/services/custom/Question.ts":
/*!*****************************************!*\
  !*** ./sdk/services/custom/Question.ts ***!
  \*****************************************/
/*! exports provided: QuestionApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionApi", function() { return QuestionApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SDKModels */ "./sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/base.service */ "./sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lb.config */ "./sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/auth.service */ "./sdk/services/core/auth.service.ts");
/* harmony import */ var _core_search_params__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/search.params */ "./sdk/services/core/search.params.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/error.service */ "./sdk/services/core/error.service.ts");

/* tslint:disable */








/**
 * Api services for the `Question` model.
 */
var QuestionApi = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](QuestionApi, _super);
    function QuestionApi(http, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Find a related item by id for answers.
     *
     * @param {any} id question id
     *
     * @param {any} fk Foreign key for answers
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Question` object.)
     * </em>
     */
    QuestionApi.prototype.findByIdAnswers = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/questions/:id/answers/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for answers.
     *
     * @param {any} id question id
     *
     * @param {any} fk Foreign key for answers
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    QuestionApi.prototype.destroyByIdAnswers = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/questions/:id/answers/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for answers.
     *
     * @param {any} id question id
     *
     * @param {any} fk Foreign key for answers
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Question` object.)
     * </em>
     */
    QuestionApi.prototype.updateByIdAnswers = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/questions/:id/answers/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries answers of question.
     *
     * @param {any} id question id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Question` object.)
     * </em>
     */
    QuestionApi.prototype.getAnswers = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/questions/:id/answers";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in answers of this model.
     *
     * @param {any} id question id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Question` object.)
     * </em>
     */
    QuestionApi.prototype.createAnswers = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/questions/:id/answers";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all answers of this model.
     *
     * @param {any} id question id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    QuestionApi.prototype.deleteAnswers = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/questions/:id/answers";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts answers of question.
     *
     * @param {any} id question id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    QuestionApi.prototype.countAnswers = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/questions/:id/answers/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Question` object.)
     * </em>
     */
    QuestionApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/questions";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id question id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Question` object.)
     * </em>
     */
    QuestionApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/questions/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in answers of this model.
     *
     * @param {any} id question id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Question` object.)
     * </em>
     */
    QuestionApi.prototype.createManyAnswers = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/questions/:id/answers";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Question`.
     */
    QuestionApi.prototype.getModelName = function () {
        return "Question";
    };
    QuestionApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_3__["SDKModels"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["LoopBackAuth"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_search_params__WEBPACK_IMPORTED_MODULE_7__["JSONSearchParams"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandler"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_3__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_6__["LoopBackAuth"],
            _core_search_params__WEBPACK_IMPORTED_MODULE_7__["JSONSearchParams"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandler"]])
    ], QuestionApi);
    return QuestionApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseLoopBackApi"]));



/***/ }),

/***/ "./sdk/services/custom/SDKModels.ts":
/*!******************************************!*\
  !*** ./sdk/services/custom/SDKModels.ts ***!
  \******************************************/
/*! exports provided: SDKModels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKModels", function() { return SDKModels; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User */ "./sdk/models/User.ts");
/* harmony import */ var _models_Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Question */ "./sdk/models/Question.ts");
/* harmony import */ var _models_Answer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Answer */ "./sdk/models/Answer.ts");

/* tslint:disable */




var SDKModels = /** @class */ (function () {
    function SDKModels() {
        this.models = {
            User: _models_User__WEBPACK_IMPORTED_MODULE_2__["User"],
            Question: _models_Question__WEBPACK_IMPORTED_MODULE_3__["Question"],
            Answer: _models_Answer__WEBPACK_IMPORTED_MODULE_4__["Answer"],
        };
    }
    SDKModels.prototype.get = function (modelName) {
        return this.models[modelName];
    };
    SDKModels.prototype.getAll = function () {
        return this.models;
    };
    SDKModels.prototype.getModelNames = function () {
        return Object.keys(this.models);
    };
    SDKModels = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SDKModels);
    return SDKModels;
}());



/***/ }),

/***/ "./sdk/services/custom/User.ts":
/*!*************************************!*\
  !*** ./sdk/services/custom/User.ts ***!
  \*************************************/
/*! exports provided: UserApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return UserApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SDKModels */ "./sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/base.service */ "./sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lb.config */ "./sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/auth.service */ "./sdk/services/core/auth.service.ts");
/* harmony import */ var _core_search_params__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/search.params */ "./sdk/services/core/search.params.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/error.service */ "./sdk/services/core/error.service.ts");

/* tslint:disable */








/**
 * Api services for the `User` model.
 */
var UserApi = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserApi, _super);
    function UserApi(http, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Find a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.findByIdAccessTokens = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.destroyByIdAccessTokens = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.updateByIdAccessTokens = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries accessTokens of User.
     *
     * @param {any} id User id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.getAccessTokens = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.createAccessTokens = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.deleteAccessTokens = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts accessTokens of User.
     *
     * @param {any} id User id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    UserApi.prototype.countAccessTokens = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Login a user with username/email and password.
     *
     * @param {string} include Related objects to include in the response. See the description of return value for more details.
     *   Default value: `user`.
     *
     *  - `rememberMe` - `boolean` - Whether the authentication credentials
     *     should be remembered in localStorage across app/browser restarts.
     *     Default: `true`.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * The response body contains properties of the AccessToken created on login.
     * Depending on the value of `include` parameter, the body may contain additional properties:
     *
     *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
     *
     *
     */
    UserApi.prototype.login = function (credentials, include, rememberMe, customHeaders) {
        var _this = this;
        if (include === void 0) { include = 'user'; }
        if (rememberMe === void 0) { rememberMe = true; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/login";
        var _routeParams = {};
        var _postBody = {
            credentials: credentials
        };
        var _urlParams = {};
        if (typeof include !== 'undefined' && include !== null)
            _urlParams.include = include;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders)
            .map(function (response) {
            response.ttl = parseInt(response.ttl);
            response.rememberMe = rememberMe;
            _this.auth.setToken(response);
            return response;
        });
        return result;
    };
    /**
     * Logout a user with access token.
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.logout = function (customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/logout";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        _urlParams.access_token = this.auth.getAccessTokenId();
        this.auth.clear();
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Trigger user's identity verification with configured verifyOptions
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.verify = function (id, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/verify";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Confirm a user registration with identity verification token.
     *
     * @param {string} uid
     *
     * @param {string} token
     *
     * @param {string} redirect
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.confirm = function (uid, token, redirect, customHeaders) {
        if (redirect === void 0) { redirect = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/confirm";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof uid !== 'undefined' && uid !== null)
            _urlParams.uid = uid;
        if (typeof token !== 'undefined' && token !== null)
            _urlParams.token = token;
        if (typeof redirect !== 'undefined' && redirect !== null)
            _urlParams.redirect = redirect;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Reset password for a user with email.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.resetPassword = function (options, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/reset";
        var _routeParams = {};
        var _postBody = {
            options: options
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Change a user's password.
     *
     * @param {object} data Request data.
     *
     *  - `oldPassword` – `{string}` -
     *
     *  - `newPassword` – `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.changePassword = function (oldPassword, newPassword, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/change-password";
        var _routeParams = {};
        var _postBody = {
            data: {
                oldPassword: oldPassword,
                newPassword: newPassword
            }
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Reset user's password via a password-reset token.
     *
     * @param {object} data Request data.
     *
     *  - `newPassword` – `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.setPassword = function (newPassword, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/reset-password";
        var _routeParams = {};
        var _postBody = {
            data: {
                newPassword: newPassword
            }
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.createManyAccessTokens = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * @ngdoc method
     * @name sdk.User#getCurrent
     * @methodOf sdk.User
     *
     * @description
     *
     * Get data of the currently logged user. Fail with HTTP result 401
     * when there is no user logged in.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     */
    UserApi.prototype.getCurrent = function (filter) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() + "/Users" + "/:id";
        var id = this.auth.getCurrentUserId();
        if (id == null)
            id = '__anonymous__';
        var _routeParams = { id: id };
        var _urlParams = {};
        var _postBody = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request(_method, _url, _routeParams, _urlParams, _postBody);
    };
    /**
     * Get data of the currently logged user that was returned by the last
     * call to {@link sdk.User#login} or
     * {@link sdk.User#getCurrent}. Return null when there
     * is no user logged in or the data of the current user were not fetched
     * yet.
     *
     * @returns object An Account instance.
     */
    UserApi.prototype.getCachedCurrent = function () {
        return this.auth.getCurrentUserData();
    };
    /**
     * Get data of the currently logged access tokern that was returned by the last
     * call to {@link sdk.User#login}
     *
     * @returns object An AccessToken instance.
     */
    UserApi.prototype.getCurrentToken = function () {
        return this.auth.getToken();
    };
    /**
     * @name sdk.User#isAuthenticated
     *
     * @returns {boolean} True if the current user is authenticated (logged in).
     */
    UserApi.prototype.isAuthenticated = function () {
        return !(this.getCurrentId() === '' || this.getCurrentId() == null || this.getCurrentId() == 'null');
    };
    /**
     * @name sdk.User#getCurrentId
     *
     * @returns object Id of the currently logged-in user or null.
     */
    UserApi.prototype.getCurrentId = function () {
        return this.auth.getCurrentUserId();
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `User`.
     */
    UserApi.prototype.getModelName = function () {
        return "User";
    };
    UserApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_3__["SDKModels"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["LoopBackAuth"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_search_params__WEBPACK_IMPORTED_MODULE_7__["JSONSearchParams"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandler"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_3__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_6__["LoopBackAuth"],
            _core_search_params__WEBPACK_IMPORTED_MODULE_7__["JSONSearchParams"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandler"]])
    ], UserApi);
    return UserApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseLoopBackApi"]));



/***/ }),

/***/ "./sdk/services/custom/index.ts":
/*!**************************************!*\
  !*** ./sdk/services/custom/index.ts ***!
  \**************************************/
/*! exports provided: UserApi, QuestionApi, AnswerApi, SDKModels, LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./sdk/services/custom/User.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return _User__WEBPACK_IMPORTED_MODULE_0__["UserApi"]; });

/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Question */ "./sdk/services/custom/Question.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionApi", function() { return _Question__WEBPACK_IMPORTED_MODULE_1__["QuestionApi"]; });

/* harmony import */ var _Answer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Answer */ "./sdk/services/custom/Answer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnswerApi", function() { return _Answer__WEBPACK_IMPORTED_MODULE_2__["AnswerApi"]; });

/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SDKModels */ "./sdk/services/custom/SDKModels.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKModels", function() { return _SDKModels__WEBPACK_IMPORTED_MODULE_3__["SDKModels"]; });

/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger.service */ "./sdk/services/custom/logger.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]; });

/* tslint:disable */







/***/ }),

/***/ "./sdk/services/custom/logger.service.ts":
/*!***********************************************!*\
  !*** ./sdk/services/custom/logger.service.ts ***!
  \***********************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lb.config */ "./sdk/lb.config.ts");

/* tslint:disable */


/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module LoggerService
* @license MIT
* @description
* Console Log wrapper that can be disabled in production mode
**/
var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.log.apply(console, args);
    };
    LoggerService.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.info.apply(console, args);
    };
    LoggerService.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.error.apply(console, args);
    };
    LoggerService.prototype.count = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.group = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.groupEnd = function () {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.groupEnd();
    };
    LoggerService.prototype.profile = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.profileEnd = function () {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.profileEnd();
    };
    LoggerService.prototype.time = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.time(arg);
    };
    LoggerService.prototype.timeEnd = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.timeEnd(arg);
    };
    LoggerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./sdk/services/index.ts":
/*!*******************************!*\
  !*** ./sdk/services/index.ts ***!
  \*******************************/
/*! exports provided: LoopBackAuth, ErrorHandler, JSONSearchParams, UserApi, QuestionApi, AnswerApi, SDKModels, LoggerService, BaseLoopBackApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/index */ "./sdk/services/core/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopBackAuth", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["LoopBackAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSONSearchParams", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["JSONSearchParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLoopBackApi", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["BaseLoopBackApi"]; });

/* harmony import */ var _custom_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom/index */ "./sdk/services/custom/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["UserApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["QuestionApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnswerApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["AnswerApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKModels", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["SDKModels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]; });

/* tslint:disable */




/***/ }),

/***/ "./sdk/storage/cookie.browser.ts":
/*!***************************************!*\
  !*** ./sdk/storage/cookie.browser.ts ***!
  \***************************************/
/*! exports provided: CookieBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieBrowser", function() { return CookieBrowser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module CookieBrowser
* @license MIT
* @description
* This module handle cookies, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var CookieBrowser = /** @class */ (function () {
    function CookieBrowser() {
        /**
         * @type {CookieInterface}
         **/
        this.cookies = {};
    }
    /**
     * @method get
     * @param {string} key Cookie key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.get = function (key) {
        if (!this.cookies[key]) {
            var cookie = window.document
                .cookie.split('; ')
                .filter(function (item) { return item.split('=')[0] === key; }).pop();
            if (!cookie) {
                return null;
            }
            this.cookies[key] = this.parse(cookie.split('=').slice(1).join('='));
        }
        return this.cookies[key];
    };
    /**
     * @method set
     * @param {string} key Cookie key name
     * @param {any} value Any value
     * @param {Date=} expires The date of expiration (Optional)
     * @return {void}
     * @description
     * The setter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.set = function (key, value, expires) {
        this.cookies[key] = value;
        var cookie = key + "=" + value + "; path=/" + (expires ? "; expires=" + expires.toUTCString() : '');
        window.document.cookie = cookie;
    };
    /**
     * @method remove
     * @param {string} key Cookie key name
     * @return {void}
     * @description
     * This method will remove a cookie from the client.
     **/
    CookieBrowser.prototype.remove = function (key) {
        document.cookie = key + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        delete this.cookies[key];
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    CookieBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    CookieBrowser = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CookieBrowser);
    return CookieBrowser;
}());



/***/ }),

/***/ "./sdk/storage/storage.browser.ts":
/*!****************************************!*\
  !*** ./sdk/storage/storage.browser.ts ***!
  \****************************************/
/*! exports provided: StorageBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageBrowser", function() { return StorageBrowser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module StorageBrowser
* @license MIT
* @description
* This module handle localStorage, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var StorageBrowser = /** @class */ (function () {
    function StorageBrowser() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.get = function (key) {
        var data = localStorage.getItem(key);
        return this.parse(data);
    };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.set = function (key, value, expires) {
        localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
    };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    StorageBrowser.prototype.remove = function (key) {
        if (localStorage[key]) {
            localStorage.removeItem(key);
        }
        else {
            console.log('Trying to remove unexisting key: ', key);
        }
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    StorageBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    StorageBrowser = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], StorageBrowser);
    return StorageBrowser;
}());



/***/ }),

/***/ "./sdk/storage/storage.swaps.ts":
/*!**************************************!*\
  !*** ./sdk/storage/storage.swaps.ts ***!
  \**************************************/
/*! exports provided: BaseStorage, InternalStorage, SDKStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseStorage", function() { return BaseStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalStorage", function() { return InternalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKStorage", function() { return SDKStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/* tslint:disable */
/**
 * @module Storage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var BaseStorage = /** @class */ (function () {
    function BaseStorage() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in storage.
     **/
    BaseStorage.prototype.get = function (key) { };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    BaseStorage.prototype.set = function (key, value, expires) { };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    BaseStorage.prototype.remove = function (key) { };
    return BaseStorage;
}());

/**
 * @module InternalStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 * This is mainly required because Angular Universal integration.
 * It does inject a CookieStorage instead of LocalStorage.
 **/
var InternalStorage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InternalStorage, _super);
    function InternalStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InternalStorage;
}(BaseStorage));

/**
 * @module SDKStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SDKStorage class is used for dependency injection swapping.
 * It will be provided using factory method according the right environment.
 * This is created for public usage, to allow persisting custom data
 * Into the local storage API.
 **/
var SDKStorage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SDKStorage, _super);
    function SDKStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SDKStorage;
}(BaseStorage));



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _categories_categories_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories/categories.resolver */ "./src/app/categories/categories.resolver.ts");
/* harmony import */ var _category_questions_category_questions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-questions/category-questions.component */ "./src/app/category-questions/category-questions.component.ts");
/* harmony import */ var _category_questions_category_questions_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-questions/category-questions.resolver */ "./src/app/category-questions/category-questions.resolver.ts");
/* harmony import */ var _question_answers_question_answers_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question-answers/question-answers.resolver */ "./src/app/question-answers/question-answers.resolver.ts");
/* harmony import */ var _question_answers_question_answers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./question-answers/question-answers.component */ "./src/app/question-answers/question-answers.component.ts");









var routes = [
    {
        path: '',
        component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"],
        resolve: {
            data: _categories_categories_resolver__WEBPACK_IMPORTED_MODULE_4__["CategoriesResolver"]
        }
    },
    {
        path: 'questions/about/:categorySlug',
        component: _category_questions_category_questions_component__WEBPACK_IMPORTED_MODULE_5__["CategoryQuestionsComponent"],
        resolve: {
            data: _category_questions_category_questions_resolver__WEBPACK_IMPORTED_MODULE_6__["CategoryQuestionsResolver"]
        }
    },
    {
        path: 'question/:questionSlug',
        component: _question_answers_question_answers_component__WEBPACK_IMPORTED_MODULE_8__["QuestionAnswersComponent"],
        resolve: {
            data: _question_answers_question_answers_resolver__WEBPACK_IMPORTED_MODULE_7__["QuestionAnswersResolver"]
        }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n\t<mat-toolbar color=\"primary\" class=\"top-toolbar\">\n  \t<breadcrumb></breadcrumb>\n\t</mat-toolbar>\n\t<router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'learn-angular-from-scratch';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _categories_categories_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories/categories.resolver */ "./src/app/categories/categories.resolver.ts");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _category_questions_category_questions_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category-questions/category-questions.resolver */ "./src/app/category-questions/category-questions.resolver.ts");
/* harmony import */ var _category_questions_category_questions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category-questions/category-questions.component */ "./src/app/category-questions/category-questions.component.ts");
/* harmony import */ var _category_questions_new_question_new_question_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category-questions/new-question/new-question-modal.component */ "./src/app/category-questions/new-question/new-question-modal.component.ts");
/* harmony import */ var _category_questions_delete_question_delete_question_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./category-questions/delete-question/delete-question-modal.component */ "./src/app/category-questions/delete-question/delete-question-modal.component.ts");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/questions.service */ "./src/app/services/questions.service.ts");
/* harmony import */ var _question_answers_new_answer_new_answer_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./question-answers/new-answer/new-answer-modal.component */ "./src/app/question-answers/new-answer/new-answer-modal.component.ts");
/* harmony import */ var _question_answers_update_answer_update_answer_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./question-answers/update-answer/update-answer-modal.component */ "./src/app/question-answers/update-answer/update-answer-modal.component.ts");
/* harmony import */ var _question_answers_delete_answer_delete_answer_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./question-answers/delete-answer/delete-answer-modal.component */ "./src/app/question-answers/delete-answer/delete-answer-modal.component.ts");
/* harmony import */ var _question_answers_question_answers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./question-answers/question-answers.component */ "./src/app/question-answers/question-answers.component.ts");
/* harmony import */ var _question_answers_question_answers_resolver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./question-answers/question-answers.resolver */ "./src/app/question-answers/question-answers.resolver.ts");
/* harmony import */ var _services_answers_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/answers.service */ "./src/app/services/answers.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"],
                _category_questions_category_questions_component__WEBPACK_IMPORTED_MODULE_8__["CategoryQuestionsComponent"],
                _category_questions_new_question_new_question_modal_component__WEBPACK_IMPORTED_MODULE_9__["NewQuestionModalComponent"],
                _question_answers_new_answer_new_answer_modal_component__WEBPACK_IMPORTED_MODULE_12__["NewAnswerModalComponent"],
                _question_answers_update_answer_update_answer_modal_component__WEBPACK_IMPORTED_MODULE_13__["UpdateAnswerModalComponent"],
                _question_answers_question_answers_component__WEBPACK_IMPORTED_MODULE_15__["QuestionAnswersComponent"],
                _category_questions_delete_question_delete_question_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteQuestionModalComponent"],
                _question_answers_delete_answer_delete_answer_modal_component__WEBPACK_IMPORTED_MODULE_14__["DeleteAnswerModalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"]
            ],
            entryComponents: [
                _category_questions_delete_question_delete_question_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteQuestionModalComponent"],
                _question_answers_delete_answer_delete_answer_modal_component__WEBPACK_IMPORTED_MODULE_14__["DeleteAnswerModalComponent"],
                _category_questions_new_question_new_question_modal_component__WEBPACK_IMPORTED_MODULE_9__["NewQuestionModalComponent"],
                _question_answers_new_answer_new_answer_modal_component__WEBPACK_IMPORTED_MODULE_12__["NewAnswerModalComponent"],
                _question_answers_update_answer_update_answer_modal_component__WEBPACK_IMPORTED_MODULE_13__["UpdateAnswerModalComponent"]
            ],
            providers: [
                _services_categories_service__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"],
                _services_questions_service__WEBPACK_IMPORTED_MODULE_11__["QuestionsService"],
                _services_answers_service__WEBPACK_IMPORTED_MODULE_17__["AnswersService"],
                _category_questions_category_questions_resolver__WEBPACK_IMPORTED_MODULE_7__["CategoryQuestionsResolver"],
                _categories_categories_resolver__WEBPACK_IMPORTED_MODULE_5__["CategoriesResolver"],
                _question_answers_question_answers_resolver__WEBPACK_IMPORTED_MODULE_16__["QuestionAnswersResolver"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 categories\">\n  <div class=\"card col-md-offset-2 col-md-8 \">\n    <h3 class=\"list-title\">Learn all about Angular</h3>\n    <mat-list class=\"list\">\n      <mat-list-item class=\"list-item\" *ngFor=\"let category of categories\">\n        <img matListAvatar class=\"avatar\" [src]=\"category.image\">\n        <h3 matLine class=\"list-line\">\n          <a [routerLink]=\"['/questions/about', category.slug]\">{{category.title}}</a>\n        </h3>\n        <h3 matLine class=\"list-line\">{{category.description}}</h3>\n        <div matLine class=\"list-line\">\n          <mat-chip-list>\n            <mat-chip *ngFor=\"let tag of category.tags\">{{tag.name}}</mat-chip>\n          </mat-chip-list>\n        </div>\n      </mat-list-item>\n    </mat-list>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(route) {
        this.route = route;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data) {
                _this.categories = data.categories;
            }
        });
    };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.scss */ "./src/app/categories/categories.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.resolver.ts":
/*!***************************************************!*\
  !*** ./src/app/categories/categories.resolver.ts ***!
  \***************************************************/
/*! exports provided: CategoriesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesResolver", function() { return CategoriesResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/categories.service */ "./src/app/services/categories.service.ts");



var CategoriesResolver = /** @class */ (function () {
    function CategoriesResolver(categoriesService) {
        this.categoriesService = categoriesService;
    }
    CategoriesResolver.prototype.resolve = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var breadcrumbs = [
                { url: '/', label: 'Categories' }
            ];
            //get categories from local json file
            _this.categoriesService.getCategories()
                .then(function (categories) {
                return resolve({
                    categories: categories,
                    breadcrumbs: breadcrumbs
                });
            }, function (err) {
                return resolve(null);
            });
        });
    };
    CategoriesResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]])
    ], CategoriesResolver);
    return CategoriesResolver;
}());



/***/ }),

/***/ "./src/app/categories/categories.scss":
/*!********************************************!*\
  !*** ./src/app/categories/categories.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".categories .list {\n  margin-top: 30px;\n}\n.categories .list-item {\n  height: 120px;\n}\n.categories .list-item .avatar {\n  width: 100px;\n  height: 100px;\n}\n.categories .list-item:not(:first-child) {\n  border-top: 1px solid #e1e1e1;\n}\n.categories .list-item .list-line {\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuc2NzcyIsInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxnQkFBQTtBQ0hKO0FETUU7RUFDRSxhQUFBO0FDSko7QURNSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDSk47QURPSTtFQUNFLDZCQUFBO0FDTE47QURPSTtFQUNFLGtCQUFBO0FDTE4iLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3N0eWxlcy9fdmFyaWFibGVzJztcblxuLmNhdGVnb3JpZXMge1xuXG4gIC5saXN0IHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG5cbiAgLmxpc3QtaXRlbSB7XG4gICAgaGVpZ2h0OiAxMjBweDtcblxuICAgIC5hdmF0YXIge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG5cbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkZ3JleTQ7XG4gICAgfVxuICAgIC5saXN0LWxpbmUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbiAgfVxufVxuIiwiLmNhdGVnb3JpZXMgLmxpc3Qge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmNhdGVnb3JpZXMgLmxpc3QtaXRlbSB7XG4gIGhlaWdodDogMTIwcHg7XG59XG4uY2F0ZWdvcmllcyAubGlzdC1pdGVtIC5hdmF0YXIge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG4uY2F0ZWdvcmllcyAubGlzdC1pdGVtOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMWUxZTE7XG59XG4uY2F0ZWdvcmllcyAubGlzdC1pdGVtIC5saXN0LWxpbmUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/category-questions/category-questions.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/category-questions/category-questions.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 category-questions\">\n  <div class=\"card col-md-offset-2 col-md-8 \">\n    <h3 class=\"list-title\">Learn about: {{categoryTitle}}</h3>\n    <button mat-raised-button color=\"primary\" (click)=\"openNewQuestionModal(categorySlug)\">New Question</button>\n    <mat-list class=\"list\">\n      <mat-list-item class=\"list-item\" *ngFor=\"let question of questions\">\n        <h3 matLine>\n          <a [routerLink]=\"['/question/', question.questionSlug]\">{{question.question}}</a>\n        </h3>\n        <p matLine class=\"icons-line\">\n          <i class=\"list-single-icon fa fa-thumbs-o-up\" (click)=\"addPositiveVote(question)\" aria-hidden=\"true\"></i>\n          <span class=\"list-single-icon-number\">{{question.positiveVotes}}</span>\n          <i class=\"list-single-icon fa fa-thumbs-o-down\" (click)=\"addNegativeVote(question)\"></i>\n          <span class=\"list-single-icon-number\">{{question.negativeVotes}}</span>\n          <i class=\"list-single-icon fa fa fa-trash-o\" (click)=\"delete(question.id)\"></i>\n          <span class=\"list-single-icon-number\"></span>\n          <span class=\"list-single-icon-number\">{{question.answers? question.answers.length: 0}} Answers</span>\n        </p>\n      </mat-list-item>\n    </mat-list>\n</div>\n"

/***/ }),

/***/ "./src/app/category-questions/category-questions.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/category-questions/category-questions.component.ts ***!
  \********************************************************************/
/*! exports provided: CategoryQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryQuestionsComponent", function() { return CategoryQuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/questions.service */ "./src/app/services/questions.service.ts");
/* harmony import */ var _services_answers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/answers.service */ "./src/app/services/answers.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _delete_question_delete_question_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delete-question/delete-question-modal.component */ "./src/app/category-questions/delete-question/delete-question-modal.component.ts");
/* harmony import */ var _new_question_new_question_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-question/new-question-modal.component */ "./src/app/category-questions/new-question/new-question-modal.component.ts");








var CategoryQuestionsComponent = /** @class */ (function () {
    function CategoryQuestionsComponent(route, questionsService, answersService, dialog) {
        this.route = route;
        this.questionsService = questionsService;
        this.answersService = answersService;
        this.dialog = dialog;
    }
    CategoryQuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data) {
                _this.questions = data.questions;
                _this.categoryTitle = data.category_title;
                _this.categorySlug = data.category_slug;
            }
        });
    };
    CategoryQuestionsComponent.prototype.getQuestions = function () {
        var _this = this;
        this.questionsService.getQuestionsByCategory(this.categorySlug)
            .then(function (questions) { return _this.questions = questions; });
    };
    CategoryQuestionsComponent.prototype.openNewQuestionModal = function (categorySlug) {
        var _this = this;
        var dialogRef = this.dialog.open(_new_question_new_question_modal_component__WEBPACK_IMPORTED_MODULE_7__["NewQuestionModalComponent"], {
            data: { categorySlug: categorySlug }
        });
        dialogRef.afterClosed().subscribe(function (question) {
            if (question) {
                _this.addQuestionToList(question);
            }
        });
    };
    CategoryQuestionsComponent.prototype.delete = function (questionId) {
        var _this = this;
        var dialogRef = this.dialog.open(_delete_question_delete_question_modal_component__WEBPACK_IMPORTED_MODULE_6__["DeleteQuestionModalComponent"], {
            data: { questionId: questionId }
        });
        dialogRef.afterClosed().subscribe(function (confirm) {
            if (confirm) {
                // refresh the questions list
                var index = _this.questions.findIndex(function (question) { return question.id === questionId; });
                _this.questions.splice(index, 1);
                // TODO: evaluar cambiar esto por un operation method en loopback.
                _this.answersService.getAnswers(questionId)
                    .then(function (answers) {
                    for (var _i = 0, answers_1 = answers; _i < answers_1.length; _i++) {
                        var answer = answers_1[_i];
                        _this.answersService.deleteAnswer(answer.id);
                    }
                });
            }
        });
    };
    CategoryQuestionsComponent.prototype.addQuestionToList = function (question) {
        this.questions.push(question);
    };
    CategoryQuestionsComponent.prototype.addPositiveVote = function (question) {
        question.positiveVotes += 1;
        this.questionsService.updateQuestion(question);
    };
    CategoryQuestionsComponent.prototype.addNegativeVote = function (question) {
        question.negativeVotes += 1;
        this.questionsService.updateQuestion(question);
    };
    CategoryQuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'category-questions',
            template: __webpack_require__(/*! ./category-questions.component.html */ "./src/app/category-questions/category-questions.component.html"),
            styles: [__webpack_require__(/*! ./category-questions.scss */ "./src/app/category-questions/category-questions.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"],
            _services_answers_service__WEBPACK_IMPORTED_MODULE_4__["AnswersService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], CategoryQuestionsComponent);
    return CategoryQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/category-questions/category-questions.resolver.ts":
/*!*******************************************************************!*\
  !*** ./src/app/category-questions/category-questions.resolver.ts ***!
  \*******************************************************************/
/*! exports provided: CategoryQuestionsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryQuestionsResolver", function() { return CategoryQuestionsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/questions.service */ "./src/app/services/questions.service.ts");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/categories.service */ "./src/app/services/categories.service.ts");





var CategoryQuestionsResolver = /** @class */ (function () {
    function CategoryQuestionsResolver(questionsService, categoriesService) {
        this.questionsService = questionsService;
        this.categoriesService = categoriesService;
    }
    CategoryQuestionsResolver.prototype.resolve = function (route) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //get current category slug form url
            var category_slug = route.paramMap.get('categorySlug');
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(_this.categoriesService.getCategoryBySlug(category_slug), _this.questionsService.getQuestionsByCategory(category_slug)).subscribe(function (data) {
                var breadcrumbs = [
                    { url: '/', label: 'Categories' },
                    { url: 'questions/about/' + category_slug, label: data[0].title }
                ];
                return resolve({
                    questions: data[1],
                    category_title: data[0].title,
                    category_slug: category_slug,
                    breadcrumbs: breadcrumbs
                });
            }, function (err) {
                console.log(err);
                return resolve(null);
            });
        });
    };
    CategoryQuestionsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"],
            _services_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]])
    ], CategoryQuestionsResolver);
    return CategoryQuestionsResolver;
}());



/***/ }),

/***/ "./src/app/category-questions/category-questions.scss":
/*!************************************************************!*\
  !*** ./src/app/category-questions/category-questions.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category-questions .list {\n  margin-top: 30px;\n}\n.category-questions .list-item {\n  margin-bottom: 10px;\n}\n.category-questions .list-item:not(:first-child) {\n  border-top: 1px solid #e1e1e1;\n}\n.category-questions .list-item .icons-line {\n  margin-top: 10px;\n}\n.category-questions .list-item .icons-line .list-single-icon {\n  color: #555;\n  font-size: 20px;\n}\n.category-questions .list-item .icons-line .list-single-icon-number {\n  color: #555;\n  vertical-align: top;\n}\n.category-questions .list-item .icons-line .list-single-icon-number:not(:last-child) {\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2FwcC9jYXRlZ29yeS1xdWVzdGlvbnMvY2F0ZWdvcnktcXVlc3Rpb25zLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3J5LXF1ZXN0aW9ucy9jYXRlZ29yeS1xdWVzdGlvbnMuc2NzcyIsIi9hcHAvc3JjL2FwcC9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsZ0JBQUE7QUNGSjtBRElFO0VBQ0UsbUJBQUE7QUNGSjtBREdJO0VBQ0UsNkJBQUE7QUNETjtBRElJO0VBQ0UsZ0JBQUE7QUNGTjtBREdNO0VBQ0UsV0VYQTtFRllBLGVBQUE7QUNEUjtBREdNO0VBQ0UsV0VmQTtFRmdCQSxtQkFBQTtBQ0RSO0FER1E7RUFDRSxrQkFBQTtBQ0RWIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcnktcXVlc3Rpb25zL2NhdGVnb3J5LXF1ZXN0aW9ucy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vc3R5bGVzL192YXJpYWJsZXMnO1xuXG4uY2F0ZWdvcnktcXVlc3Rpb25zIHtcbiAgLmxpc3Qge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbiAgLmxpc3QtaXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkZ3JleTQ7XG4gICAgfVxuXG4gICAgLmljb25zLWxpbmUge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIC5saXN0LXNpbmdsZS1pY29uIHtcbiAgICAgICAgY29sb3I6ICRncmV5NTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgICAgLmxpc3Qtc2luZ2xlLWljb24tbnVtYmVyIHtcbiAgICAgICAgY29sb3I6ICRncmV5NTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcblxuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmNhdGVnb3J5LXF1ZXN0aW9ucyAubGlzdCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uY2F0ZWdvcnktcXVlc3Rpb25zIC5saXN0LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNhdGVnb3J5LXF1ZXN0aW9ucyAubGlzdC1pdGVtOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMWUxZTE7XG59XG4uY2F0ZWdvcnktcXVlc3Rpb25zIC5saXN0LWl0ZW0gLmljb25zLWxpbmUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNhdGVnb3J5LXF1ZXN0aW9ucyAubGlzdC1pdGVtIC5pY29ucy1saW5lIC5saXN0LXNpbmdsZS1pY29uIHtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jYXRlZ29yeS1xdWVzdGlvbnMgLmxpc3QtaXRlbSAuaWNvbnMtbGluZSAubGlzdC1zaW5nbGUtaWNvbi1udW1iZXIge1xuICBjb2xvcjogIzU1NTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5jYXRlZ29yeS1xdWVzdGlvbnMgLmxpc3QtaXRlbSAuaWNvbnMtbGluZSAubGlzdC1zaW5nbGUtaWNvbi1udW1iZXI6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn0iLCIvLyBDb2xvcnNcbiRwcmltYXJ5OiAjM2Y1MWI1O1xuJGdyZXk4OiAjNGE0YTRhO1xuJGdyZXk0OiAjZTFlMWUxO1xuJGdyZXk1OiAjNTU1O1xuIl19 */"

/***/ }),

/***/ "./src/app/category-questions/delete-question/delete-question-modal.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/category-questions/delete-question/delete-question-modal.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert-modal\">\n  <h3 class=\"alert-modal-title\">DELETE QUESTION</h3>\n  <span class=\"alert-modal-text\">Are you sure to delete this question?</span>\n  <div>\n    <div class=\"alert-modal-buttons\">\n      <button mat-raised-button color=\"primary\" class=\"alert-modal-button alert-modal-button-success\" (click)=\"onCloseConfirm()\">Yes</button>\n      <button mat-raised-button class=\"alert-modal-button alert-modal-button-failure\" (click)=\"onCloseCancel()\">No</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/category-questions/delete-question/delete-question-modal.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/category-questions/delete-question/delete-question-modal.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DeleteQuestionModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteQuestionModalComponent", function() { return DeleteQuestionModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/questions.service */ "./src/app/services/questions.service.ts");




var DeleteQuestionModalComponent = /** @class */ (function () {
    function DeleteQuestionModalComponent(thisDialogRef, modalData, questionsService) {
        this.thisDialogRef = thisDialogRef;
        this.modalData = modalData;
        this.questionsService = questionsService;
    }
    DeleteQuestionModalComponent.prototype.onCloseConfirm = function () {
        var _this = this;
        this.questionsService.deleteQuestion(this.modalData.questionId)
            .then(function (res) {
            _this.thisDialogRef.close(true);
        });
    };
    DeleteQuestionModalComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close(false);
    };
    DeleteQuestionModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'delete-question-modal',
            template: __webpack_require__(/*! ./delete-question-modal.component.html */ "./src/app/category-questions/delete-question/delete-question-modal.component.html"),
            styles: [__webpack_require__(/*! ../../styles/modals.scss */ "./src/app/styles/modals.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"]])
    ], DeleteQuestionModalComponent);
    return DeleteQuestionModalComponent;
}());



/***/ }),

/***/ "./src/app/category-questions/new-question/new-question-modal.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/category-questions/new-question/new-question-modal.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert-modal\">\n  <h3 class=\"alert-modal-title\">NEW QUESTION</h3>\n  <div>\n    <form [formGroup]=\"questionForm\" class=\"form\" (ngSubmit)=\"onSubmit(questionForm.value)\">\n      <textarea rows=3 class=\"form-control form-input\" type=\"text\" formControlName=\"question\"></textarea>\n      <div class=\"alert-modal-buttons\">\n        <button mat-raised-button color=\"primary\" class=\"alert-modal-button alert-modal-button-success\" type=\"submit\" [disabled]=\"!questionForm.valid\">Ask</button>\n        <button mat-raised-button class=\"alert-modal-button alert-modal-button-failure\" type=\"button\"(click)=\"onCloseCancel()\">Cancel</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/category-questions/new-question/new-question-modal.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/category-questions/new-question/new-question-modal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NewQuestionModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewQuestionModalComponent", function() { return NewQuestionModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/questions.service */ "./src/app/services/questions.service.ts");
/* harmony import */ var _shared_slugify_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/slugify.pipe */ "./src/app/shared/slugify.pipe.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var NewQuestionModalComponent = /** @class */ (function () {
    function NewQuestionModalComponent(questionsService, slugifyPipe, thisDialogRef, modalData) {
        this.questionsService = questionsService;
        this.slugifyPipe = slugifyPipe;
        this.thisDialogRef = thisDialogRef;
        this.modalData = modalData;
    }
    NewQuestionModalComponent.prototype.ngOnInit = function () {
        this.questionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    NewQuestionModalComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close();
    };
    NewQuestionModalComponent.prototype.onSubmit = function (values) {
        var _this = this;
        var data = {};
        data.question = values.question;
        data.questionSlug = this.slugifyPipe.transform(values.question);
        data.categorySlug = this.modalData.categorySlug;
        //create new question
        this.questionsService.createQuestion(data)
            .then(function (question) {
            _this.thisDialogRef.close(question);
            _this.questionForm.reset();
        });
    };
    NewQuestionModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'new-question-modal',
            template: __webpack_require__(/*! ./new-question-modal.component.html */ "./src/app/category-questions/new-question/new-question-modal.component.html"),
            exportAs: 'newQuestionModal',
            styles: [__webpack_require__(/*! ../../styles/modals.scss */ "./src/app/styles/modals.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"],
            _shared_slugify_pipe__WEBPACK_IMPORTED_MODULE_4__["SlugifyPipe"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], NewQuestionModalComponent);
    return NewQuestionModalComponent;
}());



/***/ }),

/***/ "./src/app/question-answers/delete-answer/delete-answer-modal.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/question-answers/delete-answer/delete-answer-modal.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert-modal\">\n  <h3 class=\"alert-modal-title\">DELETE ANSWER</h3>\n  <span class=\"alert-modal-text\">Are you sure to delete this answer?</span>\n  <div>\n    <div class=\"alert-modal-buttons\">\n      <button mat-raised-button color=\"primary\"class=\"btn alert-modal-button alert-modal-button-success\" (click)=\"onCloseConfirm()\">Yes</button>\n      <button mat-raised-button class=\"alert-modal-button alert-modal-button-failure\" (click)=\"onCloseCancel()\">No</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/question-answers/delete-answer/delete-answer-modal.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/question-answers/delete-answer/delete-answer-modal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DeleteAnswerModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAnswerModalComponent", function() { return DeleteAnswerModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_answers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/answers.service */ "./src/app/services/answers.service.ts");




var DeleteAnswerModalComponent = /** @class */ (function () {
    function DeleteAnswerModalComponent(thisDialogRef, modalData, answersService) {
        this.thisDialogRef = thisDialogRef;
        this.modalData = modalData;
        this.answersService = answersService;
    }
    DeleteAnswerModalComponent.prototype.onCloseConfirm = function () {
        var _this = this;
        this.answersService.deleteAnswer(this.modalData.answerId)
            .then(function (res) {
            _this.thisDialogRef.close(true);
        });
    };
    DeleteAnswerModalComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close(false);
    };
    DeleteAnswerModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'delete-answer-modal',
            template: __webpack_require__(/*! ./delete-answer-modal.component.html */ "./src/app/question-answers/delete-answer/delete-answer-modal.component.html"),
            styles: [__webpack_require__(/*! ../../styles/modals.scss */ "./src/app/styles/modals.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_answers_service__WEBPACK_IMPORTED_MODULE_3__["AnswersService"]])
    ], DeleteAnswerModalComponent);
    return DeleteAnswerModalComponent;
}());



/***/ }),

/***/ "./src/app/question-answers/new-answer/new-answer-modal.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/question-answers/new-answer/new-answer-modal.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert-modal\">\n  <h3 class=\"alert-modal-title\">NEW ANSWER</h3>\n  <!-- <span class=\"alert-modal-text\">Write your answer here:</span> -->\n  <div>\n    <form [formGroup]=\"answerForm\" class=\"form\" (ngSubmit)=\"onSubmit(answerForm.value)\">\n      <textarea rows=3 class=\"form-control form-input\" type=\"text\" formControlName=\"answer\"></textarea>\n      <div class=\"alert-modal-buttons\">\n        <button mat-raised-button color=\"primary\" class=\"alert-modal-button alert-modal-button-success\" type=\"submit\" [disabled]=\"!answerForm.valid\">Answer</button>\n        <button mat-raised-button class=\"alert-modal-button alert-modal-button-failure\" type=\"button\"(click)=\"onCloseCancel()\">Cancel</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/question-answers/new-answer/new-answer-modal.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/question-answers/new-answer/new-answer-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: NewAnswerModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAnswerModalComponent", function() { return NewAnswerModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_answers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/answers.service */ "./src/app/services/answers.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var NewAnswerModalComponent = /** @class */ (function () {
    function NewAnswerModalComponent(answersService, thisDialogRef, modalData) {
        this.answersService = answersService;
        this.thisDialogRef = thisDialogRef;
        this.modalData = modalData;
    }
    NewAnswerModalComponent.prototype.ngOnInit = function () {
        this.answerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    NewAnswerModalComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close();
    };
    NewAnswerModalComponent.prototype.onSubmit = function (values) {
        var _this = this;
        var data = {};
        data.answer = values.answer;
        data.questionId = this.modalData.questionId;
        this.answersService.createAnswer(data)
            .then(function (answer) {
            _this.thisDialogRef.close(answer);
            _this.answerForm.reset();
        });
    };
    NewAnswerModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'new-answer',
            template: __webpack_require__(/*! ./new-answer-modal.component.html */ "./src/app/question-answers/new-answer/new-answer-modal.component.html"),
            exportAs: 'newAnswerModal',
            styles: [__webpack_require__(/*! ../../styles/modals.scss */ "./src/app/styles/modals.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_answers_service__WEBPACK_IMPORTED_MODULE_3__["AnswersService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], NewAnswerModalComponent);
    return NewAnswerModalComponent;
}());



/***/ }),

/***/ "./src/app/question-answers/question-answers.component.html":
/*!******************************************************************!*\
  !*** ./src/app/question-answers/question-answers.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 question-answers\">\n  <div class=\"card col-md-offset-2 col-md-8 \">\n    <h3 class=\"list-title\">{{question.question}}</h3>\n    <button mat-raised-button color=\"primary\" (click)=\"openNewAnswerModal(question.id)\">New Answer</button>\n    <mat-list class=\"list\">\n      <mat-list-item class=\"list-item\" *ngFor=\"let answer of question.answers\">\n        <span matLine class=\"answer\"> {{answer.answer}} </span>\n        <p matLine class=\"icons-line\">\n          <i class=\"list-single-icon fa fa-thumbs-o-up\" (click)=\"addPositiveVote(answer)\" aria-hidden=\"true\"></i>\n          <span class=\"list-single-icon-number\">{{answer.positiveVotes}}</span>\n          <i class=\"list-single-icon fa fa-thumbs-o-down\" (click)=\"addNegativeVote(answer)\"></i>\n          <span class=\"list-single-icon-number\">{{answer.negativeVotes}}</span>\n          <i class=\"list-single-icon fa fa fa-trash-o\" (click)=\"delete(answer.id)\"></i>\n          <span class=\"list-single-icon-number\"></span>\n          <i class=\"list-single-icon fa fa-pencil\" (click)=\"openUpdateAnswerModal(answer)\"></i>\n          <span class=\"list-single-icon-number\"></span>\n        </p>\n      </mat-list-item>\n    </mat-list>\n</div>\n"

/***/ }),

/***/ "./src/app/question-answers/question-answers.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/question-answers/question-answers.component.ts ***!
  \****************************************************************/
/*! exports provided: QuestionAnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAnswersComponent", function() { return QuestionAnswersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_answers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/answers.service */ "./src/app/services/answers.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _delete_answer_delete_answer_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete-answer/delete-answer-modal.component */ "./src/app/question-answers/delete-answer/delete-answer-modal.component.ts");
/* harmony import */ var _new_answer_new_answer_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-answer/new-answer-modal.component */ "./src/app/question-answers/new-answer/new-answer-modal.component.ts");
/* harmony import */ var _update_answer_update_answer_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update-answer/update-answer-modal.component */ "./src/app/question-answers/update-answer/update-answer-modal.component.ts");








var QuestionAnswersComponent = /** @class */ (function () {
    function QuestionAnswersComponent(answersService, route, dialog) {
        this.answersService = answersService;
        this.route = route;
        this.dialog = dialog;
    }
    QuestionAnswersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data) {
                _this.question = data.question;
            }
        });
    };
    QuestionAnswersComponent.prototype.openNewAnswerModal = function (questionId) {
        var _this = this;
        var dialogRef = this.dialog.open(_new_answer_new_answer_modal_component__WEBPACK_IMPORTED_MODULE_6__["NewAnswerModalComponent"], {
            data: { questionId: questionId }
        });
        dialogRef.afterClosed().subscribe(function (answer) {
            if (answer) {
                _this.addAnswerToList(answer);
            }
        });
    };
    QuestionAnswersComponent.prototype.openUpdateAnswerModal = function (answer) {
        var dialogRef = this.dialog.open(_update_answer_update_answer_modal_component__WEBPACK_IMPORTED_MODULE_7__["UpdateAnswerModalComponent"], {
            data: { answer: answer }
        });
    };
    QuestionAnswersComponent.prototype.delete = function (answerId) {
        var _this = this;
        var dialogRef = this.dialog.open(_delete_answer_delete_answer_modal_component__WEBPACK_IMPORTED_MODULE_5__["DeleteAnswerModalComponent"], {
            data: { answerId: answerId }
        });
        dialogRef.afterClosed().subscribe(function (confirm) {
            if (confirm) {
                var index = _this.question.answers.findIndex(function (answer) { return answer.id === answerId; });
                _this.question.answers.splice(index, 1);
            }
        });
    };
    QuestionAnswersComponent.prototype.addPositiveVote = function (answer) {
        answer.positiveVotes += 1;
        this.answersService.updateAnswer(answer);
    };
    QuestionAnswersComponent.prototype.addNegativeVote = function (answer) {
        answer.negativeVotes += 1;
        this.answersService.updateAnswer(answer);
    };
    QuestionAnswersComponent.prototype.addAnswerToList = function (answer) {
        this.question.answers.push(answer);
    };
    QuestionAnswersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'answer',
            template: __webpack_require__(/*! ./question-answers.component.html */ "./src/app/question-answers/question-answers.component.html"),
            styles: [__webpack_require__(/*! ./question-answers.scss */ "./src/app/question-answers/question-answers.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_answers_service__WEBPACK_IMPORTED_MODULE_3__["AnswersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], QuestionAnswersComponent);
    return QuestionAnswersComponent;
}());



/***/ }),

/***/ "./src/app/question-answers/question-answers.resolver.ts":
/*!***************************************************************!*\
  !*** ./src/app/question-answers/question-answers.resolver.ts ***!
  \***************************************************************/
/*! exports provided: QuestionAnswersResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAnswersResolver", function() { return QuestionAnswersResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/questions.service */ "./src/app/services/questions.service.ts");



var QuestionAnswersResolver = /** @class */ (function () {
    function QuestionAnswersResolver(questionsService) {
        this.questionsService = questionsService;
    }
    QuestionAnswersResolver.prototype.resolve = function (route) {
        var _this = this;
        var questionSlug = route.paramMap.get('questionSlug');
        return new Promise(function (resolve, reject) {
            _this.questionsService.getQuestionBySlug(questionSlug)
                .then(function (question) {
                var breadcrumbs = [
                    { url: '/', label: 'Categories' },
                    { url: 'questions/about/' + question.categorySlug, label: question.categorySlug },
                    { url: 'question/' + questionSlug, label: question.question }
                ];
                return resolve({
                    question: question,
                    breadcrumbs: breadcrumbs
                });
            }, function (err) {
                console.log(err);
                return resolve(null);
            });
        });
    };
    QuestionAnswersResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"]])
    ], QuestionAnswersResolver);
    return QuestionAnswersResolver;
}());



/***/ }),

/***/ "./src/app/question-answers/question-answers.scss":
/*!********************************************************!*\
  !*** ./src/app/question-answers/question-answers.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question-answers .list-item {\n  margin: 20px 0px;\n}\n.question-answers .list-item:not(:first-child) {\n  border-top: 1px solid #e1e1e1;\n}\n.question-answers .list-item .answer {\n  white-space: normal;\n}\n.question-answers .list-item .icons-line {\n  margin-top: 10px;\n}\n.question-answers .list-item .icons-line .list-single-icon {\n  color: #555;\n  font-size: 20px;\n}\n.question-answers .list-item .icons-line .list-single-icon-number {\n  color: #555;\n  vertical-align: top;\n}\n.question-answers .list-item .icons-line .list-single-icon-number:not(:last-child) {\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2FwcC9xdWVzdGlvbi1hbnN3ZXJzL3F1ZXN0aW9uLWFuc3dlcnMuc2NzcyIsInNyYy9hcHAvcXVlc3Rpb24tYW5zd2Vycy9xdWVzdGlvbi1hbnN3ZXJzLnNjc3MiLCIvYXBwL3NyYy9hcHAvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLGdCQUFBO0FDSEo7QURLSTtFQUNFLDZCQUFBO0FDSE47QURNSTtFQUNFLG1CQUFBO0FDSk47QURPSTtFQUNFLGdCQUFBO0FDTE47QURNTTtFQUNFLFdFZEE7RUZlQSxlQUFBO0FDSlI7QURNTTtFQUNFLFdFbEJBO0VGbUJBLG1CQUFBO0FDSlI7QURNUTtFQUNFLGtCQUFBO0FDSlYiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbi1hbnN3ZXJzL3F1ZXN0aW9uLWFuc3dlcnMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3N0eWxlcy9fdmFyaWFibGVzJztcblxuLnF1ZXN0aW9uLWFuc3dlcnMge1xuXG4gIC5saXN0LWl0ZW0ge1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG5cbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkZ3JleTQ7XG4gICAgfVxuXG4gICAgLmFuc3dlciB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIH1cblxuICAgIC5pY29ucy1saW5lIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAubGlzdC1zaW5nbGUtaWNvbiB7XG4gICAgICAgIGNvbG9yOiAkZ3JleTU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICAgIC5saXN0LXNpbmdsZS1pY29uLW51bWJlciB7XG4gICAgICAgIGNvbG9yOiAkZ3JleTU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG5cbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5xdWVzdGlvbi1hbnN3ZXJzIC5saXN0LWl0ZW0ge1xuICBtYXJnaW46IDIwcHggMHB4O1xufVxuLnF1ZXN0aW9uLWFuc3dlcnMgLmxpc3QtaXRlbTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTFlMWUxO1xufVxuLnF1ZXN0aW9uLWFuc3dlcnMgLmxpc3QtaXRlbSAuYW5zd2VyIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbi5xdWVzdGlvbi1hbnN3ZXJzIC5saXN0LWl0ZW0gLmljb25zLWxpbmUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnF1ZXN0aW9uLWFuc3dlcnMgLmxpc3QtaXRlbSAuaWNvbnMtbGluZSAubGlzdC1zaW5nbGUtaWNvbiB7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ucXVlc3Rpb24tYW5zd2VycyAubGlzdC1pdGVtIC5pY29ucy1saW5lIC5saXN0LXNpbmdsZS1pY29uLW51bWJlciB7XG4gIGNvbG9yOiAjNTU1O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLnF1ZXN0aW9uLWFuc3dlcnMgLmxpc3QtaXRlbSAuaWNvbnMtbGluZSAubGlzdC1zaW5nbGUtaWNvbi1udW1iZXI6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn0iLCIvLyBDb2xvcnNcbiRwcmltYXJ5OiAjM2Y1MWI1O1xuJGdyZXk4OiAjNGE0YTRhO1xuJGdyZXk0OiAjZTFlMWUxO1xuJGdyZXk1OiAjNTU1O1xuIl19 */"

/***/ }),

/***/ "./src/app/question-answers/update-answer/update-answer-modal.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/question-answers/update-answer/update-answer-modal.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert-modal\">\n  <h3 class=\"alert-modal-title\">UPDATE ANSWER</h3>\n  <div>\n    <form [formGroup]=\"answerForm\" class=\"form\" (ngSubmit)=\"onSubmit(answerForm.value)\">\n      <textarea rows=3 class=\"form-control form-input\" type=\"text\" formControlName=\"answer\"></textarea>\n      <div class=\"alert-modal-buttons\">\n        <button mat-raised-button color=\"primary\" class=\"alert-modal-button alert-modal-button-success\" type=\"submit\" [disabled]=\"!answerForm.valid\">Edit</button>\n        <button mat-raised-button class=\"alert-modal-button alert-modal-button-failure\" type=\"button\"(click)=\"onCloseCancel()\">Cancel</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/question-answers/update-answer/update-answer-modal.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/question-answers/update-answer/update-answer-modal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UpdateAnswerModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAnswerModalComponent", function() { return UpdateAnswerModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_answers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/answers.service */ "./src/app/services/answers.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var UpdateAnswerModalComponent = /** @class */ (function () {
    function UpdateAnswerModalComponent(answersService, thisDialogRef, modalData) {
        this.answersService = answersService;
        this.thisDialogRef = thisDialogRef;
        this.modalData = modalData;
    }
    UpdateAnswerModalComponent.prototype.ngOnInit = function () {
        console.log(this.modalData.answer);
        this.answerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.modalData.answer.answer, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    UpdateAnswerModalComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close();
    };
    UpdateAnswerModalComponent.prototype.onSubmit = function (values) {
        var _this = this;
        var newAnswer = this.modalData.answer;
        newAnswer.answer = values.answer;
        this.answersService.updateAnswer(newAnswer)
            .then(function (answer) {
            _this.thisDialogRef.close(answer);
            _this.answerForm.reset();
        });
    };
    UpdateAnswerModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'update-answer-modal',
            template: __webpack_require__(/*! ./update-answer-modal.component.html */ "./src/app/question-answers/update-answer/update-answer-modal.component.html"),
            exportAs: 'updateAnswerModal',
            styles: [__webpack_require__(/*! ../../styles/modals.scss */ "./src/app/styles/modals.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_answers_service__WEBPACK_IMPORTED_MODULE_3__["AnswersService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], UpdateAnswerModalComponent);
    return UpdateAnswerModalComponent;
}());



/***/ }),

/***/ "./src/app/services/answers.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/answers.service.ts ***!
  \*********************************************/
/*! exports provided: AnswersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswersService", function() { return AnswersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../sdk */ "./sdk/index.ts");



var AnswersService = /** @class */ (function () {
    function AnswersService(answerApi) {
        this.answerApi = answerApi;
    }
    AnswersService.prototype.getAnswers = function (questionId) {
        var query = {
            questionId: questionId
        };
        return this.answerApi.find({ where: query })
            .toPromise();
    };
    AnswersService.prototype.getAnswer = function (anserId) {
        var query = {
            id: anserId
        };
        return this.answerApi.find({ where: query })
            .toPromise();
    };
    AnswersService.prototype.deleteAnswer = function (answerId) {
        return this.answerApi.deleteById(answerId).toPromise();
    };
    AnswersService.prototype.updateAnswer = function (values) {
        var data = new _sdk__WEBPACK_IMPORTED_MODULE_2__["Answer"]();
        data.answer = values.answer;
        data.positiveVotes = values.positiveVotes;
        data.negativeVotes = values.negativeVotes;
        data.questionId = values.questionId;
        return this.answerApi.updateAttributes(values.id, data)
            .toPromise();
    };
    AnswersService.prototype.createAnswer = function (values) {
        var data = new _sdk__WEBPACK_IMPORTED_MODULE_2__["Answer"]();
        data.answer = values.answer;
        data.questionId = values.questionId;
        return this.answerApi.create(data)
            .toPromise();
    };
    AnswersService.prototype.countAnswers = function (questionId) {
        var query = {
            questionId: questionId
        };
        return this.answerApi.count({ where: query })
            .toPromise();
    };
    AnswersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sdk__WEBPACK_IMPORTED_MODULE_2__["AnswerApi"]])
    ], AnswersService);
    return AnswersService;
}());



/***/ }),

/***/ "./src/app/services/categories.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var CategoriesService = /** @class */ (function () {
    function CategoriesService(http) {
        this.http = http;
    }
    CategoriesService.prototype.getCategories = function () {
        return this.http.get("./assets/categories.json")
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    CategoriesService.prototype.getCategoryBySlug = function (slug) {
        return this.getCategories()
            .then(function (categories) {
            return categories.find(function (category) {
                return category.slug == slug;
            });
        });
    };
    CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/app/services/questions.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/questions.service.ts ***!
  \***********************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../sdk */ "./sdk/index.ts");



var QuestionsService = /** @class */ (function () {
    function QuestionsService(questionApi) {
        this.questionApi = questionApi;
    }
    QuestionsService.prototype.getQuestions = function () {
        var filter = {
            "include": {
                "relation": "answers"
            }
        };
        return this.questionApi.find(filter)
            .toPromise();
    };
    QuestionsService.prototype.getQuestion = function (questionId) {
        var query = {
            id: questionId
        };
        return this.questionApi.find({ where: query })
            .toPromise();
    };
    QuestionsService.prototype.getQuestionsByCategory = function (category_slug) {
        var filter = {
            "include": {
                "relation": "answers"
            },
            "where": {
                "categorySlug": category_slug
            }
        };
        return this.questionApi.find(filter)
            .toPromise();
    };
    QuestionsService.prototype.getQuestionBySlug = function (slug) {
        var filter = {
            "include": {
                "relation": "answers"
            },
            "where": {
                "questionSlug": slug
            }
        };
        return this.questionApi.findOne(filter)
            .toPromise();
    };
    QuestionsService.prototype.deleteQuestion = function (questionId) {
        return this.questionApi.deleteById(questionId).toPromise();
    };
    QuestionsService.prototype.updateQuestion = function (question) {
        return this.questionApi.updateAttributes(question.id, question).toPromise();
    };
    QuestionsService.prototype.createQuestion = function (values) {
        var data = new _sdk__WEBPACK_IMPORTED_MODULE_2__["Question"]();
        data.question = values.question;
        data.questionSlug = values.questionSlug;
        data.categorySlug = values.categorySlug;
        return this.questionApi.create(data).toPromise();
    };
    QuestionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sdk__WEBPACK_IMPORTED_MODULE_2__["QuestionApi"]])
    ], QuestionsService);
    return QuestionsService;
}());



/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n  <li class=\"breadcrumb-item\" *ngFor=\"let breadcrumb of breadcrumbs; let last = last;\">\n    <a *ngIf=\"!last; else lastItem\" [routerLink]=\"[breadcrumb.url]\">{{ breadcrumb.label }}</a>\n    <ng-template #lastItem>{{ breadcrumb.label }}</ng-template>\n  </li>\n</ol>\n"

/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// Inspired on: http://brianflove.com/2016/10/23/angular2-breadcrumb-using-router/




var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.breadcrumbs = [];
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._routerSubscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () { return _this.activatedRoute; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (route) { return route.data; }))
            .subscribe(function (event) {
            if (event['data'] && event['data'].breadcrumbs) {
                _this.breadcrumbs = event['data'].breadcrumbs;
            }
            else {
                // Empty breadcrumbs
                _this.breadcrumbs = [];
            }
        });
    };
    BreadcrumbComponent.prototype.ngOnDestroy = function () {
        if (this._routerSubscription) {
            this._routerSubscription.unsubscribe();
        }
    };
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/shared/breadcrumb/breadcrumb.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./styles/breadcrumb.scss */ "./src/app/shared/breadcrumb/styles/breadcrumb.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/shared/breadcrumb/styles/breadcrumb.scss":
/*!**********************************************************!*\
  !*** ./src/app/shared/breadcrumb/styles/breadcrumb.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "breadcrumb .breadcrumb {\n  background: transparent;\n  border-radius: 0;\n  margin: 20px 0;\n  padding: 0;\n}\nbreadcrumb .breadcrumb .breadcrumb-item {\n  color: #FFF;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 1.9px;\n}\nbreadcrumb .breadcrumb .breadcrumb-item a {\n  color: #FFF;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2FwcC9zaGFyZWQvYnJlYWRjcnVtYi9zdHlsZXMvYnJlYWRjcnVtYi5zY3NzIiwic3JjL2FwcC9zaGFyZWQvYnJlYWRjcnVtYi9zdHlsZXMvYnJlYWRjcnVtYi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDQUo7QURFSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0FOO0FERU07RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9icmVhZGNydW1iL3N0eWxlcy9icmVhZGNydW1iLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJicmVhZGNydW1iIHtcbiAgLmJyZWFkY3J1bWIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgIC5icmVhZGNydW1iLWl0ZW0ge1xuICAgICAgY29sb3I6ICNGRkY7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuOXB4O1xuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImJyZWFkY3J1bWIgLmJyZWFkY3J1bWIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5icmVhZGNydW1iIC5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW0ge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMS45cHg7XG59XG5icmVhZGNydW1iIC5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW0gYSB7XG4gIGNvbG9yOiAjRkZGO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _sdk_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../sdk/index */ "./sdk/index.ts");
/* harmony import */ var _slugify_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slugify.pipe */ "./src/app/shared/slugify.pipe.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");









// Material modules


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbComponent"],
                _slugify_pipe__WEBPACK_IMPORTED_MODULE_8__["SlugifyPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _sdk_index__WEBPACK_IMPORTED_MODULE_7__["SDKBrowserModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
            ],
            providers: [
                _slugify_pipe__WEBPACK_IMPORTED_MODULE_8__["SlugifyPipe"]
            ],
            exports: [
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                // Material modules
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/slugify.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/shared/slugify.pipe.ts ***!
  \****************************************/
/*! exports provided: SlugifyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlugifyPipe", function() { return SlugifyPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SlugifyPipe = /** @class */ (function () {
    function SlugifyPipe() {
    }
    SlugifyPipe.prototype.transform = function (input) {
        return input.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    };
    SlugifyPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'slugify' })
    ], SlugifyPipe);
    return SlugifyPipe;
}());



/***/ }),

/***/ "./src/app/styles/modals.scss":
/*!************************************!*\
  !*** ./src/app/styles/modals.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert-modal {\n  min-width: 300px;\n}\n.alert-modal .alert-modal-title {\n  color: #4a4a4a;\n  font-weight: 300;\n  text-align: center;\n}\n.alert-modal .alert-modal-text {\n  color: #4a4a4a;\n  display: block;\n  text-align: center;\n}\n.alert-modal .alert-modal-buttons {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n.alert-modal .alert-modal-buttons .alert-modal-button {\n  margin-bottom: 10px;\n  margin-top: 40px;\n  min-width: 60px;\n  font-weight: 400;\n  width: 60%;\n}\n.alert-modal .alert-modal-buttons .alert-modal-button.alert-modal-button-success {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2FwcC9zdHlsZXMvbW9kYWxzLnNjc3MiLCJzcmMvYXBwL3N0eWxlcy9tb2RhbHMuc2NzcyIsIi9hcHAvc3JjL2FwcC9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7QUNERjtBREdFO0VBQ0UsY0VKSTtFRktKLGdCQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElFO0VBQ0UsY0VWSTtFRldKLGNBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FES0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0hKO0FES0k7RUFFRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0pOO0FETU07RUFDRSxrQkFBQTtBQ0pSIiwiZmlsZSI6InNyYy9hcHAvc3R5bGVzL21vZGFscy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9fdmFyaWFibGVzJztcblxuLmFsZXJ0LW1vZGFsIHtcbiAgbWluLXdpZHRoOiAzMDBweDtcblxuICAuYWxlcnQtbW9kYWwtdGl0bGUge1xuICAgIGNvbG9yOiAkZ3JleTg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYWxlcnQtbW9kYWwtdGV4dCB7XG4gICAgY29sb3I6ICRncmV5ODtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYWxlcnQtbW9kYWwtYnV0dG9ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAuYWxlcnQtbW9kYWwtYnV0dG9uIHtcblxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICBtaW4td2lkdGg6IDYwcHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgd2lkdGg6IDYwJTtcblxuICAgICAgJi5hbGVydC1tb2RhbC1idXR0b24tc3VjY2VzcyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cblxuICAgICAgJi5hbGVydC1tb2RhbC1idXR0b24tZmFpbHVyZSB7XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5hbGVydC1tb2RhbCB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG4uYWxlcnQtbW9kYWwgLmFsZXJ0LW1vZGFsLXRpdGxlIHtcbiAgY29sb3I6ICM0YTRhNGE7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hbGVydC1tb2RhbCAuYWxlcnQtbW9kYWwtdGV4dCB7XG4gIGNvbG9yOiAjNGE0YTRhO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFsZXJ0LW1vZGFsIC5hbGVydC1tb2RhbC1idXR0b25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hbGVydC1tb2RhbCAuYWxlcnQtbW9kYWwtYnV0dG9ucyAuYWxlcnQtbW9kYWwtYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWluLXdpZHRoOiA2MHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB3aWR0aDogNjAlO1xufVxuLmFsZXJ0LW1vZGFsIC5hbGVydC1tb2RhbC1idXR0b25zIC5hbGVydC1tb2RhbC1idXR0b24uYWxlcnQtbW9kYWwtYnV0dG9uLXN1Y2Nlc3Mge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59IiwiLy8gQ29sb3JzXG4kcHJpbWFyeTogIzNmNTFiNTtcbiRncmV5ODogIzRhNGE0YTtcbiRncmV5NDogI2UxZTFlMTtcbiRncmV5NTogIzU1NTtcbiJdfQ== */"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    api_url: 'https://td2dledk2l.execute-api.us-east-1.amazonaws.com'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sdk */ "./sdk/index.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });
_sdk__WEBPACK_IMPORTED_MODULE_3__["LoopBackConfig"].setBaseURL(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url);
_sdk__WEBPACK_IMPORTED_MODULE_3__["LoopBackConfig"].filterOnUrl();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map