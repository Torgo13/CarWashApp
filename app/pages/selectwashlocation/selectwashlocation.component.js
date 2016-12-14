"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
/* Import the geolocation plugin */
var nativescript_geolocation_1 = require("nativescript-geolocation");
/* Used for Google Maps support */
var element_registry_1 = require("nativescript-angular/element-registry");
/* It is necessary to register the MapView plugin in order to use in Angular templates */
element_registry_1.registerElement("MapView", function () { return require("nativescript-google-maps-sdk").MapView; });
var SelectWashLocationComponent = (function () {
    function SelectWashLocationComponent(router, page) {
        this.router = router;
        this.page = page;
        this.distanceResult = "0";
        this.distance = 0;
        this.index = 0;
        this.startpointLongitude = 0.0;
        this.startpointLatitude = 0.0;
        /* Map events */
        this.onMapReady = function (event) {
            console.log("Map Ready");
            //let mapView = <View>this.mapView.nativeElement;
        };
        nativescript_geolocation_1.enableLocationRequest(true);
    }
    SelectWashLocationComponent.prototype.ngOnInit = function () {
        // this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    /* Check if the geolocation service is enabled. */
    /* public isLocationEnabled() {
        let isEnabledProperty = isEnabled();
        let message = "Location services are not available";
        if (isEnabledProperty) {
            message = "Location services are available";
        }
        alert(message);
    } */
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
    return SelectWashLocationComponent;
}());
__decorate([
    core_1.ViewChild("MapView"),
    __metadata("design:type", core_1.ElementRef)
], SelectWashLocationComponent.prototype, "mapView", void 0);
SelectWashLocationComponent = __decorate([
    core_1.Component({
        selector: "selectwashlocation",
        templateUrl: "pages/selectwashlocation/selectwashlocation.html",
        styleUrls: ["pages/selectwashlocation/selectwashlocation-common.css", "pages/selectwashlocation/selectwashlocation.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], SelectWashLocationComponent);
exports.SelectWashLocationComponent = SelectWashLocationComponent;
//# sourceMappingURL=selectwashlocation.component.js.map