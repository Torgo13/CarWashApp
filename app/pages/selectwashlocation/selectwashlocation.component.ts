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

@Component({
  selector: "selectwashlocation",
  templateUrl: "pages/selectwashlocation/selectwashlocation.html",
  styleUrls: ["pages/selectwashlocation/selectwashlocation-common.css", "pages/selectwashlocation/selectwashlocation.css"]
})
export class SelectWashLocationComponent implements OnInit {

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
    public isLocationEnabled() {
        let isEnabledProperty = isEnabled();
        let message = "Location services are not available";
        if (isEnabledProperty) {
            message = "Location services are available";
        }
        alert(message);
    }

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
}