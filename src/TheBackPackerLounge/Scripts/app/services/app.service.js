System.register(["@angular/core", "@angular/http", "rxjs/Observable"], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var AppService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            AppService = (function () {
                function AppService(http) {
                    this.http = http;
                    this.loungeBaseUrl = 'api/lounge/'; // URL to web api
                    this.placeBaseUrl = 'api/place/'; // URL to web api
                }
                AppService.prototype.getLatestDiscussion = function (num) {
                    var url = this.loungeBaseUrl + "GetLatestDiscussion/";
                    if (num != null)
                        url += num;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppService.prototype.getDiscussion = function (id) {
                    if (id == null)
                        throw new Error("id is required.");
                    var url = this.loungeBaseUrl + id;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppService.prototype.getLatestEntries = function (num) {
                    var url = this.placeBaseUrl + "GetLatestEntries/";
                    if (num != null)
                        url += num;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppService.prototype.getMostViewed = function (num) {
                    var url = this.placeBaseUrl + "GetMostViewed/";
                    if (num != null)
                        url += num;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppService.prototype.getPlace = function (id) {
                    if (id == null)
                        throw new Error("id is required.");
                    var url = this.placeBaseUrl + id;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || "Server error");
                };
                AppService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppService);
                return AppService;
            }());
            exports_1("AppService", AppService);
        }
    }
});
