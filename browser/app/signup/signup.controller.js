app.controller('SignUpCtrl', function($scope, authFactory) {
	$scope.signUp = authFactory.signup;
})