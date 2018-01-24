app.controller('FacharztController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $http.get('/facharztbezeichnung').then(function (response) {
        $scope.doctors = response.data;

        console.log($scope.doctors);
        $scope.termins = response.data;

        console.log($scope.termins);

        var doctors = $scope.doctors;

        console.log($scope.doctors);

        var resultFacharzt = doctors.map(a => a.fachbezeichnung);

        function hautaerzteArrayGenerator(array) {
            var hautaerzteArray = [];
            for (let i = 0; i <= 3; i++) {
                hautaerzteArray.push(array[i]);
            }
            return hautaerzteArray;
        }

        $scope.hautaerzte = hautaerzteArrayGenerator(doctors);

        console.log($scope.hautaerzte);

        function frauenaerzteArrayGenerator(array) {
            var frauenaerzteArray = [];
            for (let i = 4; i <= 7; i++) {
                frauenaerzteArray.push(array[i]);
            }
            return frauenaerzteArray;
        }

        $scope.frauenaerzte = frauenaerzteArrayGenerator(doctors);

        function urologenArrayGenerator(array) {
            var urologenArray = [];
            for (let i = 8; i <= 11; i++) {
                urologenArray.push(array[i]);
            }
            return urologenArray;
        }

        $scope.urologen = urologenArrayGenerator(doctors);

        function orthopaedenArrayGenerator(array) {
            var orthopaedenArray = [];
            for (let i = 12; i <= 15; i++) {
                orthopaedenArray.push(array[i]);
            }
            return orthopaedenArray;
        }

        $scope.orthopaeden = orthopaedenArrayGenerator(doctors);

        function hnosArrayGenerator(array) {
            var hnosArray = [];
            for (let i = 16; i <= 19; i++) {
                hnosArray.push(array[i]);
            }
            return hnosArray;
        }

        $scope.hnos = hnosArrayGenerator(doctors);

        function augenaerzteArrayGenerator(array) {
            var augenaerzteArray = [];
            for (let i = 20; i <= 23; i++) {
                augenaerzteArray.push(array[i]);
            }
            return augenaerzteArray;
        }

        $scope.augenaerzte = augenaerzteArrayGenerator(doctors);

        function removeDuplicates(arr) {
            let unique_array = [];
            for (let i = 0; i < arr.length; i++) {
                if (unique_array.indexOf(arr[i]) == -1) {
                    unique_array.push(arr[i]);
                }
            }
            return unique_array;
        }

        var unique_fachbezeichnung_array = removeDuplicates(resultFacharzt);

        function toObject(arr) {
            var rv = {};
            for (var i = 0; i < arr.length; ++i)
                rv[i] = arr[i];
            return rv;
        }

        $scope.unique_fachbezeichnung_object = toObject(unique_fachbezeichnung_array);

    });
    $scope.go = function (path) {
        $location.path(path);
    };

    $scope.chosenFacharzt = function () {

        var chosen_facharzt = document.getElementById('facharztbezeichnung').value;
        console.log(chosen_facharzt);

    };

}]);
