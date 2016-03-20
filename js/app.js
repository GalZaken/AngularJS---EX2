var app = angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: '/home.html',
            controller: 'homeCtrl'
        })
        .when('/about', {
            templateUrl: '/about.html',
            controller: 'aboutCtrl'
        })
        .when('/services', {
            templateUrl: '/services.html',
            controller: 'serCtrl'
        })
        .otherwise({redirectTo: '/home'})
});

app.controller('appCtrl', ['$rootScope', function($rootScope){
}]);

app.controller('homeCtrl', ['$rootScope', function($rootScope){
    $rootScope.PAGE = "home";
}]);

app.controller('aboutCtrl', ['$rootScope', function($rootScope){
    $rootScope.PAGE = "about";
}]);

app.controller('serCtrl', ['$rootScope', function($rootScope){
    $rootScope.PAGE = "ser";
}]);

