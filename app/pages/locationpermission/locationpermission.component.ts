import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { Router } from "@angular/router";
import { Page } from "ui/page";

/* Used for the animations */
import { Color } from "color";
import { View } from "ui/core/view";

/* Used to change the hint colours on iOS */
import { setHintColor } from "../../utils/hint-util";
import { TextField } from "ui/text-field";

import geolocation = require("nativescript-geolocation");

@Component({
  selector: "location-permission",
  templateUrl: "pages/locationpermission/locationpermission.html",
  styleUrls: ["pages/locationpermission/locationpermission-common.css", "pages/locationpermission/locationpermission.css"]
})
export class LocationPermissionComponent implements OnInit {
    constructor(private router: Router, private page: Page) {
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";

        if (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest();
        }
    }

    continue() {
        this.router.navigate(["/selectwashlocation"]);
    }
}