/* This import should be first in order to load some required settings (like globals and reflect-metadata).
The TypeScript "import" command is being used to bring in a function, platformNativeScriptDynamic(), and a TypeScript class, AppModule.
The platformNativeScriptDynamic() function comes from the “nativescript-angular” npm module, which ycontains the code needed to integrate NativeScript and Angular 2.
NativeScript’s platformNativeScriptDynamic() function sets up an Angular 2 native app, as opposed to Angular 2’s platformBrowserDynamic() function, which sets up an Angular 2 browser app. */
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

/* Because this code changes the appearance of the status bar, it is preferable to call this method as soon as possible,
so that the status bar doesn’t update after the app has already loaded. */
import { setStatusBarColors } from "./utils/status-bar-util";

setStatusBarColors();

/* The bootstrapModule() function is what actually gets the app up and running.
The bootstrapModule() function expects an Angular module that contains the main configuration for the application.
In this case, it's being passed a reference to a AppModule module defined in app.module.ts. */
platformNativeScriptDynamic().bootstrapModule(AppModule);
