"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var StartComponent = (function () {
    function StartComponent(router, page) {
        this.router = router;
        this.page = page;
    }
    StartComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    StartComponent.prototype.gettingStarted = function () {
        this.router.navigate(["/locationpermission"]);
    };
    return StartComponent;
}());
StartComponent = __decorate([
    core_1.Component({
        selector: "start",
        templateUrl: "pages/start/start.html",
        styleUrls: ["pages/start/start-common.css", "pages/start/start.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], StartComponent);
exports.StartComponent = StartComponent;
//# sourceMappingURL=start.component.js.map