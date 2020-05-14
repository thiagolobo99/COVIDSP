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

module.exports = ".chatComponents {\n  position: absolute;\n  right: 20px;\n  bottom: 40px;\n  width: 400px;\n  height: 70%; }\n\n.chatHeader {\n  border-radius: 9px 9px 0px 0px;\n  display: flex;\n  background-color: #616161;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px 5px 15px;\n  height: 10%; }\n\n.chatHeader .chatLogo {\n    width: 70px;\n    height: 35px;\n    background-repeat: no-repeat;\n    background-size: 100%;\n    margin: 7px; }\n\n.chatHeader .closeSVG {\n    background-color: #616161;\n    padding: 5px;\n    border: 0;\n    transition: all .3s;\n    cursor: pointer; }\n\n.chatHeader .closeSVG svg {\n      width: 20px;\n      height: 20px;\n      fill: #e5e6e6;\n      transition: all .3s; }\n\n.chatHeader .closeSVG:hover {\n      background-color: #484747; }\n\n.chatHeader .closeSVG:hover svg {\n        transform: scale(1.3, 1.3); }\n\n.bottomChat {\n  height: 15%;\n  background-color: #f5f5f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0px 0px 9px 9px; }\n\n.bottomChat .boxInput {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    width: 90%;\n    border: 1px solid #B2BDC6;\n    background-color: #fff;\n    border-radius: 6px;\n    height: 30px;\n    padding: 5px; }\n\n.bottomChat .boxInput .sendButton {\n      background-color: #fff;\n      border: none;\n      cursor: pointer; }\n\n.bottomChat .boxInput .sendButton:focus {\n        outline: transparent; }\n\n.bottomChat .boxInput .sendButton span {\n        color: #0277bd;\n        font-size: 15px;\n        font-weight: 700; }\n\n.bottomChat input {\n    width: 70%;\n    border: none;\n    border-bottom: 1px solid #B2BDC6;\n    padding: 5px; }\n\n.bottomChat input:focus {\n      outline: transparent; }\n\n.messageBody {\n  position: relative;\n  height: 75%;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  background-color: #f5f5f5; }\n\n.messageBody .parentScroll {\n    width: 95%;\n    padding: 10px; }\n\n.messageBody .parentScroll > div:last-of-type {\n      margin-bottom: 100px; }\n\n.button-list {\n  display: flex;\n  width: 91%;\n  padding-left: 35px;\n  padding-right: 10px;\n  flex-wrap: wrap; }\n\n.button-list button {\n    height: 32px;\n    background-color: #fff;\n    border: 2px solid #414141;\n    color: #414141;\n    font-size: 14px;\n    border-radius: 10px;\n    margin-right: 2px;\n    margin-bottom: 10px;\n    font-family: 'Montserrat', sans-serif; }\n\n.button-list button:last-of-type {\n      margin-right: 0; }\n\n.boxTyping {\n  display: flex;\n  width: 100%; }\n\n.boxTyping .message {\n    background-color: #fff;\n    margin: 10px 10px 10px 1px;\n    border-radius: 1px 10px 10px 10px; }\n\n.boxTyping .message .progress span {\n      transition: all 500ms ease;\n      background: #0277bd;\n      margin-right: 2px;\n      height: 10px;\n      width: 10px;\n      display: inline-block;\n      border-radius: 10px;\n      -webkit-animation: wave 1s ease infinite;\n              animation: wave 1s ease infinite; }\n\n.boxTyping .message .progress span:nth-child(1) {\n        -webkit-animation-delay: 0;\n                animation-delay: 0; }\n\n.boxTyping .message .progress span:nth-child(2) {\n        -webkit-animation-delay: 100ms;\n                animation-delay: 100ms; }\n\n.boxTyping .message .progress span:nth-child(3) {\n        -webkit-animation-delay: 200ms;\n                animation-delay: 200ms; }\n\n@-webkit-keyframes wave {\n  0%,\n  40%,\n  100% {\n    transform: translate(0, 0); }\n  10% {\n    transform: translate(0, -10px); } }\n\n@keyframes wave {\n  0%,\n  40%,\n  100% {\n    transform: translate(0, 0); }\n  10% {\n    transform: translate(0, -10px); } }\n\n.logoMessage {\n  background-repeat: no-repeat;\n  background-size: 100%;\n  height: 50px;\n  width: 35px; }\n\n.balloon {\n  display: flex;\n  width: 100%; }\n\n.message {\n  max-width: 200px;\n  padding: 10px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);\n  line-height: 21px; }\n\n.message span {\n    overflow-wrap: break-word;\n    width: 100%;\n    display: block;\n    position: initial;\n    font-family: 'Montserrat', sans-serif;\n    color: white; }\n\n.balloon.user .message {\n  background-color: #616161;\n  margin: 10px;\n  border-radius: 10px 1px 10px 10px;\n  margin-left: auto; }\n\n.balloon.bot .message {\n  background-color: #fff;\n  margin: 10px 10px 10px 1px;\n  border-radius: 1px 10px 10px 10px;\n  margin-right: auto; }\n\n.balloon.bot .message span {\n    color: #616161; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJuYW5kYW51bmVzL0Rlc2t0b3AvUE9DLUlCTS9wb2MtaWJtLWZyb250ZW5kL3NyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLFdBQVcsRUFBQTs7QUFQZjtJQVVRLFdBQVc7SUFDWCxZQUFZO0lBRVosNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixXQUFXLEVBQUE7O0FBZm5CO0lBbUJRLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osU0FBUztJQUNULG1CQUFtQjtJQUNuQixlQUFlLEVBQUE7O0FBdkJ2QjtNQTBCWSxXQUFXO01BQ1gsWUFBWTtNQUNaLGFBQWE7TUFDYixtQkFBbUIsRUFBQTs7QUE3Qi9CO01BaUNZLHlCQUFzQyxFQUFBOztBQWpDbEQ7UUFvQ2dCLDBCQUEwQixFQUFBOztBQU0xQztFQUNJLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsOEJBQThCLEVBQUE7O0FBTmxDO0lBU1EsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZLEVBQUE7O0FBakJwQjtNQW9CWSxzQkFBc0I7TUFDdEIsWUFBWTtNQUNaLGVBQWUsRUFBQTs7QUF0QjNCO1FBeUJnQixvQkFBb0IsRUFBQTs7QUF6QnBDO1FBNkJnQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGdCQUFnQixFQUFBOztBQS9CaEM7SUFxQ1EsVUFBVTtJQUNWLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsWUFBWSxFQUFBOztBQXhDcEI7TUEyQ1ksb0JBQW9CLEVBQUE7O0FBS2hDO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBOztBQUw3QjtJQVFRLFVBQVU7SUFDVixhQUFhLEVBQUE7O0FBVHJCO01BYWdCLG9CQUFvQixFQUFBOztBQU1wQztFQUNJLGFBQWE7RUFDYixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBTG5CO0lBUVEsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQ0FBcUMsRUFBQTs7QUFoQjdDO01BbUJZLGVBQWUsRUFBQTs7QUFNM0I7RUFDSSxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUZmO0lBS1Esc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixpQ0FBaUMsRUFBQTs7QUFQekM7TUFVWSwwQkFBMEI7TUFDMUIsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osV0FBVztNQUNYLHFCQUFxQjtNQUNyQixtQkFBbUI7TUFDbkIsd0NBQWdDO2NBQWhDLGdDQUFnQyxFQUFBOztBQWpCNUM7UUFvQmdCLDBCQUFrQjtnQkFBbEIsa0JBQWtCLEVBQUE7O0FBcEJsQztRQXdCZ0IsOEJBQXNCO2dCQUF0QixzQkFBc0IsRUFBQTs7QUF4QnRDO1FBNEJnQiw4QkFBc0I7Z0JBQXRCLHNCQUFzQixFQUFBOztBQU10QztFQUVJOzs7SUFHSSwwQkFBMEIsRUFBQTtFQUc5QjtJQUNJLDhCQUE4QixFQUFBLEVBQUE7O0FBVHRDO0VBRUk7OztJQUdJLDBCQUEwQixFQUFBO0VBRzlCO0lBQ0ksOEJBQThCLEVBQUEsRUFBQTs7QUFJdEM7RUFFSSw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdmO0VBQ0ksZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0MsaUJBQWlCLEVBQUE7O0FBSnJCO0lBT1EseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyxZQUFZLEVBQUE7O0FBSXBCO0VBRVEseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsaUJBQWlCLEVBQUE7O0FBSXpCO0VBRVEsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMsa0JBQWtCLEVBQUE7O0FBTDFCO0lBU1ksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXRDb21wb25lbnRzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgYm90dG9tOiA0MHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDcwJTtcbn1cblxuLmNoYXRIZWFkZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDlweCA5cHggMHB4IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTYxNjE7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDE1cHggNXB4IDE1cHg7XG4gICAgaGVpZ2h0OiAxMCU7XG5cbiAgICAuY2hhdExvZ28ge1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL0xvZ28tTmVnYXRpdm8ucG5nXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogN3B4O1xuICAgIH1cblxuICAgIC5jbG9zZVNWRyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTYxNjE7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgZmlsbDogI2U1ZTZlNjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigjNjE2MTYxLCAxMCUpO1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zLCAxLjMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYm90dG9tQ2hhdCB7XG4gICAgaGVpZ2h0OiAxNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA5cHggOXB4O1xuXG4gICAgLmJveElucHV0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNCMkJEQzY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAgICAgLnNlbmRCdXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDI3N2JkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQjJCREM2O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1lc3NhZ2VCb2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA3NSU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuXG4gICAgLnBhcmVudFNjcm9sbCB7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgICAgPmRpdiB7XG4gICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5idXR0b24tbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogOTElO1xuICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzQxNDE0MTtcbiAgICAgICAgY29sb3I6ICM0MTQxNDE7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG5cbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5ib3hUeXBpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAubWVzc2FnZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcHggMTBweCAxMHB4IDEwcHg7XG5cbiAgICAgICAgLnByb2dyZXNzIHNwYW4ge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDI3N2JkO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBhbmltYXRpb246IHdhdmUgMXMgZWFzZSBpbmZpbml0ZTtcblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMTAwbXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIwMG1zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHdhdmUge1xuXG4gICAgMCUsXG4gICAgNDAlLFxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB9XG5cbiAgICAxMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTBweCk7XG4gICAgfVxufVxuXG4ubG9nb01lc3NhZ2Uge1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvMTAwLXBhbi1sb2dvLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDM1cHg7XG59XG5cbi5iYWxsb29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVzc2FnZSB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cblxuLmJhbGxvb24udXNlciB7XG4gICAgLm1lc3NhZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2MTYxO1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMXB4IDEwcHggMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgfVxufVxuXG4uYmFsbG9vbi5ib3Qge1xuICAgIC5tZXNzYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFweCAxMHB4IDEwcHggMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuXG4gICAgICAgIHNwYW4ge1xuXG4gICAgICAgICAgICBjb2xvcjogIzYxNjE2MTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

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

