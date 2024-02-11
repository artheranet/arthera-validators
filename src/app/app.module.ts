import {APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {appRoutes} from "./app.route";
import {SharedAppModule} from "./shared/shared.app.module";
import {PublicModule} from "./public/public.module";
import {HttpClientModule} from '@angular/common/http';
import {PrimeNGConfig} from "primeng/api";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    SharedAppModule,
    PublicModule,
    HttpClientModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (primeConfig: PrimeNGConfig) => () => {
      primeConfig.ripple = true;
    },
    deps: [PrimeNGConfig],
    multi: true
  }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
