app.factory('apiService', function ($http) {
    return {
        _get: function(data) {
            // let url = "https://demo6292426.mockable.io/";
            let url = "https://swapi.co/api/";
            return $http.get(url + data + "/")
                .success(function(data) {
                    return data;
                })
                .error(function(error) {
                    return error;
                })
        }
    };
});