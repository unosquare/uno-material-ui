"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var uno_js_1 = require("uno-js");
var SnackbarService = /** @class */ (function (_super) {
    __extends(SnackbarService, _super);
    function SnackbarService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SnackbarService.prototype.getSnackbar = function () {
        return this.snackbar;
    };
    SnackbarService.prototype.showSnackbar = function (message, type) {
        var _this = this;
        if (type === void 0) { type = 'success'; }
        return new Promise(function () {
            _this.snackbar = {
                isMobile: false,
                message: {
                    messageText: message,
                    messageType: type,
                },
                seconds: 5000,
            };
            _this.inform();
        });
    };
    return SnackbarService;
}(uno_js_1.SimpleObservable));
exports.snackbarService = new SnackbarService();
