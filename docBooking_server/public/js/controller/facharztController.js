app.controller('FacharztController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $http.get('/facharztbezeichnung').then(function (response) {
        $scope.doctors = response.data;

        console.log($scope.doctors);
        // $scope.termins = response.data;

        console.log($scope.termins);

        var doctors = $scope.doctors;
        //var termins = $scope.termins;

        console.log($scope.doctors);
        // console.log(termins);

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

        //for-Schleifen bereits da, jedoch hat die Anbindung an die Datenbank nicht geklappt --> siehe app/route.js
        /*        function riefArrayGenerator(array) {
         var riefArray = [];
         for (let i = 0; i <= 7; i++) {
         riefArray.push(array[i]);
         }
         return riefArray;
         }

         $scope.riefTermine = riefArrayGenerator(termins);

         function remlingArrayGenerator(array) {
         var remlingArray = [];
         for (let i = 8; i <= 15; i++) {
         remlingArray.push(array[i]);
         }
         return remlingArray;
         }

         $scope.remlingTermine = remlingArrayGenerator(termins);

         function willnerArrayGenerator(array) {
         var willnerArray = [];
         for (let i = 16; i <= 23; i++) {
         willnerArray.push(array[i]);
         }
         return willnerArray;
         }

         $scope.willnerTermine = willnerArrayGenerator(termins);

         function mansteinArrayGenerator(array) {
         var mansteinArray = [];
         for (let i = 24; i <= 31; i++) {
         mansteinArray.push(array[i]);
         }
         return mansteinArray;
         }

         $scope.mansteinTermine = mansteinArrayGenerator(termins);

         function favaArrayGenerator(array) {
         var favaArray = [];
         for (let i = 32; i <= 39; i++) {
         favaArray.push(array[i]);
         }
         return favaArray;
         }

         $scope.favaTermine = favaArrayGenerator(termins);

         function gmArrayGenerator(array) {
         var gmArray = [];
         for (let i = 40; i <= 47; i++) {
         gmArray.push(array[i]);
         }
         return gmArray;
         }

         $scope.gmTermine = gmArrayGenerator(termins);

         function diewaldArrayGenerator(array) {
         var diewaldArray = [];
         for (let i = 48; i <= 55; i++) {
         diewaldArray.push(array[i]);
         }
         return diewaldArray;
         }

         $scope.diewaldTermine = diewaldArrayGenerator(termins);

         function zahnArrayGenerator(array) {
         var zahnArray = [];
         for (let i = 56; i <= 63; i++) {
         zahnArray.push(array[i]);
         }
         return zahnArray;
         }

         $scope.zahnTermine = zahnArrayGenerator(termins);

         function ehrlArrayGenerator(array) {
         var ehrlArray = [];
         for (let i = 72; i <= 79; i++) {
         ehrlArray.push(array[i]);
         }
         return ehrlArray;
         }

         $scope.ehrlTermine = ehrlArrayGenerator(termins);

         function moebsArrayGenerator(array) {
         var moebsArray = [];
         for (let i = 80; i <= 87; i++) {
         moebsArray.push(array[i]);
         }
         return moebsArray;
         }

         $scope.moebsTermine = moebsArrayGenerator(termins);

         function rittingerArrayGenerator(array) {
         var rittingerArray = [];
         for (let i = 88; i <= 95; i++) {
         rittingerArray.push(array[i]);
         }
         return rittingerArray;
         }

         $scope.rittingerTermine = rittingerArrayGenerator(termins);

         function hofmannArrayGenerator(array) {
         var hofmannArray = [];
         for (let i = 96; i <= 123; i++) {
         hofmannArray.push(array[i]);
         }
         return hofmannArray;
         }

         $scope.hofmannTermine = hofmannArrayGenerator(termins);

         function stelterArrayGenerator(array) {
         var stelterArray = [];
         for (let i = 124; i <= 131; i++) {
         stelterArray.push(array[i]);
         }
         return stelterArray;
         }

         $scope.stelterTermine = stelterArrayGenerator(termins);

         function geyerArrayGenerator(array) {
         var geyerArray = [];
         for (let i = 132; i <= 139; i++) {
         geyerArray.push(array[i]);
         }
         return geyerArray;
         }

         $scope.geyerTermine = geyerArrayGenerator(termins);

         function brueArrayGenerator(array) {
         var brueArray = [];
         for (let i = 140; i <= 147; i++) {
         brueArray.push(array[i]);
         }
         return brueArray;
         }

         $scope.brueTermine = brueArrayGenerator(termins);

         function krausArrayGenerator(array) {
         var krausArray = [];
         for (let i = 148; i <= 155; i++) {
         krausArray.push(array[i]);
         }
         return krausArray;
         }

         $scope.krausTermine = krausArrayGenerator(termins);

         function weigelArrayGenerator(array) {
         var weigelArray = [];
         for (let i = 156; i <= 163; i++) {
         weigelArray.push(array[i]);
         }
         return weigelArray;
         }

         $scope.weigelTermine = weigelArrayGenerator(termins);

         function kretschArrayGenerator(array) {
         var kretschArray = [];
         for (let i = 164; i <= 171; i++) {
         kretschArray.push(array[i]);
         }
         return kretschArray;
         }

         $scope.kretschTermine = kretschArrayGenerator(termins);

         function hoehArrayGenerator(array) {
         var hoehArray = [];
         for (let i = 172; i <= 179; i++) {
         hoehArray.push(array[i]);
         }
         return hoehArray;
         }

         $scope.hoehTermine = hoehArrayGenerator(termins);

         function zwicklArrayGenerator(array) {
         var zwicklArray = [];
         for (let i = 180; i <= 187; i++) {
         zwicklArray.push(array[i]);
         }
         return zwicklArray;
         }

         $scope.zwicklTermine = zwicklArrayGenerator(termins);


         function neunArrayGenerator(array) {
         var neunArray = [];
         for (let i = 188; i <= 195; i++) {
         neunArray.push(array[i]);
         }
         return neunArray;
         }

         $scope.neunTermine = neunArrayGenerator(termins);

         function huberArrayGenerator(array) {
         var huberArray = [];
         for (let i = 196; i <= 203; i++) {
         huberArray.push(array[i]);
         }
         return huberArray;
         }

         $scope.huberTermine = huberArrayGenerator(termins);

         function stroblArrayGenerator(array) {
         var stroblArray = [];
         for (let i = 204; i <= 211; i++) {
         stroblArray.push(array[i]);
         }
         return stroblArray;
         }

         $scope.stroblTermine = stroblArrayGenerator(termins);

         function bauerArrayGenerator(array) {
         var bauerArray = [];
         for (let i = 212; i <= 219; i++) {
         bauerArray.push(array[i]);
         }
         return bauerArray;
         }

         $scope.bauerTermine = bauerArrayGenerator(termins);*/

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