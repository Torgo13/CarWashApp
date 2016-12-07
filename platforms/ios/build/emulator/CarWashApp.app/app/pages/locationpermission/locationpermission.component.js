"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var LocationPermissionComponent = (function () {
    function LocationPermissionComponent(router, page) {
        this.router = router;
        this.page = page;
    }
    LocationPermissionComponent.prototype.submit = function () {
        this.router.navigate(["/list"]);
    };
    LocationPermissionComponent = __decorate([
        core_1.Component({
            selector: "location-permission",
            templateUrl: "pages/locationpermission/locationpermission.html"
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page])
    ], LocationPermissionComponent);
    return LocationPermissionComponent;
}());
exports.LocationPermissionComponent = LocationPermissionComponent;
//# sourceMappingURL=locationpermission.component.js.map