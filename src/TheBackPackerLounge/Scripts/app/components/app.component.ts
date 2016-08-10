import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HomeComponent} from './home/home.component';

@Component({
    selector: "angularjs2demo",
    template: `
        <h1>{{title}}</h1>
        <h3>{{subTitle}}</h3>
            <div class="menu">
                <a class="home" [routerLink]="['/home']">Home</a> |
            </div>
        <router-outlet></router-outlet>
    `,
    directives: [
        ROUTER_DIRECTIVES,
        HomeComponent
    ]
})


export class AppComponent {
    title = "The Backpackers' Lounge";
    subTitle = "For geeks who want to explore nature beyond limits.";
}
