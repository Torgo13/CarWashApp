"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
/* Import the geolocation plugin */
var nativescript_geolocation_1 = require("nativescript-geolocation");
var SelectWashLocationComponent = (function () {
    function SelectWashLocationComponent(router, page) {
        this.router = router;
        this.page = page;
        this.distanceResult = "0";
        this.distance = 0;
        this.index = 0;
        this.startpointLongitude = 0.0;
        this.startpointLatitude = 0.0;
        nativescript_geolocation_1.enableLocationRequest(true);
    }
    SelectWashLocationComponent.prototype.ngOnInit = function () {
        // this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    /* Check if the geolocation service is enabled. */
    SelectWashLocationComponent.prototype.isLocationEnabled = function () {
        var isEnabledProperty = nativescript_geolocation_1.isEnabled();
        var message = "Location services are not available";
        if (isEnabledProperty) {
            message = "Location services are available";
        }
        alert(message);
    };
    /* Get the current location. */
    SelectWashLocationComponent.prototype.getLocationOnce = function () {
        var _this = this;
        nativescript_geolocation_1.getCurrentLocation({ timeout: 500 })
            .then(function (location) {
            _this.startpointLatitude = location.latitude;
            _this.startpointLongitude = location.longitude;
        }).catch(function (error) {
            alert("Location error received: " + error);
        });
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