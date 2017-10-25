/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(2);
	__webpack_require__(4);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(19);
	__webpack_require__(20);
	module.exports = __webpack_require__(21);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	mainConfig.$inject = ["$provide", "$compileProvider", "$locationProvider", "$qProvider", "config"];
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Configures the application (before running).
	 */
	function mainConfig($provide, $compileProvider, $locationProvider, $qProvider, config) {
	    // Extend the $exceptionHandler service to output logs.
	    $provide.decorator('$exceptionHandler', ["$delegate", "$injector", function ($delegate, $injector) {
	        return function (exception, cause) {
	            $delegate(exception, cause);
	            var logger = $injector.get('logger').getLogger('exceptionHandler');
	            logger.error(exception + (cause ? ' (' + cause + ')' : ''));
	        };
	    }]);
	    // Disable debug logs in production version
	    $provide.decorator('$log', ["$delegate", function ($delegate) {
	        if (!config.environment.debug) {
	            $delegate.log = angular.noop;
	            $delegate.debug = angular.noop;
	        }
	        return $delegate;
	    }]);
	    // Disable angular debug info in production version
	    $compileProvider.debugInfoEnabled(config.environment.debug);
	    // Use no hash prefix for routing
	    $locationProvider.hashPrefix('');
	    // Disable exception on unhandled rejections (we have our own handler)
	    $qProvider.errorOnUnhandledRejections(false);
	}
	main_module_1.default.config(mainConfig);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	Object.defineProperty(exports, "__esModule", { value: true });
	// Translations are injected at build phase
	angular.module('translations', []);
	exports.default = angular.module('app', [
	    'translations',
	    'gettext',
	    'ngAnimate',
	    'ngSanitize',
	    'ngCordova',
	    'ui.router',
	    'ionic'
	]);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	// Do not remove the comments below, or change the values. It's the markers used by gulp build task to change the
	// value of the config constant when building the application, while removing the code below for all environments.
	// replace:environment
	var environment = {
	    local: {
	        debug: true,
	        // REST backend configuration, used for all web services using restService
	        server: {
	            url: '',
	            route: 'api'
	        }
	    },
	    production: {
	        debug: false,
	        server: {
	            url: 'http://api.icndb.com',
	            route: ''
	        }
	    }
	};
	// endreplace
	/**
	 * Defines app-level configuration.
	 */
	var config = {
	    // Do not remove the comments below, or change the values. It's the markers used by gulp build task to inject app
	    // version from package.json and environment values.
	    // replace:constant
	    version: 'dev',
	    environment: environment.local,
	    // endreplace
	    // Supported languages
	    supportedLanguages: [
	        'en-US',
	        'fr-FR'
	    ]
	};
	main_module_1.default.constant('config', config);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	routeConfig.$inject = ["$stateProvider", "$urlRouterProvider", "gettext"];
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Configures the application routes.
	 */
	function routeConfig($stateProvider, $urlRouterProvider, gettext) {
	    // Routes configuration
	    $urlRouterProvider.otherwise('/');
	    $stateProvider
	        .state('app', {
	        template: __webpack_require__(5),
	        controller: 'shellController as shell'
	    })
	        .state('app.home', {
	        url: '/',
	        views: {
	            'menuContent': {
	                template: __webpack_require__(6),
	                controller: 'homeController as vm'
	            }
	        },
	        data: { title: gettext('Home') }
	    })
	        .state('app.about', {
	        url: '/about',
	        views: {
	            'menuContent': {
	                template: __webpack_require__(7),
	                controller: 'aboutController as vm'
	            }
	        },
	        data: { title: gettext('About') }
	    });
	}
	main_module_1.default.config(routeConfig);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<ion-side-menus id=\"shell\" class=\"shell\" enable-menu-with-back-views=\"true\"><!--View content--><ion-side-menu-content><ion-nav-bar class=\"bar-stable\"><ion-nav-back-button></ion-nav-back-button><ion-nav-buttons side=\"left\"><button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\" ng-hide=\"$exposeAside.active\"></button></ion-nav-buttons></ion-nav-bar><ion-nav-view name=\"menuContent\"></ion-nav-view></ion-side-menu-content><!--Side menu--><ion-side-menu side=\"left\" expose-aside-when=\"(min-width:769px)\"><ion-header-bar class=\"bar-dark\"><h1 class=\"title\" translate>APP_NAME</h1></ion-header-bar><ion-content class=\"dark-bg\"><ion-list><ion-item class=\"item-dark item-icon-left\" menu-close href=\"#/\" ng-class=\"{ active: shell.stateContains('app.home') }\"><span class=\"medium-dark\"><i class=\"icon ion-home icon-large\"></i> <span translate>Home</span></span></ion-item><ion-item class=\"item-dark item-icon-left text-darker\" menu-close href=\"#/about\" ng-class=\"{ active: shell.stateContains('app.about') }\"><span class=\"medium-dark\"><i class=\"icon ion-information-circled icon-large\"></i> <span translate>About</span></span></ion-item></ion-list></ion-content></ion-side-menu></ion-side-menus>"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = "<ion-view id=\"home-screen\" class=\"home-screen\"><ion-nav-title>{{viewTitle}}</ion-nav-title><ion-content><ion-list type=\"card\" class=\"text-center\"><ion-item class=\"item-divider\"><img class=\"logo\" src=\"images/angularjs-logo.png\" alt=\"angularjs logo\"><h1 translate>Hello world !</h1></ion-item><ion-item class=\"item-body\"><div ui-loading=\"vm.isLoading\"></div><em class=\"quote\">{{vm.quote}}</em></ion-item></ion-list></ion-content></ion-view>"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = "<ion-view id=\"about-screen\"><ion-nav-title>{{viewTitle}}</ion-nav-title><ion-content><ion-list type=\"card\"><ion-item class=\"text-center\"><h1><i class=\"icon ion-bookmark\"></i> <span translate>APP_NAME</span></h1><p><span translate>Version</span> {{vm.version}}</p></ion-item></ion-list></ion-content></ion-view>"

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	main.$inject = ["$window", "$locale", "$rootScope", "$state", "$timeout", "$cordovaKeyboard", "$ionicPlatform", "gettextCatalog", "_", "config", "logger", "restService"];
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Entry point of the application.
	 * Initializes application and root controller.
	 */
	function main($window, $locale, $rootScope, $state, $timeout, $cordovaKeyboard, $ionicPlatform, gettextCatalog, _, config, logger, restService) {
	    /*
	     * Root view model
	     */
	    var vm = $rootScope;
	    vm.pageTitle = '';
	    vm.viewTitle = '';
	    /**
	     * Utility method to set the language in the tools requiring it.
	     * The current language is saved to the local storage.
	     * If no parameter is specified, the language is loaded from local storage (if possible).
	     * @param {string=} language The IETF language tag.
	     */
	    vm.setLanguage = function (language) {
	        language = language || $window.localStorage.getItem('language');
	        var isSupportedLanguage = _.includes(config.supportedLanguages, language);
	        // If no exact match is found, search without the region
	        if (!isSupportedLanguage && language) {
	            var languagePart_1 = language.split('-')[0];
	            language = _.find(config.supportedLanguages, function (supportedLanguage) { return _.startsWith(supportedLanguage, languagePart_1); });
	            isSupportedLanguage = !!language;
	        }
	        // Fallback if language is not supported
	        if (!isSupportedLanguage) {
	            language = 'en-US';
	        }
	        // Configure translation with gettext
	        gettextCatalog.setCurrentLanguage(language);
	        $locale.id = language;
	        $window.localStorage.setItem('language', language);
	    };
	    /**
	     * Updates title on view change.
	     */
	    vm.$on('$stateChangeSuccess', function (event, toState) {
	        updateTitle(toState.data ? toState.data.title : null);
	    });
	    /**
	     * Updates title on language change.
	     */
	    vm.$on('gettextLanguageChanged', function () {
	        updateTitle($state.current.data ? $state.current.data.title : null);
	    });
	    init();
	    /*
	     * Internal
	     */
	    /**
	     * Initializes the root controller.
	     */
	    function init() {
	        var _logger = logger.getLogger('main');
	        // Enable debug mode for translations
	        gettextCatalog.debug = config.environment.debug;
	        vm.setLanguage();
	        // Set REST server configuration
	        restService.setServer(config.environment.server);
	        // Cordova platform and plugins init
	        $ionicPlatform.ready(function () {
	            // Hide splash screen
	            var splashScreen = $window.navigator.splashscreen;
	            if (splashScreen) {
	                $timeout(function () {
	                    splashScreen.hide();
	                }, 1000);
	            }
	            // Detect and set default language
	            var globalization = $window.navigator.globalization;
	            if (globalization) {
	                // Use cordova plugin to retrieve device's locale
	                globalization.getPreferredLanguage(function (language) {
	                    _logger.log('Setting device locale "' + language.value + '" as default language');
	                    vm.$apply(function () {
	                        vm.setLanguage(language.value);
	                    });
	                }, null);
	            }
	            if ($window.cordova && $window.cordova.plugins.Keyboard) {
	                $cordovaKeyboard.disableScroll(true);
	            }
	        });
	    }
	    /**
	     * Updates the title.
	     * @param {?string=} stateTitle Title of current state, to be translated.
	     */
	    function updateTitle(stateTitle) {
	        vm.pageTitle = gettextCatalog.getString('APP_NAME');
	        if (stateTitle) {
	            vm.viewTitle = gettextCatalog.getString(stateTitle);
	            vm.pageTitle += ' | ' + vm.viewTitle;
	        }
	    }
	}
	main_module_1.default.run(main);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Wraps external global libraries into AngularJS injection system.
	 * global window: false
	 */
	main_module_1.default.constant('_', _); // Lodash


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Displays the SPA shell.
	 * The shell contains the shared parts of the application: header, footer, navigation...
	 */
	var ShellController = /** @class */ (function () {
	    ShellController.$inject = ["$state", "$locale", "_", "logger"];
	    function ShellController($state, $locale, _, logger) {
	        this.$state = $state;
	        this._ = _;
	        this.currentLocale = $locale;
	        this.logger = logger.getLogger('shell');
	        this.logger.log('init');
	    }
	    /**
	     * Checks if the specified name is contained in the current navigation state.
	     * @param {string} name The state name to check.
	     * @return {boolean} True if the specified name is contained in the current navigation state.
	     */
	    ShellController.prototype.stateContains = function (name) {
	        return this._.startsWith(this.$state.current.name, name);
	    };
	    return ShellController;
	}());
	exports.ShellController = ShellController;
	main_module_1.default.controller('shellController', ShellController);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Cache service: manages cached data for GET requests.
	 * By default, the cache is only persisted in memory, but you can change this behavior using the setPersistence()
	 * method.
	 */
	var CacheService = /** @class */ (function () {
	    CacheService.$inject = ["$window", "logger"];
	    function CacheService($window, logger) {
	        this.$window = $window;
	        this.cachedData = {};
	        this.storage = null;
	        this.logger = logger.getLogger('cacheService');
	        /**
	         * Initializes service.
	         */
	        this.loadCacheData();
	    }
	    /**
	     * Sets the cache data for the specified request.
	     * @param {!string} url URL of the REST service call.
	     * @param {map=} params Map of strings or objects which will be turned to ?key1=value1&key2=value2 after the url. If the value is not a string, it will be
	     *   JSONified.
	     * @param {Object} data The received data.
	     * @param {Date=} date The cache date, now date is used if not specified.
	     */
	    CacheService.prototype.setCacheData = function (url, params, data, date) {
	        var cacheKey = this.getCacheKey(url, params);
	        this.cachedData[cacheKey] = {
	            date: date || new Date(),
	            data: data
	        };
	        this.logger.log('Cache set for key: "' + cacheKey + '"');
	        this.saveCacheData();
	    };
	    /**
	     * Gets the cached data (if possible) for the specified request.
	     * @param {!string} url URL of the REST service call.
	     * @param {?map=} params Map of strings or objects which will be turned to ?key1=value1&key2=value2 after the url. If the value is not a string, it will be
	     *   JSONified.
	     * @return {?Object} The cached data or null if no cached data exists for this request.
	     */
	    CacheService.prototype.getCacheData = function (url, params) {
	        var cacheKey = this.getCacheKey(url, params);
	        var cacheEntry = this.cachedData[cacheKey];
	        if (cacheEntry) {
	            this.logger.log('Cache hit for key: "' + cacheKey + '"');
	            return cacheEntry.data;
	        }
	        return null;
	    };
	    /**
	     * Gets the cached data date (if possible) for the specified request.
	     * @param {!string} url URL of the REST service call.
	     * @param {?map=} params Map of strings or objects which will be turned to ?key1=value1&key2=value2 after the url. If the value is not a string, it will be
	     *   JSONified.
	     * @return {?Object} The cached data date or null if no cached data exists for this request.
	     */
	    CacheService.prototype.getCacheDate = function (url, params) {
	        var cacheKey = this.getCacheKey(url, params);
	        var cacheEntry = this.cachedData[cacheKey];
	        return cacheEntry ? cacheEntry.date : null;
	    };
	    /**
	     * Clears the cached data (if exists) for the specified request.
	     * @param {!string} url URL of the REST service call.
	     * @param {?map=} params Map of strings or objects which will be turned to ?key1=value1&key2=value2 after the url. If the value is not a string, it will be
	     *   JSONified.
	     */
	    CacheService.prototype.clearCacheData = function (url, params) {
	        var cacheKey = this.getCacheKey(url, params);
	        this.cachedData[cacheKey] = undefined;
	        this.logger.log('Cache cleared for key: "' + cacheKey + '"');
	        this.saveCacheData();
	    };
	    /**
	     * Cleans cache entries older than the specified date.
	     * @param {date=} expirationDate The cache expiration date. If no date is specified, all cache is cleared.
	     */
	    CacheService.prototype.cleanCache = function (expirationDate) {
	        var _this = this;
	        if (expirationDate) {
	            angular.forEach(this.cachedData, function (value, key) {
	                if (expirationDate >= value.date) {
	                    _this.cachedData[key] = undefined;
	                }
	            });
	        }
	        else {
	            this.cachedData = {};
	        }
	        this.saveCacheData();
	    };
	    /**
	     * Sets the cache persistence.
	     * Note that changing the cache persistence will also clear the cache from its previous storage.
	     * @param {'local'|'session'=} persistence How the cache should be persisted, it can be either
	     *   in the local or session storage, or if no parameters is provided it will be only in-memory (default).
	     */
	    CacheService.prototype.setPersistence = function (persistence) {
	        this.cleanCache();
	        this.storage = persistence === 'local' || persistence === 'session' ?
	            this.$window[persistence + 'Storage'] : null;
	        this.loadCacheData();
	    };
	    ;
	    /**
	     * Gets the cache key for the specified url and parameters.
	     * @param {!string} url The request URL.
	     * @param {?map=} params Map of strings or objects which will be turned to ?key1=value1&key2=value2 after the url. If the value is not a string, it will be
	     *   JSONified.
	     * @return {string} The corresponding cache key.
	     */
	    CacheService.prototype.getCacheKey = function (url, params) {
	        return url + (params ? angular.toJson(params) : '');
	    };
	    /**
	     * Saves the current cached data into persisted storage.
	     */
	    CacheService.prototype.saveCacheData = function () {
	        if (this.storage) {
	            this.storage.cachedData = angular.toJson(this.cachedData);
	        }
	    };
	    /**
	     * Loads cached data from persisted storage.
	     */
	    CacheService.prototype.loadCacheData = function () {
	        var data = this.storage ? this.storage.cachedData : null;
	        this.cachedData = data ? angular.fromJson(data) : {};
	    };
	    return CacheService;
	}());
	exports.CacheService = CacheService;
	main_module_1.default.service('cacheService', CacheService);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Context service: provides URL context injection based on specified context.
	 */
	var ContextService = /** @class */ (function () {
	    ContextService.$inject = ["logger"];
	    function ContextService(logger) {
	        this.logger = logger.getLogger('contextService');
	    }
	    /**
	     * Injects the specified context into the given REST API.
	     * The REST API should be formatted like "/api/users/:userId".
	     * Any fragment from the REST API starting with ":" will then be replaced by a property from the context with
	     * the same name, i.e. for "/api/users/:userId" and a context object "{ userId: 123 }", the resulting URL will
	     * be "/api/users/123".
	     * @param {!string} restApi The REST API to fill will context values.
	     * @param {Object} context The context to use.
	     * @return {string} The ready-to-use REST API to call.
	     */
	    ContextService.prototype.inject = function (restApi, context) {
	        var _this = this;
	        this.logger.log('Injecting context in: ' + restApi);
	        if (!context) {
	            throw 'inject: context must be defined';
	        }
	        // Search for context properties to inject
	        var properties = restApi.match(/(:\w+)/g);
	        angular.forEach(properties, function (property) {
	            var contextVar = property.substring(1);
	            var contextValue = context[contextVar];
	            if (contextValue !== undefined) {
	                contextValue = encodeURIComponent(contextValue);
	                restApi = restApi.replace(property, contextValue);
	                _this.logger.log('Injected ' + contextValue + ' for ' + property);
	            }
	            else {
	                throw 'inject: context.' + contextVar + ' expected but undefined';
	            }
	        });
	        this.logger.log('Resulting REST API: ' + restApi);
	        return restApi;
	    };
	    return ContextService;
	}());
	exports.ContextService = ContextService;
	main_module_1.default.service('contextService', ContextService);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Provides a simple logging system with the possibility of registering log observers.
	 * In order to track the source module of message logs,
	 * a customized logger should be instanciated using the getLogger() method just after its injection.
	 *
	 * 4 different log levels are provided, via corresponding methods:
	 * - log: for debug information
	 * - info: for informative status of the application (success, ...)
	 * - warning: for non-critical errors that do not prevent normal application behavior
	 * - error: for critical errors that prevent normal application behavior
	 *
	 * Example usage:
	 * angular.module('myService', ['logger']).factory('myService', function (logger) {
	 *   logger = logger.getLogger('myService');
	 *   ...
	 *   logger.log('something happened');
	 * }
	 *
	 * If you want to disable debug logs in production, add this snippet to your app configuration:
	 * angular.module('app').config(function ($provide) {
	 *   // Disable debug logs in production version
	 *   $provide.decorator('$log', ['$delegate', function($delegate) {
	 *     if (!debug) {
	 *       $delegate.log = function() {};
	 *     }
	 *     return $delegate;
	 *   }]);
	 * });
	 *
	 * If you want additional tasks to be performed on log entry (show toast, for example),
	 * you can register observers using the addObserver() method.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	var observers = [];
	/**
	 * Logs a message from the specified source.
	 * @param {string} message The message to be logged.
	 * @param {?string=} source The source of the log.
	 * @param {function} logFunc The base log function to use.
	 * @param {'log'|'info'|'warning'|'error'} level The log level.
	 * @param {Object?} options Additional log options.
	 */
	function log(message, source, logFunc, level, options) {
	    logFunc(source ? '[' + source + ']' : '', message, '');
	    angular.forEach(observers, function (observerFunc) {
	        observerFunc(message, source, level, options);
	    });
	}
	var Logger = /** @class */ (function () {
	    function Logger($log, moduleName, logFunc) {
	        this.$log = $log;
	        this.moduleName = moduleName;
	        this.logFunc = logFunc;
	    }
	    Logger.prototype.log = function (message, options) {
	        this.logFunc(message, this.moduleName, this.$log.log, 'log', options);
	    };
	    Logger.prototype.info = function (message, options) {
	        this.logFunc(message, this.moduleName, this.$log.info, 'info', options);
	    };
	    Logger.prototype.warning = function (message, options) {
	        this.logFunc(message, this.moduleName, this.$log.warn, 'warning', options);
	    };
	    Logger.prototype.error = function (message, options) {
	        this.logFunc(message, this.moduleName, this.$log.error, 'error', options);
	    };
	    return Logger;
	}());
	var LoggerService = /** @class */ (function () {
	    LoggerService.$inject = ["$log"];
	    function LoggerService($log) {
	        this.$log = $log;
	    }
	    /**
	     * Gets a customized logger based on the given module name.
	     * @param {string} moduleName The module name.
	     * @return {Logger} A logger object.
	     */
	    LoggerService.prototype.getLogger = function (moduleName) {
	        return new Logger(this.$log, moduleName, log);
	    };
	    /**
	     * Adds a new observer function that will be called for each new log entry.
	     * These parameters are passed to the observer function, in order:
	     * - message {string} message The message to be logged.
	     * - source {?string=} source The source of the log.
	     * - level {'log'|'info'|'warning'|'error'} level The log level.
	     * - options {Object?} options Additional log options.
	     * @param {!function} observerFunc The observer function.
	     */
	    LoggerService.prototype.addObserver = function (observerFunc) {
	        observers.push(observerFunc);
	    };
	    return LoggerService;
	}());
	exports.LoggerService = LoggerService;
	main_module_1.default.service('logger', LoggerService);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * REST service: provides methods to perform REST requests.
	 */
	var RestService = /** @class */ (function () {
	    RestService.$inject = ["$q", "$http", "cacheService", "logger"];
	    function RestService($q, $http, cacheService, logger) {
	        this.$q = $q;
	        this.$http = $http;
	        this.cacheService = cacheService;
	        this.server = null;
	        this.baseUrl = '';
	        this.defaultConfig = {
	            headers: {
	                'content-type': 'application/json',
	                'Access-Control-Allow-Headers': 'content-type'
	            }
	        };
	        /**
	         * Defaults cache handler.
	         * This handler just return the specified cache data and does nothing.
	         * @type {Function}
	         */
	        this.cacheHandler = angular.identity;
	        this.logger = logger.getLogger('restService');
	    }
	    /**
	     * Executes a GET request.
	     * @param {!String} url URL of the REST service call.
	     * @param {?Object.<string|Object>=} params Map of strings or objects which will be turned to ?key1=value1&key2=value2 after the url. If the value is not a string, it will be
	     *   JSONified.
	     * @param {?boolean|'force'} cache If set to true, the first request will be cached, and next request with cache set to true will use the cached response.
	     *   If set to 'force', the request will always be made and cache will be updated.
	     *   If set to false or omitted, no cache will be set or used.
	     * @param {?Object=} options Additional options for request/error handlers.
	     * @return {Object} The promise.
	     */
	    RestService.prototype.get = function (url, params, cache, options) {
	        var _this = this;
	        var apiUrl = this.baseUrl + url;
	        var promiseBuilder = function () { return _this.$http.get(apiUrl, { params: params }); };
	        if (!cache) {
	            // Do not use cache
	            return this.createRequest(promiseBuilder, options);
	        }
	        else {
	            var cachedData = cache === 'force' ? null : this.cacheService.getCacheData(url, params);
	            if (cachedData !== null) {
	                cachedData = this.cacheHandler(cachedData);
	            }
	            if (cachedData === null) {
	                this.logger.log('GET request: ' + url);
	                // Update cache entry
	                return this.createRequest(promiseBuilder, options).then(function (response) {
	                    _this.cacheService.setCacheData(url, params, response, null);
	                    return angular.copy(response);
	                });
	            }
	            else {
	                // Use cached version
	                var deferred = this.$q.defer();
	                deferred.resolve(angular.copy(cachedData));
	                return this.errorHandler(deferred.promise, options);
	            }
	        }
	    };
	    /**
	     * Executes a PUT request.
	     * @param {!String} url URL of the REST service call.
	     * @param {String|Object} data Data to be sent as the request message data.
	     * @param {?Object=} options Additional options for request/error handlers.
	     * @return {Object} The promise.
	     */
	    RestService.prototype.put = function (url, data, options) {
	        var _this = this;
	        this.logger.log('PUT request: ' + url, null);
	        var promise = function () { return _this.$http.put(_this.baseUrl + url, data, _this.defaultConfig); };
	        return this.createRequest(promise, options);
	    };
	    /**
	     * Executes a POST request.
	     * @param {!String} url URL of the REST service call.
	     * @param {String|Object} data Data to be sent as the request message data.
	     * @param {?Object=} options Additional options for request/error handlers.
	     * @return {Object} The promise.
	     */
	    RestService.prototype.post = function (url, data, options) {
	        var _this = this;
	        this.logger.log('POST request: ' + url, null);
	        var promiseBuilder = function () { return _this.$http.post(_this.baseUrl + url, data, _this.defaultConfig); };
	        return this.createRequest(promiseBuilder, options);
	    };
	    /**
	     * Executes a DELETE request.
	     * @param {!String} url URL of the REST service call.
	     * @param {?Object=} options Additional options for request/error handlers.
	     * @return {Object} The promise.
	     */
	    RestService.prototype.delete = function (url, options) {
	        var _this = this;
	        this.logger.log('DELETE request: ' + url, null);
	        var promise = function () { return _this.$http.delete(_this.baseUrl + url, _this.defaultConfig); };
	        return this.createRequest(promise, options);
	    };
	    /**
	     * Sets the current server configuration.
	     * A server parameter must contains at least these two strings:
	     * - url: The base URL of the server
	     * - route: The base route of the REST API
	     * @param {!Object} server The server configuration.
	     */
	    RestService.prototype.setServer = function (server) {
	        this.server = server;
	        this.baseUrl = server.url + server.route;
	    };
	    /**
	     * Returns the current server configuration.
	     * @return {String} The server base URL.
	     */
	    RestService.prototype.getServer = function () {
	        return this.server;
	    };
	    /**
	     * Returns the base URI.
	     * @return {String} The computed base URI.
	     */
	    RestService.prototype.getBaseUrl = function () {
	        return this.baseUrl;
	    };
	    /**
	     * Sets a customized request handler function for all requests.
	     * The function should have the following signature, and return a promise:
	     * function requestHandler(requestBuilder, options) {
	     *   return requestBuilder();
	     * }
	     * The requestBuilder parameter is a function that returns the request promise.
	     * The options parameter is an optional object containing whatever options your handler may needs.
	     * @param {!function} requestHandlerFunc The request handler.
	     */
	    RestService.prototype.setRequestHandler = function (requestHandlerFunc) {
	        this.requestHandler = requestHandlerFunc;
	    };
	    /**
	     * Gets the current request handler function.
	     * @return {function} The request handler.
	     */
	    RestService.prototype.getRequestHandler = function () {
	        return this.requestHandler;
	    };
	    /**
	     * Sets a customized default error handler function for all requests.
	     * The function should have the following signature, and return a promise:
	     * function errorHandler(promise, options) {
	     *   return promise.catch(response, function() {
	     *      ...
	     *      return $q.reject(response);
	     *   });
	     * }
	     * The promise parameter is the request promise.
	     * The options parameter is an optional object containing whatever options your handler may needs.
	     * @param {!function} errorHandlerFunc The error handler.
	     */
	    RestService.prototype.setErrorHandler = function (errorHandlerFunc) {
	        this.errorHandler = errorHandlerFunc;
	    };
	    /**
	     * Gets the current error handler function.
	     * @return {function} The error handler.
	     */
	    RestService.prototype.getErrorHandler = function () {
	        return this.errorHandler;
	    };
	    /**
	     * Sets a customized default cache handler function for all cached requests.
	     * The function should have the following signature, and return an object:
	     * function cacheHandler(cachedData) {
	     *    return isValid(cachedData) ? cachedData : null;
	     * }
	     * This handler is only called before for requests that would return cached data otherwise.
	     * @param {!function} cacheHandlerFunc The cache handler.
	     */
	    RestService.prototype.setCacheHandler = function (cacheHandlerFunc) {
	        this.cacheHandler = cacheHandlerFunc;
	    };
	    /**
	     * Gets the current cache handler function.
	     * @return {function} The cache handler.
	     */
	    RestService.prototype.getCacheHandler = function () {
	        return this.cacheHandler;
	    };
	    /**
	     * Default request handler, that just builds the promise.
	     * @param {!function} requestBuilder A function that return the request's promise.
	     * @param {?Object=} options Options that will be passed to the request builder function.
	     * @return {Object} The promise.
	     * @type {function}
	     */
	    RestService.prototype.requestHandler = function (requestBuilder, options) {
	        // Default request handler just builds the request
	        return requestBuilder(options);
	    };
	    /**
	     * Default error handler.
	     * This handler tries to extract a description of the error and logs and error with it.
	     * @param {!Object} promise The promise to handle errors.
	     * @param {?Object=} options Additional options: if 'skipErrors' property is set to true, errors will not be handled.
	     * @return {Object} The promise.
	     */
	    RestService.prototype.errorHandler = function (promise, options) {
	        var _this = this;
	        if (!options || !options.skipErrors) {
	            promise.catch(function (response) {
	                var error;
	                if (response.status === 404) {
	                    error = 'Server unavailable or URL does not exist';
	                }
	                else if (response.data) {
	                    var message = response.data.message ? response.data.message : null;
	                    var code = response.data.error ? response.data.error : null;
	                    error = message || code || angular.toJson(response.data);
	                }
	                if (error) {
	                    _this.logger.error(error, null);
	                }
	                return _this.$q.reject(response);
	            });
	        }
	        return promise;
	    };
	    /**
	     * Creates the request.
	     * @param {!function} requestBuilder A function that return the request's promise.
	     * @param {?Object=} options Additional options for request/error handlers.
	     * @return {Object} The promise.
	     */
	    RestService.prototype.createRequest = function (requestBuilder, options) {
	        return this.errorHandler(this.requestHandler(requestBuilder, options), options);
	    };
	    return RestService;
	}());
	exports.RestService = RestService;
	main_module_1.default.service('restService', RestService);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Displays the about screen.
	 */
	var AboutController = /** @class */ (function () {
	    AboutController.$inject = ["logger", "config"];
	    function AboutController(logger, config) {
	        this.logger = logger.getLogger('about');
	        this.version = config.version;
	        this.logger.log('init');
	    }
	    return AboutController;
	}());
	exports.AboutController = AboutController;
	main_module_1.default.controller('aboutController', AboutController);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Displays the home screen.
	 */
	var HomeController = /** @class */ (function () {
	    HomeController.$inject = ["logger", "quoteService"];
	    function HomeController(logger, quoteService) {
	        var _this = this;
	        this.isLoading = true;
	        this.quote = null;
	        this.logger = logger.getLogger('home');
	        this.quoteService = quoteService;
	        this.logger.log('init');
	        this.quoteService
	            .getRandomJoke({ category: 'nerdy' })
	            .then(function (quote) {
	            _this.quote = quote;
	        })
	            .finally(function () {
	            _this.isLoading = false;
	        });
	    }
	    return HomeController;
	}());
	exports.HomeController = HomeController;
	main_module_1.default.controller('homeController', HomeController);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Loading directive: displays a loading indicator while data is being loaded.
	 *
	 * Example usage: <div ui-loading="isLoading"></div>
	 * The expected value of the directive attribute is a boolean indicating whether the content
	 * is still loading or not.
	 *
	 * Additional parameter attributes:
	 * - message: the loading message to display (none by default)
	 *
	 * Example: <div ui-loading="isLoading" message="Loading..."></div>
	 */
	var LoadingDirective = /** @class */ (function () {
	    function LoadingDirective() {
	        this.restrict = 'A';
	        this.template = __webpack_require__(18);
	        this.scope = {
	            message: '<',
	            isLoading: '<uiLoading'
	        };
	    }
	    return LoadingDirective;
	}());
	exports.LoadingDirective = LoadingDirective;
	main_module_1.default.directive('uiLoading', function () { return new LoadingDirective(); });


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = "<div ng-show=\"isLoading\" class=\"ui-loading text-center\"><ion-spinner icon=\"crescent\"></ion-spinner><span>{{message}}</span></div>"

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Quote service: allows to get quote of the day.
	 */
	var QuoteService = /** @class */ (function () {
	    QuoteService.$inject = ["$q", "restService", "contextService"];
	    function QuoteService($q, restService, contextService) {
	        this.$q = $q;
	        this.restService = restService;
	        this.contextService = contextService;
	        this.ROUTES = {
	            randomJoke: '/jokes/random?escape=javascript&limitTo=[:category]'
	        };
	    }
	    /**
	     * Get a random Chuck Norris joke.
	     * Used context properties:
	     * - category: the joke's category: 'nerdy', 'explicit'...
	     * @param {!Object} context The context to use.
	     * @return {Object} The promise.
	     */
	    QuoteService.prototype.getRandomJoke = function (context) {
	        var _this = this;
	        return this.restService
	            .get(this.contextService.inject(this.ROUTES.randomJoke, context), null, true)
	            .then(function (response) {
	            if (response.data && response.data.value) {
	                return response.data.value.joke;
	            }
	            return _this.$q.reject();
	        })
	            .catch(function () {
	            return 'Error, could not load joke :-(';
	        });
	    };
	    return QuoteService;
	}());
	exports.QuoteService = QuoteService;
	main_module_1.default.service('quoteService', QuoteService);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	angular.module('translations').run(['gettextCatalog', function (gettextCatalog) {
	/* jshint -W100 */
	    gettextCatalog.setStrings('en-US', {"About":"About","APP_NAME":"saveTheEvent","Hello world !":"Hello world !","Home":"Home","Version":"Version"});
	/* jshint +W100 */
	}]);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	angular.module('translations').run(['gettextCatalog', function (gettextCatalog) {
	/* jshint -W100 */
	    gettextCatalog.setStrings('fr-FR', {"About":"A propos","APP_NAME":"saveTheEvent","Hello world !":"Bonjour le monde !","Home":"Accueil","Version":"Version"});
	/* jshint +W100 */
	}]);

/***/ })
/******/ ]);