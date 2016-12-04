"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var platform_1 = require("nativescript-angular/platform");
var router_1 = require("nativescript-angular/router");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
/* An NgModule’s declarations array expects a list of the components that will be usied in the app.
The navigatableComponents array exported in the app.routing.ts file is being added to the AppComponent declaration. */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                /* NativeScriptHttpModule is a NativeScript wrapper of Angular’s HttpModule,
                which declares all of Angular’s HTTP-based services, including the Http service that UserService uses. */
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
            ],
            /* If a variable x is defined as let x = [2, 3], then JavaScript will interpret [1, ...x] as [1, 2, 3]. */
            declarations: [
                app_component_1.AppComponent
            ].concat(app_routing_1.navigatableComponents),
            /* The NgModule’s bootstrap property is set to AppComponent. This passes control to the AppComponent class in the app/app.component.ts file. */
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map