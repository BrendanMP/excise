console.log('controlers are here');

////////////// CONTROLLERS ////////////////////////////////////////////////////////
app.controller('navCtrl', function (userService) {
    var vm = this;
    vm.user = {};
    userService.getUser()
        .then(function (res) {
            vm.user = res.data;
            console.log(vm.user);
        })
        .catch(function (err) {
            console.log("navCtrl userService error: ",err);
        })
})

app.controller('homeCtrl', function() {
    console.log('home is here');
    this.title = 'Welcome to Exciser';

});

app.controller('loginCtrl', function($http,$location) {
    console.log('login is here');
    var vm = this;
    vm.title = 'Login';

    vm.login = function () {
        var url = 'http://localhost:3000/login';
        var user = vm.user;

        $http.post(url,user)
            .then(
                function (res) {
                    console.log("success!");
                    $location.path('/profile');
                },
                function (res) {
                    console.log("failure");
                    $location.path('/');
                }
            )

    }
});

app.controller('signupCtrl', function($http,$location) {
    var vm = this;
    vm.title = 'Sign Up';


    vm.signup = function () {
        var url = 'http://localhost:3000/signup';
        var user = vm.user;

        $http.post(url,user)
            .then(
                function (res) {
                    console.log("success!!");
                    $location.path("/profile")
                }, //success
                function (res) {
                    console.log('error!');
                    $location.path('/login');
                } //error
            )
    };
});

app.controller('dashboardCtrl', function ($scope, $http) {
    var vm = $scope;
    vm.title = 'Dashboard';

    console.log(vm.user);

});

app.controller('profileCtrl', function(userService) {
    var vm = this;
    vm.title = 'Profile';
    console.log('Profile is here');

    vm.user = {};

    userService.getUser()
        .then(function (res) {
            vm.user = res.data;
            //console.log(vm.user);
        })
        .catch(function (err) {
            console.log("profileCtrl userService error: ",err);
        })
});


app.controller('FormCtrl', function ($scope, $http, $location) {

    $scope.data = {
        estName: 'Default',
        reportMonthYear: '01/2017',
        grossSales: 0,
    };

    $scope.submitForm = function() {
        $http.post('/forms/make/', JSON.stringify($scope.data))
            .then(
                console.log('submitted')
            ).catch(function (err) {
            console.log(err)
        });
    };
});
