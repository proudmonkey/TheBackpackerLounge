import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {AppService} from "../../services/app.service";
import {Place} from "../../viewmodels/place";


@Component({
    selector: "place-detail",
    template: `
        <div *ngIf="item" class="item-details">
          <h2>{{item.Name}} - Detail View</h2>
          <ul>
              <li>
                  <label>Subject:</label>
                  <input [(ngModel)]="item.Name" placeholder="Insert the name..."/>
              </li>
              <li>
                  <label>Message:</label>
                  <textarea [(ngModel)]="item.Location" placeholder="Insert a location..."></textarea>
              </li>
          </ul>
        </div>

        <div>
               <button (click)='onBack()'>Back to Home</button>
        </div>
    `,
    styles: [`
        .item-details {
            margin: 5px;
            padding: 5px 10px;
            border: 1px solid 9BCCE0;
            background-color: #DDF0D5;
            width: 500px;
        }
        .item-details * {
            vertical-align: middle;
        }
        .item-details ul li {
            padding: 5px 0;
        }
    `]
})

export class PlaceDetailComponent implements OnInit {
    item: Place;
    sub: any;

    constructor(private AppService: AppService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            var id = +params['id'];
            this.AppService.getPlace(id).subscribe(item => this.item = item[0]);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onBack(): void {
        this.router.navigate(['/home']);
    }
}
