"use strict";
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
var router_1 = require('@angular/router');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
// enableProdMode();
var providers = [
    router_1.provideRouter(app_routes_1.APP_ROUTES),
    http_1.HTTP_PROVIDERS
];
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, providers);
//# sourceMappingURL=main.js.map