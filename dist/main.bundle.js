webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\">\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\"\r\n            data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\r\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <a class=\"navbar-brand\" href=\"#\">COSW Angular4</a>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLinkActive=\"/\" routerLink=\"/\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLinkActive=\"/tasks\" routerLink=\"/tasks\">Tasks</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLinkActive=\"/edit\" routerLink=\"/edit\">CreateTask</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLinkActive=\"/user-list\" routerLink=\"/user-list\">Users</a>\r\n            </li>\r\n            <li *ngIf=\"isLoggedIn()\"class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLinkActive=\"/user-edit\" routerLink=\"/user-edit\">Register Users</a>\r\n            </li>\r\n            <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\r\n                <a href=\"#\" class=\"nav-link\" (click)=\"signOut()\">Sign Out</a>\r\n            </li>\r\n        </ul>\r\n\r\n\r\n        <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n                <ul class=\"navbar-nav mr-auto\">\r\n                    <li class=\"nav-item active\">\r\n                        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n                    </li>\r\n                </ul>\r\n                <form *ngIf=\"isLoggedIn()\" (ngSubmit)=\"smit(Modal)\" class=\"form-inline my-2 my-lg-0\" #navForm=\"ngForm\">\r\n                    <input [(ngModel)]=\"byemail\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n                    <button class=\"btn btn-outline-success my-2 my-sm-0\"  type=\"submit\">Search</button>\r\n                    <ng-template #Modal>\r\n                        <div class=\"modal-header\">\r\n                        </div>\r\n                        <div class=\"modal-body\" [innerHTML]=\"edited\">\r\n                        </div>\r\n                    </ng-template>\r\n                </form>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n</nav>\r\n<!-- Modal -->\r\n\r\n<div class=\"container\">\r\n\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(modalService, authService, router, userService) {
        this.modalService = modalService;
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.title = 'app';
        this.byemail = '';
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
        }
    }
    AppComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AppComponent.prototype.smit = function (modal) {
        var _this = this;
        this.userService.findByEmail(this.byemail).subscribe(function (response) {
            _this.edited = "<div>username: " + response.username + "</div><div>email: " + response.email + "</div><div>firstname: " + response.firstname + "</div><div>lastname: " + response.lastname + "</div><div>image: <img src='" + response.image + "' width='150' height='150' /></div>";
        }, function (error) {
            _this.edited = "<div>No user found with the email address</div>";
        });
        this.modalService.open(modal);
    };
    AppComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_task_list_page_task_list_page_component__ = __webpack_require__("../../../../../src/app/pages/task-list-page/task-list-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_task_edit_page_task_edit_page_component__ = __webpack_require__("../../../../../src/app/pages/task-edit-page/task-edit-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_user_list_page_user_list_page_component__ = __webpack_require__("../../../../../src/app/pages/user-list-page/user-list-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_user_edit_page_user_edit_page_component__ = __webpack_require__("../../../../../src/app/pages/user-edit-page/user-edit-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sign_in_page_sign_in_page_component__ = __webpack_require__("../../../../../src/app/pages/sign-in-page/sign-in-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_todo_service__ = __webpack_require__("../../../../../src/app/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_config_app_configuration_service__ = __webpack_require__("../../../../../src/app/common/config/app-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_config_initial_config__ = __webpack_require__("../../../../../src/app/common/config/initial-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_api_service__ = __webpack_require__("../../../../../src/app/common/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__common_app_data_service__ = __webpack_require__("../../../../../src/app/common/app-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var ROUTES = [
    { path: 'user-list', component: __WEBPACK_IMPORTED_MODULE_9__pages_user_list_page_user_list_page_component__["a" /* UserListPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__common_auth_service__["a" /* AuthService */]] },
    { path: 'user-edit', component: __WEBPACK_IMPORTED_MODULE_10__pages_user_edit_page_user_edit_page_component__["a" /* UserEditPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__common_auth_service__["a" /* AuthService */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__pages_sign_in_page_sign_in_page_component__["a" /* SignInPageComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'tasks', component: __WEBPACK_IMPORTED_MODULE_6__pages_task_list_page_task_list_page_component__["a" /* TaskListPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__common_auth_service__["a" /* AuthService */]], },
    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_7__pages_task_edit_page_task_edit_page_component__["a" /* TaskEditPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__common_auth_service__["a" /* AuthService */]], },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pages_task_list_page_task_list_page_component__["a" /* TaskListPageComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pages_task_edit_page_task_edit_page_component__["a" /* TaskEditPageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_user_list_page_user_list_page_component__["a" /* UserListPageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_user_edit_page_user_edit_page_component__["a" /* UserEditPageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_sign_in_page_sign_in_page_component__["a" /* SignInPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_17__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(ROUTES),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */]
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_16__common_config_initial_config__["a" /* INITIAL_CONFIG */],
                useValue: {
                    apiURL: 'http://localhost:8080'
                }
            },
            __WEBPACK_IMPORTED_MODULE_13__services_todo_service__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_15__common_config_app_configuration_service__["a" /* AppConfiguration */],
            __WEBPACK_IMPORTED_MODULE_18__common_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_19__common_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_20__common_app_data_service__["a" /* AppDataService */],
            __WEBPACK_IMPORTED_MODULE_14__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/common/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_config_app_configuration_service__ = __webpack_require__("../../../../../src/app/common/config/app-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var APIService = (function () {
    function APIService(config, authService, http) {
        this.config = config;
        this.authService = authService;
        this.http = http;
    }
    APIService.prototype.get = function (url, options) {
        return this.http
            .get(this.config.apiURL + "/" + url, this.getRequestOptions(options))
            .map(this.extractData)
            .catch(this.handleError);
    };
    APIService.prototype.post = function (url, body, options) {
        return this.http
            .post(this.config.apiURL + "/" + url, body, this.getRequestOptions(options))
            .map(this.extractData)
            .catch(this.handleError);
    };
    APIService.prototype.getRequestOptions = function (options) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var innerOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (!options || options.credentials === undefined || options.credentials === true) {
            headers.append('Authorization', 'Bearer ' + this.authService.accessToken);
        }
        return innerOptions;
    };
    APIService.prototype.extractData = function (res) {
        return res.json();
    };
    APIService.prototype.handleError = function (error) {
        var errObj;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json();
            errObj = body;
        }
        else {
            errObj = error.message ? { message: error.message } : { message: error };
        }
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errObj);
    };
    return APIService;
}());
APIService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_config_app_configuration_service__["a" /* AppConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_config_app_configuration_service__["a" /* AppConfiguration */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__common_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object])
], APIService);

