import {Component} from "@angular/core";

@Component({
    selector: "home",
    template: `
        <div class="div-wrapper">
            <div class="div-lounge">
                   <div>
                        <lounge-list class="discussion"></lounge-list>
                   </div>
            </div>
            <div class="div-explore">
                  <div class="top">
                        <place-list class="latest"></place-list>
                  </div>
                  <div class="bot">
                        <place-list class="most-viewed"></place-list>
                  </div>
            </div>
            <div class="div-clear"></div>
        </div>
    `,
    styles: [`
        .div-wrapper {
          margin-right: 300px;
        }
        .div-lounge {
          float: left;
          width: 100%;
         
        }
        .div-lounge div{
           margin:0 0 10px 0;
           border: 1px solid #9BCCE0;
           background-color: #DDF0D5;
        }
        .div-explore {
          float: right;
          width: 300px;
          margin-right: -300px;
        }
       .div-explore .top{
           margin:0 10px 10px 10px;
           border: 1px solid #9BCCE0;
           background-color: #DDF0D5;
        }
        .div-explore .bot{
           margin:10px 10px 10px 10px;
           border: 1px solid #9BCCE0;
           background-color: #DDF0D5;
        }
        .div-clear {
          clear: both;
        }

    `]
})

export class HomeComponent { }

