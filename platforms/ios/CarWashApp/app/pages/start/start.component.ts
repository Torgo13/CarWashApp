import { Component, ElementRef, ViewChild } from "@angular/core";

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
  templateUrl: "pages/start/start.html"
})
export class StartComponent {
    constructor(private router: Router, private page: Page) {
    }

    gettingStarted() {
        this.router.navigate(["/locationpermission"]);
    }
}