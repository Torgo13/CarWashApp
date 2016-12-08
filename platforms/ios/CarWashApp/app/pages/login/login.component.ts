/* In Angular 2, a component manages a view, or a piece of the user interface that the user sees.
A component can be used to define an individual UI element, or an entire page. */
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

/* The reason the User class is available to import is because it was explicitly exported. */
import { User } from "../../shared/user/user";

import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import { Page } from "ui/page";

/* Used for the animations */
import { Color } from "color";
import { View } from "ui/core/view";

/* Used to change the hint colours on iOS */
import { setHintColor } from "../../utils/hint-util";
import { TextField } from "ui/text-field";

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
@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
/* OnInit is a TypeScript class interface, so it must be imported from "@angular/core" and implemented in the class.
This requires all of the methods that interface requires to be implemented, including ngOnInit(). */
export class LoginComponent implements OnInit {
  user: User;
  isLoggingIn = true;
  /* In login.html, the <StackLayout> element has a local template variable called #container.
  This local variable is used to get a reference to the <StackLayout> element in TypeScript code in order to create the animation.
  This code uses Angular’s @ViewChild decorator to create a new property that points at the <StackLayout> element.
  That property is used in the LoginComponent’s toggleDisplay() function. */
  @ViewChild("container") container: ElementRef;
  @ViewChild("email") email: ElementRef;
  @ViewChild("password") password: ElementRef;

  /* This is Angular 2’s dependency injection implementation.
  Because UserService was registered as a provider in this component’s providers array,
  when Angular sees this syntax it creates an instance of the UserService class,
  and passes that instance into the component’s constructor. */
  constructor(private router: Router, private userService: UserService, private page: Page) {
    this.user = new User();
    /* Default credentials */
    this.user.email = "user@nativescript.org";
    this.user.password = "password";
  }

  /* ngOnInit is one of several component lifecycle hooks that Angular 2 provides.
  As its name implies, ngOnInit gets invoked when Angular initializes this component. */
  ngOnInit() {
    // this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
  }

  submit() {
    if (!this.user.isValidEmail()) {
      alert("Enter a valid email address.");
      return;
    }
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }
  login() {
    this.userService.login(this.user)
      .subscribe(
        () => this.router.navigate(["/list"]),
        (error) => alert("Unfortunately we could not find your account.")
      );
  }
  /* The two functions passed to subscribe() are success and failure handlers.
  If the call to register() succeeds, the first alert will fire, and if the call to register() fails, the second alert will fire. */
  signUp() {
    this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created.");
          this.toggleDisplay();
        },
        () => alert("Unfortunately we were unable to create your account.")
      );
  }

  /* All NativeScript UI elements inherit from a base View class.
  Once there is a reference to a UI element, it is possible to call any of the methods that element inherits from View.
  The <StackLayout #container> element’s animate() method is called to change its background color over a duration of 200 ms, or 0.2 seconds.
  Examples of animations can be found at: https://docs.nativescript.org/ui/animation#examples */
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
    this.setTextFieldColors();
    let container = <View>this.container.nativeElement;
    container.animate({
      backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
      duration: 200
    });
  }

  setTextFieldColors() {
    let emailTextField = <TextField>this.email.nativeElement;
    let passwordTextField = <TextField>this.password.nativeElement;

    let mainTextColor = new Color(this.isLoggingIn ? "black" : "#C4AFB4");
    emailTextField.color = mainTextColor;
    passwordTextField.color = mainTextColor;

    let hintColor = new Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
    setHintColor({ view: emailTextField, color: hintColor });
    setHintColor({ view: passwordTextField, color: hintColor });
  }
}
