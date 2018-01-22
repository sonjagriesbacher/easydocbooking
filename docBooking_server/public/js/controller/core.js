function mainController($scope, $http) {
    $scope.formData = {};

    $http.get('/')
        .success(function (data) {
            $scope.users = data;
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });

    $http.get('/facharztbezeichnung')
        .success(function (data) {
            $scope.doctors = data;
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });

    $http.get('/arztwahl')
        .success(function (data) {
            $scope.doctors = data;
        })
        .error(function (data) {
            console.log('Error ' + data);
        });

    $http.get('/termin')
        .success(function (data) {
            $scope.termins = data;
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });

    $scope.createUser = function () {
        $http.post('/facharztbezeichnung', $scope.formData)
            .success(function (data) {
                $scope.formData = {};
                $scope.users = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error ' + data);
            });
    }

}
