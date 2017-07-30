webpackJsonp([2,4],{

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 118;


/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(141);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
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
    function AppComponent(router) {
        this.router = router;
        this.sideNavState = '';
    }
    AppComponent.prototype.toggleSideNav = function () {
        this.sideNavState = (this.sideNavState === '' ? 'active' : '');
    };
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(211),
        styles: [__webpack_require__(198)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__route_app_routing_module__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__heart_map_heart_map_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__heart_map_modal_preview_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contributions_contributions_module__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__styledemo_styledemo_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contributions_contributions_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_modal_plugins_vex__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_modal__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__footer_footer_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_animate_bounce_directive__ = __webpack_require__(140);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var MODAL_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_15_angular2_modal__["a" /* Overlay */],
    { provide: __WEBPACK_IMPORTED_MODULE_15_angular2_modal__["b" /* OverlayRenderer */], useClass: __WEBPACK_IMPORTED_MODULE_15_angular2_modal__["c" /* DOMOverlayRenderer */] }
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
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_8__heart_map_heart_map_component__["a" /* HeartMapComponent */],
            __WEBPACK_IMPORTED_MODULE_12__styledemo_styledemo_component__["a" /* StyledemoComponent */],
            __WEBPACK_IMPORTED_MODULE_9__heart_map_modal_preview_component__["a" /* ModalPreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__shared_animate_bounce_directive__["a" /* AnimateBounceDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__contributions_contributions_module__["a" /* ContributionsModule */],
            __WEBPACK_IMPORTED_MODULE_5__route_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyCm1ee9Y1iSjJGzJ-5yTYTESFWJaAk8aKo',
                libraries: ["places"]
            }),
            __WEBPACK_IMPORTED_MODULE_14_angular2_modal_plugins_vex__["a" /* VexModalModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__contributions_contributions_service__["a" /* ContributionsService */],
            MODAL_PROVIDERS
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contribution_form_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contributions_component__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContributionsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'contributions/new', component: __WEBPACK_IMPORTED_MODULE_2__contribution_form_component__["a" /* ContributionFormComponent */] },
    { path: 'contributions/edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__contribution_form_component__["a" /* ContributionFormComponent */] },
    { path: 'contributions', component: __WEBPACK_IMPORTED_MODULE_3__contributions_component__["a" /* ContributionsComponent */] }
];
var ContributionsRoutingModule = (function () {
    function ContributionsRoutingModule() {
    }
    return ContributionsRoutingModule;
}());
ContributionsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ContributionsRoutingModule);

//# sourceMappingURL=contributions-routing.module.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contributions_routing_module__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contribution_form_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contributions_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contributions_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loading_indicator_loading_indicator_component__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContributionsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ContributionsModule = (function () {
    function ContributionsModule() {
    }
    return ContributionsModule;
}());
ContributionsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__contributions_routing_module__["a" /* ContributionsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyCm1ee9Y1iSjJGzJ-5yTYTESFWJaAk8aKo',
                libraries: ["places"]
            })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__contributions_component__["a" /* ContributionsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__contribution_form_component__["a" /* ContributionFormComponent */],
            __WEBPACK_IMPORTED_MODULE_4__contribution_form_component__["b" /* MapContentComponent */],
            __WEBPACK_IMPORTED_MODULE_8__loading_indicator_loading_indicator_component__["a" /* LoadingIndicatorComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__contributions_service__["a" /* ContributionsService */],
            __WEBPACK_IMPORTED_MODULE_7__agm_core__["b" /* GoogleMapsAPIWrapper */]
        ]
    })
], ContributionsModule);

//# sourceMappingURL=contributions.module.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", Object)
], FooterComponent.prototype, "dataState", void 0);
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(214),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "dataState", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "app", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(215),
        styles: [__webpack_require__(202)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contributions_contribution__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalPreviewComponent = (function () {
    function ModalPreviewComponent() {
    }
    ModalPreviewComponent.prototype.ngOnInit = function () {
    };
    return ModalPreviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contributions_contribution__["a" /* Contribution */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contributions_contribution__["a" /* Contribution */]) === "function" && _a || Object)
], ModalPreviewComponent.prototype, "contribution", void 0);
ModalPreviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'contribution-modal-preview',
        template: __webpack_require__(217),
        styles: [__webpack_require__(204)]
    }),
    __metadata("design:paramtypes", [])
], ModalPreviewComponent);

var _a;
//# sourceMappingURL=modal-preview.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingIndicatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingIndicatorComponent = (function () {
    function LoadingIndicatorComponent() {
    }
    LoadingIndicatorComponent.prototype.ngOnInit = function () {
        if (!this.theme) {
            this.theme = 'light';
        }
        if (!this.height) {
            this.height = '300px';
        }
    };
    return LoadingIndicatorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", String)
], LoadingIndicatorComponent.prototype, "theme", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", String)
], LoadingIndicatorComponent.prototype, "message", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", String)
], LoadingIndicatorComponent.prototype, "height", void 0);
LoadingIndicatorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-loading-indicator',
        template: __webpack_require__(218),
        styles: [__webpack_require__(205)]
    }),
    __metadata("design:paramtypes", [])
], LoadingIndicatorComponent);

//# sourceMappingURL=loading-indicator.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    return MainComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", Object)
], MainComponent.prototype, "dataState", void 0);
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__(219),
        styles: [__webpack_require__(206)]
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__heart_map_heart_map_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styledemo_styledemo_component__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'heartmap', component: __WEBPACK_IMPORTED_MODULE_2__heart_map_heart_map_component__["a" /* HeartMapComponent */] },
    { path: 'styledemo', component: __WEBPACK_IMPORTED_MODULE_3__styledemo_styledemo_component__["a" /* StyledemoComponent */] },
    { path: '', redirectTo: '/heartmap', pathMatch: 'full' },
    { path: '**', redirectTo: '/heartmap', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { enableTracing: true } // <-- debugging purposes only
            )],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contributions_contribution__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimateBounceDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnimateBounceDirective = (function () {
    function AnimateBounceDirective(el) {
        console.log(el.nativeElement);
    }
    return AnimateBounceDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contributions_contribution__["a" /* Contribution */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contributions_contribution__["a" /* Contribution */]) === "function" && _a || Object)
], AnimateBounceDirective.prototype, "contribution", void 0);
AnimateBounceDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Directive */])({
        selector: '[appAnimateBounce]'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]) === "function" && _b || Object])
], AnimateBounceDirective);

var _a, _b;
//# sourceMappingURL=animate-bounce.directive.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "agm-map {\n  height: 300px;\n  min-height: 300px; }\n\n.contribute-form {\n  text-align: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "agm-map {\n  height: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

