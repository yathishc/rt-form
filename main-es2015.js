(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/contact-form/contact-form.component.ts");





const routes = [
    { path: 'contact', component: _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_2__["ContactFormComponent"] },
    { path: '**', redirectTo: 'contact' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'raw-toss';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/contact-form/contact-form.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_4__["ContactFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_4__["ContactFormComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contact-form/contact-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.ts ***!
  \********************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactFormComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(); };
ContactFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactFormComponent, selectors: [["app-contact-form"]], decls: 24, vars: 0, consts: [[1, "container"], ["id", "contact", "action", "", "method", "post"], ["placeholder", "Your name", "type", "text", "tabindex", "1", "required", "", "autofocus", ""], ["placeholder", "Your Email Address", "type", "email", "tabindex", "2", "required", ""], ["placeholder", "Your Phone Number (optional)", "type", "tel", "tabindex", "3", "required", ""], ["placeholder", "Type your feedback here....", "tabindex", "5", "required", ""], ["name", "submit", "type", "submit", "id", "contact-submit", "data-submit", "...Sending"], [1, "copyright"], ["href", "https://rawtoss.com", "target", "_blank", "title", "Colorlib"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Raw Toss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Customers Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Will send you promotion or the coupons Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Product of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "RawToss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["p[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 180;\n  height: 60px;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n  position: relative;\n}\n\n#contact[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=tel][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=url][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  font: 400 12px/16px \"Roboto\", Helvetica, Arial, sans-serif;\n}\n\n#contact[_ngcontent-%COMP%] {\n  background: #F9F9F9;\n  padding: 25px;\n  margin: 15px 0;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n\n#contact[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 30px;\n  font-weight: 300;\n  margin-bottom: 10px;\n}\n\n#contact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 5px 0 15px;\n  display: block;\n  font-size: 13px;\n  font-weight: 400;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: medium none !important;\n  margin: 0 0 10px;\n  min-width: 100%;\n  padding: 0;\n  width: 100%;\n}\n\n#contact[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=tel][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=url][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ccc;\n  background: #FFF;\n  margin: 0 0 5px;\n  padding: 10px;\n}\n\n#contact[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:hover, #contact[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:hover, #contact[_ngcontent-%COMP%]   input[type=tel][_ngcontent-%COMP%]:hover, #contact[_ngcontent-%COMP%]   input[type=url][_ngcontent-%COMP%]:hover, #contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover {\n  transition: border-color 0.3s ease-in-out;\n  border: 1px solid #aaa;\n}\n\n#contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 100px;\n  max-width: 100%;\n  resize: none;\n}\n\n#contact[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  border: none;\n  background: #0183FF;\n  color: #FFF;\n  margin: 0 0 5px;\n  padding: 10px;\n  font-size: 15px;\n}\n\n#contact[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:hover {\n  background: #035099;\n  transition: background-color 0.3s ease-in-out;\n}\n\n#contact[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);\n}\n\n.copyright[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, #contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  border: 1px solid #aaa;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #888;\n}\n\n[_ngcontent-%COMP%]:-moz-placeholder {\n  color: #888;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #888;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #888;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  font: 700 4rem Montserrat, sans-serif;\n  letter-spacing: -0.07ex;\n  -webkit-animation: anim 1.5s infinite alternate ease-in-out;\n          animation: anim 1.5s infinite alternate ease-in-out;\n}\n\n@-webkit-keyframes anim {\n  from {\n    text-shadow: 0 0 10px transparent;\n  }\n  to {\n    text-shadow: 0 28px 50px rgba(0, 0, 0, 0.8);\n  }\n}\n\n@keyframes anim {\n  from {\n    text-shadow: 0 0 10px transparent;\n  }\n  to {\n    text-shadow: 0 28px 50px rgba(0, 0, 0, 0.8);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvbXktYW5ndWxhci13cy91bnRpdGxlZCBmb2xkZXIvcmF3LXRvc3Mvc3JjL2FwcC9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FDQUo7O0FERUE7RUFJSSxVQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBOzs7Ozs7RUFNRSwwREFBQTtBQ0ZGOztBREtBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDBFQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBOzs7OztFQUtFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNGRjs7QURLQTs7Ozs7RUFPRSx5Q0FBQTtFQUNBLHNCQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsbUJBQUE7RUFHQSw2Q0FBQTtBQ0ZGOztBREtBO0VBQ0UsOENBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0FDRkY7O0FES0E7O0VBRUUsVUFBQTtFQUNBLHNCQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0FDRkY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSx1QkFBQTtFQUNBLDJEQUFBO1VBQUEsbURBQUE7QUNKRjs7QURPQTtFQUNFO0lBQ0UsaUNBQUE7RUNKRjtFRE1BO0lBQ0UsMkNBQUE7RUNKRjtBQUNGOztBREZBO0VBQ0U7SUFDRSxpQ0FBQTtFQ0pGO0VETUE7SUFDRSwyQ0FBQTtFQ0pGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5we1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOjIwcHg7XG59XG4ubG9nbyB7XG4gICAgLy8gZGlzcGxheTogYmxvY2s7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxODA7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInRleHRcIl0sXG4jY29udGFjdCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidGVsXCJdLFxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInVybFwiXSxcbiNjb250YWN0IHRleHRhcmVhLFxuI2NvbnRhY3QgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xuICBmb250OiA0MDAgMTJweC8xNnB4IFwiUm9ib3RvXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbiNjb250YWN0IHtcbiAgYmFja2dyb3VuZDogI0Y5RjlGOTtcbiAgcGFkZGluZzogMjVweDtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuXG4jY29udGFjdCBoMyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiNjb250YWN0IGg0IHtcbiAgbWFyZ2luOiA1cHggMCAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5maWVsZHNldCB7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInRleHRcIl0sXG4jY29udGFjdCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidGVsXCJdLFxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInVybFwiXSxcbiNjb250YWN0IHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIG1hcmdpbjogMCAwIDVweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInRleHRcIl06aG92ZXIsXG4jY29udGFjdCBpbnB1dFt0eXBlPVwiZW1haWxcIl06aG92ZXIsXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidGVsXCJdOmhvdmVyLFxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInVybFwiXTpob3ZlcixcbiNjb250YWN0IHRleHRhcmVhOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG59XG5cbiNjb250YWN0IHRleHRhcmVhIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICByZXNpemU6IG5vbmU7XG59XG5cbiNjb250YWN0IGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMDE4M0ZGO1xuICBjb2xvcjogI0ZGRjtcbiAgbWFyZ2luOiAwIDAgNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbiNjb250YWN0IGJ1dHRvblt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiKDMsIDgwLCAxNTMpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuI2NvbnRhY3QgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl06YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmNvcHlyaWdodCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvbnRhY3QgaW5wdXQ6Zm9jdXMsXG4jY29udGFjdCB0ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODg4O1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODg4O1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzg4ODtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODg4O1xufVxuXG5cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6MTBweDtcbiAgZm9udDogNzAwIDRyZW0gTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA3ZXg7XG4gIGFuaW1hdGlvbjogYW5pbSAxLjVzIGluZmluaXRlIGFsdGVybmF0ZSBlYXNlLWluLW91dDtcbn1cblxuQGtleWZyYW1lcyBhbmltIHtcbiAgZnJvbSB7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHRyYW5zcGFyZW50O1xuICB9XG4gIHRvIHtcbiAgICB0ZXh0LXNoYWRvdzogMCAyOHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB9XG59XG4iLCJwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxODA7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNjb250YWN0IGlucHV0W3R5cGU9dGV4dF0sXG4jY29udGFjdCBpbnB1dFt0eXBlPWVtYWlsXSxcbiNjb250YWN0IGlucHV0W3R5cGU9dGVsXSxcbiNjb250YWN0IGlucHV0W3R5cGU9dXJsXSxcbiNjb250YWN0IHRleHRhcmVhLFxuI2NvbnRhY3QgYnV0dG9uW3R5cGU9c3VibWl0XSB7XG4gIGZvbnQ6IDQwMCAxMnB4LzE2cHggXCJSb2JvdG9cIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuI2NvbnRhY3Qge1xuICBiYWNrZ3JvdW5kOiAjRjlGOUY5O1xuICBwYWRkaW5nOiAyNXB4O1xuICBtYXJnaW46IDE1cHggMDtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG5cbiNjb250YWN0IGgzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuI2NvbnRhY3QgaDQge1xuICBtYXJnaW46IDVweCAwIDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jY29udGFjdCBpbnB1dFt0eXBlPXRleHRdLFxuI2NvbnRhY3QgaW5wdXRbdHlwZT1lbWFpbF0sXG4jY29udGFjdCBpbnB1dFt0eXBlPXRlbF0sXG4jY29udGFjdCBpbnB1dFt0eXBlPXVybF0sXG4jY29udGFjdCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBtYXJnaW46IDAgMCA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbiNjb250YWN0IGlucHV0W3R5cGU9dGV4dF06aG92ZXIsXG4jY29udGFjdCBpbnB1dFt0eXBlPWVtYWlsXTpob3ZlcixcbiNjb250YWN0IGlucHV0W3R5cGU9dGVsXTpob3ZlcixcbiNjb250YWN0IGlucHV0W3R5cGU9dXJsXTpob3ZlcixcbiNjb250YWN0IHRleHRhcmVhOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG59XG5cbiNjb250YWN0IHRleHRhcmVhIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICByZXNpemU6IG5vbmU7XG59XG5cbiNjb250YWN0IGJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMwMTgzRkY7XG4gIGNvbG9yOiAjRkZGO1xuICBtYXJnaW46IDAgMCA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuI2NvbnRhY3QgYnV0dG9uW3R5cGU9c3VibWl0XTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMzUwOTk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4jY29udGFjdCBidXR0b25bdHlwZT1zdWJtaXRdOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5jb3B5cmlnaHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250YWN0IGlucHV0OmZvY3VzLFxuI2NvbnRhY3QgdGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzg4ODtcbn1cblxuOi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzg4ODtcbn1cblxuOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM4ODg7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzg4ODtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQ6IDcwMCA0cmVtIE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wN2V4O1xuICBhbmltYXRpb246IGFuaW0gMS41cyBpbmZpbml0ZSBhbHRlcm5hdGUgZWFzZS1pbi1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgYW5pbSB7XG4gIGZyb20ge1xuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCB0cmFuc3BhcmVudDtcbiAgfVxuICB0byB7XG4gICAgdGV4dC1zaGFkb3c6IDAgMjhweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-form',
                templateUrl: './contact-form.component.html',
                styleUrls: ['./contact-form.component.scss']
            }]
    }], function () { return []; }, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Documents/my-angular-ws/untitled folder/raw-toss/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map