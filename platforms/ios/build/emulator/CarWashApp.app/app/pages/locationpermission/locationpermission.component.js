"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var geolocation = require("nativescript-geolocation");
var LocationPermissionComponent = (function () {
    function LocationPermissionComponent(router, page) {
        this.router = router;
        this.page = page;
    }
    LocationPermissionComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    LocationPermissionComponent.prototype.continue = function () {
        if (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest();
            this.router.navigate(["/selectwashlocation"]);
        }
    };
    LocationPermissionComponent.prototype.enableLocationTap = function () {
    };
    LocationPermissionComponent = __decorate([
        core_1.Component({
            selector: "location-permission",
            templateUrl: "pages/locationpermission/locationpermission.html",
            styleUrls: ["pages/locationpermission/locationpermission-common.css", "pages/locationpermission/locationpermission.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page])
    ], LocationPermissionComponent);
    return LocationPermissionComponent;
}());
exports.LocationPermissionComponent = LocationPermissionComponent;
//# sourceMappingURL=locationpermission.component.js.map