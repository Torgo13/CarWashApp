import {Component} from "@angular/core";

/* In Angular 2, a component manages a view, or a piece of the user interface that the user sees.
A component can be used to define an individual UI element, or an entire page.

@Component is a TypeScript decorator, which allows a TypeScript class or method to be annotated with additional information.
It is a way of adding some metadata configuration to the currently empty AppComponent class.
Specifically, the @Component decorator’s template property tells NativeScript how to render this component on the screen.

The @Component decorator’s selector property defines how a component can be used within another component’s template.
In this case, it would be accessed with <my-app></my-app> */
@Component({
  selector: "my-app",
  template: `
    <StackLayout>
      <TextField hint="Email Address" keyboardType="email"
        autocorrect="false" autocapitalizationType="none"></TextField>
      <TextField hint="Password" secure="true"></TextField>

      <Button text="Sign in"></Button>
      <Button text="Sign up for Groceries"></Button>
    </StackLayout>
  `
})
export class AppComponent {}
