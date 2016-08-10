///<reference path="../../typings/globals/core-js/index.d.ts"/>
import {AppComponent} from "./components/app.component";
import {bootstrap}     from "@angular/platform-browser-dynamic";
import { appRouterProviders } from "./app.routes";
import 'rxjs/Rx';

bootstrap(AppComponent, [appRouterProviders]);  
