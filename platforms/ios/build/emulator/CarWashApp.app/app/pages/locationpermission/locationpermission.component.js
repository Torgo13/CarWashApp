"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
/* Import the geolocation plugin */
var nativescript_geolocation_1 = require("nativescript-geolocation");
var geolocation = require("nativescript-geolocation");
var LocationPermissionComponent = (function () {
    function LocationPermissionComponent(router, page) {
        this.router = router;
        this.page = page;
    }
    LocationPermissionComponent.prototype.ngOnInit = function () {
        // this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
        if (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest();
        }
    };
    /* Check if the geolocation service is enabled. */
    LocationPermissionComponent.prototype.isLocationEnabled = function () {
        var isEnabledProperty = nativescript_geolocation_1.isEnabled();
        var message = "Location services are not available";
        if (isEnabledProperty) {
            message = "Location services are available";
        }
        alert(message);
    };
    LocationPermissionComponent.prototype.continue = function () {
        this.router.navigate(["/selectwashlocation"]);
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