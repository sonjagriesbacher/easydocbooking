app.controller('LoginController', ['$scope', '$location', function ($scope, $location) {

    var GoogleAuth;
    var SCOPE = 'https://www.googleapis.com/auth/drive.metadata.readonly';

    $scope.handleClientLoad = function () {
        gapi.load('client:auth2', initClient);
    };

    $scope.initClient = function () {
        var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

        gapi.load('client:auth2', () => {
            gapi.client.init({
                'apiKey': 'AIzaSyB25VIjTysITGdtbaViTjOyN-k_FVht-V4',
                'discoveryDocs': [discoveryUrl],
                'clientId': '684037069550-m1jhklbrit7dal5tq1mfust5omut1pbm.apps.googleusercontent.com',
                'scope': SCOPE
            }).then(function () {
                GoogleAuth = gapi.auth2.getAuthInstance();

                // Listen for sign-in state changes.
                GoogleAuth.isSignedIn.listen(updateSigninStatus);

                // Handle initial sign-in state. (Determine if user is already signed in.)
                var user = GoogleAuth.currentUser.get();
                setSigninStatus();

                $('#sign-in-or-out-button').click(function() {
                    handleAuthClick();
                });
            });
        });
    };
    function handleAuthClick () {
        if (GoogleAuth.isSignedIn.get()) {
            // User is authorized and has clicked 'Sign out' button.
            GoogleAuth.signOut();
        } else {
            // User is not signed in. Start Google auth flow.
            GoogleAuth.signIn();
        }
    }

    function setSigninStatus (isSignedIn) {
        var user = GoogleAuth.currentUser.get();
        var isAuthorized = user.hasGrantedScopes(SCOPE);
        if (isAuthorized) {
            $('#sign-in-or-out-button').html('Sign out');
            $('#auth-status').html('You are currently signed in and have granted ' +
                'access to this app.');
            $('#facharzt').html('Sie können nun einen Termin buchen');
            $('#facharzt').css('background', 'white');
            $('#facharzt').css('border-color', 'black');
            $('#facharzt').prop('disabled', false);
            $('#facharzt').css('color', 'black');
        } else {
            $('#sign-in-or-out-button').html('Sign In/Authorize');
            $('#facharzt').css('background', 'transparent');
            $('#facharzt').css('border-color', 'transparent');
            $('#facharzt').css('color', 'transparent');
            $('#facharzt').css('text-align', 'centre');
            $('#facharzt').prop('disabled', true);
            $('#auth-status').html('You have not authorized this app or you are ' +
                'signed out.');
        }
    }

    function updateSigninStatus(isSignedIn) {
        setSigninStatus();
    }

    $scope.go = function (path) {
        $location.path(path);
    };
}]);
