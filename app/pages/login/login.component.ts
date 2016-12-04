/* In Angular 2, a component manages a view, or a piece of the user interface that the user sees.
A component can be used to define an individual UI element, or an entire page. */
import {Component} from "@angular/core";

/* The reason the User class is available to import is because it was explicitly exported. */
import { User } from "../../shared/user/user";

import { UserService } from "../../shared/user/user.service";

import { Router } from "@angular/router";

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
export class LoginComponent {
  user: User;
  isLoggingIn = true;

  /* This is Angular 2’s dependency injection implementation.
  Because UserService was registered as a provider in this component’s providers array,
  when Angular sees this syntax it creates an instance of the UserService class,
  and passes that instance into the component’s constructor. */
  constructor(private router: Router, private userService: UserService) {
    this.user = new User();
    /* Default credentials */
    this.user.email = "user@nativescript.org";
    this.user.password = "password";
  }

  submit() {
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

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
