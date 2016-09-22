var KanaFlash = angular.module('KanaFlash', ['ngRoute', 'ngSanitize']);


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
			controller: 'ChartsController'
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


KanaFlash.controller('CardsController', ['$scope', 'choicesService', 'kanaChartService', function($scope, choicesService, kanaChartService) {
	$scope.kanaChoice = choicesService.kanaChoice;
	$scope.difficulty = choicesService.difficulty;

	$scope.$watchCollection('[kanaChoice, difficulty]', function() {
		choicesService.kanaChoice = $scope.kanaChoice;
		choicesService.difficulty = $scope.difficulty;
	});

	// might rename selectedKanaList
	$scope.selectedKanaList = kanaChartService.kana_chart;

	$scope.choiceFilter = function(kana) {
		if ($scope.kanaChoice.selected === 'Both') {
			return kana;
		}
		else if (kana.kana === $scope.kanaChoice.selected) {
			return kana;
		}
	};

}]);


KanaFlash.controller('ChartsController', ['$scope', 'kanaChartService', function($scope, kanaChartService) {
	$scope.kanaChart = kanaChartService.kana_chart;
}]);


KanaFlash.service('choicesService', function() {
	this.kanaChoice = {};
	this.difficulty = {};
});
