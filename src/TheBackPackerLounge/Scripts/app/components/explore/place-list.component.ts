import {Component, Input, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Place} from "../../viewmodels/place";
import {AppService} from "../../services/app.service";

@Component({
    selector: "place-list",
    template: `
            <h2>{{title}}</h2>
            <ul class="items">
                <li *ngFor="let item of items" 
                    (click)="onSelect(item)">
                    <span>{{item.Name}}</span>
                </li>
            </ul>
    `,
    styles: [`
        ul.items li { 
            cursor: pointer;
        }
        ul.items li:hover { 
            background-color: #E8FAEC; 
        }
    `]
})

export class PlaceListComponent implements OnInit {
    @Input() class: string;
    title: string;
    items: Place[];
    errorMessage: string;

    constructor(private AppService: AppService, private router: Router) { }

    ngOnInit() {

        var service = null;
        switch (this.class) {
            case "latest":
            default:
                this.title = "What's New?";
                service = this.AppService.getLatestEntries();
                break;
            case "most-viewed":
                this.title = "Top Places to Visit";
                service = this.AppService.getMostViewed();
                break;
        }

        service.subscribe(
            items => this.items = items,
            error => this.errorMessage = <any>error
        );
    }

    onSelect(item: Place) {
        var link = ['/explore', item.ID];
        this.router.navigate(link);
    }
}
