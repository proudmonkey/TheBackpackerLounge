///<reference path="../../typings/index.d.ts"/>
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {RouterModule}  from "@angular/router";
import {FormsModule} from "@angular/forms";
import "rxjs/Rx";

import {AppComponent} from "./components/app.component";
import {HomeComponent} from "./components/home/home.component";
import {LoungeListComponent} from "./components/lounge/lounge-list.component";
import {LoungeDetailComponent} from "./components/lounge/lounge-detail.component";
import {PlaceListComponent} from "./components/explore/place-list.component";
import {PlaceDetailComponent} from "./components/explore/place-detail.component";

import {AppRouting} from "./app.routing";
import {AppService} from "./services/app.service";

@NgModule({
    // directives, components, and pipes
    declarations: [
        AppComponent,
        HomeComponent,
        LoungeListComponent,
        LoungeDetailComponent,
        PlaceListComponent,
        PlaceDetailComponent
    ],
    // modules
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule,
        AppRouting
    ],
    // providers
    providers: [
        AppService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }



