const app = angular.module('excise', ['ui.router','google.places']);

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
        .state('profile', {
            url: '/profile',
            templateUrl: '/templates/profile.html',
            controller: 'profileCtrl',
            controllerAs: '$ctrl',
        });

    $urlRouterProvider.otherwise("/");
    // $locationProvider.html5Mode({ enabled: true, requireBase: false });
});

app.controller('homeCtrl', function() {
    this.title = 'Welcome to Excise';
    console.log('home is here');
});

app.controller('loginCtrl', function() {
    this.title = 'Login';
    console.log('login is here');
});

app.controller('signupCtrl', function() {
    this.title = 'Sign Up';
    console.log('sign up is here');

    this.place = null;
    this.autocompleteOptions = {
        types: ['establishment']
    }
});

app.controller('profileCtrl', function() {
    this.title = 'Profile';
    console.log('Profile is here');
});
