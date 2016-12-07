"use strict";
/* In Angular 2, a component manages a view, or a piece of the user interface that the user sees.
A component can be used to define an individual UI element, or an entire page. */
var core_1 = require("@angular/core");
/* The reason the User class is available to import is because it was explicitly exported. */
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
/* Used for the animations */
var color_1 = require("color");
/* Used to change the hint colours on iOS */
var hint_util_1 = require("../../utils/hint-util");
/* Data Binding

Attribute Binding is displaying an output to the screen.
The syntax is [attributeName] = "propertyName"
A string defined in AppComponent called email can be displayed using: <TextField [text]="email"></TextField>

Event Binding is used to receive inputs.
The syntax is (eventName) = "functionName()"
A tap event handler is added to a UI element using: <Button text="Sign in" (tap)="submit()"></Button>
This executes the function submit() in AppComponent when it is pressed.

Two-way Data Binding can be performed with: [(ngModel)] = "email"
*/
/* A button can switch between two states using: <Button [text] = "isLogginIn ? 'Sign in' : 'Sign up'"></Button> */
/* @Component is a TypeScript decorator, which allows a TypeScript class or method to be annotated with additional information.
It is a way of adding some metadata configuration to the currently empty AppComponent class.
Specifically, the @Component decorator’s template property tells NativeScript how to render this component on the screen.
More information on decorators can be found here: https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Decorators.md

The @Component decorator’s selector property defines how a component can be used within another component’s template.
In this case, it would be accessed with <my-app></my-app> */
var LoginComponent = (function () {
    /* This is Angular 2’s dependency injection implementation.
    Because UserService was registered as a provider in this component’s providers array,
    when Angular sees this syntax it creates an instance of the UserService class,
    and passes that instance into the component’s constructor. */
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        /* Default credentials */
        this.user.email = "user@nativescript.org";
        this.user.password = "password";
    }
    /* ngOnInit is one of several component lifecycle hooks that Angular 2 provides.
    As its name implies, ngOnInit gets invoked when Angular initializes this component. */
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () { return _this.router.navigate(["/list"]); }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    /* The two functions passed to subscribe() are success and failure handlers.
    If the call to register() succeeds, the first alert will fire, and if the call to register() fails, the second alert will fire. */
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    /* All NativeScript UI elements inherit from a base View class.
    Once there is a reference to a UI element, it is possible to call any of the methods that element inherits from View.
    The <StackLayout #container> element’s animate() method is called to change its background color over a duration of 200 ms, or 0.2 seconds.
    Examples of animations can be found at: https://docs.nativescript.org/ui/animation#examples */
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        this.setTextFieldColors();
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"),
            duration: 200
        });
    };
    LoginComponent.prototype.setTextFieldColors = function () {
        var emailTextField = this.email.nativeElement;
        var passwordTextField = this.password.nativeElement;
        var mainTextColor = new color_1.Color(this.isLoggingIn ? "black" : "#C4AFB4");
        emailTextField.color = mainTextColor;
        passwordTextField.color = mainTextColor;
        var hintColor = new color_1.Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
        hint_util_1.setHintColor({ view: emailTextField, color: hintColor });
        hint_util_1.setHintColor({ view: passwordTextField, color: hintColor });
    };
    __decorate([
        core_1.ViewChild("container"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "container", void 0);
    __decorate([
        core_1.ViewChild("email"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "email", void 0);
    __decorate([
        core_1.ViewChild("password"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [user_service_1.UserService],
            templateUrl: "pages/login/login.html",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map