module.exports = ".mainPage {\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(to bottom, rgba(29, 165, 132, 0.05), rgba(29, 165, 132, 0.05), rgba(29, 165, 132, 0.02)); }\n  .mainPage .containerBox {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 0 30px; }\n  .mainPage .containerBox .firstBox,\n    .mainPage .containerBox .secondBox {\n      background: #fff;\n      width: 320px;\n      height: 210px;\n      padding: 3px;\n      margin: 10px;\n      border-radius: 5px;\n      border: 1px solid #dbe9f5;\n      box-shadow: var(--ion-box-shadow); }\n  .mainPage .containerBox .thirdBox {\n      background: #fff;\n      width: 440px;\n      height: 210px;\n      padding: 3px;\n      margin: 10px;\n      border-radius: 5px;\n      border: 1px solid #dbe9f5;\n      box-shadow: var(--ion-box-shadow); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJuYW5kYW51bmVzL0Rlc2t0b3AvUE9DLUlCTS9wb2MtaWJtLWZyb250ZW5kL3NyYy9hcHAvbWFpbi1kYXNoYm9hcmQvbWFpbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLG9IQUFrSCxFQUFBO0VBSHRIO0lBTVEsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZUFBZSxFQUFBO0VBVHZCOztNQWFZLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osYUFBYTtNQUNiLFlBQVk7TUFDWixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixpQ0FBaUMsRUFBQTtFQXBCN0M7TUF3QlksZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixhQUFhO01BQ2IsWUFBWTtNQUNaLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLGlDQUFpQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1kYXNoYm9hcmQvbWFpbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpblBhZ2Uge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI5LCAxNjUsIDEzMiwgLjA1KSwgcmdiYSgyOSwgMTY1LCAxMzIsIC4wNSksIHJnYmEoMjksIDE2NSwgMTMyLCAwLjAyKSk7XG5cbiAgICAuY29udGFpbmVyQm94IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMCAzMHB4O1xuXG4gICAgICAgIC5maXJzdEJveCxcbiAgICAgICAgLnNlY29uZEJveCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYmU5ZjU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1pb24tYm94LXNoYWRvdyk7XG4gICAgICAgIH1cblxuICAgICAgICAudGhpcmRCb3gge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIHdpZHRoOiA0NDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGJlOWY1O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0taW9uLWJveC1zaGFkb3cpO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19 */"

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

