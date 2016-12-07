import { Component, ElementRef, NgZone, OnInit, ViewChild } from "@angular/core";
import { TextField } from "ui/text-field";

import { Grocery } from "../../shared/grocery/grocery";
import { GroceryListService } from "../../shared/grocery/grocery-list.service";

import * as SocialShare from "nativescript-social-share";

/* In list.html, the <ListView> UI element requires an items property that points to an array of data.
This is the the groceryList array defined in the ListComponent class.
The list view element requires a child <template> element that specifies how to render each item in the items array.

The let-* syntax is Angular 2’s way of creating template variables within loops.
This enables the ability to refer to each item in the array as item within the template.
For this template, each item is rendered in the array with a single <Label> UI element, and because of the [text]="item.name" binding,
those labels contain the text from the name property of each of the items in groceryList TypeScript array.

The outer grid layout’s rows attribute divides the screen into two rows. The first is auto-sized according to its childrens' height,
and the other is sized to take up *, or the remaining height of the screen.

UI elements are placed into these rows using the zero-based row attribute.
The inner grid layout is in the top row because of its row="0" attribute,
and the list view is in the bottom row because of its row="1" attribute.

Grid layouts can also divide the screen into columns, which is what the inner grid layout does.
Here the columns attribute divides the top of the screen into two columns.
The col="0" attribute puts the text field in the first column, and the col="1" attribute puts the “+” image in the last column. */

@Component({
  selector: "list",
  templateUrl: "pages/list/list.html",
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
  providers: [GroceryListService]
})
export class ListComponent implements OnInit {
  groceryList: Array<Grocery> = [];
  grocery = "";
  isLoading = false;
  listLoaded = false;

  @ViewChild("groceryTextField") groceryTextField: ElementRef;

  /* Because a service is being injected into the constructor, it must also be included as a provider within the component decorator, @Component. */
  constructor(
    private groceryListService: GroceryListService,
    private zone: NgZone) {}

  ngOnInit() {
    this.isLoading = true;
    this.groceryListService.load()
      .subscribe(loadedGroceries => {
        loadedGroceries.forEach((groceryObject) => {
          this.groceryList.unshift(groceryObject);
        });
        this.isLoading = false;
        this.listLoaded = true;
      });
  }

  add() {
    if (this.grocery.trim() === "") {
      alert("Enter a grocery item");
      return;
    }

    // Dismiss the keyboard
    let textField = <TextField>this.groceryTextField.nativeElement;
    textField.dismissSoftInput();

    this.groceryListService.add(this.grocery)
      .subscribe(
        groceryObject => {
          this.groceryList.unshift(groceryObject);
          this.grocery = "";
        },
        () => {
          alert({
            message: "An error occurred while adding an item to your list.",
            okButtonText: "OK"
          });
          this.grocery = "";
        }
      )
  }

  delete(grocery: Grocery) {
    this.groceryListService.delete(grocery.id)
      .subscribe(() => {
        // Running the array splice in a zone ensures that change detection gets triggered.
        this.zone.run(() => {
          let index = this.groceryList.indexOf(grocery);
          this.groceryList.splice(index, 1);
        });
      });
  }

  /* This code takes the grocery data from the grocery list array, converts the data into a comma-separated string,
  and passes that string to the social share plugin’s shareText() method.
  The native iOS or Android sharing widget will allow the list to be posted on social networks, or sent via and email or message. */
  share() {
    let list = [];
    for (let i = 0, size = this.groceryList.length; i < size ; i++) {
      list.push(this.groceryList[i].name);
    }
    let listString = list.join(", ").trim();
    SocialShare.shareText(listString);
  }
}
