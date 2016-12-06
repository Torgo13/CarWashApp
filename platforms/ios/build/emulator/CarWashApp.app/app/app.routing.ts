import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";

/* The app.routing.ts file is where the list of all the app’s routes is declared.
there needs to be a routes array that includes a list of all components the user can navigate to, as well as their paths.
When new routes need to be added, import the appropriate component in app.routing.ts, and then include that component in the routes array. */

export const routes = [
  { path: "", component: LoginComponent },
  { path: "list", component: ListComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent
];
