const app = angular.module('excise', ['ui.router','google.places']);
console.log('Routes are working');

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/templates/home.html',
            controller: 'homeCtrl',
            controllerAs: '$ctrl'
        });
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/templates/login.html',
            controller: 'loginCtrl',
            controllerAs: '$ctrl'
        });
    $stateProvider
        .state('signup', {
            url: '/signup',
            templateUrl: '/templates/signup.html',
            controller: 'signupCtrl',
            controllerAs: '$ctrl',
        });

    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: '/templates/dashboard.html',
            controller: 'dashboardCtrl',
            controllerAs: '$ctrl',
        });

    $stateProvider
        .state('profile', {
            url: '/profile',
            templateUrl: '/templates/profile.html',
            controller: 'profileCtrl',
            controllerAs: '$ctrl',
        });

    $urlRouterProvider.otherwise("/");
    // $locationProvider.html5Mode({ enabled: true, requireBase: false });
});



