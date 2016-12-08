import { StartComponent } from "./pages/start/start.component";
import { LocationPermissionComponent } from "./pages/locationpermission/locationpermission.component";
import { SelectWashLocationComponent } from "./pages/selectwashlocation/selectwashlocation.component";
import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";

/* The app.routing.ts file is where the list of all the app’s routes is declared.
there needs to be a routes array that includes a list of all components the user can navigate to, as well as their paths.
When new routes need to be added, import the appropriate component in app.routing.ts, and then include that component in the routes array. */

/* The first page loaded is the one with "" as the path. */
export const routes = [
  { path: "", component: StartComponent },
  { path: "locationpermission", component: LocationPermissionComponent },
  { path: "selectwashlocation", component: SelectWashLocationComponent },
  { path: "login", component: LoginComponent },
  { path: "list", component: ListComponent }
];

export const navigatableComponents = [
  StartComponent,
  LocationPermissionComponent,
  SelectWashLocationComponent,
  LoginComponent,
  ListComponent
];