module.exports = "<app-header\n\t[dataState]=\"sideNavState\"\n\t[app]=\"this\"></app-header>\n\n<app-main\n\t[dataState]=\"sideNavState\">\n\t\n\t<router-outlet></router-outlet>\n\n</app-main>\n<app-footer [dataState]=\"sideNavState\"></app-footer>\n"

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports = "\t\t<header class=\"header featured-updates contribute__header\">\n\t\t\t<div class=\"wrap\">\n\t\t\t\t<header class=\"section__header\">\n\t\t\t\t\t<h2 class=\"section__heading heading--large\">SHARE YOUR STORY</h2>\n\n\t\t\t\t</header>\t\n\t\t\t<div class=\"section__content\">\n\t\t\t\t<div class=\"contribute-form\">\n\t\t\t\t\t<article class=\"entry \">\n\t\t\t\t\t\t<div class=\"entry__body\" *ngIf=\"active && contributeForm\">\n\t\t\t\t\t\t\t<section class=\"section__content entry__content\">\n\t\t\t\t\t\t\t\t<div class=\"wrap wrap--full\">\n\n\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t<form [formGroup]=\"contributeForm\"    (ngSubmit)=\"onSubmit()\">\n\t\t\t\t\t\t\t\t\t\t<div [ngClass]=\"{ 'field': true, 'has-error': formErrors.name }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"name\">Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"name\" class=\"form-control full-width\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"name\" required >\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"formErrors.name\" class=\"error-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{ formErrors.name }}\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div [ngClass]=\"{ 'field': true, 'has-error': formErrors.location}\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"location\">Location</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"location\" class=\"form-control full-width\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"location\" required #search\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\tautocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"formErrors.location\" class=\"error-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{ formErrors.location }}\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"field\">\n\n\t\t\t\t\t\t\t\t\t\t\t<agm-map  [latitude]=\"ilatitude\" [longitude]=\"ilongitude\" \n\t\t\t\t\t\t\t\t\t\t\t[scrollwheel]=\"false\" [zoom]=\"zoom\"\n\t\t\t\t\t\t\t\t\t\t\t[streetViewControl]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t(mapClick)=\"mapClickHandler($event)\">\n\n\t\t\t\t\t\t\t\t\t\t\t<app-map-content\n\t\t\t\t\t\t\t\t\t\t\t[contributionForm]=\"this\"></app-map-content>\n\n\t\t\t\t\t\t\t\t\t\t\t<agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"\n\t\t\t\t\t\t\t\t\t\t\t[iconUrl]=\"markerIcon\" \n\t\t\t\t\t\t\t\t\t\t\t></agm-marker>\n\t\t\t\t\t\t\t\t\t\t</agm-map>\n\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div [ngClass]=\"{ 'field': true, 'has-error': formErrors.story}\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"story\">Story</label>\n\t\t\t\t\t\t\t\t\t\t<textarea class=\"full-width\"\n\t\t\t\t\t\t\t\t\t\tformControlName=\"story\" required  ></textarea>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"formErrors.story\" class=\"error-description\">\n\t\t\t\t\t\t\t\t\t\t\t{{ formErrors.story }}\n\t\t\t\t\t\t\t\t\t\t</p>\t\n\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t\t<div class=\"field\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"tags\">Tags</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"tags\" class=\"form-control full-width\"\n\t\t\t\t\t\t\t\t\t\tformControlName=\"tags\"  >\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<button [disabled]=\"!contributeForm.valid\" class=\"btn btn-primary full-width\">Submit</button>\n\t\t\t\t\t\t\t\t</form>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</section>\n\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<app-loading-indicator *ngIf=\"!active\"\n\t\t\t\t\t[theme]=\"'light'\"\n\t\t\t\t\t[message]=\"'Sharing your story...'\"></app-loading-indicator>\n\t\t\t\t</article>\n\t\t\t\n\n\t\t\t\t</div>\t\n\t\t\t</div>\n\t\t\t</div> <!-- end wrap -->\t\n\t\t</header>\n\n\n\n\n\n"

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports = "<header class=\"header index__header\">\n  <div class=\"index__cover\">\n    <div class=\"scene\">\n      <div class=\"sky\">\n        <div class=\"cloud cloud--large cloud--1\"></div>\n        <div class=\"cloud cloud--small cloud--2\"></div>\n        <div class=\"cloud cloud--large cloud--3\"></div>\n        <div class=\"cloud cloud--small cloud--4\"></div>\n        <div class=\"cloud cloud--large cloud--5\"></div>\n        <div class=\"cloud cloud--small cloud--6\"></div>\n        <div class=\"firework firework--1\"></div> \n        <div class=\"firework firework--2\"></div> \n        <div class=\"firework firework--3\"></div> \n        <div class=\"firework firework--4\"></div> \n        <div class=\"firework firework--5\"></div> \n      </div>\n      <div class=\"cityscape\">\n        <div class=\"cityscape__background\">\n          <div class=\"silhouette silhouette--left\"></div>\n          <div class=\"silhouette silhouette--right\"></div>\n        </div>\n        <div class=\"cityscape__foreground\">\n          <div class=\"ferris-wheel\"></div>\n          <div class=\"building building--left\"></div>\n          <div class=\"building building--right\"></div>\n        </div>    \n      </div>\n      <div class=\"ground\">\n        <div class=\"road\">\n          <div class=\"road__inner\">\n            <div class=\"road__vehicle bus--single\"></div>\n            <div class=\"road__vehicle bus--double\"></div>\n            <div class=\"road__vehicle car\"></div>\n          </div>\n        </div>\n        <div class=\"park\"></div>\n        <div class=\"shophouse\"></div>\n        <div class=\"tunnel\">\n          <div class=\"tunnel__inner\">\n            <div class=\"train\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"wrap index__introduction\">\n    <h1 class=\"page__heading heading--extra-large index__heading\" data-eq-pts=\"medium: 470, large: 600\" data-eq-state=\"large\">\n      <strong>Home</strong> is where<br>\n      the <strong>heart</strong> is\n    </h1>\n    <p class=\"header__blurb index__blurb\">Home is where the heart is. Singapore is home to us for many reasons, and there are places in Singapore that will&nbsp;always be meaningful and special to each of us.</p>\n    <a routerLink=\"/contributions/new\" class=\"header__link\">Share a story</a>\n  </div>\n</header>\n\n<section class=\"section featured-entries\" style=\"padding: 2rem 0\">\n<div class=\"wrap wrap--full\">\n    <header class=\"section__header\">\n      <h2 class=\"section__heading heading--large\">Contributions</h2>\n    </header>\n  </div>\n\n<div class=\"section__content\" style=\"margin-top: 0\">\n      <div class=\"entry-list__container--row\">\n        <ol class=\"entry-list entry-list--row\">\n\n<li class=\"entry-list__list-item entry-list__list-item--row  \" *ngFor=\"let contribution of contributions\">\n  <article class=\"entry-snippet\" >\n    <div class=\"entry-snippet__detail\">\n      \n      <h3 class=\"heading--regular heading__link\">{{contribution.location}}</h3>\n      <span class=\"author\">{{contribution.name}}</span>\n      <a class=\"header__link\" (click)=\"previewContribution(contribution.id)\">Preview</a>\n    </div>\n    <footer class=\"entry-snippet__footer\">\n      <div class=\"tag-group\" data-hook=\"tags\">\n        <a href=\"#contributions-tag\"\n      *ngFor=\"let tag of contribution.tags\"\n      class=\"tag tag--mini\"><span class=\"tag__label\">{{tag}}</span></a>             \n      </div>\n    </footer>\n  </article>\n</li>\n\n\n\n        </ol>\n      </div>\n</div>          \n\n\n</section> \n\n<ng-template #templateRef let-dialogRef=\"dialogRef\" let-ctx=\"dialogRef.context\">\n<div style=\"padding: 10px\">\n  <div class=\"vex-close\" (click)=\"dialogRef.close(true)\"></div>\n  \n<header class=\"section__header modal__header entry__header\">\n            <div class=\"wrap\">\n<div class=\"entry__detail\">\n    <span class=\"entry__profile\" style=\"display: none;\"></span>\n    <span class=\"heading--large entry__heading\">{{contextContribution.location}}</span>\n    <span class=\"entry__author author\">{{contextContribution.name}}</span>\n</div>\n            </div>\n      <!-- image -->\n</header>\n<section class=\"section__content entry__content\">\n    <div class=\"wrap wrap--full\">\n{{contextContribution.story}}\n    </div>\n</section>\n<footer class=\"section__footer modal__footer entry__footer\">\n<div class=\"wrap wrap--full\">\n  <div class=\"entry__footer-block tag-group entry__tag-group tag-group\">\n    <a href=\"#contributions-tag=ICONIC\"\n      *ngFor=\"let tag of contextContribution.tags\"\n      class=\"tag tag--mini\"><span class=\"tag__label\">{{tag}}</span></a>\n\n  </div>\n</div>\n</footer>\n\n</div>\n\n</ng-template>\n"

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer js-menuMakeWay\" attr.data-state=\"{{dataState}}\">\n    <div class=\"wrap\">\n      <div class=\"summary\">\n        <a routerLink=\"/heartmap\"><span class=\"logo sgheartmap__logo logo--secondary\">SG Heart Map</span></a>\n        <div class=\"summary__content\">\n          <span class=\"heading--regular\">About SG Heart Map</span>\n          <div class=\"excerpt summary__excerpt\">\n            <p>Home is where the heart is. Singapore is home to us for many reasons, and there are places in Singapore that will&nbsp;always be meaningful and special to each of us.</p>\n            <p>As part of the nation’s 50ᵗʰ birthday, we are creating the SG Heart Map to celebrate&nbsp;these places. SG Heart Map is the&nbsp;first-ever crowd-sourced map of the nation’s ‘heart’&nbsp;and special moments we hold.&nbsp; These stories that are dear to you will all come together in a living, growing map created by all who call Singapore home.</p>\n          </div>\n        </div>\n      </div>\n      <nav class=\"secondary-navigation\">\n        <ul class=\"static-page__list\">\n          <li class=\"static-page__list-item\"><a href=\"#/bf14/bf14001p.nsf/hm/rules-full\" class=\"secondary-navigation__link\">House Rules</a></li>\n          <li class=\"static-page__list-item\"><a href=\"#/bf14/bf14001p.nsf/hm/contact-full\" class=\"secondary-navigation__link\">Contact Us</a></li>\n          <li class=\"static-page__list-item\"><a href=\"#/bf14/bf14001p.nsf/hm/acknowledgements-full\" class=\"secondary-navigation__link\">Acknowledgements</a></li>\n          <li class=\"static-page__list-item\"><a href=\"#/bf14/bf14001p.nsf/hm/faq-full\" class=\"secondary-navigation__link\">Frequently Asked Questions (FAQ)</a></li>\n        </ul>\n  \n        <ul class=\"social-media__list\">\n          <li class=\"social-media__list-item\">\n            <a href=\"#https://www.facebook.com/SGHeartMap\" class=\"secondary-navigation__link social-media__link\" target=\"_blank\">\n              <span class=\"social-media__icon social-media__facebook\"></span>\n              <span class=\"icon__label\">Facebook</span>\n            </a>\n          </li>\n          <li class=\"social-media__list-item\">\n            <a href=\"#http://instagram.com/sgheartmap/\" class=\"secondary-navigation__link social-media__link\" target=\"_blank\">\n              <span class=\"social-media__icon social-media__instagram\"></span>\n              <span class=\"icon__label\">Instagram</span>\n            </a>\n          </li>\n          <li class=\"social-media__list-item\">\n            <a href=\"#https://twitter.com/SGHeartMap\" class=\"secondary-navigation__link social-media__link\" target=\"_blank\">\n              <span class=\"social-media__icon social-media__twitter\"></span>\n              <span class=\"icon__label\">Twitter</span>\n            </a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n    <div class=\"wrap wrap--full\">\n      <div class=\"legal\">\n        <small class=\"copyright\">Copyright © SG Heart Map. <br>All rights reserved.</small>\n        <div class=\"affiliate\">\n          <a href=\"#sg50\" target=\"_blank\">\n\n            <span class=\"logo sg50__logo affiliate__logo\">SG50</span>\n            <small class=\"affiliate__label\">SG50 Programme</small>\n          </a>\n        </div>\n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports = "\t<nav class=\"primary-navigation\">\n      <div class=\"wrap wrap--full\">\n        <a routerLink=\"/heartmap\"  class=\"logo sgheartmap__logo--reverse logo--primary\">SG Heart Map</a>\n        <div class=\"menu js-menu\" attr.data-state=\"{{dataState}}\">\n          \n          <a routerLink=\"/contributions\" class=\"menu__link menu__contributions\">Contributions</a>\n          \n          <a routerLink=\"/contributions/new\" class=\"menu__link menu__news\"\n            routerLinkActive \n            #rlContributeNew=\"routerLinkActive\">Contribute</a>\n        </div>\n        <button class=\"menu__button js-menuBtn\" (click)=\"app.toggleSideNav()\" attr.data-state=\"{{dataState}}\">Menu</button>\n      </div>\n\n    </nav>\n    <div *ngIf=\"rlContributeNew.isActive && false\" class=\"header-wave alternative\">\n    </div>\n\n\n    <div class=\"menu__overlay js-menuOverlay\" attr.data-state=\"{{dataState}}\"\n    \t[style.display]=\"dataState === 'active' ? 'block' : '' \"></div>\n\n\n"

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "<header class=\"header featured-updates\">\n<agm-map \n\t\t[scrollwheel]=\"false\"\n\t\t[zoom] =\"zoom\"\n\t\t[latitude]=\"lat\"\n\t\t[longitude]=\"lng\" >\n\n<agm-marker *ngFor=\"let contribution of contributions | async\" \n\t[latitude]=\"contribution.latitude\" \n\t[longitude]=\"contribution.longitude\"\n\t[iconUrl]=\"getMarker(contribution)\" \n\t[zIndex]=\"getZIndex(contribution)\"\n\t(markerClick)=\"previewContribution(contribution.id)\"></agm-marker>\n\t</agm-map> \n</header>\n\n<ng-template #templateRef let-dialogRef=\"dialogRef\" let-ctx=\"dialogRef.context\">\n    <div style=\"padding: 10px\">\n    \t<div class=\"vex-close\" (click)=\"dialogRef.close(true)\"></div>\n        \n<contribution-modal-preview \n    [contribution]=\"contextContribution\">\n</contribution-modal-preview>\n    </div>\n\n\n\n</ng-template>\n\n<section class=\"heart-map-section\">\n\t<div class=\"wrap\">\n\t\t<header class=\"section__header\">\n\t\t\t\n      <h2 class=\"section__heading heading--large\"><a routerLink=\"/contributions/new\" class=\"header__link heading--large\">Share YOUR story</a></h2>\n      <img src=\"../assets/img/img-share.png\">\n      <p class=\"blurb emphasis\">\nEveryone has a special place which we hold close to our heart... the coffee shop where you have family dinners, a unique spot where you hang out with your friends, or even the park where you had your first date.\n      </p>\n      \n      <p class=\"blurb emphasis\">\n      \tSo heart (pick) a place, and join us in creating our special SG Heart Map.\n      </p>\n    </header>\n\t</div>\t\n\t<div style=\"height: 400px\">&nbsp;</div>\n</section>\n\n\n\n\t"

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "<header class=\"section__header modal__header entry__header\">\n            <div class=\"wrap\">\n<div class=\"entry__detail\">\n    <span class=\"entry__profile\" style=\"display: none;\"></span>\n    <span class=\"heading--large entry__heading\">{{contribution.location}}</span>\n    <span class=\"entry__author author\">{{contribution.name}}</span>\n</div>\n            </div>\n\t\t\t<!-- image -->\n</header>\n<section class=\"section__content entry__content\">\n    <div class=\"wrap wrap--full\">\n{{contribution.story}}\n    </div>\n</section>\n<footer class=\"section__footer modal__footer entry__footer\">\n<div class=\"wrap wrap--full\">\n  <div class=\"entry__footer-block tag-group entry__tag-group tag-group\">\n  \t<a href=\"#contributions-tag=ICONIC\"\n  \t\t*ngFor=\"let tag of contribution.tags\"\n  \t\tclass=\"tag tag--mini\"><span class=\"tag__label\">{{tag}}</span></a>\n\n  </div>\n</div>\n</footer>\n\n"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"[theme, 'sky', 'loading-indicator']\" [ngStyle]=\"{ height: height }\">\n        <div class=\"cloud cloud--large cloud--1\"></div>\n        <div class=\"cloud cloud--small cloud--2\"></div>\n        <div class=\"cloud cloud--large cloud--3\"></div>\n        <div class=\"cloud cloud--small cloud--4\"></div>\n        <div class=\"cloud cloud--large cloud--5\"></div>\n        <div class=\"cloud cloud--small cloud--6\"></div>\n        <div class=\"firework firework--1\"></div> \n        <div class=\"firework firework--2\"></div> \n        <div class=\"firework firework--3\"></div> \n        <div class=\"firework firework--4\"></div> \n        <div class=\"firework firework--5\"></div>\n        <div class=\"message\"><span>{{message}}</span></div>\n\n      </div>"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<main class=\"js-menuMakeWay\" attr.data-state=\"{{dataState}}\">\n\t\n\t\t<router-outlet></router-outlet>\n\t\n\n</main>"

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "\n  \n  <div class=\"wrap\">\n\n\n\t\t<h1>Motherplate</h1>\n\t\t<h2>A bare bones responsive SCSS boilerplate for web designers</h2>\n\t\t<iframe src=\"http://ghbtns.com/github-btn.html?user=leemunroe&repo=motherplate&type=watch&count=true&size=large\"\n\t  allowtransparency=\"true\" frameborder=\"0\" scrolling=\"0\" width=\"170\" height=\"30\"></iframe>\n\t  <iframe src=\"http://ghbtns.com/github-btn.html?user=leemunroe&repo=motherplate&type=fork&count=true&size=large\"\n\t  allowtransparency=\"true\" frameborder=\"0\" scrolling=\"0\" width=\"170\" height=\"30\"></iframe>\n\n\t\t<hr>\n\n\t\t<h1>Heading 1</h1>\n\t\t<h2>Heading 2</h2>\n\t\t<h3>Heading 3</h3>\n\t\t<h4>Heading 4</h4>\n\t\t<h5>Heading 5</h5>\n\t\t<p>Paragraph</p>\n\t\t<p class=\"subtle\">Subtle hint</p>\n\t\t<p><a href=\"\">Link text</a></p>\n\t\t<blockquote><p>You're good. Get better. Stop asking for things.</p></blockquote>\n\t\t<pre>&lt;script&gt;Some code block&lt;/script&gt;</pre>\n\t\t<p>Some <code>&lt;inline code&gt;</code> instead.</p>\n\n\t\t<hr>\n\n\t\t<h2>Buttons</h2>\n\n\t\t<p><button class=\"btn btn-primary\">Primary button</button> <button class=\"btn\">Default button</button> <button class=\"btn btn-link\">Link button</button> </p>\n\n\t\t<p><button class=\"btn btn-primary btn-lg\">Large button</button> <button class=\"btn btn-sm\">Small button</button></p>\n\n\t\t<hr>\n\n\t\t<h2>Notifications/Alerts</h2>\n\n\t\t<div class=\"alert alert-danger\">\n\t\t\t<p>There was a problem.</p>\n\t\t</div>\n\n\t\t<div class=\"alert alert-success\">\n\t\t\t<p>Successs! Something succeeded.</p>\n\t\t</div>\n\n\t\t<div class=\"alert alert-warning\">\n\t\t\t<p>Watch out, here's a warning.</p>\n\t\t</div>\n\n\t\t<div class=\"alert alert-info text-center\">\n\t\t\t<p>Here's some useful information. Text aligned center.</p>\n\t\t</div>\n\n\t\t<div class=\"alert alert-empty\">\n\t\t\t<p>This is an empty state. You should probably add something to get started.</p>\n\t\t</div>\n\n\t\t<hr>\n\n\t\t<h2>Lists</h2>\n\t\t<ul>\n\t\t\t<li>Option 1</li>\n\t\t\t<li>Option 2</li>\n\t\t\t<li>Option 3</li>\n\t\t</ul>\n\t\t<ol>\n\t\t\t<li>Option 1</li>\n\t\t\t<li>Option 2</li>\n\t\t\t<li>Option 3</li>\n\t\t</ol>\n\t\t<ul class=\"list-unstyled\">\n\t\t\t<li>Option 1</li>\n\t\t\t<li>Option 2</li>\n\t\t\t<li>Option 3</li>\n\t\t</ul>\n\n\t\t<hr>\n\n\t\t<h2>Navigation</h2>\n\t\t<nav>\n\t\t\t<a href=\"\">Nav Item 1</a>\n\t\t\t<a href=\"\">Nav Item 2</a>\n\t\t\t<a href=\"\">Nav Item 3</a>\n\t\t</nav>\n\n\t\t<hr>\n\n\t\t<h2>Tables</h2>\n\t\t<table>\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th scope=\"col\">Column 1</th>\n\t\t\t\t\t<th scope=\"col\">Column 2</th>\n\t\t\t\t\t<th scope=\"col\" class=\"text-right\">Column 3</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Data 1</td>\n\t\t\t\t\t<td>Data 2</td>\n\t\t\t\t\t<td class=\"text-right\">Data 3</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Data 1</td>\n\t\t\t\t\t<td>Data 2</td>\n\t\t\t\t\t<td class=\"text-right\">Data 3</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Data 1</td>\n\t\t\t\t\t<td>Data 2</td>\n\t\t\t\t\t<td class=\"text-right\">Data 3</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Data 1</td>\n\t\t\t\t\t<td>Data 2</td>\n\t\t\t\t\t<td class=\"text-right\">Data 3</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\n\t\t<hr>\n\n\t\t<h2>Forms</h2>\n\t\t<form>\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"\">Text label</label>\n\t\t\t\t<input type=\"text\">\n\t\t\t\t<p class=\"hint\">Hint/help</p>\n\t\t\t</div>\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"\">Email</label>\n\t\t\t\t<input type=\"email\">\n\t\t\t</div>\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"\">Search</label>\n\t\t\t\t<input type=\"search\">\n\t\t\t</div>\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"\">Password <span class=\"is-required\">(required)</span></label>\n\t\t\t\t<input type=\"password\">\n\t\t\t</div>\n\t\t\t<div class=\"field has-error\">\n\t\t\t\t<label for=\"\">Text label <span class=\"req\">(required)</span></label>\n\t\t\t\t<input type=\"text\">\n\t\t\t\t<p class=\"error-description\">This field is required</p>\n\t\t\t</div>\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"\">Textarea</label>\n\t\t\t\t<textarea></textarea>\n\t\t\t</div>\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"\">Full width</label>\n\t\t\t\t<input type=\"text\" class=\"full-width\">\n\t\t\t</div>\n\t\t\t<div class=\"field\">\n\t\t\t\t<label><input type=\"checkbox\"> Option 1</label>\n\t\t\t\t<label><input type=\"checkbox\"> Option 2</label>\n\t\t\t\t<label><input type=\"checkbox\"> Option 3</label>\n\t\t\t</div>\n\t\t\t<div class=\"field\">\n\t\t\t\t<label><input type=\"radio\" name=\"radio\"> Option 1</label>\n\t\t\t\t<label><input type=\"radio\" name=\"radio\"> Option 2</label>\n\t\t\t\t<label><input type=\"radio\" name=\"radio\"> Option 3</label>\n\t\t\t</div>\n\t\t\t<button>Submit</button>\n\t\t</form>\n\t\t<input type=\"text\"> <button class=\"btn btn-primary\">Submit</button>\n\n\t\t<hr>\n\n\t\t<h2>Responsive Grid</h2>\n\n\t\t<style>\n\t\t/*Style to help visualize grid for demo purposes*/\n\t\t.grid-style-helper {\n\t\t\tbackground: pink;\n\t\t\tborder: 1px solid purple;\n\t\t\tbox-sizing: border-box;\n\t\t\tmargin-bottom: 10px;\n\t\t\tmin-height: 50px;\n\t\t}\n\t\t</style>\n\n\t\t<div class=\"group\">\n\t\t\t<div class=\"span6 grid-style-helper\">.span6</div>\n\t\t\t<div class=\"span6 grid-style-helper\">.span6</div>\n\t\t</div>\n\t\t<div class=\"group\">\n\t\t\t<div class=\"span8 grid-style-helper\">.span8</div>\n\t\t\t<div class=\"span4 grid-style-helper\">.span4 <br> Extra long piece of text to see what happens when one column is longer than the other...</div>\n\t\t</div>\n\t\t<div class=\"group\">\n\t\t\t<div class=\"span3 grid-style-helper\">.span3</div>\n\t\t\t<div class=\"span3 grid-style-helper\">.span3</div>\n\t\t\t<div class=\"span3 grid-style-helper\">.span3</div>\n\t\t\t<div class=\"span3 grid-style-helper\">.span3</div>\n\t\t</div>\n\t\t<div class=\"group\">\n\t\t\t<div class=\"span12 grid-style-helper\">.span12</div>\n\t\t</div>\n\n\t\t<div class=\"group\">\n\t\t\t<div class=\"span11 offset1 grid-style-helper\">.span11 .offset1</div>\n\t\t\t<div class=\"span10 offset2 grid-style-helper\">.span10 .offset2</div>\n\n\t\t\t<div class=\"span9 offset3 grid-style-helper\">.span9 .offset3</div>\n\t\t\t<div class=\"span8 offset4 grid-style-helper\">.span8 .offset4</div>\n\n\t\t\t<div class=\"span7 offset5 grid-style-helper\">.span7 .offset5</div>\n\t\t\t<div class=\"span6 offset6 grid-style-helper\">.span6 .offset6</div>\n\t\t\t<div class=\"span5 offset7 grid-style-helper\">.span5 .offset7</div>\n\t\t\t<div class=\"span4 offset8 grid-style-helper\">.span4 .offset8</div>\n\n\t\t\t<div class=\"span3 offset9 grid-style-helper\">.span3 .offset9</div>\n\t\t\t<div class=\"span2 offset10 grid-style-helper\">.span2 .offset10</div>\n\t\t\t<div class=\"span1 offset11 grid-style-helper\">.span1 .offset11</div>\n\t\t</div>\n\n\t\t<div class=\"group\">\n\t\t\t<div class=\"span3 grid-style-helper\">.span3</div>\n\t\t</div>\n\n\t\t<div class=\"group\">\n\t\t\t<div class=\"span7 grid-style-helper\">.span7</div>\n\t\t</div>\n\n\t\t<hr>\n\n\t\t<h2>Images</h2>\n\t\t<!-- Example using picture element -->\n\t\t<div class=\"group\">\n\t\t\t<div class=\"span12\">\n\t\t\t\t<picture>\n\t\t\t\t\t<source media=\"(min-width: 1000px)\" srcset=\"img/cat@2x.jpg\">\n\t\t\t\t\t<source media=\"(min-width: 640px)\" srcset=\"img/cat.jpg\">\n\t\t\t\t\t<img src=\"img/cat@2x.jpg\" alt=\"Cat\">\n\t\t\t\t</picture>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- Examples using srcset -->\n\t\t<div class=\"group\">\n\t\t\t<div class=\"span6\">\n\t\t\t\t<img src=\"img/cat.jpg\" alt=\"Cat\" srcset=\"assets/img/cat@2x.jpg 2x, assets/img/cat.jpg 1x\" sizes=\"(min-width:480px) 100vw, 50vw\">\n\t\t\t</div>\n\t\t\t<div class=\"span4\">\n\t\t\t\t<img src=\"img/cat.jpg\" alt=\"Cat\" srcset=\"img/cat@2x.jpg 2x, img/cat.jpg 1x\" sizes=\"(min-width:480px) 100vw, 50vw\">\n\t\t\t</div>\n\t\t\t<div class=\"span2\">\n\t\t\t\t<img src=\"img/cat.jpg\" alt=\"Cat\" srcset=\"img/cat@2x.jpg 2x, img/cat.jpg 1x\" sizes=\"(min-width:480px) 100vw, 50vw\">\n\t\t\t</div>\n\t\t</div>\n\n\t\t<hr>\n\n\t\t<h2>Icons</h2>\n\n\t\t<i class=\"fa fa-cog\"></i>\n\t\t<i class=\"fa fa-download-alt fa-3x\"></i>\n\t\t<i class=\"fa fa-github-alt fa-rotate-90\"></i>\n\t\t<i class=\"fa fa-remove-sign fa-5x\"></i>\n\t\t<i class=\"fa fa-apple\"></i>\n\t\t<i class=\"fa fa-android fa-muted\"></i>\n\t\t<i class=\"fa fa-cloud fa-border\"></i>\n\t\t<i class=\"fa fa-comment\"></i>\n\t\t<i class=\"fa fa-star\"></i>\n\t\t<i class=\"fa fa-gamepad\"></i>\n\n\t\t<p><a href=\"http://fortawesome.github.io/Font-Awesome/cheatsheet/\">More icons</a></p>\n\n\n\t\n  </div>\n"

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contribution; });
var Contribution = (function () {
    function Contribution(id, name, location, latitude, longitude, story, tags) {
        if (name === void 0) { name = ''; }
        if (location === void 0) { location = ''; }
        if (story === void 0) { story = ''; }
        if (tags === void 0) { tags = []; }
        this.id = id;
        this.name = name;
        this.location = location;
        this.latitude = latitude;
        this.longitude = longitude;
        this.story = story;
        this.tags = tags;
    }
    return Contribution;
}());

