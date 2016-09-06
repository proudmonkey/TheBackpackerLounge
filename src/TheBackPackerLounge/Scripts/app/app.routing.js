System.register(["@angular/router", "./components/home/home.component", "./components/lounge/lounge-detail.component", "./components/explore/place-detail.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, lounge_detail_component_1, place_detail_component_1;
    var routes, AppRoutingProviders, AppRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (lounge_detail_component_1_1) {
                lounge_detail_component_1 = lounge_detail_component_1_1;
            },
            function (place_detail_component_1_1) {
                place_detail_component_1 = place_detail_component_1_1;
            }],
        execute: function() {
            routes = [
                {
                    path: '',
                    redirectTo: '/home',
                    pathMatch: 'full'
                },
                {
                    path: 'home',
                    component: home_component_1.HomeComponent
                },
                {
                    path: 'lounge/:id',
                    component: lounge_detail_component_1.LoungeDetailComponent
                },
                {
                    path: 'explore/:id',
                    component: place_detail_component_1.PlaceDetailComponent
                }
            ];
            exports_1("AppRoutingProviders", AppRoutingProviders = []);
            exports_1("AppRouting", AppRouting = router_1.RouterModule.forRoot(routes));
        }
    }
});
