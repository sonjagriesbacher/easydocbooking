var app = angular.module("MyApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "LoginController",
            templateUrl: "../../views/login.html"
        })
        .when("/registrierung", {
            templateUrl: "../../views/register.html"
        })
        .when("/facharztbezeichnung", {
            templateUrl: "../../views/facharztbezeichnung.html",
            controller: "FacharztController"
        })
        .when("/arztwahl", {
            templateUrl: "../../views/arztwahl.html"
        })
        .when("/terminwahltag", {
            templateUrl: "../../views/terminwahltag.html"
        })
        .when("/terminwahlzeit", {
            templateUrl: "../../views/terminwahlzeit.html"
        })
        .otherwise({redirectTo: "/"})
});

