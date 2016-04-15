angular.module("apmStart",["ngRoute"]).config(function($routeProvider){
    $routeProvider.when('/index',{
        templateUrl:'views/index.html',
        controller:'mainCtrl'
    });
    /*$routeProvider.when('/answer',{
        templateUrl:'views/answer.html',
        controller:'AnswerController'
    });*/
    $routeProvider.otherwise({redirectTo: '/index'});
});