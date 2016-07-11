var KanaFlash = angular.module('KanaFlash', []);

KanaFlash.controller('KanaController', function($scope) {
	// stuff here
	$scope.difficulty_choice = {
		Basic: false,
		Voiced: false,
		Combo: false
	};
});