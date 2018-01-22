app.controller('AerzteController', ['$scope', '$http', function ($scope, $http, $location) {
    $http.get('/arztwahl').then(function (response) {
        $scope.doctors = response.data;

        console.log($scope.doctors);

        var doctors = $scope.doctors;


        var resultFacharzt = doctors.map(a => a.vorname);
        console.log(resultFacharzt);

    });


}]);