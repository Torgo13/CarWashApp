import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/platform";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule
  ],
  declarations: [AppComponent],
  /* The NgModule’s bootstrap property is set to AppComponent. This passes control to the AppComponent class in the app/app.component.ts file. */
  bootstrap: [AppComponent]
})
export class AppModule {}
