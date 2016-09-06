import {Component} from "@angular/core";


@Component({
    selector: "angularjs2demo",
    template: `
        <h1>{{title}}</h1>
        <h3>{{subTitle}}</h3>
            <div class="menu">
                <a class="home" [routerLink]="['/home']">Home</a> |
            </div>
        <router-outlet></router-outlet>
    `
})


export class AppComponent {
    title = "The Backpackers' Lounge";
    subTitle = "For geeks who want to explore nature beyond limits.";
}
