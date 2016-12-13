"use strict";
var core_1 = require("@angular/core");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var SocialShare = require("nativescript-social-share");
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
var ListComponent = (function () {
    /* Because a service is being injected into the constructor, it must also be included as a provider within the component decorator, @Component. */
    function ListComponent(groceryListService, zone) {
        this.groceryListService = groceryListService;
        this.zone = zone;
        this.groceryList = [];
        this.grocery = "";
        this.isLoading = false;
        this.listLoaded = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.groceryListService.load()
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ListComponent.prototype.add = function () {
        var _this = this;
        if (this.grocery.trim() === "") {
            alert("Enter a grocery item");
            return;
        }
        // Dismiss the keyboard
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        this.groceryListService.add(this.grocery)
            .subscribe(function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
            _this.grocery = "";
        }, function () {
            alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
            _this.grocery = "";
        });
    };
    ListComponent.prototype.delete = function (grocery) {
        var _this = this;
        this.groceryListService.delete(grocery.id)
            .subscribe(function () {
            // Running the array splice in a zone ensures that change detection gets triggered.
            _this.zone.run(function () {
                var index = _this.groceryList.indexOf(grocery);
                _this.groceryList.splice(index, 1);
            });
        });
    };
    /* This code takes the grocery data from the grocery list array, converts the data into a comma-separated string,
    and passes that string to the social share plugin’s shareText() method.
    The native iOS or Android sharing widget will allow the list to be posted on social networks, or sent via and email or message. */
    ListComponent.prototype.share = function () {
        var list = [];
        for (var i = 0, size = this.groceryList.length; i < size; i++) {
            list.push(this.groceryList[i].name);
        }
        var listString = list.join(", ").trim();
        SocialShare.shareText(listString);
    };
    return ListComponent;
}());
__decorate([
    core_1.ViewChild("groceryTextField"),
    __metadata("design:type", core_1.ElementRef)
], ListComponent.prototype, "groceryTextField", void 0);
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list/list.html",
        styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
        providers: [grocery_list_service_1.GroceryListService]
    }),
    __metadata("design:paramtypes", [grocery_list_service_1.GroceryListService,
        core_1.NgZone])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map