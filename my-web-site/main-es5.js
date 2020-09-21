function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_border_data_border_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/border-data/border-data.component */
    "./src/app/components/border-data/border-data.component.ts");
    /* harmony import */


    var _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/feed/feed.component */
    "./src/app/components/feed/feed.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [[1, "container", "col-lg-3"], [1, "border"], [1, "feed"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-border-data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-feed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_border_data_border_data_component__WEBPACK_IMPORTED_MODULE_1__["BorderDataComponent"], _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_2__["FeedComponent"]],
      styles: [".text-color-grey[_ngcontent-%COMP%] {\n  color: rgba(204, 204, 204, 0.5);\n}\n\n.text-color-white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.line-height0[_ngcontent-%COMP%] {\n  line-height: 0%;\n}\n\n.line-height17[_ngcontent-%COMP%] {\n  line-height: 17%;\n}\n\n.font-weigth500[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.font-weigth600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.font-weigth300[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n\n.font-size18[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.font-size20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.font-size25[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXEx1Y2FzXFxEb2N1bWVudHNcXEdpdGh1YlxcQW5ndWxhclxcbXktYW5ndWxhci13ZWJzaXRlXFxteS13ZWItc2l0ZS9zcmNcXGN1c3RvbS10aGVtZS5zY3NzIiwic3JjL2N1c3RvbS10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2N1c3RvbS10aGVtZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY29sb3ItZ3JleSB7XHJcbiAgICBjb2xvcjogcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjUpO1xyXG59XHJcblxyXG4udGV4dC1jb2xvci13aGl0ZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0MCB7XHJcbiAgICBsaW5lLWhlaWdodDogMCU7XHJcbn1cclxuXHJcbi5saW5lLWhlaWdodDE3IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNyU7XHJcbn1cclxuXHJcbi5mb250LXdlaWd0aDUwMCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZm9udC13ZWlndGg2MDAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmZvbnQtd2VpZ3RoMzAwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5mb250LXNpemUxOCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5mb250LXNpemUyMCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5mb250LXNpemUyNSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn0iLCIudGV4dC1jb2xvci1ncmV5IHtcbiAgY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC41KTtcbn1cblxuLnRleHQtY29sb3Itd2hpdGUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmxpbmUtaGVpZ2h0MCB7XG4gIGxpbmUtaGVpZ2h0OiAwJTtcbn1cblxuLmxpbmUtaGVpZ2h0MTcge1xuICBsaW5lLWhlaWdodDogMTclO1xufVxuXG4uZm9udC13ZWlndGg1MDAge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZm9udC13ZWlndGg2MDAge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZm9udC13ZWlndGgzMDAge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZm9udC1zaXplMTgge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5mb250LXNpemUyMCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmZvbnQtc2l6ZTI1IHtcbiAgZm9udC1zaXplOiAyNXB4O1xufSJdfQ== */", "html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  font-family: 'Montserrat', sans-serif;\r\n  background-color: #191A2A;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    display: absolute;\r\n    padding: 0;\r\n    margin: 0;\r\n    margin:0px;\r\n    padding: 0px;\r\n    display: flex;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.border[_ngcontent-%COMP%]  {\r\n  overflow: hidden;\r\n  position: fixed;\r\n  height: 100vh;\r\n  width: 30vw;\r\n  border: 0px solid #dee2e6!important ;\r\n  z-index: 1;\r\n}\r\n\r\n.feed[_ngcontent-%COMP%] {\r\n  padding-left: 3vw;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: relative;\r\n  margin-left: 20vw;\r\n  z-index: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBcUM7RUFDckMseUJBQXlCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYixXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5IHtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTFBMkE7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uYm9yZGVyICB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMzB2dztcclxuICBib3JkZXI6IDBweCBzb2xpZCAjZGVlMmU2IWltcG9ydGFudCA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmZlZWQge1xyXG4gIHBhZGRpbmctbGVmdDogM3Z3O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogMjB2dztcclxuICB6LWluZGV4OiAwO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['../custom-theme.scss', './app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule, initFunction */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initFunction", function () {
      return initFunction;
    });
    /* harmony import */


    var _services_github_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./services/github.service */
    "./src/app/services/github.service.ts");
    /* harmony import */


    var _components_post_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/post/post.component */
    "./src/app/components/post/post.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_border_data_border_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/border-data/border-data.component */
    "./src/app/components/border-data/border-data.component.ts");
    /* harmony import */


    var _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/feed/feed.component */
    "./src/app/components/feed/feed.component.ts");
    /* harmony import */


    var _components_social_media_social_media_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/social-media/social-media.component */
    "./src/app/components/social-media/social-media.component.ts");
    /* harmony import */


    var _components_apresentacao_caroussel_apresentacao_caroussel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/apresentacao-caroussel/apresentacao-caroussel.component */
    "./src/app/components/apresentacao-caroussel/apresentacao-caroussel.component.ts");
    /* harmony import */


    var _components_hobbie_hobbie_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/hobbie/hobbie.component */
    "./src/app/components/hobbie/hobbie.component.ts");
    /* harmony import */


    var _components_apresentacao_cards_apresentacao_cards_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/apresentacao-cards/apresentacao-cards.component */
    "./src/app/components/apresentacao-cards/apresentacao-cards.component.ts");
    /* harmony import */


    var _components_collapse_button_collapse_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/collapse-button/collapse-button.component */
    "./src/app/components/collapse-button/collapse-button.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_github_service__WEBPACK_IMPORTED_MODULE_0__["GithubService"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"],
        useFactory: initFunction,
        deps: [_services_github_service__WEBPACK_IMPORTED_MODULE_0__["GithubService"]],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_border_data_border_data_component__WEBPACK_IMPORTED_MODULE_7__["BorderDataComponent"], _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_8__["FeedComponent"], _components_social_media_social_media_component__WEBPACK_IMPORTED_MODULE_9__["SocialMediaComponent"], _components_post_post_component__WEBPACK_IMPORTED_MODULE_1__["PostComponent"], _components_hobbie_hobbie_component__WEBPACK_IMPORTED_MODULE_11__["HobbieComponent"], _components_apresentacao_caroussel_apresentacao_caroussel_component__WEBPACK_IMPORTED_MODULE_10__["ApresentacaoCarousselComponent"], _components_apresentacao_cards_apresentacao_cards_component__WEBPACK_IMPORTED_MODULE_12__["ApresentacaoCardsComponent"], _components_collapse_button_collapse_button_component__WEBPACK_IMPORTED_MODULE_13__["CollapseButtonComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_border_data_border_data_component__WEBPACK_IMPORTED_MODULE_7__["BorderDataComponent"], _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_8__["FeedComponent"], _components_social_media_social_media_component__WEBPACK_IMPORTED_MODULE_9__["SocialMediaComponent"], _components_post_post_component__WEBPACK_IMPORTED_MODULE_1__["PostComponent"], _components_hobbie_hobbie_component__WEBPACK_IMPORTED_MODULE_11__["HobbieComponent"], _components_apresentacao_caroussel_apresentacao_caroussel_component__WEBPACK_IMPORTED_MODULE_10__["ApresentacaoCarousselComponent"], _components_apresentacao_cards_apresentacao_cards_component__WEBPACK_IMPORTED_MODULE_12__["ApresentacaoCardsComponent"], _components_collapse_button_collapse_button_component__WEBPACK_IMPORTED_MODULE_13__["CollapseButtonComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
          providers: [_services_github_service__WEBPACK_IMPORTED_MODULE_0__["GithubService"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"],
            useFactory: initFunction,
            deps: [_services_github_service__WEBPACK_IMPORTED_MODULE_0__["GithubService"]],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();

    function initFunction(config) {
      return function () {
        return config.load();
      };
    }
    /***/

  },

  /***/
  "./src/app/components/apresentacao-cards/apresentacao-cards.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/apresentacao-cards/apresentacao-cards.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ApresentacaoCardsComponent */

  /***/
  function srcAppComponentsApresentacaoCardsApresentacaoCardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApresentacaoCardsComponent", function () {
      return ApresentacaoCardsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ApresentacaoCardsComponent = /*#__PURE__*/function () {
      function ApresentacaoCardsComponent() {
        _classCallCheck(this, ApresentacaoCardsComponent);
      }

      _createClass(ApresentacaoCardsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ApresentacaoCardsComponent;
    }();

    ApresentacaoCardsComponent.ɵfac = function ApresentacaoCardsComponent_Factory(t) {
      return new (t || ApresentacaoCardsComponent)();
    };

    ApresentacaoCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ApresentacaoCardsComponent,
      selectors: [["app-apresentacao-cards"]],
      decls: 66,
      vars: 0,
      consts: [["id", "multiCollapseExample1", 1, "container", "collapse", "multi-collapse"], [1, "line"], [1, "card", 2, "width", "18rem"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/master/my-web-site/src/assets/imgs-hobbie/0.JPG", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body"], [1, "card-text"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/master/my-web-site/src/assets/imgs-hobbie/1.JPG", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/master/my-web-site/src/assets/imgs-hobbie/2.JPG", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/master/my-web-site/src/assets/imgs-hobbie/3.JPG", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/master/my-web-site/src/assets/imgs-hobbie/4.JPG", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/master/my-web-site/src/assets/imgs-hobbie/5.JPG", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/master/my-web-site/src/assets/imgs-hobbie/6.JPG", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/master/my-web-site/src/assets/imgs-hobbie/7.JPG", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/master/my-web-site/src/assets/imgs-hobbie/8.JPG", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/master/my-web-site/src/assets/imgs-hobbie/9.JPG", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/master/my-web-site/src/assets/imgs-hobbie/10.JPG", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/master/my-web-site/src/assets/imgs-hobbie/11.JPG", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/master/my-web-site/src/assets/imgs-hobbie/12.JPG", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/master/my-web-site/src/assets/imgs-hobbie/13.JPG", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/master/my-web-site/src/assets/imgs-hobbie/14.JPG", "alt", "Card image cap", 1, "card-img-top"]],
      template: function ApresentacaoCardsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".line[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-bottom: 2vh;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    padding: 1vh;\r\n    margin: 1vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHJlc2VudGFjYW8tY2FyZHMvYXByZXNlbnRhY2FvLWNhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXByZXNlbnRhY2FvLWNhcmRzL2FwcmVzZW50YWNhby1jYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgcGFkZGluZzogMXZoO1xyXG4gICAgbWFyZ2luOiAxdmg7XHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApresentacaoCardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-apresentacao-cards',
          templateUrl: './apresentacao-cards.component.html',
          styleUrls: ['./apresentacao-cards.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/apresentacao-caroussel/apresentacao-caroussel.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/apresentacao-caroussel/apresentacao-caroussel.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: ApresentacaoCarousselComponent */

  /***/
  function srcAppComponentsApresentacaoCarousselApresentacaoCarousselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApresentacaoCarousselComponent", function () {
      return ApresentacaoCarousselComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _post_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../post/post.component */
    "./src/app/components/post/post.component.ts");

    var ApresentacaoCarousselComponent = /*#__PURE__*/function () {
      function ApresentacaoCarousselComponent() {
        _classCallCheck(this, ApresentacaoCarousselComponent);
      }

      _createClass(ApresentacaoCarousselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ApresentacaoCarousselComponent;
    }();

    ApresentacaoCarousselComponent.ɵfac = function ApresentacaoCarousselComponent_Factory(t) {
      return new (t || ApresentacaoCarousselComponent)();
    };

    ApresentacaoCarousselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ApresentacaoCarousselComponent,
      selectors: [["app-apresentacao-caroussel"]],
      decls: 25,
      vars: 6,
      consts: [["id", "demo", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#demo", "data-slide-to", "0", 1, "active"], ["data-target", "#demo", "data-slide-to", "1"], ["data-target", "#demo", "data-slide-to", "2"], ["data-target", "#demo", "data-slide-to", "3"], ["data-target", "#demo", "data-slide-to", "4"], ["data-target", "#demo", "data-slide-to", "5"], [1, "carousel-inner"], [1, "carousel-item", "active"], [3, "project"], [1, "carousel-item"], ["href", "#demo", "data-slide", "prev", 1, "carousel-control-prev"], [1, "carousel-control-prev-icon"], ["href", "#demo", "data-slide", "next", 1, "carousel-control-next"], [1, "carousel-control-next-icon"]],
      template: function ApresentacaoCarousselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-post", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-post", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-post", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-post", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-post", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-post", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", "AirCnC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", "Post_Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", "twitter_data_covid-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", "remade_random_websites");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", "Download-Youtube_videos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", "ConversorEscrita");
        }
      },
      directives: [_post_post_component__WEBPACK_IMPORTED_MODULE_1__["PostComponent"]],
      styles: ["#demo[_ngcontent-%COMP%] {\r\n    padding-right: 2vw;\r\n    padding-bottom: 5vh;\r\n    padding-left: 2vw;\r\n    padding-top: 5vh;\r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\r\n    max-width: 64vw;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHJlc2VudGFjYW8tY2Fyb3Vzc2VsL2FwcmVzZW50YWNhby1jYXJvdXNzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FwcmVzZW50YWNhby1jYXJvdXNzZWwvYXByZXNlbnRhY2FvLWNhcm91c3NlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RlbW8ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMnZ3O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDV2aDtcclxuICAgIHBhZGRpbmctbGVmdDogMnZ3O1xyXG4gICAgcGFkZGluZy10b3A6IDV2aDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQgLmNhcmQtYm9keSB7XHJcbiAgICBtYXgtd2lkdGg6IDY0dnc7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApresentacaoCarousselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-apresentacao-caroussel',
          templateUrl: './apresentacao-caroussel.component.html',
          styleUrls: ['./apresentacao-caroussel.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/border-data/border-data.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/border-data/border-data.component.ts ***!
    \*****************************************************************/

  /*! exports provided: BorderDataComponent */

  /***/
  function srcAppComponentsBorderDataBorderDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BorderDataComponent", function () {
      return BorderDataComponent;
    });
    /* harmony import */


    var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../environments/environment.dev */
    "./src/environments/environment.dev.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/github.service */
    "./src/app/services/github.service.ts");

    var BorderDataComponent = /*#__PURE__*/function () {
      function BorderDataComponent(service) {
        _classCallCheck(this, BorderDataComponent);

        this.service = service;
        this.descriptionMySelf = 'Talk about my self';
      }

      _createClass(BorderDataComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.ngOnInit();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.service.getUser().subscribe(function (user) {
            _this.user = user;
            _this.descriptionMySelf = user.bio;
          });
          this.service.getRepository().subscribe(function (repo) {
            _this.user.repository = repo;
          });
        }
      }, {
        key: "getFacebookIcon",
        value: function getFacebookIcon() {
          return _environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconFacebook;
        }
      }, {
        key: "getInstagramIcon",
        value: function getInstagramIcon() {
          return _environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconInstagram;
        }
      }, {
        key: "getTwitterIcon",
        value: function getTwitterIcon() {
          return _environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconTwitter;
        }
      }, {
        key: "getLinkedinIcon",
        value: function getLinkedinIcon() {
          return _environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconLinkedin;
        }
      }, {
        key: "getGithubIcon",
        value: function getGithubIcon() {
          return _environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconGithub;
        }
      }]);

      return BorderDataComponent;
    }();

    BorderDataComponent.ɵfac = function BorderDataComponent_Factory(t) {
      return new (t || BorderDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"]));
    };

    BorderDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BorderDataComponent,
      selectors: [["app-border-data"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 49,
      vars: 9,
      consts: [["role", "navigation", 1, "navigation"], ["id", "menuToggle"], ["type", "checkbox"], ["id", "menu"], [1, "icon"], ["alt", "", "srcset", "", 3, "src"], [1, "name-username"], [1, "name"], [1, "font-weigth600", "line-height17", "font-size22", "text-color-white"], [1, "username"], [1, "font-weigth600", "font-size15", "line-height0", "text-color-grey"], [1, "description"], [1, "font-weigth500", "font-size15", "line-height2vh", "text-color-white"], [1, "group-social-media"], [1, "div-group"], ["alt", "", 3, "src"], ["href", "https://github.com/LuccasTraumer", "target", "_blank", 1, "text-color-white", "font-size20", "font-weigth500"], ["id", "linkedin", 1, "div-group"], ["href", "https://www.linkedin.com/in/luccastraumer/", "target", "_blank", 1, "text-color-white", "font-size20", "font-weigth500"], ["id", "inst", 1, "div-group"], ["alt", "iconInstagram", 3, "src"], ["href", "https://www.instagram.com/luccastraumer/", "target", "_blank", 1, "text-color-white", "font-size20", "font-weigth500"], ["href", "https://www.facebook.com/LuccasTraumer/", "target", "_blank", 1, "text-color-white", "font-size20", "font-weigth500"], ["href", "https://twitter.com/LuccasTraumer", "target", "_blank", 1, "text-color-white", "font-size20", "font-weigth500"], ["href", "https://erikterwan.com/", "target", "_blank", 1, "text-color-white", "font-size20", "font-weigth500"]],
      template: function BorderDataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Linkedin");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Instagram");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Show me more");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.user.avatar_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", ctx.user.login, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.descriptionMySelf);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.getGithubIcon(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.getLinkedinIcon(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.getInstagramIcon(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.getFacebookIcon(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.getTwitterIcon(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      },
      styles: [".text-color-grey[_ngcontent-%COMP%] {\n  color: rgba(204, 204, 204, 0.5);\n}\n\n.text-color-white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.line-height0[_ngcontent-%COMP%] {\n  line-height: 0%;\n}\n\n.line-heigth2vh[_ngcontent-%COMP%] {\n  line-height: 2vh;\n}\n\n.line-height17[_ngcontent-%COMP%] {\n  line-height: 17%;\n}\n\n.font-weigth500[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.font-weigth600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.font-weigth300[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n\n.font-size15[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.font-size18[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.font-size20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.font-size22[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n.font-size25[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGVzL0M6XFxVc2Vyc1xcTHVjYXNcXERvY3VtZW50c1xcR2l0aHViXFxBbmd1bGFyXFxteS1hbmd1bGFyLXdlYnNpdGVcXG15LXdlYi1zaXRlL3NyY1xcYXBwXFxzdHlsZXNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9zdHlsZXMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zdHlsZXMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jb2xvci1ncmV5IHtcclxuICAgIGNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNSk7XHJcbn1cclxuXHJcbi50ZXh0LWNvbG9yLXdoaXRlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubGluZS1oZWlnaHQwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAwJTtcclxufVxyXG5cclxuLmxpbmUtaGVpZ3RoMnZoIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAydmg7XHJcbn1cclxuXHJcbi5saW5lLWhlaWdodDE3IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNyU7XHJcbn1cclxuXHJcbi5mb250LXdlaWd0aDUwMCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZm9udC13ZWlndGg2MDAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmZvbnQtd2VpZ3RoMzAwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5mb250LXNpemUxNSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5mb250LXNpemUxOCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5mb250LXNpemUyMCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5mb250LXNpemUyMiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5mb250LXNpemUyNSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn0iLCIudGV4dC1jb2xvci1ncmV5IHtcbiAgY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC41KTtcbn1cblxuLnRleHQtY29sb3Itd2hpdGUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmxpbmUtaGVpZ2h0MCB7XG4gIGxpbmUtaGVpZ2h0OiAwJTtcbn1cblxuLmxpbmUtaGVpZ3RoMnZoIHtcbiAgbGluZS1oZWlnaHQ6IDJ2aDtcbn1cblxuLmxpbmUtaGVpZ2h0MTcge1xuICBsaW5lLWhlaWdodDogMTclO1xufVxuXG4uZm9udC13ZWlndGg1MDAge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZm9udC13ZWlndGg2MDAge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZm9udC13ZWlndGgzMDAge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZm9udC1zaXplMTUge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5mb250LXNpemUxOCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmZvbnQtc2l6ZTIwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZm9udC1zaXplMjIge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5mb250LXNpemUyNSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn0iXX0= */", "#menuToggle[_ngcontent-%COMP%]\r\n {\r\n   width: 50%;\r\n   display: block;\r\n   position: absolute;\r\n   top: 50px;\r\n   left: 50px;\r\n\r\n   z-index: 1;\r\n\r\n   -webkit-user-select: none;\r\n   -moz-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n\r\n }\r\n\r\n #menuToggle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]\r\n {\r\n   text-decoration: none;\r\n\r\n   transition: color 0.3s ease;\r\n }\r\n\r\n #menuToggle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover\r\n {\r\n   color: tomato;\r\n }\r\n\r\n #menuToggle[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover\r\n {\r\n   color: grey;\r\n   opacity: 200%;\r\n }\r\n\r\n #menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\r\n {\r\n   display: block;\r\n   width: 40px;\r\n   height: 32px;\r\n   position: absolute;\r\n   top: -7px;\r\n   left: -5px;\r\n\r\n   cursor: pointer;\r\n\r\n   opacity: 0; \r\n   z-index: 2; \r\n\r\n   -webkit-touch-callout: none;\r\n }\r\n\r\n \r\n\r\n #menuToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]\r\n {\r\n   display: block;\r\n   width: 33px;\r\n   height: 4px;\r\n   margin-bottom: 5px;\r\n   position: relative;\r\n\r\n   background: #cdcdcd;\r\n   border-radius: 3px;\r\n\r\n   z-index: 1;\r\n\r\n   transform-origin: 4px 0px;\r\n\r\n   transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n               background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n               opacity 0.55s ease;\r\n }\r\n\r\n #menuToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child\r\n {\r\n   transform-origin: 0% 0%;\r\n }\r\n\r\n #menuToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-last-child(2)\r\n {\r\n   transform-origin: 0% 100%;\r\n }\r\n\r\n \r\n\r\n #menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]\r\n {\r\n   opacity: 1;\r\n   transform: rotate(45deg) translate(-2px, -1px);\r\n   background: #232323;\r\n }\r\n\r\n \r\n\r\n #menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]:nth-last-child(3)\r\n {\r\n   opacity: 0;\r\n   transform: rotate(0deg) scale(0.2, 0.2);\r\n }\r\n\r\n \r\n\r\n #menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]:nth-last-child(2)\r\n {\r\n   transform: rotate(-45deg) translate(0, -1px);\r\n }\r\n\r\n \r\n\r\n #menu[_ngcontent-%COMP%]\r\n {\r\n\r\n   position: absolute;\r\n   margin: -100px 0 0 -70px;\r\n   padding: 50px 30px 50vh 5vw;\r\n   padding-top: 125px;\r\n   background: #131421;\r\n   list-style-type: none;\r\n   -webkit-font-smoothing: antialiased;\r\n   \r\n\r\n   transform-origin: 0% 0%;\r\n   transform: translate(-100%, 0);\r\n\r\n   transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n }\r\n\r\n #menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n   align-self: center;\r\n }\r\n\r\n #menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]\r\n {\r\n    width: 125%;\r\n    height: 100%;\r\n    padding: 10px 2px;\r\n }\r\n\r\n \r\n\r\n #menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ ul[_ngcontent-%COMP%]\r\n {\r\n   transform: none;\r\n }\r\n\r\n .icon[_ngcontent-%COMP%] {\r\n  padding-left: 1.5vw;\r\n}\r\n\r\n .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  height: 60%;\r\n  border-radius: 50%;\r\n}\r\n\r\n div[_ngcontent-%COMP%]   .name-username[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n .name-username[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n  width: 120%;\r\n  padding-right: 1.7vw;\r\n}\r\n\r\n .name-username[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\r\n  padding-left: 1vw;\r\n  font-size: 15px;\r\n}\r\n\r\n .description[_ngcontent-%COMP%] {\r\n  max-width: 90%;\r\n}\r\n\r\n .ml-2vw[_ngcontent-%COMP%] {\r\n  margin-left: 2vw;\r\n}\r\n\r\n .mr-2vw[_ngcontent-%COMP%] {\r\n  margin-right: 2vh;\r\n}\r\n\r\n .div-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding-top: 1vh;\r\n  height: 61px;\r\n}\r\n\r\n #inst[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 25px;\r\n  width: 25px;\r\n\r\n}\r\n\r\n #linkedin[_ngcontent-%COMP%] {\r\n  padding-right: 4vw;\r\n}\r\n\r\n #linkedin[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 32px;\r\n  width: 32px;\r\n}\r\n\r\n .div-group[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 25px;\r\n  width: 25px;\r\n  margin-right: 0.5vw;\r\n  margin-top: 0.3vh;\r\n}\r\n\r\n .group-social-media[_ngcontent-%COMP%]   .div-group[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 25px;\r\n  width: 25px;\r\n  margin-right: 0.5vw;\r\n  margin-top: 0.3vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib3JkZXItZGF0YS9ib3JkZXItZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Q0FDQzs7R0FFRSxVQUFVO0dBQ1YsY0FBYztHQUNkLGtCQUFrQjtHQUNsQixTQUFTO0dBQ1QsVUFBVTs7R0FFVixVQUFVOztHQUVWLHlCQUF5QjtHQUN6QixzQkFBaUI7SUFBakIscUJBQWlCO1FBQWpCLGlCQUFpQjs7Q0FFbkI7O0NBRUE7O0dBRUUscUJBQXFCOztHQUVyQiwyQkFBMkI7Q0FDN0I7O0NBRUE7O0dBRUUsYUFBYTtDQUNmOztDQUVBOztHQUVFLFdBQVc7R0FDWCxhQUFhO0NBQ2Y7O0NBR0E7O0dBRUUsY0FBYztHQUNkLFdBQVc7R0FDWCxZQUFZO0dBQ1osa0JBQWtCO0dBQ2xCLFNBQVM7R0FDVCxVQUFVOztHQUVWLGVBQWU7O0dBRWYsVUFBVSxFQUFFLGNBQWM7R0FDMUIsVUFBVSxFQUFFLG9DQUFvQzs7R0FFaEQsMkJBQTJCO0NBQzdCOztDQUVBOztHQUVFOztDQUNGOztHQUVFLGNBQWM7R0FDZCxXQUFXO0dBQ1gsV0FBVztHQUNYLGtCQUFrQjtHQUNsQixrQkFBa0I7O0dBRWxCLG1CQUFtQjtHQUNuQixrQkFBa0I7O0dBRWxCLFVBQVU7O0dBRVYseUJBQXlCOztHQUV6Qjs7aUNBRThCO0NBQ2hDOztDQUVBOztHQUVFLHVCQUF1QjtDQUN6Qjs7Q0FFQTs7R0FFRSx5QkFBeUI7Q0FDM0I7O0NBRUE7OztHQUdFOztDQUNGOztHQUVFLFVBQVU7R0FDViw4Q0FBOEM7R0FDOUMsbUJBQW1CO0NBQ3JCOztDQUVBOztHQUVFOztDQUNGOztHQUVFLFVBQVU7R0FDVix1Q0FBdUM7Q0FDekM7O0NBRUE7O0dBRUU7O0NBQ0Y7O0dBRUUsNENBQTRDO0NBQzlDOztDQUVBOzs7R0FHRTs7Q0FDRjs7O0dBR0Usa0JBQWtCO0dBQ2xCLHdCQUF3QjtHQUN4QiwyQkFBMkI7R0FDM0Isa0JBQWtCO0dBQ2xCLG1CQUFtQjtHQUNuQixxQkFBcUI7R0FDckIsbUNBQW1DO0dBQ25DLHlDQUF5Qzs7R0FFekMsdUJBQXVCO0dBQ3ZCLDhCQUE4Qjs7R0FFOUIsMERBQTBEO0NBQzVEOztDQUVBO0dBQ0Usa0JBQWtCO0NBQ3BCOztDQUVBOztJQUVHLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCOztDQUVBOztHQUVFOztDQUNGOztHQUVFLGVBQWU7Q0FDakI7O0NBRUQ7RUFDRSxtQkFBbUI7QUFDckI7O0NBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7Q0FFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztDQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7Q0FFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztDQUVBO0VBQ0UsY0FBYztBQUNoQjs7Q0FFQTtFQUNFLGdCQUFnQjtBQUNsQjs7Q0FFQTtFQUNFLGlCQUFpQjtBQUNuQjs7Q0FFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztDQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7O0FBRWI7O0NBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0NBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztDQUVDO0VBQ0MsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztDQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib3JkZXItZGF0YS9ib3JkZXItZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAjbWVudVRvZ2dsZVxyXG4ge1xyXG4gICB3aWR0aDogNTAlO1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICB0b3A6IDUwcHg7XHJcbiAgIGxlZnQ6IDUwcHg7XHJcblxyXG4gICB6LWluZGV4OiAxO1xyXG5cclxuICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gfVxyXG5cclxuICNtZW51VG9nZ2xlIGFcclxuIHtcclxuICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xyXG4gfVxyXG5cclxuICNtZW51VG9nZ2xlIGE6aG92ZXJcclxuIHtcclxuICAgY29sb3I6IHRvbWF0bztcclxuIH1cclxuXHJcbiAjbWVudVRvZ2dsZSBsYWJlbDpob3ZlclxyXG4ge1xyXG4gICBjb2xvcjogZ3JleTtcclxuICAgb3BhY2l0eTogMjAwJTtcclxuIH1cclxuXHJcblxyXG4gI21lbnVUb2dnbGUgaW5wdXRcclxuIHtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIHdpZHRoOiA0MHB4O1xyXG4gICBoZWlnaHQ6IDMycHg7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgdG9wOiAtN3B4O1xyXG4gICBsZWZ0OiAtNXB4O1xyXG5cclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgb3BhY2l0eTogMDsgLyogaGlkZSB0aGlzICovXHJcbiAgIHotaW5kZXg6IDI7IC8qIGFuZCBwbGFjZSBpdCBvdmVyIHRoZSBoYW1idXJnZXIgKi9cclxuXHJcbiAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuIH1cclxuXHJcbiAvKlxyXG4gICogSnVzdCBhIHF1aWNrIGhhbWJ1cmdlclxyXG4gICovXHJcbiAjbWVudVRvZ2dsZSBzcGFuXHJcbiB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB3aWR0aDogMzNweDtcclxuICAgaGVpZ2h0OiA0cHg7XHJcbiAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgYmFja2dyb3VuZDogI2NkY2RjZDtcclxuICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICAgei1pbmRleDogMTtcclxuXHJcbiAgIHRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XHJcblxyXG4gICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC43NywwLjIsMC4wNSwxLjApLFxyXG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsMC4yLDAuMDUsMS4wKSxcclxuICAgICAgICAgICAgICAgb3BhY2l0eSAwLjU1cyBlYXNlO1xyXG4gfVxyXG5cclxuICNtZW51VG9nZ2xlIHNwYW46Zmlyc3QtY2hpbGRcclxuIHtcclxuICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XHJcbiB9XHJcblxyXG4gI21lbnVUb2dnbGUgc3BhbjpudGgtbGFzdC1jaGlsZCgyKVxyXG4ge1xyXG4gICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xyXG4gfVxyXG5cclxuIC8qXHJcbiAgKiBUcmFuc2Zvcm0gYWxsIHRoZSBzbGljZXMgb2YgaGFtYnVyZ2VyXHJcbiAgKiBpbnRvIGEgY3Jvc3NtYXJrLlxyXG4gICovXHJcbiAjbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gc3BhblxyXG4ge1xyXG4gICBvcGFjaXR5OiAxO1xyXG4gICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC0ycHgsIC0xcHgpO1xyXG4gICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4gfVxyXG5cclxuIC8qXHJcbiAgKiBCdXQgbGV0J3MgaGlkZSB0aGUgbWlkZGxlIG9uZS5cclxuICAqL1xyXG4gI21lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHNwYW46bnRoLWxhc3QtY2hpbGQoMylcclxuIHtcclxuICAgb3BhY2l0eTogMDtcclxuICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMC4yLCAwLjIpO1xyXG4gfVxyXG5cclxuIC8qXHJcbiAgKiBPaHllYWggYW5kIHRoZSBsYXN0IG9uZSBzaG91bGQgZ28gdGhlIG90aGVyIGRpcmVjdGlvblxyXG4gICovXHJcbiAjbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gc3BhbjpudGgtbGFzdC1jaGlsZCgyKVxyXG4ge1xyXG4gICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgwLCAtMXB4KTtcclxuIH1cclxuXHJcbiAvKlxyXG4gICogTWFrZSB0aGlzIGFic29sdXRlIHBvc2l0aW9uZWRcclxuICAqIGF0IHRoZSB0b3AgbGVmdCBvZiB0aGUgc2NyZWVuXHJcbiAgKi9cclxuICNtZW51XHJcbiB7XHJcblxyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIG1hcmdpbjogLTEwMHB4IDAgMCAtNzBweDtcclxuICAgcGFkZGluZzogNTBweCAzMHB4IDUwdmggNXZ3O1xyXG4gICBwYWRkaW5nLXRvcDogMTI1cHg7XHJcbiAgIGJhY2tncm91bmQ6ICMxMzE0MjE7XHJcbiAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgIC8qIHRvIHN0b3AgZmxpY2tlcmluZyBvZiB0ZXh0IGluIHNhZmFyaSAqL1xyXG5cclxuICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XHJcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwKTtcclxuXHJcbiAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc3LDAuMiwwLjA1LDEuMCk7XHJcbiB9XHJcblxyXG4gI21lbnUgZGl2IHtcclxuICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gfVxyXG5cclxuICNtZW51IGxpXHJcbiB7XHJcbiAgICB3aWR0aDogMTI1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMnB4O1xyXG4gfVxyXG5cclxuIC8qXHJcbiAgKiBBbmQgbGV0J3Mgc2xpZGUgaXQgaW4gZnJvbSB0aGUgbGVmdFxyXG4gICovXHJcbiAjbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gdWxcclxuIHtcclxuICAgdHJhbnNmb3JtOiBub25lO1xyXG4gfVxyXG5cclxuLmljb24ge1xyXG4gIHBhZGRpbmctbGVmdDogMS41dnc7XHJcbn1cclxuXHJcbi5pY29uIGltZyB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IDYwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbmRpdiAubmFtZS11c2VybmFtZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm5hbWUtdXNlcm5hbWUgLm5hbWUge1xyXG4gIHdpZHRoOiAxMjAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEuN3Z3O1xyXG59IFxyXG5cclxuLm5hbWUtdXNlcm5hbWUgLnVzZXJuYW1lIHtcclxuICBwYWRkaW5nLWxlZnQ6IDF2dztcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5tbC0ydncge1xyXG4gIG1hcmdpbi1sZWZ0OiAydnc7XHJcbn1cclxuXHJcbi5tci0ydncge1xyXG4gIG1hcmdpbi1yaWdodDogMnZoO1xyXG59XHJcblxyXG4uZGl2LWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctdG9wOiAxdmg7XHJcbiAgaGVpZ2h0OiA2MXB4O1xyXG59XHJcblxyXG4jaW5zdCBpbWcge1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuXHJcbn1cclxuXHJcbiNsaW5rZWRpbiB7XHJcbiAgcGFkZGluZy1yaWdodDogNHZ3O1xyXG59XHJcblxyXG4jbGlua2VkaW4gaW1nIHtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgd2lkdGg6IDMycHg7XHJcbn1cclxuXHJcbiAuZGl2LWdyb3VwIGltZyB7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMC41dnc7XHJcbiAgbWFyZ2luLXRvcDogMC4zdmg7XHJcbn1cclxuXHJcbi5ncm91cC1zb2NpYWwtbWVkaWEgLmRpdi1ncm91cCBpbWcge1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXZ3O1xyXG4gIG1hcmdpbi10b3A6IDAuM3ZoO1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BorderDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-border-data',
          templateUrl: './border-data.component.html',
          styleUrls: ['../../styles/styles.scss', './border-data.component.css']
        }]
      }], function () {
        return [{
          type: _services_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/collapse-button/collapse-button.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/collapse-button/collapse-button.component.ts ***!
    \*************************************************************************/

  /*! exports provided: CollapseButtonComponent */

  /***/
  function srcAppComponentsCollapseButtonCollapseButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollapseButtonComponent", function () {
      return CollapseButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _apresentacao_cards_apresentacao_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../apresentacao-cards/apresentacao-cards.component */
    "./src/app/components/apresentacao-cards/apresentacao-cards.component.ts");

    var CollapseButtonComponent = /*#__PURE__*/function () {
      function CollapseButtonComponent() {
        _classCallCheck(this, CollapseButtonComponent);
      }

      _createClass(CollapseButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CollapseButtonComponent;
    }();

    CollapseButtonComponent.ɵfac = function CollapseButtonComponent_Factory(t) {
      return new (t || CollapseButtonComponent)();
    };

    CollapseButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CollapseButtonComponent,
      selectors: [["app-collapse-button"]],
      decls: 9,
      vars: 0,
      consts: [["data-toggle", "collapse", "href", "#multiCollapseExample1", "role", "button", "aria-expanded", "false", "aria-controls", "multiCollapseExample1", 1, "btn", "btn-light"], [1, "row"], [1, "col"], ["id", "multiCollapseExample1", 1, "collapse"], [1, "card", "card-body"], [1, "cards"]],
      template: function CollapseButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Hobbie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-apresentacao-cards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_apresentacao_cards_apresentacao_cards_component__WEBPACK_IMPORTED_MODULE_1__["ApresentacaoCardsComponent"]],
      styles: [".row[_ngcontent-%COMP%] {\r\n    width: 75vw;\r\n    margin-left: 3vw;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    margin-left: 5vw;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n    max-width: 60vw;\r\n    position: absolute;\r\n}\r\n\r\na[_ngcontent-%COMP%]:active {\r\n    transition: cubic-bezier();\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin-left: 1vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2xsYXBzZS1idXR0b24vY29sbGFwc2UtYnV0dG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29sbGFwc2UtYnV0dG9uL2NvbGxhcHNlLWJ1dHRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcbiAgICB3aWR0aDogNzV2dztcclxuICAgIG1hcmdpbi1sZWZ0OiAzdnc7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDV2dztcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBtYXgtd2lkdGg6IDYwdnc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbmE6YWN0aXZlIHtcclxuICAgIHRyYW5zaXRpb246IGN1YmljLWJlemllcigpO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollapseButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-collapse-button',
          templateUrl: './collapse-button.component.html',
          styleUrls: ['./collapse-button.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/feed/feed.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/feed/feed.component.ts ***!
    \***************************************************/

  /*! exports provided: FeedComponent */

  /***/
  function srcAppComponentsFeedFeedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedComponent", function () {
      return FeedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _apresentacao_caroussel_apresentacao_caroussel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../apresentacao-caroussel/apresentacao-caroussel.component */
    "./src/app/components/apresentacao-caroussel/apresentacao-caroussel.component.ts");
    /* harmony import */


    var _hobbie_hobbie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../hobbie/hobbie.component */
    "./src/app/components/hobbie/hobbie.component.ts");

    var FeedComponent = /*#__PURE__*/function () {
      function FeedComponent() {
        _classCallCheck(this, FeedComponent);
      }

      _createClass(FeedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FeedComponent;
    }();

    FeedComponent.ɵfac = function FeedComponent_Factory(t) {
      return new (t || FeedComponent)();
    };

    FeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeedComponent,
      selectors: [["app-feed"]],
      decls: 2,
      vars: 0,
      template: function FeedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-apresentacao-caroussel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-hobbie");
        }
      },
      directives: [_apresentacao_caroussel_apresentacao_caroussel_component__WEBPACK_IMPORTED_MODULE_1__["ApresentacaoCarousselComponent"], _hobbie_hobbie_component__WEBPACK_IMPORTED_MODULE_2__["HobbieComponent"]],
      styles: ["app-hobbie[_ngcontent-%COMP%] {\n  margin-left: 2vw;\n  max-width: 64vw;\n}\n\napp-apresentacao-caroussel[_ngcontent-%COMP%] {\n  padding-left: 2vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWVkL0M6XFxVc2Vyc1xcTHVjYXNcXERvY3VtZW50c1xcR2l0aHViXFxBbmd1bGFyXFxteS1hbmd1bGFyLXdlYnNpdGVcXG15LXdlYi1zaXRlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmZWVkXFxmZWVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZlZWQvZmVlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVlZC9mZWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWhvYmJpZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMnZ3O1xyXG4gICAgbWF4LXdpZHRoOiA2NHZ3O1xyXG59XHJcblxyXG5hcHAtYXByZXNlbnRhY2FvLWNhcm91c3NlbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJ2aDtcclxufSIsImFwcC1ob2JiaWUge1xuICBtYXJnaW4tbGVmdDogMnZ3O1xuICBtYXgtd2lkdGg6IDY0dnc7XG59XG5cbmFwcC1hcHJlc2VudGFjYW8tY2Fyb3Vzc2VsIHtcbiAgcGFkZGluZy1sZWZ0OiAydmg7XG59Il19 */", ".text-color-grey[_ngcontent-%COMP%] {\n  color: rgba(204, 204, 204, 0.5);\n}\n\n.text-color-white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.line-height0[_ngcontent-%COMP%] {\n  line-height: 0%;\n}\n\n.line-heigth2vh[_ngcontent-%COMP%] {\n  line-height: 2vh;\n}\n\n.line-height17[_ngcontent-%COMP%] {\n  line-height: 17%;\n}\n\n.font-weigth500[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.font-weigth600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.font-weigth300[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n\n.font-size15[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.font-size18[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.font-size20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.font-size22[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n.font-size25[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGVzL0M6XFxVc2Vyc1xcTHVjYXNcXERvY3VtZW50c1xcR2l0aHViXFxBbmd1bGFyXFxteS1hbmd1bGFyLXdlYnNpdGVcXG15LXdlYi1zaXRlL3NyY1xcYXBwXFxzdHlsZXNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9zdHlsZXMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zdHlsZXMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jb2xvci1ncmV5IHtcclxuICAgIGNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNSk7XHJcbn1cclxuXHJcbi50ZXh0LWNvbG9yLXdoaXRlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubGluZS1oZWlnaHQwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAwJTtcclxufVxyXG5cclxuLmxpbmUtaGVpZ3RoMnZoIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAydmg7XHJcbn1cclxuXHJcbi5saW5lLWhlaWdodDE3IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNyU7XHJcbn1cclxuXHJcbi5mb250LXdlaWd0aDUwMCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZm9udC13ZWlndGg2MDAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmZvbnQtd2VpZ3RoMzAwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5mb250LXNpemUxNSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5mb250LXNpemUxOCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5mb250LXNpemUyMCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5mb250LXNpemUyMiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5mb250LXNpemUyNSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn0iLCIudGV4dC1jb2xvci1ncmV5IHtcbiAgY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC41KTtcbn1cblxuLnRleHQtY29sb3Itd2hpdGUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmxpbmUtaGVpZ2h0MCB7XG4gIGxpbmUtaGVpZ2h0OiAwJTtcbn1cblxuLmxpbmUtaGVpZ3RoMnZoIHtcbiAgbGluZS1oZWlnaHQ6IDJ2aDtcbn1cblxuLmxpbmUtaGVpZ2h0MTcge1xuICBsaW5lLWhlaWdodDogMTclO1xufVxuXG4uZm9udC13ZWlndGg1MDAge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZm9udC13ZWlndGg2MDAge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZm9udC13ZWlndGgzMDAge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZm9udC1zaXplMTUge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5mb250LXNpemUxOCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmZvbnQtc2l6ZTIwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZm9udC1zaXplMjIge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5mb250LXNpemUyNSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-feed',
          templateUrl: './feed.component.html',
          styleUrls: ['./feed.component.scss', '../../styles/styles.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/hobbie/hobbie.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/hobbie/hobbie.component.ts ***!
    \*******************************************************/

  /*! exports provided: HobbieComponent */

  /***/
  function srcAppComponentsHobbieHobbieComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HobbieComponent", function () {
      return HobbieComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _collapse_button_collapse_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../collapse-button/collapse-button.component */
    "./src/app/components/collapse-button/collapse-button.component.ts");

    var HobbieComponent = /*#__PURE__*/function () {
      function HobbieComponent() {
        _classCallCheck(this, HobbieComponent);
      }

      _createClass(HobbieComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HobbieComponent;
    }();

    HobbieComponent.ɵfac = function HobbieComponent_Factory(t) {
      return new (t || HobbieComponent)();
    };

    HobbieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HobbieComponent,
      selectors: [["app-hobbie"]],
      decls: 1,
      vars: 0,
      template: function HobbieComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-collapse-button");
        }
      },
      directives: [_collapse_button_collapse_button_component__WEBPACK_IMPORTED_MODULE_1__["CollapseButtonComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9iYmllL2hvYmJpZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HobbieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hobbie',
          templateUrl: './hobbie.component.html',
          styleUrls: ['./hobbie.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/post/post.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/post/post.component.ts ***!
    \***************************************************/

  /*! exports provided: PostComponent */

  /***/
  function srcAppComponentsPostPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostComponent", function () {
      return PostComponent;
    });
    /* harmony import */


    var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../environments/environment.dev */
    "./src/environments/environment.dev.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/github.service */
    "./src/app/services/github.service.ts");

    var PostComponent = /*#__PURE__*/function () {
      function PostComponent(service) {
        _classCallCheck(this, PostComponent);

        this.service = service;
        this.description = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.';
        this.nameProject = 'Nome Projeto';
        this.techs = 'Angular 8, Spring Boot';
        this.project = undefined;
      }

      _createClass(PostComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.ngOnInit();
        }
      }, {
        key: "setImage",
        value: function setImage() {
          switch (this.project) {
            case 'AirCnC':
              return _environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].photo_repo_aircnc;

            case 'twitter_data_covid-19':
              return _environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].photo_repo_covid;

            case 'Post_Blog':
              return _environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].photo_repo_postblog;

            case 'remade_random_websites':
              return _environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].photo_repo_random;

            case 'Download-Youtube_videos':
              return _environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].photo_501_NotImpl;

            case 'ConversorEscrita':
              return _environments_environment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].photo_501_NotImpl;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.service.getRepository().subscribe(function (repo) {
            if (_this2.project !== undefined) {
              repo.forEach(function (element) {
                if (element.name === _this2.project) {
                  _this2.description = element.description;
                  _this2.nameProject = element.name;
                  _this2.techs = element.language;
                }
              });

              _this2.setImage();
            }
          });
        }
      }, {
        key: "getTechs",
        value: function getTechs() {
          return this.techs;
        }
      }, {
        key: "getNameProject",
        value: function getNameProject() {
          return this.nameProject;
        }
      }, {
        key: "getDescription",
        value: function getDescription() {
          return this.description;
        }
      }]);

      return PostComponent;
    }();

    PostComponent.ɵfac = function PostComponent_Factory(t) {
      return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"]));
    };

    PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PostComponent,
      selectors: [["app-post"]],
      inputs: {
        project: "project"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 17,
      vars: 4,
      consts: [[1, "post", "container"], [1, "description"], [1, "font-weigth600", "text-color-white", "font-size20"], [1, "text-color-white"], [1, "data-project"], [1, "imgs-post"], ["alt", "", "srcset", "", 3, "src"], [1, "font-weigth600", "text-color-white", "font-size18"], [1, "font-weigth300", "text-color-white", "font-size15", "second"]],
      template: function PostComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Project Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Language:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getDescription());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.setImage(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getNameProject());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getTechs());
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\r\n    width: 75vw;\r\n    padding-bottom: 2vh;\r\n    padding-right: 5vw;\r\n    padding-left: 5vw;\r\n  }\r\n  \r\n  .post[_ngcontent-%COMP%] {\r\n    margin: 2vh;\r\n    padding-top: 10vh;\r\n  }\r\n  \r\n  div[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n    width: 80vw;\r\n  }\r\n  \r\n  .description[_ngcontent-%COMP%] {\r\n    padding-right: 2vw;\r\n    width: 65%;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .data-project[_ngcontent-%COMP%] {\r\n    padding-top: 1.5vw;\r\n    float: right;\r\n    display: inline-grid;\r\n  \r\n  }\r\n  \r\n  .data-project[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    padding-left: 1vw;\r\n  }\r\n  \r\n  .imgs-post[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n  \r\n  .imgs-post[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n    border: #fff solid 0.5px;\r\n    float: right;\r\n    width: 13vw;\r\n    \r\n  }\r\n  \r\n  .data-project[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%] {\r\n    line-height: 0.1;\r\n    padding-left: 2vw;\r\n  }\r\n  \r\n  .imgs[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    align-items: right;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0JBQW9COztFQUV0Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFdBQVc7O0VBRWI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA3NXZ3O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJ2aDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDV2dztcclxuICAgIHBhZGRpbmctbGVmdDogNXZ3O1xyXG4gIH1cclxuICBcclxuICAucG9zdCB7XHJcbiAgICBtYXJnaW46IDJ2aDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHZoO1xyXG4gIH1cclxuICBcclxuICBkaXYgLnBvc3QgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogODB2dztcclxuICB9XHJcbiAgXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDJ2dztcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXRhLXByb2plY3Qge1xyXG4gICAgcGFkZGluZy10b3A6IDEuNXZ3O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgXHJcbiAgfVxyXG5cclxuICAuZGF0YS1wcm9qZWN0IGxhYmVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMXZ3O1xyXG4gIH1cclxuICBcclxuICAuaW1ncy1wb3N0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLmltZ3MtcG9zdCBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAjZmZmIHNvbGlkIDAuNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDEzdnc7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLmRhdGEtcHJvamVjdCAuc2Vjb25kIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjE7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJ2dztcclxuICB9XHJcbiAgXHJcbiAgLmltZ3Mge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYWxpZ24taXRlbXM6IHJpZ2h0O1xyXG4gIH1cclxuICAiXX0= */", ".text-color-grey[_ngcontent-%COMP%] {\n  color: rgba(204, 204, 204, 0.5);\n}\n\n.text-color-white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.line-height0[_ngcontent-%COMP%] {\n  line-height: 0%;\n}\n\n.line-heigth2vh[_ngcontent-%COMP%] {\n  line-height: 2vh;\n}\n\n.line-height17[_ngcontent-%COMP%] {\n  line-height: 17%;\n}\n\n.font-weigth500[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.font-weigth600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.font-weigth300[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n\n.font-size15[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.font-size18[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.font-size20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.font-size22[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n.font-size25[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGVzL0M6XFxVc2Vyc1xcTHVjYXNcXERvY3VtZW50c1xcR2l0aHViXFxBbmd1bGFyXFxteS1hbmd1bGFyLXdlYnNpdGVcXG15LXdlYi1zaXRlL3NyY1xcYXBwXFxzdHlsZXNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9zdHlsZXMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zdHlsZXMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jb2xvci1ncmV5IHtcclxuICAgIGNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNSk7XHJcbn1cclxuXHJcbi50ZXh0LWNvbG9yLXdoaXRlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubGluZS1oZWlnaHQwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAwJTtcclxufVxyXG5cclxuLmxpbmUtaGVpZ3RoMnZoIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAydmg7XHJcbn1cclxuXHJcbi5saW5lLWhlaWdodDE3IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNyU7XHJcbn1cclxuXHJcbi5mb250LXdlaWd0aDUwMCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZm9udC13ZWlndGg2MDAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmZvbnQtd2VpZ3RoMzAwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5mb250LXNpemUxNSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5mb250LXNpemUxOCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5mb250LXNpemUyMCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5mb250LXNpemUyMiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5mb250LXNpemUyNSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn0iLCIudGV4dC1jb2xvci1ncmV5IHtcbiAgY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC41KTtcbn1cblxuLnRleHQtY29sb3Itd2hpdGUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmxpbmUtaGVpZ2h0MCB7XG4gIGxpbmUtaGVpZ2h0OiAwJTtcbn1cblxuLmxpbmUtaGVpZ3RoMnZoIHtcbiAgbGluZS1oZWlnaHQ6IDJ2aDtcbn1cblxuLmxpbmUtaGVpZ2h0MTcge1xuICBsaW5lLWhlaWdodDogMTclO1xufVxuXG4uZm9udC13ZWlndGg1MDAge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZm9udC13ZWlndGg2MDAge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZm9udC13ZWlndGgzMDAge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZm9udC1zaXplMTUge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5mb250LXNpemUxOCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmZvbnQtc2l6ZTIwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZm9udC1zaXplMjIge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5mb250LXNpemUyNSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-post',
          templateUrl: './post.component.html',
          styleUrls: ['./post.component.css', '../../styles/styles.scss']
        }]
      }], function () {
        return [{
          type: _services_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"]
        }];
      }, {
        project: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/social-media/social-media.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/social-media/social-media.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SocialMediaComponent */

  /***/
  function srcAppComponentsSocialMediaSocialMediaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialMediaComponent", function () {
      return SocialMediaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SocialMediaComponent = /*#__PURE__*/function () {
      function SocialMediaComponent() {
        _classCallCheck(this, SocialMediaComponent);
      }

      _createClass(SocialMediaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SocialMediaComponent;
    }();

    SocialMediaComponent.ɵfac = function SocialMediaComponent_Factory(t) {
      return new (t || SocialMediaComponent)();
    };

    SocialMediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SocialMediaComponent,
      selectors: [["app-social-media"]],
      decls: 6,
      vars: 0,
      consts: [[1, "container"], [1, "icon"], ["src", "../../../assets/github-icon.png", "alt", ""], [1, "text"], [1, "text-title"]],
      template: function SocialMediaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\r\n    width: 372px;\r\n    height: 61px;\r\n    display: inline-flex;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb2NpYWwtbWVkaWEvc29jaWFsLW1lZGlhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zb2NpYWwtbWVkaWEvc29jaWFsLW1lZGlhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAzNzJweDtcclxuICAgIGhlaWdodDogNjFweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4uaWNvbiBpbWcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialMediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-social-media',
          templateUrl: './social-media.component.html',
          styleUrls: ['./social-media.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/github.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/github.service.ts ***!
    \********************************************/

  /*! exports provided: GithubService */

  /***/
  function srcAppServicesGithubServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GithubService", function () {
      return GithubService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../environments/environment.dev */
    "./src/environments/environment.dev.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var GithubService = /*#__PURE__*/function () {
      function GithubService(http) {
        _classCallCheck(this, GithubService);

        this.http = http;
      }

      _createClass(GithubService, [{
        key: "OnInit",
        value: function OnInit() {}
      }, {
        key: "load",
        value: function load() {}
      }, {
        key: "getUser",
        value: function getUser() {
          return this.http.get(_environments_environment_dev__WEBPACK_IMPORTED_MODULE_1__["environment"].url_github_user);
        }
      }, {
        key: "fillUser",
        value: function fillUser() {
          return this.http.get(_environments_environment_dev__WEBPACK_IMPORTED_MODULE_1__["environment"].url_github_user);
        }
      }, {
        key: "getRepository",
        value: function getRepository() {
          return this.http.get(_environments_environment_dev__WEBPACK_IMPORTED_MODULE_1__["environment"].url_github_reps);
        }
      }]);

      return GithubService;
    }();

    GithubService.ɵfac = function GithubService_Factory(t) {
      return new (t || GithubService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    GithubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GithubService,
      factory: GithubService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GithubService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.dev.ts":
  /*!*********************************************!*\
    !*** ./src/environments/environment.dev.ts ***!
    \*********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentDevTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: true,
      url_github_user: 'https://api.github.com/users/luccastraumer',
      url_github_reps: 'https://api.github.com/users/luccastraumer/repos?page=1&per_page=100',
      photo_repo_covid: 'https://raw.githubusercontent.com/LuccasTraumer/twitter_data_covid-19/master/Screenshot_2020-09-05%20Atualiza%C3%A7%C3%A3o%20sobre%20COVID-19%20(%20againstCovi19)%20Twitter.png',
      photo_repo_aircnc: 'https://raw.githubusercontent.com/LuccasTraumer/AirCnC/master/Images_Web/Web_Screen_Login.jpg',
      photo_repo_postblog: 'https://raw.githubusercontent.com/LuccasTraumer/Post_Blog/master/imgs_ex/page_home.png',
      photo_repo_random: 'https://raw.githubusercontent.com/LuccasTraumer/remade_random_websites/master/novo/Screenshot_2020-09-06%20One%20Page%20Love.png?token=AD5NGI2E6FV37GWDSKLNI2C7L3JOK',
      photo_501_NotImpl: 'https://www.elegantthemes.com/blog/wp-content/uploads/2020/06/000-501-http-error.png',
      iconFacebook: 'https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/dev/my-web-site/src/assets/facebook-icon.png',
      iconInstagram: 'https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/dev/my-web-site/src/assets/instagram-icon.png',
      iconGithub: 'https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/dev/my-web-site/src/assets/github-icon.png',
      iconLinkedin: 'https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/dev/my-web-site/src/assets/linkedin-icon.png',
      iconTwitter: 'https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/dev/my-web-site/src/assets/twitter-icon.png'
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      url_github_user: 'https://api.github.com/users/luccastraumer',
      url_github_reps: 'https://api.github.com/users/luccastraumer/repos?page=1&per_page=100',
      photo_repo_covid: 'https://raw.githubusercontent.com/LuccasTraumer/twitter_data_covid-19/master/Screenshot_2020-09-05%20Atualiza%C3%A7%C3%A3o%20sobre%20COVID-19%20(%20againstCovi19)%20Twitter.png',
      photo_repo_aircnc: 'https://raw.githubusercontent.com/LuccasTraumer/AirCnC/master/Images_Web/Web_Screen_Login.jpg',
      photo_repo_postblog: 'https://raw.githubusercontent.com/LuccasTraumer/Post_Blog/master/imgs_ex/page_home.png',
      photo_repo_random: 'https://raw.githubusercontent.com/LuccasTraumer/remade_random_websites/master/novo/Screenshot_2020-09-06%20One%20Page%20Love.png?token=AD5NGI2E6FV37GWDSKLNI2C7L3JOK',
      photo_501_NotImpl: 'https://www.elegantthemes.com/blog/wp-content/uploads/2020/06/000-501-http-error.png'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Lucas\Documents\Github\Angular\my-angular-website\my-web-site\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map