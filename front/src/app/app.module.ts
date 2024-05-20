import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import {HttpClientModule} from "@angular/common/http";
import {RouterOutlet, ROUTES} from "@angular/router";
import {FactoriesUtils} from "./core/utils/factories/factories.utils";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AngularSvgIconModule.forRoot(),
        HttpClientModule,
        BrowserModule,
        RouterOutlet,
    ],
    providers: [
        {
            provide: ROUTES,
            useFactory: FactoriesUtils.routesFactory,
            deps: [],
            multi: true,
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
