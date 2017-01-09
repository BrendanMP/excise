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
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: '/templates/dashboard.html',
            controller: 'dashboardCtrl',
            controllerAs: '$ctrl',
        });
    $urlRouterProvider.otherwise("/");
    // $locationProvider.html5Mode({ enabled: true, requireBase: false });
});

//////////////// USER SERVICE //////////////////////
app.service('userService', function($http) {
    console.log('userService is alive!');
    this.login = function() {
        return $http.get('/login');
    };
    this.signup = function(user) {
        return $http.post('/signup', user);
    };
});

/////////////// LOCATION SERVICE ///////////////////
app.service('locationService', function ($http) {
    console.log('locationService is alive!');
    this.getLocations = function () {
        return $http.get('/api/locations');
    };
    this.getLocation = function (id) {
        return $http.get('/api/locations', id);
    };
    this.addLocation = function (location) {
        return $http.post('/api/locations', location);
    }
})


////////////// CONTROLLERS ////////////////////////////////////////////////////////
app.controller('homeCtrl', function() {
    this.title = 'Welcome to Excise';
    console.log('home is here');
});

app.controller('loginCtrl', function() {
    this.title = 'Login';
    console.log('login is here');
});

app.controller('signupCtrl', function($location,userService) {
    vm = this;
    vm.title = 'Sign Up';

    vm.signup = function () {
        console.log('sign up is here', vm.user);
        userService.signup(vm.user);
        $location.url('/dashboard');
    }

    this.place = null;
    this.autocompleteOptions = {
        types: ['establishment']
    }
});

app.controller('dashboardCtrl', function () {
    this.title = 'Dashboard';
})