"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.routingComponents = exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var album_component_1 = require("./pages/album/album.component");
var get_started_component_1 = require("./pages/get-started/get-started.component");
var home_component_1 = require("./pages/home/home.component");
var log_in_component_1 = require("./pages/log-in/log-in.component");
var sign_up_component_1 = require("./pages/sign-up/sign-up.component");
var routes = [
    { path: '', component: get_started_component_1.GetStartedComponent },
    { path: 'sign-up', component: sign_up_component_1.SignUpComponent },
    { path: 'login', component: log_in_component_1.LogInComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'home/album', component: album_component_1.AlbumComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [sign_up_component_1.SignUpComponent, log_in_component_1.LogInComponent, get_started_component_1.GetStartedComponent, home_component_1.HomeComponent, album_component_1.AlbumComponent];
