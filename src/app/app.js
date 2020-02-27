var app = angular.module("myApp", ['ngRoute']);
/**
 * config: this config handle my routes with views.
 */
app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'MainController',
            templateUrl: 'app/pages/main/main.html'
        })
        .when('/info', {
            controller: 'InfoController',
            templateUrl: 'app/pages/info/info.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});