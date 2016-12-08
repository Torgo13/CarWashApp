import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { Router } from "@angular/router";
import { Page } from "ui/page";

/* Used for the animations */
import { Color } from "color";
import { View } from "ui/core/view";

/* Used to change the hint colours on iOS */
import { setHintColor } from "../../utils/hint-util";
import { TextField } from "ui/text-field";

@Component({
  selector: "selectwashlocation",
  templateUrl: "pages/selectwashlocation/selectwashlocation.html",
  styleUrls: ["pages/selectwashlocation/selectwashlocation-common.css", "pages/selectwashlocation/selectwashlocation.css"]
})
export class SelectWashLocationComponent implements OnInit {
    constructor(private router: Router, private page: Page) {
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    }

    confirm() {
        this.router.navigate(["/login"]);
    }
}