import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { Router } from "@angular/router";
import { Page } from "ui/page";

/* Used for the animations */
import { Color } from "color";
import { View } from "ui/core/view";

/* Used to change the hint colours on iOS */
import { setHintColor } from "../../utils/hint-util";
import { TextField } from "ui/text-field";

/* Import the geolocation plugin */
import { Location, getCurrentLocation, isEnabled, distance, enableLocationRequest } from "nativescript-geolocation";
import geolocation = require("nativescript-geolocation");

/* Used for Google Maps support */
import { registerElement } from "nativescript-angular/element-registry";
/* It is necessary to register the MapView plugin in order to use in Angular templates */
registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);

@Component({
  selector: "selectwashlocation",
  templateUrl: "pages/selectwashlocation/selectwashlocation.html",
  styleUrls: ["pages/selectwashlocation/selectwashlocation-common.css", "pages/selectwashlocation/selectwashlocation.css"]
})
export class SelectWashLocationComponent implements OnInit {

    @ViewChild("MapView") mapView: ElementRef;

    public distanceResult: string = "0";
    public distance: number = 0;
    public index: number = 0;

    public startpointLongitude: number = 0.0;
    public startpointLatitude: number = 0.0;

    constructor(private router: Router, private page: Page) {
        enableLocationRequest(true);
    }

    ngOnInit() {
        // this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    }

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
    public getLocationOnce() {
        getCurrentLocation({ timeout: 500 })
            .then(location => {
                this.startpointLatitude = location.latitude;
                this.startpointLongitude = location.longitude;
            }).catch(error => {
                alert("Location error received: " + error);
            });
    }

    confirm() {
        this.router.navigate(["/login"]);
    }

    /* Map events */
    onMapReady = (event) => {
        console.log("Map Ready");

        //let mapView = <View>this.mapView.nativeElement;
        
    };




}