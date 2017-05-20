import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";
import { routes, navigatableComponents } from "./app.routing";


@NgModule({
  imports: [NativeScriptModule, NativeScriptFormsModule, NativeScriptHttpModule, NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)],
  declarations: [AppComponent, LoginComponent, ...navigatableComponents],
  bootstrap: [AppComponent]
})
export class AppModule {}
