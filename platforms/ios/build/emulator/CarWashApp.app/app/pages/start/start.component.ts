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
  selector: "start",
  templateUrl: "pages/start/start.html",
  styleUrls: ["pages/start/start-common.css", "pages/start/start.css"]
})
export class StartComponent implements OnInit {
    constructor(private router: Router, private page: Page) {
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    }

    gettingStarted() {
        this.router.navigate(["/locationpermission"]);
    }
}