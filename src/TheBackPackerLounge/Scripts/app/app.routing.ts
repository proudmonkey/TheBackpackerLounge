import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { LoungeDetailComponent } from "./components/lounge/lounge-detail.component";
import { PlaceDetailComponent } from "./components/explore/place-detail.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'lounge/:id',
        component: LoungeDetailComponent
    },
    {
        path: 'explore/:id',
        component: PlaceDetailComponent
    }
];

export const AppRoutingProviders: any[] = [
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);