//# sourceMappingURL=contribution.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_uuid__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contribution__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContributionsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContributionsService = (function () {
    function ContributionsService() {
        this.contributions = [
            { id: '1', name: 'Jhon', location: 'Art Science Museum', latitude: 1.285858, longitude: 103.858755, story: 'I took my very first dji mavic night film', tags: ['DJI', 'mavic', 'drone'] },
            { id: '2', name: 'Leo Yih Nah', location: 'Art Science Museum',
                latitude: 1.370383, longitude: 103.850121,
                story: "My family moved into our new flat in July 1976. At that time, there were only 6 blocks in the estate. In fact, we were the first few families there. There were stands of rubber trees where the current town centre is. \n\nAng Mo Kio developed very quickly and soon, there was an emporium and many food stalls. There was only one bus and it went to Orchard Road so that was most convenient.",
                tags: ['DJI', 'mavic', 'drone'] },
            { id: '3', name: 'Arun', location: 'MERLION PARK',
                latitude: 1.286759, longitude: 103.854358,
                story: "I've been tending to this place ever since I was 15. I treat this place as if it's my own house because I want to make this place as presentable as possible to all visitors. When I started working, the Merlion statue was not constructed yet. I saw this thing built, I saw how popular this place became and I feel proud of this place.",
                tags: ['Iconic', 'Beautiful'] },
            { id: '4', name: 'LEE HONG XUAN', location: 'CHOA CHU KANG',
                latitude: 1.384591, longitude: 103.744069,
                story: "I like Choa Chu Kang. My parents sometimes bring me to Choa Chu Kang .There are a lot of activities that I like to do there. I like the food there, especially Mos Burger, pancakes, Japanese food and the Hong Kong restaurant .I often visit the library. When I need to buy stationery or books, I'll go to Popular Bookstore. I also attend swimming classes in Choa Chu Kang. I always eat nuggets at the complex right after swimming.",
                tags: ['FOOD', 'CHILDHOOD', 'HANG-OUT', '2000S', 'Beautiful'] },
        ];
        this.contributionsPromise = Promise.resolve(this.contributions);
    }
    ContributionsService.prototype.getContributions = function () {
        return this.contributionsPromise;
    };
    ContributionsService.prototype.getContribution = function (id) {
        var _this = this;
        if (id) {
            return this.contributionsPromise
                .then(function (contributions) { return _this.contributions.find(function (contribution) { return contribution.id === id; }); });
        }
        else {
            return Promise.resolve(new __WEBPACK_IMPORTED_MODULE_2__contribution__["a" /* Contribution */](''));
        }
    };
    ContributionsService.prototype.updateContribution = function (id, model) {
        var _this = this;
        if (id === '') {
            model.id = __WEBPACK_IMPORTED_MODULE_1_angular2_uuid__["UUID"].UUID();
            this.contributions.push(model);
            return;
        }
        this.contributionsPromise
            .then(function (contributions) { return _this.contributions.findIndex(function (contribution) { return contribution.id === id; }); })
            .then(function (index) { _this.contributions[index] = model; });
    };
    ContributionsService.prototype.updateContributionSlowly = function (id, model) {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () {
                var result;
                if (id === '') {
                    model.id = __WEBPACK_IMPORTED_MODULE_1_angular2_uuid__["UUID"].UUID();
                    _this.contributions.push(model);
                    result = Object.assign({}, model);
                }
                _this.contributionsPromise
                    .then(function (contributions) { return _this.contributions.findIndex(function (contribution) { return contribution.id === id; }); })
                    .then(function (index) {
                    _this.contributions[index] = model;
                    result = Object.assign({}, model);
                    return model;
                })
                    .then(function (model) { return resolve(result); });
            }, 2000);
        });
    };
    ContributionsService.prototype.addContributionSlowly = function (id, model) {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () {
                var result;
                if (id === '') {
                    model.id = __WEBPACK_IMPORTED_MODULE_1_angular2_uuid__["UUID"].UUID();
                    _this.contributions.push(model);
                    result = Object.assign({}, model);
                }
                resolve(result);
            }, 2000);
        });
    };
    return ContributionsService;
}());
ContributionsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ContributionsService);

