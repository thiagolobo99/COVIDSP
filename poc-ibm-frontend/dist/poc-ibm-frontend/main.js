(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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



var routes = [];
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

module.exports = "<!-- <app-chat></app-chat> -->\n<app-main-dashboard></app-main-dashboard>"

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
        this.title = 'poc-ibm-frontend';
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-dashboard/main-dashboard.component */ "./src/app/main-dashboard/main-dashboard.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["MainDashboardComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatComponents\">\n\n  <div class=\"chatHeader\">\n    <span class=\"chatLogo\"></span>\n    <button class=\"closeSVG\" (click)=\"closeChatF()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path\n          d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\" />\n        <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n      </svg>\n    </button>\n  </div>\n\n  <div class=\"messageBody\" id=\"scrollMe\">\n    <div class=\"parentScroll\">\n      <div *ngFor=\"let message of arrayChat;\" [id]=\"i\">\n        <div [ngClass]=\"message.sentBy === 'bot'? 'balloon bot' : 'balloon user'\">\n          <span *ngIf=\"message.sentBy == 'bot'\" class=\"logoMessage\"></span>\n          <div class=\"message\">\n            <span [innerHTML]=\"message.text\"></span>\n          </div>\n        </div>\n      </div>\n      <div [id]=\"arrayChat.length\" class=\"button-list\">\n        <button *ngFor=\"let botao of arrayBotoes;\" (click)='buttonToWatson(botao.label)'>{{botao.label}}</button>\n      </div>\n      <div *ngIf=\"wait4Response == true\" class=\"boxTyping\" [id]=\"arrayChat.length\">\n        <span class=\"logoMessage\"></span>\n        <div class=\"message\">\n          <div class=\"progress\">\n            <span></span>\n            <span></span>\n            <span></span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"bottomChat\">\n    <div class=\"boxInput\">\n      <input (keyup)=\"keyUp($event)\" (keyup.enter)=\"onSubmit()\" type=\"text\" placeholder=\"Digite aqui sua mensagem\"\n        class=\"inputMessage\" [disabled]=\"arrayBotoes.length == 0? false : true\">\n      <button (click)=\"onSubmit()\" class=\"sendButton\"><span>Enviar</span></button>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatComponents {\n  position: absolute;\n  right: 20px;\n  bottom: 40px;\n  width: 400px;\n  height: 70%; }\n\n.chatHeader {\n  border-radius: 9px 9px 0px 0px;\n  display: flex;\n  background-color: #616161;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px 5px 15px;\n  height: 10%; }\n\n.chatHeader .chatLogo {\n    width: 70px;\n    height: 35px;\n    background-repeat: no-repeat;\n    background-size: 100%;\n    margin: 7px; }\n\n.chatHeader .closeSVG {\n    background-color: #616161;\n    padding: 5px;\n    border: 0;\n    transition: all .3s;\n    cursor: pointer; }\n\n.chatHeader .closeSVG svg {\n      width: 20px;\n      height: 20px;\n      fill: #e5e6e6;\n      transition: all .3s; }\n\n.chatHeader .closeSVG:hover {\n      background-color: #484747; }\n\n.chatHeader .closeSVG:hover svg {\n        transform: scale(1.3, 1.3); }\n\n.bottomChat {\n  height: 15%;\n  background-color: #f5f5f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0px 0px 9px 9px; }\n\n.bottomChat .boxInput {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    width: 90%;\n    border: 1px solid #B2BDC6;\n    background-color: #fff;\n    border-radius: 6px;\n    height: 30px;\n    padding: 5px; }\n\n.bottomChat .boxInput .sendButton {\n      background-color: #fff;\n      border: none;\n      cursor: pointer; }\n\n.bottomChat .boxInput .sendButton:focus {\n        outline: transparent; }\n\n.bottomChat .boxInput .sendButton span {\n        color: #0277bd;\n        font-size: 15px;\n        font-weight: 700; }\n\n.bottomChat input {\n    width: 70%;\n    border: none;\n    border-bottom: 1px solid #B2BDC6;\n    padding: 5px; }\n\n.bottomChat input:focus {\n      outline: transparent; }\n\n.messageBody {\n  position: relative;\n  height: 75%;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  background-color: #f5f5f5; }\n\n.messageBody .parentScroll {\n    width: 95%;\n    padding: 10px; }\n\n.messageBody .parentScroll > div:last-of-type {\n      margin-bottom: 100px; }\n\n.button-list {\n  display: flex;\n  width: 91%;\n  padding-left: 35px;\n  padding-right: 10px;\n  flex-wrap: wrap; }\n\n.button-list button {\n    height: 32px;\n    background-color: #fff;\n    border: 2px solid #414141;\n    color: #414141;\n    font-size: 14px;\n    border-radius: 10px;\n    margin-right: 2px;\n    margin-bottom: 10px;\n    font-family: 'Montserrat', sans-serif; }\n\n.button-list button:last-of-type {\n      margin-right: 0; }\n\n.boxTyping {\n  display: flex;\n  width: 100%; }\n\n.boxTyping .message {\n    background-color: #fff;\n    margin: 10px 10px 10px 1px;\n    border-radius: 1px 10px 10px 10px; }\n\n.boxTyping .message .progress span {\n      transition: all 500ms ease;\n      background: #0277bd;\n      margin-right: 2px;\n      height: 10px;\n      width: 10px;\n      display: inline-block;\n      border-radius: 10px;\n      -webkit-animation: wave 1s ease infinite;\n              animation: wave 1s ease infinite; }\n\n.boxTyping .message .progress span:nth-child(1) {\n        -webkit-animation-delay: 0;\n                animation-delay: 0; }\n\n.boxTyping .message .progress span:nth-child(2) {\n        -webkit-animation-delay: 100ms;\n                animation-delay: 100ms; }\n\n.boxTyping .message .progress span:nth-child(3) {\n        -webkit-animation-delay: 200ms;\n                animation-delay: 200ms; }\n\n@-webkit-keyframes wave {\n  0%,\n  40%,\n  100% {\n    transform: translate(0, 0); }\n  10% {\n    transform: translate(0, -10px); } }\n\n@keyframes wave {\n  0%,\n  40%,\n  100% {\n    transform: translate(0, 0); }\n  10% {\n    transform: translate(0, -10px); } }\n\n.logoMessage {\n  background-repeat: no-repeat;\n  background-size: 100%;\n  height: 50px;\n  width: 35px; }\n\n.balloon {\n  display: flex;\n  width: 100%; }\n\n.message {\n  max-width: 200px;\n  padding: 10px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);\n  line-height: 21px; }\n\n.message span {\n    overflow-wrap: break-word;\n    width: 100%;\n    display: block;\n    position: initial;\n    font-family: 'Montserrat', sans-serif;\n    color: white; }\n\n.balloon.user .message {\n  background-color: #616161;\n  margin: 10px;\n  border-radius: 10px 1px 10px 10px;\n  margin-left: auto; }\n\n.balloon.bot .message {\n  background-color: #fff;\n  margin: 10px 10px 10px 1px;\n  border-radius: 1px 10px 10px 10px;\n  margin-right: auto; }\n\n.balloon.bot .message span {\n    color: #616161; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJuYW5kYW51bmVzL0Rlc2t0b3AvUE9DLUlCTS9wb2MtaWJtLWZyb250ZW5kL3BvYy1pYm0tZnJvbnRlbmQvc3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0ksOEJBQThCO0VBQzlCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsV0FBVyxFQUFBOztBQVBmO0lBVVEsV0FBVztJQUNYLFlBQVk7SUFFWiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLFdBQVcsRUFBQTs7QUFmbkI7SUFtQlEseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTs7QUF2QnZCO01BMEJZLFdBQVc7TUFDWCxZQUFZO01BQ1osYUFBYTtNQUNiLG1CQUFtQixFQUFBOztBQTdCL0I7TUFpQ1kseUJBQXNDLEVBQUE7O0FBakNsRDtRQW9DZ0IsMEJBQTBCLEVBQUE7O0FBTTFDO0VBQ0ksV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qiw4QkFBOEIsRUFBQTs7QUFObEM7SUFTUSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVksRUFBQTs7QUFqQnBCO01Bb0JZLHNCQUFzQjtNQUN0QixZQUFZO01BQ1osZUFBZSxFQUFBOztBQXRCM0I7UUF5QmdCLG9CQUFvQixFQUFBOztBQXpCcEM7UUE2QmdCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZ0JBQWdCLEVBQUE7O0FBL0JoQztJQXFDUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxZQUFZLEVBQUE7O0FBeENwQjtNQTJDWSxvQkFBb0IsRUFBQTs7QUFLaEM7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBTDdCO0lBUVEsVUFBVTtJQUNWLGFBQWEsRUFBQTs7QUFUckI7TUFhZ0Isb0JBQW9CLEVBQUE7O0FBTXBDO0VBQ0ksYUFBYTtFQUNiLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFMbkI7SUFRUSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHFDQUFxQyxFQUFBOztBQWhCN0M7TUFtQlksZUFBZSxFQUFBOztBQU0zQjtFQUNJLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBRmY7SUFLUSxzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLGlDQUFpQyxFQUFBOztBQVB6QztNQVVZLDBCQUEwQjtNQUMxQixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixXQUFXO01BQ1gscUJBQXFCO01BQ3JCLG1CQUFtQjtNQUNuQix3Q0FBZ0M7Y0FBaEMsZ0NBQWdDLEVBQUE7O0FBakI1QztRQW9CZ0IsMEJBQWtCO2dCQUFsQixrQkFBa0IsRUFBQTs7QUFwQmxDO1FBd0JnQiw4QkFBc0I7Z0JBQXRCLHNCQUFzQixFQUFBOztBQXhCdEM7UUE0QmdCLDhCQUFzQjtnQkFBdEIsc0JBQXNCLEVBQUE7O0FBTXRDO0VBRUk7OztJQUdJLDBCQUEwQixFQUFBO0VBRzlCO0lBQ0ksOEJBQThCLEVBQUEsRUFBQTs7QUFUdEM7RUFFSTs7O0lBR0ksMEJBQTBCLEVBQUE7RUFHOUI7SUFDSSw4QkFBOEIsRUFBQSxFQUFBOztBQUl0QztFQUVJLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDJDQUEyQztFQUMzQyxpQkFBaUIsRUFBQTs7QUFKckI7SUFPUSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIscUNBQXFDO0lBQ3JDLFlBQVksRUFBQTs7QUFJcEI7RUFFUSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxpQkFBaUIsRUFBQTs7QUFJekI7RUFFUSxzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLGlDQUFpQztFQUNqQyxrQkFBa0IsRUFBQTs7QUFMMUI7SUFTWSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdENvbXBvbmVudHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICBib3R0b206IDQwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNzAlO1xufVxuXG4uY2hhdEhlYWRlciB7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4IDlweCAwcHggMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxNjE2MTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcbiAgICBoZWlnaHQ6IDEwJTtcblxuICAgIC5jaGF0TG9nbyB7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvTG9nby1OZWdhdGl2by5wbmdcIik7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICAgICAgbWFyZ2luOiA3cHg7XG4gICAgfVxuXG4gICAgLmNsb3NlU1ZHIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYxNjE2MTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBmaWxsOiAjZTVlNmU2O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCM2MTYxNjEsIDEwJSk7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMsIDEuMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ib3R0b21DaGF0IHtcbiAgICBoZWlnaHQ6IDE1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDlweCA5cHg7XG5cbiAgICAuYm94SW5wdXQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0IyQkRDNjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcblxuICAgICAgICAuc2VuZEJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMjc3YmQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNCMkJEQzY7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubWVzc2FnZUJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDc1JTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG5cbiAgICAucGFyZW50U2Nyb2xsIHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICA+ZGl2IHtcbiAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJ1dHRvbi1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA5MSU7XG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNDE0MTQxO1xuICAgICAgICBjb2xvcjogIzQxNDE0MTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcblxuICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLmJveFR5cGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5tZXNzYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFweCAxMHB4IDEwcHggMTBweDtcblxuICAgICAgICAucHJvZ3Jlc3Mgc3BhbiB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMjc3YmQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogd2F2ZSAxcyBlYXNlIGluZmluaXRlO1xuXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxMDBtcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMjAwbXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgd2F2ZSB7XG5cbiAgICAwJSxcbiAgICA0MCUsXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIH1cblxuICAgIDEwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMHB4KTtcbiAgICB9XG59XG5cbi5sb2dvTWVzc2FnZSB7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy8xMDAtcGFuLWxvZ28ucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMzVweDtcbn1cblxuLmJhbGxvb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZXNzYWdlIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcblxuICAgIHNwYW4ge1xuICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuXG4uYmFsbG9vbi51c2VyIHtcbiAgICAubWVzc2FnZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTYxNjE7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxcHggMTBweCAxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB9XG59XG5cbi5iYWxsb29uLmJvdCB7XG4gICAgLm1lc3NhZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDFweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4IDEwcHggMTBweCAxMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAgICAgICAgc3BhbiB7XG5cbiAgICAgICAgICAgIGNvbG9yOiAjNjE2MTYxO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/main-dashboard/main-dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main-dashboard/main-dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n<div class=\"mainPage\">\n  <div class=\"containerBox\">\n    <div class=\"firstBox\">\n      <p>{{numberCases}}</p>\n    </div>\n    <div class=\"secondBox\">\n      <p>{{numberDeaths}}</p>\n    </div>\n    <div class=\"thirdBox\">\n      <p>Número Três</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main-dashboard/main-dashboard.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/main-dashboard/main-dashboard.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainPage {\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(to bottom, rgba(29, 165, 132, 0.05), rgba(29, 165, 132, 0.05), rgba(29, 165, 132, 0.02)); }\n  .mainPage .containerBox {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 0 30px; }\n  .mainPage .containerBox .firstBox,\n    .mainPage .containerBox .secondBox {\n      background: #fff;\n      width: 320px;\n      height: 210px;\n      padding: 3px;\n      margin: 10px;\n      border-radius: 5px;\n      border: 1px solid #dbe9f5;\n      box-shadow: var(--ion-box-shadow); }\n  .mainPage .containerBox .thirdBox {\n      background: #fff;\n      width: 440px;\n      height: 210px;\n      padding: 3px;\n      margin: 10px;\n      border-radius: 5px;\n      border: 1px solid #dbe9f5;\n      box-shadow: var(--ion-box-shadow); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJuYW5kYW51bmVzL0Rlc2t0b3AvUE9DLUlCTS9wb2MtaWJtLWZyb250ZW5kL3BvYy1pYm0tZnJvbnRlbmQvc3JjL2FwcC9tYWluLWRhc2hib2FyZC9tYWluLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0hBQWtILEVBQUE7RUFIdEg7SUFNUSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixlQUFlLEVBQUE7RUFUdkI7O01BYVksZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixhQUFhO01BQ2IsWUFBWTtNQUNaLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLGlDQUFpQyxFQUFBO0VBcEI3QztNQXdCWSxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGFBQWE7TUFDYixZQUFZO01BQ1osWUFBWTtNQUNaLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIsaUNBQWlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluLWRhc2hib2FyZC9tYWluLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluUGFnZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjksIDE2NSwgMTMyLCAuMDUpLCByZ2JhKDI5LCAxNjUsIDEzMiwgLjA1KSwgcmdiYSgyOSwgMTY1LCAxMzIsIDAuMDIpKTtcblxuICAgIC5jb250YWluZXJCb3gge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG5cbiAgICAgICAgLmZpcnN0Qm94LFxuICAgICAgICAuc2Vjb25kQm94IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICB3aWR0aDogMzIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RiZTlmNTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlvbi1ib3gtc2hhZG93KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aGlyZEJveCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgd2lkdGg6IDQ0MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYmU5ZjU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1pb24tYm94LXNoYWRvdyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/main-dashboard/main-dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main-dashboard/main-dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: MainDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainDashboardComponent", function() { return MainDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_covid_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/covid-api.service */ "./src/services/covid-api.service.ts");



var MainDashboardComponent = /** @class */ (function () {
    function MainDashboardComponent(covidApi) {
        this.covidApi = covidApi;
    }
    MainDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.covidApi.dataCovid().subscribe(function (response) {
            _this.numberCases = response.Casos;
            _this.numberDeaths = response.Mortes;
        });
    };
    MainDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-dashboard',
            template: __webpack_require__(/*! ./main-dashboard.component.html */ "./src/app/main-dashboard/main-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./main-dashboard.component.scss */ "./src/app/main-dashboard/main-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_covid_api_service__WEBPACK_IMPORTED_MODULE_2__["CovidApiService"]])
    ], MainDashboardComponent);
    return MainDashboardComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"wrapper\">\n    <p>COVIDSP</p>\n    <button (click)=\"exit()\">Sair\n      <svg width=\"18px\" height=\"18px\" viewBox=\"0 0 18 18\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n        xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n\n        <defs>\n          <path\n            d=\"M10.09,15.59 L11.5,17 L16.5,12 L11.5,7 L10.09,8.41 L12.67,11 L3,11 L3,13 L12.67,13 L10.09,15.59 L10.09,15.59 Z M19,3 L5,3 C3.89,3 3,3.9 3,5 L3,9 L5,9 L5,5 L19,5 L19,19 L5,19 L5,15 L3,15 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 L19,3 Z\"\n            id=\"path-1\"></path>\n        </defs>\n        <g id=\"Header\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n          <g id=\"Aprovados-[USAR]/-Header-/-2.Desktop-/-Logado-/-Fluxo\" transform=\"translate(-1106.000000, -31.000000)\">\n            <g id=\"Sair\" transform=\"translate(1063.000000, 28.000000)\">\n              <g id=\"Simple-/-Action/ic_exit_to_app\" transform=\"translate(40.000000, 0.000000)\">\n                <polygon id=\"Bounds\" points=\"0 0 24 0 24 24 0 24\"></polygon>\n                <mask id=\"mask-2\" fill=\"white\">\n                  <use xlink:href=\"#path-1\"></use>\n                </mask>\n                <use id=\"Mask\" fill=\"#000000\" fill-rule=\"evenodd\" xlink:href=\"#path-1\"></use>\n                <g id=\"↳-🎨Color\" stroke-width=\"1\" fill-rule=\"evenodd\" mask=\"url(#mask-2)\" fill=\"#0277BD\">\n                  <rect id=\"color\" x=\"0\" y=\"0\" width=\"24\" height=\"24\"></rect>\n                </g>\n              </g>\n            </g>\n          </g>\n        </g>\n      </svg>\n    </button>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.scss":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  position: relative;\n  width: 100%;\n  height: 70px;\n  border: 1px solid rgba(28, 28, 28, 0.07);\n  box-shadow: 0 7px 6px 0 rgba(33, 43, 54, 0.04);\n  font-family: \"Circular Std\", sans-serif;\n  color: #193148;\n  line-height: 22px;\n  font-weight: 900;\n  font-size: 24.59px; }\n\nheader .wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 20px; }\n\nheader .wrapper > img {\n    width: 85px;\n    height: auto; }\n\nbutton {\n  cursor: pointer;\n  color: #0277BD;\n  display: flex;\n  align-items: center;\n  height: 40px;\n  line-height: 40px;\n  background-color: transparent;\n  transition: all .3s;\n  border: 0;\n  font-size: 16px;\n  text-decoration: underline; }\n\nbutton:hover {\n    color: #01578b; }\n\nbutton:hover svg g rect {\n      fill: #01578b; }\n\nbutton svg {\n    width: 18px;\n    height: 18px;\n    fill: white;\n    margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJuYW5kYW51bmVzL0Rlc2t0b3AvUE9DLUlCTS9wb2MtaWJtLWZyb250ZW5kL3BvYy1pYm0tZnJvbnRlbmQvc3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWix3Q0FBdUM7RUFDdkMsOENBQTZDO0VBQzdDLHVDQUF1QztFQUN2QyxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixjQUFjLEVBQUE7O0FBSmxCO0lBT1EsV0FBVztJQUNYLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2YsMEJBQTBCLEVBQUE7O0FBWDlCO0lBY1EsY0FBMkIsRUFBQTs7QUFkbkM7TUFpQlksYUFBMEIsRUFBQTs7QUFqQnRDO0lBc0JRLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjgsIDI4LCAyOCwgLjA3KTtcbiAgICBib3gtc2hhZG93OiAwIDdweCA2cHggMCByZ2JhKDMzLCA0MywgNTQsIC4wNCk7XG4gICAgZm9udC1mYW1pbHk6IFwiQ2lyY3VsYXIgU3RkXCIsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICMxOTMxNDg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDI0LjU5cHg7XG59XG5cbmhlYWRlciAud3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDAgMjBweDtcblxuICAgID5pbWcge1xuICAgICAgICB3aWR0aDogODVweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbn1cblxuYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICMwMjc3QkQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IGRhcmtlbigjMDI3N0JELCAxMCUpO1xuXG4gICAgICAgIHN2ZyBnIHJlY3Qge1xuICAgICAgICAgICAgZmlsbDogZGFya2VuKCMwMjc3QkQsIDEwJSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdmcge1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/nav-bar/nav-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



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
var environment = {
    production: false,
    local: 'http://localhost:3000/covid'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/services/covid-api.service.ts":
/*!*******************************************!*\
  !*** ./src/services/covid-api.service.ts ***!
  \*******************************************/
/*! exports provided: CovidApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidApiService", function() { return CovidApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var CovidApiService = /** @class */ (function () {
    function CovidApiService(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].local;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    CovidApiService.prototype.dataCovid = function () {
        return this.http.get(this.url + '/general').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    CovidApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CovidApiService);
    return CovidApiService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fernandanunes/Desktop/POC-IBM/poc-ibm-frontend/poc-ibm-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map