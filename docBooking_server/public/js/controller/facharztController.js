app.controller('FacharztController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $http.get('/facharztbezeichnung').then(function (response) {
        $scope.doctors = response.data;

        var doctors = $scope.doctors;

        console.log($scope.doctors);

        var resultFacharzt = doctors.map(a => a.fachbezeichnung);
        var resultName = doctors.map(a => a.name);
        var resultVorname = doctors.map(a => a.vorname);
        var resultStrasse = doctors.map(a => a.strasse);
        var resultPlz = doctors.map(a => a.plz);
        var resultNummer = doctors.map(a => a.nummer);

        // console.log(resultFacharzt);
        //console.log(resultName);
        //console.log(resultVorname);
        //console.log(resultStrasse);
        //console.log(resultPlz);
        //console.log(resultNummer);

        function hautarztArrayGenerator(array) {
            var hautarztArray = [];
            for (let i = 0; i <= 3; i++) {
                hautarztArray.push(array[i]);
            }
            return hautarztArray;
        }

        var hautarzt = hautarztArrayGenerator(doctors);

        console.log(hautarzt);

        function frauenarztArrayGenerator(array) {
            var frauenarztArray = [];
            for (let i = 4; i <= 7; i++) {
                frauenarztArray.push(array[i]);
            }
            return frauenarztArray;
        }

        var frauenarzt = frauenarztArrayGenerator(doctors);

        function urologeArrayGenerator(array) {
            var urologeArray = [];
            for (let i = 8; i <= 11; i++) {
                urologeArray.push(array[i]);
            }
            return urologeArray;
        }

        var urologe = urologeArrayGenerator(doctors);

        function orthopaedeArrayGenerator(array) {
            var orthopaedearray = [];
            for (let i = 12; i <= 15; i++) {
                orthopaedearray.push(array[i]);
            }
            return orthopaedearray;
        }

        var orthopaede = orthopaedeArrayGenerator(doctors);

        function hnoArrayGenerator(array) {
            var hnoarray = [];
            for (let i = 16; i <= 19; i++) {
                hnoarray.push(array[i]);
            }
            return hnoarray;
        }

        var hno = hnoArrayGenerator(doctors);

        function augenarztArrayGenerator(array) {
            var augenarztarray = [];
            for (let i = 20; i <= 23; i++) {
                augenarztarray.push(array[i]);
            }
            return augenarztarray;
        }

        var augenarzt = augenarztArrayGenerator(doctors);

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

        console.log($scope.unique_fachbezeichnung_object);

        var chosen_facharzt = document.getElementById('facharztbezeichnung').value;


    });
    $scope.go = function (path) {
        $location.path(path);
    };

    $scope.chosenFacharzt = function () {

        var chosen_facharzt = document.getElementById('facharztbezeichnung').value;
        console.log(chosen_facharzt);

    }
}]);
