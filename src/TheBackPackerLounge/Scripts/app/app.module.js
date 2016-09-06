System.register(["@angular/core", "@angular/platform-browser", "@angular/http", "@angular/router", "@angular/forms", "rxjs/Rx", "./components/app.component", "./components/home/home.component", "./components/lounge/lounge-list.component", "./components/lounge/lounge-detail.component", "./components/explore/place-list.component", "./components/explore/place-detail.component", "./app.routing", "./services/app.service"], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, http_1, router_1, forms_1, app_component_1, home_component_1, lounge_list_component_1, lounge_detail_component_1, place_list_component_1, place_detail_component_1, app_routing_1, app_service_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (_1) {},
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (lounge_list_component_1_1) {
                lounge_list_component_1 = lounge_list_component_1_1;
            },
            function (lounge_detail_component_1_1) {
                lounge_detail_component_1 = lounge_detail_component_1_1;
            },
            function (place_list_component_1_1) {
                place_list_component_1 = place_list_component_1_1;
            },
            function (place_detail_component_1_1) {
                place_detail_component_1 = place_detail_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        // directives, components, and pipes
                        declarations: [
                            app_component_1.AppComponent,
                            home_component_1.HomeComponent,
                            lounge_list_component_1.LoungeListComponent,
                            lounge_detail_component_1.LoungeDetailComponent,
                            place_list_component_1.PlaceListComponent,
                            place_detail_component_1.PlaceDetailComponent
                        ],
                        // modules
                        imports: [
                            platform_browser_1.BrowserModule,
                            http_1.HttpModule,
                            forms_1.FormsModule,
                            router_1.RouterModule,
                            app_routing_1.AppRouting
                        ],
                        // providers
                        providers: [
                            app_service_1.AppService
                        ],
                        bootstrap: [
                            app_component_1.AppComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
