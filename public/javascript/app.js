var app = angular.module('excise', ['ui-router', 'ui.chart']);

app.config(function ($stateProvider) {
   var homeState = {
       name: 'home',
       url: '/',
       templateUrl: 'index.html',
       controller: 'homeController',
       controllerAs: 'ctrl'
   };

   var loginState = {
       name: 'login',
       url: '/login',
       templateUrl: './templates/login.html'
   };
    $stateProvider.state(homeState);
    $stateProvider.state(loginState);
});