"use strict";
var core_1 = require("@angular/core");
/* In Angular 2, a component manages a view, or a piece of the user interface that the user sees.
A component can be used to define an individual UI element, or an entire page.

@Component is a TypeScript decorator, which allows a TypeScript class or method to be annotated with additional information.
It is a way of adding some metadata configuration to the currently empty AppComponent class.
Specifically, the @Component decorator’s template property tells NativeScript how to render this component on the screen.
More information on decorators can be found here: https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Decorators.md

The @Component decorator’s selector property defines how a component can be used within another component’s template.
In this case, it would be accessed with <my-app></my-app> */
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <StackLayout>\n      <TextField hint=\"Email Address\" keyboardType=\"email\"\n        autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n      <TextField hint=\"Password\" secure=\"true\"></TextField>\n\n      <Button text=\"Sign in\"></Button>\n      <Button text=\"Sign up for Groceries\"></Button>\n    </StackLayout>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map