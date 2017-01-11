// //////////////// SERVICES //////////////////////
app.service('userService', function($http) {
    console.log('userService is alive!');
    this.getUser = function () {
        return $http.get('/user');
    }
});

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
});