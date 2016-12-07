"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var StartComponent = (function () {
    function StartComponent(router, page) {
        this.router = router;
        this.page = page;
    }
    StartComponent.prototype.submit = function () {
        this.router.navigate(["/list"]);
    };
    StartComponent = __decorate([
        core_1.Component({
            selector: "start",
            templateUrl: "pages/start/start.html"
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page])
    ], StartComponent);
    return StartComponent;
}());
exports.StartComponent = StartComponent;
//# sourceMappingURL=start.component.js.map