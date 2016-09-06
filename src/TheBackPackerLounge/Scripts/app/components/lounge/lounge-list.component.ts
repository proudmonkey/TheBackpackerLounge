import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Lounge} from "../../viewmodels/lounge";
import {AppService} from "../../services/app.service";

@Component({
    selector: "lounge-list",
    template: `
            <h2>{{title}}</h2>
            <ul class="items">
                <li *ngFor="let item of items" 
                    [class.selected]="item === selectedItem"
                    (click)="onSelect(item)">
                    <span>{{item.Subject}}</span>
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

export class LoungeListComponent implements OnInit {
    title: string;
    selectedItem: Lounge;
    items: Lounge[];
    errorMessage: string;

    constructor(private AppService: AppService, private router: Router) { }

    ngOnInit() {
        this.title = "The Lounge";
        var service = this.AppService.getLatestDiscussion();

        service.subscribe(
            items => this.items = items,
            error => this.errorMessage = <any>error
        );

    }

    onSelect(item: Lounge) {
        this.selectedItem = item;
        var link = ['/lounge', this.selectedItem.ID];
        this.router.navigate(link);
    }
}
