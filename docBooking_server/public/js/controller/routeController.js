var app = angular.module("MyApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "LoginController",
            templateUrl: "../../views/login.html"
        })
        .when("/facharztbezeichnung", {
            templateUrl: "../../views/facharztbezeichnung.html",
            controller: "FacharztController"
        })
        .otherwise({redirectTo: "/"})
});

