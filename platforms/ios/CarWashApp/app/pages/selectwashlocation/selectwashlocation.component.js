"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var SelectWashLocationComponent = (function () {
    function SelectWashLocationComponent(router, page) {
        this.router = router;
        this.page = page;
    }
    SelectWashLocationComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    SelectWashLocationComponent.prototype.confirm = function () {
        this.router.navigate(["/login"]);
    };
    SelectWashLocationComponent = __decorate([
        core_1.Component({
            selector: "selectwashlocation",
            templateUrl: "pages/selectwashlocation/selectwashlocation.html",
            styleUrls: ["pages/selectwashlocation/selectwashlocation-common.css", "pages/selectwashlocation/selectwashlocation.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page])
    ], SelectWashLocationComponent);
    return SelectWashLocationComponent;
}());
exports.SelectWashLocationComponent = SelectWashLocationComponent;
//# sourceMappingURL=selectwashlocation.component.js.map