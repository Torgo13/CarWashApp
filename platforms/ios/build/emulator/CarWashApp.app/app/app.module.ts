import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

/* An NgModule’s declarations array expects a list of the components that will be usied in the app.
The navigatableComponents array exported in the app.routing.ts file is being added to the AppComponent declaration. */
@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    /* NativeScriptHttpModule is a NativeScript wrapper of Angular’s HttpModule,
    which declares all of Angular’s HTTP-based services, including the Http service that UserService uses. */
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  /* If a variable x is defined as let x = [2, 3], then JavaScript will interpret [1, ...x] as [1, 2, 3]. */
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  /* The NgModule’s bootstrap property is set to AppComponent. This passes control to the AppComponent class in the app/app.component.ts file. */
  bootstrap: [AppComponent]
})
export class AppModule {}
