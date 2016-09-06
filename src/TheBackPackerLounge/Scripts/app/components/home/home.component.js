System.register(["@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: "home",
                        template: "\n        <div class=\"div-wrapper\">\n            <div class=\"div-lounge\">\n                   <div>\n                        <lounge-list class=\"discussion\"></lounge-list>\n                   </div>\n            </div>\n            <div class=\"div-explore\">\n                  <div class=\"top\">\n                        <place-list class=\"latest\"></place-list>\n                  </div>\n                  <div class=\"bot\">\n                        <place-list class=\"most-viewed\"></place-list>\n                  </div>\n            </div>\n            <div class=\"div-clear\"></div>\n        </div>\n    ",
                        styles: ["\n        .div-wrapper {\n          margin-right: 300px;\n        }\n        .div-lounge {\n          float: left;\n          width: 100%;\n         \n        }\n        .div-lounge div{\n           margin:0 0 10px 0;\n           border: 1px solid #9BCCE0;\n           background-color: #DDF0D5;\n        }\n        .div-explore {\n          float: right;\n          width: 300px;\n          margin-right: -300px;\n        }\n       .div-explore .top{\n           margin:0 10px 10px 10px;\n           border: 1px solid #9BCCE0;\n           background-color: #DDF0D5;\n        }\n        .div-explore .bot{\n           margin:10px 10px 10px 10px;\n           border: 1px solid #9BCCE0;\n           background-color: #DDF0D5;\n        }\n        .div-clear {\n          clear: both;\n        }\n\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