//# sourceMappingURL=contributions.service.js.map

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(119);


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contribution__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contributions_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MapContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContributionFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MapContentComponent = (function () {
    function MapContentComponent(mapApiWrapper) {
        this.mapApiWrapper = mapApiWrapper;
    }
    MapContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapApiWrapper.getNativeMap()
            .then(function (map) {
            _this.contributionForm.setMap(map);
        });
    };
    return MapContentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", ContributionFormComponent)
], MapContentComponent.prototype, "contributionForm", void 0);
MapContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-map-content',
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__agm_core__["b" /* GoogleMapsAPIWrapper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__agm_core__["b" /* GoogleMapsAPIWrapper */]) === "function" && _a || Object])
], MapContentComponent);

var ContributionFormComponent = (function () {
    function ContributionFormComponent(fb, route, router, service, mapsAPILoader, ngZone) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.service = service;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.submitted = false;
        this.markerReady = false;
        this.markerIcon = {
            path: 'M1354 4560 c-11 -4 -51 -11 -87 -15 -37 -4 -69 -11 -72 -15 -3 -5 -23 -11 -46 -15 -22 -4 -53 -13 -67 -21 -15 -8 -34 -14 -42 -14 -8 0 -24 -7 -34 -15 -11 -8 -28 -15 -38 -15 -10 0 -18 -4 -18 -10 0 -5 -6 -10 -13 -10 -19 0 -82 -35 -187 -105 -109 -73 -318 -271 -365 -347 -5 -9 -26 -40 -46 -70 -58 -85 -83 -131 -150 -274 -10 -23 -19 -48 -19 -56 0 -8 -3 -18 -7 -22 -19 -19 -57 -168 -84 -331 -34 -202 -20 -513 35 -785 34 -168 38 -186 46 -201 5 -9 12 -34 16 -55 3 -22 10 -43 14 -49 5 -5 11 -28 16 -49 4 -22 13 -51 20 -65 8 -14 14 -36 14 -48 0 -12 3 -24 8 -26 4 -3 18 -38 32 -79 14 -40 28 -74 33 -76 4 -2 7 -10 7 -18 0 -7 10 -35 22 -61 11 -27 28 -64 36 -83 36 -81 47 -105 55 -108 4 -2 7 -10 7 -18 0 -15 70 -155 82 -164 3 -3 9 -17 13 -32 4 -15 13 -32 21 -39 8 -6 14 -15 14 -20 0 -4 27 -53 60 -107 33 -55 60 -105 60 -111 0 -6 4 -11 8 -11 5 0 14 -10 21 -22 18 -35 32 -57 86 -136 28 -41 55 -81 60 -90 6 -9 20 -27 32 -41 13 -14 23 -29 23 -32 0 -14 137 -184 237 -297 36 -40 74 -84 85 -98 25 -31 131 -133 222 -214 77 -68 66 -68 146 7 25 23 58 52 75 65 35 27 46 38 99 98 22 25 64 72 95 106 73 79 95 105 161 189 30 39 57 72 60 75 3 3 18 23 33 46 15 22 36 50 47 62 11 12 20 24 20 27 0 8 44 69 53 73 4 2 7 8 7 13 0 5 19 37 43 71 64 94 165 263 214 358 15 30 31 57 35 60 3 3 10 18 13 33 4 15 11 27 15 27 5 0 11 14 15 30 4 17 10 30 15 30 5 0 11 14 15 30 4 16 11 30 16 30 5 0 9 7 9 16 0 9 7 28 15 42 8 15 24 50 35 77 12 28 28 66 36 85 8 19 19 42 23 50 5 9 12 30 15 48 4 17 12 34 17 37 5 4 9 13 9 22 0 8 6 29 14 46 8 18 21 55 30 82 8 28 25 78 36 113 11 34 20 71 20 81 0 11 4 22 9 25 4 3 11 29 15 57 4 28 11 58 16 67 9 17 17 60 46 257 8 55 17 181 20 280 4 151 2 200 -15 305 -24 147 -43 234 -59 273 -7 16 -12 35 -12 43 0 8 -4 22 -10 32 -5 9 -19 40 -30 67 -61 144 -148 292 -238 405 -47 58 -168 179 -218 218 -73 57 -166 120 -198 136 -19 9 -38 21 -41 25 -3 5 -19 12 -35 16 -17 4 -30 11 -30 16 0 5 -8 9 -18 9 -10 0 -27 7 -38 15 -10 8 -25 15 -32 15 -8 0 -28 6 -45 14 -103 43 -303 75 -472 75 -77 0 -149 -4 -161 -9z m-107 -1016 c32 -9 110 -43 173 -76 l115 -59 117 60 c176 91 312 120 395 86 19 -8 45 -15 57 -15 11 -1 47 -16 79 -33 208 -118 284 -288 249 -558 -9 -70 -39 -163 -80 -249 -82 -171 -268 -374 -463 -503 -131 -87 -320 -187 -354 -187 -51 0 -327 157 -455 258 -81 63 -246 236 -285 296 -47 74 -115 209 -126 250 -55 209 -57 230 -34 349 20 106 59 180 130 252 133 133 307 180 482 129z',
            fillColor: '#e2202a',
            fillOpacity: 0.9,
            scale: 0.012,
            stroke: 'none',
            rotation: 180,
            anchor: { x: 1354, y: 0 },
            animation: 'BOUNCE',
            strokeColor: 'e2202a',
            strokeWeight: 3,
            strokeOpacity: 0.1
        };
        // Reset the form with a new hero AND restore 'pristine' class state
        // by toggling 'active' flag which causes the form
        // to be removed/re-added in a tick via NgIf
        // TODO: Workaround until NgForm has a reset method (#6822)
        this.active = true;
        this.formErrors = {
            'name': '',
            'location': '',
            'story': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Please provide a name.'
            },
            'location': {
                'required': 'Please pick on the map or start typing the location to choose on the dropdown.'
            },
            'story': {
                'required': 'Please share your story.'
            }
        };
        this.model = new __WEBPACK_IMPORTED_MODULE_1__contribution__["a" /* Contribution */]('');
    }
    Object.defineProperty(ContributionFormComponent.prototype, "assetInput", {
        set: function (elRef) {
            var _this = this;
            this.searchElementRef = elRef;
            setTimeout(function () { _this.loadMap(); });
        },
        enumerable: true,
        configurable: true
    });
    //@ViewChild("search")
    //  public searchElementRef: ElementRef;
    ContributionFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        var rawValue = this.contributeForm.value;
        console.log(rawValue);
        rawValue.tags = this.translateTags(rawValue.tags);
        this.model = Object.assign(this.model, rawValue);
        this.model.latitude = this.latitude;
        this.model.longitude = this.longitude;
        this.active = false;
        this.service
            .updateContributionSlowly(this.model.id, this.model)
            .then(function (contribution) {
            _this.active = true;
            _this.goToHeartMap();
        });
        window.scrollTo(0, 0);
    };
    ContributionFormComponent.prototype.setMap = function (map) {
        this.nativeMap = map;
    };
    ContributionFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.zoom = 10;
        this.ilatitude = 1.355176;
        this.ilongitude = 103.812533;
        this.latitude = this.ilatitude;
        this.longitude = this.ilongitude;
        this.buildForm(this.model);
        this.route.paramMap
            .switchMap(function (params) {
            return [params.get('id')];
        }).subscribe(function (id) {
            if (id) {
                _this.service.getContribution(id)
                    .then(function (contribution) {
                    _this.model = contribution;
                    _this.contributeForm.patchValue(_this.model, { onlySelf: true });
                    _this.latitude = contribution.latitude;
                    _this.longitude = contribution.longitude;
                });
            }
        });
    };
    ContributionFormComponent.prototype.updateMarker = function (location) {
        var _this = this;
        this.ngZone.run(function () {
            //set latitude, longitude and zoom
            _this.ilatitude = _this.latitude = location.lat();
            _this.ilongitude = _this.longitude = location.lng();
        });
    };
    ContributionFormComponent.prototype.loadMap = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            _this.geoCoder = new google.maps.Geocoder;
            _this.infoWindow = new google.maps.InfoWindow;
            var searchInput = _this.searchElementRef.nativeElement;
            _this.autocomplete = new google.maps.places.Autocomplete(searchInput, {
                types: [],
                componentRestrictions: { 'country': ['sg'] }
            });
            _this.autocomplete.addListener("place_changed", function () {
                //get the place result
                var place = _this.autocomplete.getPlace();
                if (!place) {
                    //try to geocode
                    _this.geoCoder.geocode({ 'address': searchInput.value }, function (results, status) {
                        if (status == 'OK') {
                            console.log(results[0].geometry.location.lat());
                            console.log(results[0].geometry.location.lng());
                            //results[0].geometry.location;
                            _this.updateMarker(results[0].geometry.location);
                        }
                        else {
                            //alert('Geocode was not successful for the following reason: ' + status);
                            console.log('Geocode was not successful for the following reason: ' + status);
                        }
                    });
                    return;
                }
                //verify result
                if (place.geometry === undefined || place.geometry === null) {
                    return;
                }
                _this.updateMarker(place.geometry.location);
                //this.zoom = 11;
            });
        });
    };
    ContributionFormComponent.prototype.mapClickHandler = function ($event) {
        var _this = this;
        this.ngZone.run(function () {
            _this.latitude = $event.coords.lat;
            _this.longitude = $event.coords.lng;
        });
        this.geocodeLatLng(this.geoCoder, this.nativeMap, { lat: $event.coords.lat, lng: $event.coords.lng }, 
        //this.searchElementRef.nativeElement
        this.contributeForm);
    };
    ContributionFormComponent.prototype.geocodeLatLng = function (geocoder, map, latlng, form) {
        var _this = this;
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[1]) {
                    //	el.value = results[1].formatted_address;
                    //const control = form.get('location');
                    //control.setValue(results[1].formatted_address, 
                    //	{ onlySelf: true, emitEvent:true, emitModelToViewChange: true })
                    _this.contributeForm.patchValue({ location: results[1].formatted_address }, { onlySelf: true });
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    ContributionFormComponent.prototype.translateTags = function (tags) {
        if (typeof tags === 'string') {
            return tags.replace(/;/g, ',')
                .split(',')
                .filter(function (x) { return x.trim(); })
                .map(function (x) { return x.trim(); });
        }
        return tags;
    };
    ContributionFormComponent.prototype.buildForm = function (model) {
        var _this = this;
        this.contributeForm = this.fb.group({
            'name': [model.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            'location': [model.location, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            'story': [model.story, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            'tags': model.tags.join(",")
        });
        this.contributeForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    ContributionFormComponent.prototype.onValueChanged = function (data) {
        if (!this.contributeForm) {
            return;
        }
        var form = this.contributeForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ContributionFormComponent.prototype.goToHeartMap = function () {
        var contributionId = this.model ? this.model.id : null;
        this.router.navigate(['/heartmap', { id: contributionId }]);
    };
    Object.defineProperty(ContributionFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify([]); },
        enumerable: true,
        configurable: true
    });
    return ContributionFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* ViewChild */])('search'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]) === "function" && _b || Object),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]) === "function" && _c || Object])
], ContributionFormComponent.prototype, "assetInput", null);
ContributionFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-contribution-form',
        template: __webpack_require__(212),
        styles: [__webpack_require__(199)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__contributions_service__["a" /* ContributionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__contributions_service__["a" /* ContributionsService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__agm_core__["c" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__agm_core__["c" /* MapsAPILoader */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]) === "function" && _j || Object])
], ContributionFormComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=contribution-form.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contributions_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_modal__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_vex__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContributionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContributionsComponent = (function () {
    function ContributionsComponent(service, router, modal) {
        this.service = service;
        this.router = router;
        this.modal = modal;
        this.theme = 'default';
    }
    ContributionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getContributions()
            .then(function (contributions) {
            return _this.contributions = contributions;
        });
    };
    ContributionsComponent.prototype.edit = function (contribution) {
        this.router.navigate(['/contributions/edit', contribution.id]);
    };
    ContributionsComponent.prototype.previewContribution = function (id) {
        var _this = this;
        this.service.getContribution(id)
            .then(function (contribution) { return _this.contextContribution = contribution; });
        //.then(story=>this.contextStory=story);
        this.modal
            .open(this.templateRef, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_modal__["p" /* overlayConfigFactory */])({ isBlocking: false }, __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_vex__["b" /* VEXModalContext */]));
    };
    return ContributionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* ViewChild */])('templateRef'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* TemplateRef */]) === "function" && _a || Object)
], ContributionsComponent.prototype, "templateRef", void 0);
ContributionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-contributions',
        template: __webpack_require__(213),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__contributions_service__["a" /* ContributionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contributions_service__["a" /* ContributionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_vex__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_vex__["c" /* Modal */]) === "function" && _d || Object])
], ContributionsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=contributions.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contributions_contributions_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contributions_contribution__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_modal__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_vex__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeartMapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HeartMapComponent = (function () {
    function HeartMapComponent(service, mapsAPILoader, modal, route) {
        this.service = service;
        this.mapsAPILoader = mapsAPILoader;
        this.modal = modal;
        this.route = route;
        // google maps zoom level
        this.zoom = 12;
        // initial center position for the map
        this.lat = 1.356721;
        this.lng = 103.820550;
        this.marker = {
            path: 'M1354 4560 c-11 -4 -51 -11 -87 -15 -37 -4 -69 -11 -72 -15 -3 -5 -23 -11 -46 -15 -22 -4 -53 -13 -67 -21 -15 -8 -34 -14 -42 -14 -8 0 -24 -7 -34 -15 -11 -8 -28 -15 -38 -15 -10 0 -18 -4 -18 -10 0 -5 -6 -10 -13 -10 -19 0 -82 -35 -187 -105 -109 -73 -318 -271 -365 -347 -5 -9 -26 -40 -46 -70 -58 -85 -83 -131 -150 -274 -10 -23 -19 -48 -19 -56 0 -8 -3 -18 -7 -22 -19 -19 -57 -168 -84 -331 -34 -202 -20 -513 35 -785 34 -168 38 -186 46 -201 5 -9 12 -34 16 -55 3 -22 10 -43 14 -49 5 -5 11 -28 16 -49 4 -22 13 -51 20 -65 8 -14 14 -36 14 -48 0 -12 3 -24 8 -26 4 -3 18 -38 32 -79 14 -40 28 -74 33 -76 4 -2 7 -10 7 -18 0 -7 10 -35 22 -61 11 -27 28 -64 36 -83 36 -81 47 -105 55 -108 4 -2 7 -10 7 -18 0 -15 70 -155 82 -164 3 -3 9 -17 13 -32 4 -15 13 -32 21 -39 8 -6 14 -15 14 -20 0 -4 27 -53 60 -107 33 -55 60 -105 60 -111 0 -6 4 -11 8 -11 5 0 14 -10 21 -22 18 -35 32 -57 86 -136 28 -41 55 -81 60 -90 6 -9 20 -27 32 -41 13 -14 23 -29 23 -32 0 -14 137 -184 237 -297 36 -40 74 -84 85 -98 25 -31 131 -133 222 -214 77 -68 66 -68 146 7 25 23 58 52 75 65 35 27 46 38 99 98 22 25 64 72 95 106 73 79 95 105 161 189 30 39 57 72 60 75 3 3 18 23 33 46 15 22 36 50 47 62 11 12 20 24 20 27 0 8 44 69 53 73 4 2 7 8 7 13 0 5 19 37 43 71 64 94 165 263 214 358 15 30 31 57 35 60 3 3 10 18 13 33 4 15 11 27 15 27 5 0 11 14 15 30 4 17 10 30 15 30 5 0 11 14 15 30 4 16 11 30 16 30 5 0 9 7 9 16 0 9 7 28 15 42 8 15 24 50 35 77 12 28 28 66 36 85 8 19 19 42 23 50 5 9 12 30 15 48 4 17 12 34 17 37 5 4 9 13 9 22 0 8 6 29 14 46 8 18 21 55 30 82 8 28 25 78 36 113 11 34 20 71 20 81 0 11 4 22 9 25 4 3 11 29 15 57 4 28 11 58 16 67 9 17 17 60 46 257 8 55 17 181 20 280 4 151 2 200 -15 305 -24 147 -43 234 -59 273 -7 16 -12 35 -12 43 0 8 -4 22 -10 32 -5 9 -19 40 -30 67 -61 144 -148 292 -238 405 -47 58 -168 179 -218 218 -73 57 -166 120 -198 136 -19 9 -38 21 -41 25 -3 5 -19 12 -35 16 -17 4 -30 11 -30 16 0 5 -8 9 -18 9 -10 0 -27 7 -38 15 -10 8 -25 15 -32 15 -8 0 -28 6 -45 14 -103 43 -303 75 -472 75 -77 0 -149 -4 -161 -9z m-107 -1016 c32 -9 110 -43 173 -76 l115 -59 117 60 c176 91 312 120 395 86 19 -8 45 -15 57 -15 11 -1 47 -16 79 -33 208 -118 284 -288 249 -558 -9 -70 -39 -163 -80 -249 -82 -171 -268 -374 -463 -503 -131 -87 -320 -187 -354 -187 -51 0 -327 157 -455 258 -81 63 -246 236 -285 296 -47 74 -115 209 -126 250 -55 209 -57 230 -34 349 20 106 59 180 130 252 133 133 307 180 482 129z',
            fillColor: '#e2202a',
            fillOpacity: 0.9,
            scale: 0.012,
            stroke: 'none',
            rotation: 180,
            anchor: { x: 1354, y: 0 },
            animation: 'BOUNCE',
            strokeColor: 'e2202a',
            strokeWeight: 3,
            strokeOpacity: 0.1
        };
        this.selectedMarker = Object.assign({}, this.marker, { fillColor: '#0489e2',
            strokeColor: '0489e2',
            zIndex: 2 });
        this.theme = 'default';
    }
    HeartMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            _this.marker.anchor = new google.maps.Point(1354, 0);
            _this.selectedMarker.anchor = new google.maps.Point(1354, 0);
        });
        this.contextContribution = new __WEBPACK_IMPORTED_MODULE_2__contributions_contribution__["a" /* Contribution */]('');
        this.contributions = this.route.paramMap
            .switchMap(function (params) {
            _this.selectedId = params.get('id');
            _this.blinkMarker();
            return _this.service.getContributions();
        });
    };
    HeartMapComponent.prototype.previewContribution = function (id) {
        var _this = this;
        this.service.getContribution(id)
            .then(function (contribution) { return _this.contextContribution = contribution; });
        //.then(story=>this.contextStory=story);
        this.modal
            .open(this.templateRef, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_angular2_modal__["p" /* overlayConfigFactory */])({ isBlocking: false }, __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_vex__["b" /* VEXModalContext */]));
    };
    HeartMapComponent.prototype.isSelected = function (contribution) {
        return contribution.id == this.selectedId;
    };
    HeartMapComponent.prototype.getMarker = function (contribution) {
        if (!this.isSelected(contribution)) {
            return this.marker;
        }
        return this.selectedMarker;
    };
    HeartMapComponent.prototype.getZIndex = function (contribution) {
        if (!this.isSelected(contribution)) {
            return 1;
        }
        return 2;
    };
    Object.defineProperty(HeartMapComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify([]); },
        enumerable: true,
        configurable: true
    });
    HeartMapComponent.prototype.blinkMarker = function () {
        var _this = this;
        //animate marker while agm-maps' animation support is still pending
        function makeEaseOut(timing) {
            return function (timeFraction) {
                return 1 - timing(1 - timeFraction);
            };
        }
        function bounce(timeFraction) {
            for (var a = 0, b = 1, result = void 0; 1; a += b, b /= 2) {
                if (timeFraction >= (7 - 4 * a) / 11) {
                    return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
                }
            }
        }
        var animate = function (_a) {
            var timing = _a.timing, draw = _a.draw, duration = _a.duration;
            var start = performance.now();
            var animateFrame = function (time) {
                // timeFraction goes from 0 to 1
                var timeFraction = (time - start) / duration;
                if (timeFraction > 1)
                    timeFraction = 1;
                // calculate the current animation state
                var progress = timing(timeFraction);
                draw(progress); // draw it
                if (timeFraction < 1) {
                    requestAnimationFrame(animateFrame);
                }
            };
            requestAnimationFrame(animateFrame);
        };
        animate({
            duration: 3000,
            timing: makeEaseOut(bounce),
            draw: function (progress) {
                _this.selectedMarker = Object.assign({}, _this.selectedMarker, { fillOpacity: (progress * 0.9),
                    scale: ((progress * 1.3) * 0.012) });
                console.log(progress);
            }
        });
    };
    return HeartMapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* ViewChild */])('templateRef'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* TemplateRef */]) === "function" && _a || Object)
], HeartMapComponent.prototype, "templateRef", void 0);
HeartMapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-heart-map',
        template: __webpack_require__(216),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__contributions_contributions_service__["a" /* ContributionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contributions_contributions_service__["a" /* ContributionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__agm_core__["c" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__agm_core__["c" /* MapsAPILoader */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_vex__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_vex__["c" /* Modal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object])
], HeartMapComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=heart-map.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyledemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StyledemoComponent = (function () {
    function StyledemoComponent() {
    }
    StyledemoComponent.prototype.ngOnInit = function () {
    };
    return StyledemoComponent;
}());
StyledemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-styledemo',
        template: __webpack_require__(220),
        styles: [__webpack_require__(207)]
    }),
    __metadata("design:paramtypes", [])
], StyledemoComponent);

//# sourceMappingURL=styledemo.component.js.map

/***/ })

},[309]);
//# sourceMappingURL=main.bundle.js.map