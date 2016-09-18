var KanaFlash = angular.module('KanaFlash', ['ngRoute']);


KanaFlash.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'pages/main.html',
			controller: 'KanaController'
		})
		.when('/cards', {
			templateUrl: 'pages/cards.html',
			controller: 'CardsController'
		})
		.when('/chart', {
			templateUrl: 'pages/chart.html',
			// Change this later
			controller: 'KanaController'
		})
});


KanaFlash.controller('KanaController', ['$scope', '$location', 'choicesService', function($scope, $location, choicesService) {

	$scope.kanaChoice = {
		selected: null,
		options: [
			'Hiragana',
			'Katakana',
			'Both'
		]
	};

	$scope.difficulty = {
		selected: null,
		options: [
			'Basic',
			'Voiced',
			'Combo'
		]
	};

	$scope.$watchCollection('[kanaChoice, difficulty]', function() {
		choicesService.kanaChoice = $scope.kanaChoice;
		choicesService.difficulty = $scope.difficulty;
	});

	$scope.isChecked = function() {
		
	};

	$scope.submit = function() {
		$location.path("/cards");
	};

}]);


KanaFlash.controller('CardsController', ['$scope', 'choicesService', function($scope, choicesService) {
	$scope.kanaChoice = choicesService.kanaChoice;
	$scope.difficulty = choicesService.difficulty;

	$scope.$watchCollection('[kanaChoice, difficulty]', function() {
		choicesService.kanaChoice = $scope.kanaChoice;
		choicesService.difficulty = $scope.difficulty;
	});

	selectedDifficulty = $scope.difficulty.selected;
	str = "You chose"	
	if (selectedDifficulty["Basic"])
		str = str + " Basic"
	if (selectedDifficulty["Voiced"])
		str = str + " Voiced"
	if (selectedDifficulty["Combo"])
		str = str + " Combo"
	$scope.selectionString = str + ".";
}]);


KanaFlash.service('choicesService', function() {
	this.kanaChoice = {};
	this.difficulty = {};
});