var _a, _b, _c;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/app-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppDataService = (function () {
    function AppDataService() {
        this._accessToken = null;
    }
    Object.defineProperty(AppDataService.prototype, "accessToken", {
        get: function () {
            if (!this._accessToken) {
                this._accessToken = localStorage.getItem('AT');
            }
            return this._accessToken;
        },
        set: function (accessToken) {
            this._accessToken = accessToken;
            localStorage.setItem('AT', accessToken);
        },
        enumerable: true,
        configurable: true
    });
    AppDataService.prototype.removeAccessToken = function () {
        this._accessToken = null;
        localStorage.removeItem('AT');
    };
    return AppDataService;
}());
AppDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AppDataService);

//# sourceMappingURL=app-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_app_data_service__ = __webpack_require__("../../../../../src/app/common/app-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(router, appData) {
        this.router = router;
        this.appData = appData;
    }
    Object.defineProperty(AuthService.prototype, "accessToken", {
        get: function () {
            return this.appData.accessToken;
        },
        set: function (accessToken) {
            this.appData.accessToken = accessToken;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.isLoggedIn = function () {
        return this.appData.accessToken != null && this.appData.accessToken !== undefined;
    };
    AuthService.prototype.signOut = function () {
        this.appData.removeAccessToken();
        this.router.navigate(['']);
    };
    AuthService.prototype.canActivate = function () {
        if (!this.isLoggedIn()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_app_data_service__["a" /* AppDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_app_data_service__["a" /* AppDataService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/config/app-configuration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_interface__ = __webpack_require__("../../../../../src/app/common/config/config.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__config_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initial_config__ = __webpack_require__("../../../../../src/app/common/config/initial-config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfiguration; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AppConfiguration = (function () {
    function AppConfiguration(initialConfig) {
        this.config = initialConfig;
    }
    Object.defineProperty(AppConfiguration.prototype, "apiURL", {
        get: function () {
            return this.config && this.config.apiURL;
        },
        enumerable: true,
        configurable: true
    });
    return AppConfiguration;
}());
AppConfiguration = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__initial_config__["a" /* INITIAL_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__config_interface__["IConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__config_interface__["IConfig"]) === "function" && _a || Object])
], AppConfiguration);

var _a;
//# sourceMappingURL=app-configuration.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/config/config.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=config.interface.js.map

/***/ }),

/***/ "../../../../../src/app/common/config/initial-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_CONFIG; });

var INITIAL_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* InjectionToken */]('app.config');
//# sourceMappingURL=initial-config.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    Welcome to COSW angular seed\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home-page',
        template: __webpack_require__("../../../../../src/app/pages/home-page/home-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home-page/home-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomePageComponent);

//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    The page you were looking for was not found\r\n</p>\r\n<p>\r\n    <a routerLink=\"/\">Back to Home</a>\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/sign-in-page/sign-in-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/sign-in-page/sign-in-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>Sign In</h2>\r\n    <form [formGroup]=\"signInForm\" (ngSubmit)=\"doLogin()\" novalidate>\r\n        <div class=\"form-group\">\r\n            <label for=\"description\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"description\" formControlName=\"username\" required>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"priority\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"priority\" formControlName=\"password\">\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!signInForm.valid\">Sign In</button>\r\n\r\n        <p class=\"text-danger mt-1\" *ngIf=\"loginError\">{{loginError}}</p>\r\n\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/sign-in-page/sign-in-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignInPageComponent = (function () {
    function SignInPageComponent(userService, formBuilder, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    SignInPageComponent.prototype.ngOnInit = function () {
        this.signInForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            password: '',
        });
    };
    SignInPageComponent.prototype.doLogin = function () {
        var _this = this;
        this.userService.login(this.signInForm.get('username').value, this.signInForm.get('password').value).subscribe(function (loginResponse) {
            _this.router.navigate(['tasks']);
        }, function (error) {
            _this.loginError = 'Error Signing in: ' + (error && error.message ? error.message : '');
        });
    };
    return SignInPageComponent;
}());
SignInPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-sign-in-page',
        template: __webpack_require__("../../../../../src/app/pages/sign-in-page/sign-in-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/sign-in-page/sign-in-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SignInPageComponent);

var _a, _b, _c;
//# sourceMappingURL=sign-in-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/task-edit-page/task-edit-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/task-edit-page/task-edit-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>Edit Task</h2>\r\n    <form [formGroup]=\"todoForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n        <div class=\"form-group\">\r\n            <label for=\"description\">Description</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"description\" formControlName=\"description\" required>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"priority\">Priority</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"priority\" formControlName=\"priority\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"completed\">Completed</label>\r\n            <input type=\"checkbox\" class=\"form-control\" id=\"completed\" formControlName=\"completed\">\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-success\">Save</button>\r\n\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/task-edit-page/task-edit-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_todo_service__ = __webpack_require__("../../../../../src/app/services/todo.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskEditPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskEditPageComponent = (function () {
    function TaskEditPageComponent(todoService, formBuilder, router) {
        this.todoService = todoService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    TaskEditPageComponent.prototype.ngOnInit = function () {
        this.todoForm = this.formBuilder.group({
            description: '',
            completed: '',
            priority: ''
        });
    };
    TaskEditPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.todoService.create(this.todoForm.get('description').value, this.todoForm.get('priority').value, Boolean(this.todoForm.get('completed').value)).subscribe(function (serverResponse) {
            _this.router.navigate(['/tasks']);
        }, function (error) {
            console.log(error);
        });
    };
    return TaskEditPageComponent;
}());
TaskEditPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-task-edit-page',
        template: __webpack_require__("../../../../../src/app/pages/task-edit-page/task-edit-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/task-edit-page/task-edit-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_todo_service__["a" /* TodoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], TaskEditPageComponent);

var _a, _b, _c;
//# sourceMappingURL=task-edit-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/task-list-page/task-list-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/task-list-page/task-list-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Tasks</h2>\r\n<table class=\"table\">\r\n    <thead>\r\n    <tr>\r\n        <th>Description</th>\r\n        <th>Priority</th>\r\n        <th>Completed</th>\r\n    </tr>\r\n    </thead>\r\n    <tr *ngFor=\"let todo of todos\">\r\n        <td>{{todo.description}}</td>\r\n        <td>{{todo.priority}}</td>\r\n        <td>{{todo.completed}}</td>\r\n    </tr>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/task-list-page/task-list-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_todo_service__ = __webpack_require__("../../../../../src/app/services/todo.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskListPageComponent = (function () {
    function TaskListPageComponent(todoService) {
        this.todoService = todoService;
    }
    TaskListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.list().subscribe(function (todosResponse) {
            _this.todos = todosResponse;
        });
    };
    return TaskListPageComponent;
}());
TaskListPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-task-list-page',
        template: __webpack_require__("../../../../../src/app/pages/task-list-page/task-list-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/task-list-page/task-list-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_todo_service__["a" /* TodoService */]) === "function" && _a || Object])
], TaskListPageComponent);

