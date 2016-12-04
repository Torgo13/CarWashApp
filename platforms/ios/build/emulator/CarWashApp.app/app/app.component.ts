import {Component} from "@angular/core";

/* In Angular 2, a component manages a view, or a piece of the user interface that the user sees.
A component can be used to define an individual UI element, or an entire page.

@Component is a TypeScript decorator, which allows a TypeScript class or method to be annotated with additional information.
It is a way of adding some metadata configuration to the currently empty AppComponent class.
Specifically, the @Component decorator’s template property tells NativeScript how to render this component on the screen.
More information on decorators can be found here: https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Decorators.md

The @Component decorator’s selector property defines how a component can be used within another component’s template.
In this case, it would be accessed with <my-app></my-app> */


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
@Component({
  selector: "my-app",
  template: `
    <StackLayout>
      <Image src="res://logo_login" stretch="none" horizontalAlignment="center"></Image>

      <TextField hint="Email Address" keyboardType="email" [(ngModel)]="email" autocorrect="false" autocapitalizationType="none"></TextField>
      <TextField hint="Password" secure="true"></TextField>

      <Button [text]="isLoggingIn ? 'Sign in' : 'Sign up'" class="submit-button" (tap)="submit()"></Button>
      <Button [text]="isLoggingIn ? 'Sign up' : 'Back to login'" (tap)="toggleDisplay()"></Button>
    </StackLayout>
  `,
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {
  email = "nativescriptrocks@telerik.com";
  isLoggingIn = true;

  submit() {
    alert("You’re using: " + this.email);
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
