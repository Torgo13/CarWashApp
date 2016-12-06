"use strict";
var login_component_1 = require("./pages/login/login.component");
var list_component_1 = require("./pages/list/list.component");
/* The app.routing.ts file is where the list of all the app’s routes is declared.
there needs to be a routes array that includes a list of all components the user can navigate to, as well as their paths.
When new routes need to be added, import the appropriate component in app.routing.ts, and then include that component in the routes array. */
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "list", component: list_component_1.ListComponent }
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    list_component_1.ListComponent
];
//# sourceMappingURL=app.routing.js.map