module.exports = "header {\n  position: relative;\n  width: 100%;\n  height: 70px;\n  border: 1px solid rgba(28, 28, 28, 0.07);\n  box-shadow: 0 7px 6px 0 rgba(33, 43, 54, 0.04);\n  font-family: \"Circular Std\", sans-serif;\n  color: #193148;\n  line-height: 22px;\n  font-weight: 900;\n  font-size: 24.59px; }\n\nheader .wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 20px; }\n\nheader .wrapper > img {\n    width: 85px;\n    height: auto; }\n\nbutton {\n  cursor: pointer;\n  color: #0277BD;\n  display: flex;\n  align-items: center;\n  height: 40px;\n  line-height: 40px;\n  background-color: transparent;\n  transition: all .3s;\n  border: 0;\n  font-size: 16px;\n  text-decoration: underline; }\n\nbutton:hover {\n    color: #01578b; }\n\nbutton:hover svg g rect {\n      fill: #01578b; }\n\nbutton svg {\n    width: 18px;\n    height: 18px;\n    fill: white;\n    margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJuYW5kYW51bmVzL0Rlc2t0b3AvUE9DLUlCTS9wb2MtaWJtLWZyb250ZW5kL3NyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0NBQXVDO0VBQ3ZDLDhDQUE2QztFQUM3Qyx1Q0FBdUM7RUFDdkMsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsY0FBYyxFQUFBOztBQUpsQjtJQU9RLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBSXBCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLDBCQUEwQixFQUFBOztBQVg5QjtJQWNRLGNBQTJCLEVBQUE7O0FBZG5DO01BaUJZLGFBQTBCLEVBQUE7O0FBakJ0QztJQXNCUSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI4LCAyOCwgMjgsIC4wNyk7XG4gICAgYm94LXNoYWRvdzogMCA3cHggNnB4IDAgcmdiYSgzMywgNDMsIDU0LCAuMDQpO1xuICAgIGZvbnQtZmFtaWx5OiBcIkNpcmN1bGFyIFN0ZFwiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjMTkzMTQ4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAyNC41OXB4O1xufVxuXG5oZWFkZXIgLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAwIDIwcHg7XG5cbiAgICA+aW1nIHtcbiAgICAgICAgd2lkdGg6IDg1cHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG59XG5cbmJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjMDI3N0JEO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4oIzAyNzdCRCwgMTAlKTtcblxuICAgICAgICBzdmcgZyByZWN0IHtcbiAgICAgICAgICAgIGZpbGw6IGRhcmtlbigjMDI3N0JELCAxMCUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3ZnIHtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgZmlsbDogd2hpdGU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbn0iXX0= */"

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
    production: true,
    local: 'https://poc-ibm-backend.mybluemix.net/covid'
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CovidApiService = /** @class */ (function () {
    function CovidApiService(http) {
        this.http = http;
        this.url = 'https://poc-ibm-backend.mybluemix.net/covid';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    CovidApiService.prototype.dataCovid = function () {
        return this.http.get(this.url + '/general').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
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

module.exports = __webpack_require__(/*! /Users/fernandanunes/Desktop/POC-IBM/poc-ibm-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map