var _a;
//# sourceMappingURL=task-list-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user-edit-page/user-edit-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/user-edit-page/user-edit-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Register User</h2>\r\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"username\" formControlName=\"username\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\" placeholder=\"your name...\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"lastname\">Lastname</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"lastname\" formControlName=\"lastname\" placeholder=\"your last name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\" placeholder=\"Example@mail.com\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"passw\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" id=\"passw\" formControlName=\"passw\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"image\">Image</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"image\" formControlName=\"image\" placeholder=\"URL Image\">\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-success\">Save</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/user-edit-page/user-edit-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserEditPageComponent = (function () {
    function UserEditPageComponent(userService, formBuilder, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.edit = false;
    }
    UserEditPageComponent.prototype.ngOnInit = function () {
        this.userForm = this.formBuilder.group({
            username: '',
            email: '',
            passw: '',
            name: '',
            lastname: '',
            image: ''
        });
    };
    UserEditPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.registerUser(this.userForm.get('username').value, this.userForm.get('email').value, this.userForm.get('passw').value, this.userForm.get('name').value, this.userForm.get('lastname').value, this.userForm.get('image').value).subscribe(function (serverResponse) {
            _this.router.navigate(['/user-list']);
        }, function (error) {
            console.log(error);
        });
    };
    return UserEditPageComponent;
}());
UserEditPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user-edit-page',
        template: __webpack_require__("../../../../../src/app/pages/user-edit-page/user-edit-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/user-edit-page/user-edit-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserEditPageComponent);

var _a, _b, _c;
//# sourceMappingURL=user-edit-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user-list-page/user-list-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/user-list-page/user-list-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>List Users</h2>\r\n<table class=\"table\">\r\n  <thead>\r\n  <tr>\r\n    <th scope=\"col\">Name</th>\r\n    <th scope=\"col\">Lastname</th>\r\n    <th scope=\"col\">Email</th>\r\n    <th scope=\"col\">Image</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let u of users\">\r\n    <td>{{u.firstname}}</td>\r\n    <td>{{u.lastname}}</td>\r\n    <td>{{u.email}}</td>\r\n    <td><img [src]=\"u.image\" width=\"150\" height=\"150\" /></td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/user-list-page/user-list-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserListPageComponent = (function () {
    function UserListPageComponent(userService) {
        this.userService = userService;
    }
    UserListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (usersResponse) {
            _this.users = usersResponse;
        });
    };
    return UserListPageComponent;
}());
UserListPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user-list-page',
        template: __webpack_require__("../../../../../src/app/pages/user-list-page/user-list-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/user-list-page/user-list-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], UserListPageComponent);

var _a;
//# sourceMappingURL=user-list-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_config_app_configuration_service__ = __webpack_require__("../../../../../src/app/common/config/app-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_api_service__ = __webpack_require__("../../../../../src/app/common/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodoService = (function (_super) {
    __extends(TodoService, _super);
    function TodoService(config, authService, http) {
        var _this = _super.call(this, config, authService, http) || this;
        _this.config = config;
        _this.authService = authService;
        _this.http = http;
        return _this;
    }
    TodoService.prototype.create = function (des, num, bol) {
        return this.post('api/newtodo', { description: des, priority: num, completed: bol });
    };
    TodoService.prototype.list = function () {
        return this.get('api/todo');
    };
    return TodoService;
}(__WEBPACK_IMPORTED_MODULE_2__common_api_service__["a" /* APIService */]));
TodoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_config_app_configuration_service__["a" /* AppConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_config_app_configuration_service__["a" /* AppConfiguration */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__common_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _c || Object])
], TodoService);

var _a, _b, _c;
//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_api_service__ = __webpack_require__("../../../../../src/app/common/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_config_app_configuration_service__ = __webpack_require__("../../../../../src/app/common/config/app-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(config, authService, http) {
        var _this = _super.call(this, config, authService, http) || this;
        _this.config = config;
        _this.authService = authService;
        _this.http = http;
        return _this;
    }
    UserService.prototype.login = function (username, password) {
        var _this = this;
        return this.post('/user/login', { username: username, password: password }, { credentials: false }).map(function (loginResponse) {
            if (loginResponse) {
                _this.authService.accessToken = loginResponse.accessToken;
            }
        });
    };
    UserService.prototype.getUsers = function () {
        return this.get('user/listuser');
    };
    UserService.prototype.registerUser = function (username, email, password, firstname, lastname, image) {
        return this.post('user/newuser', { username: username, email: email, password: password, firstname: firstname,
            lastname: lastname, image: image });
    };
    UserService.prototype.findByEmail = function (email) {
        return this.get("user/byEmail/" + email);
    };
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_1__common_api_service__["a" /* APIService */]));
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__common_config_app_configuration_service__["a" /* AppConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_config_app_configuration_service__["a" /* AppConfiguration */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = { production: false };
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map