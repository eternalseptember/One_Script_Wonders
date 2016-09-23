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
		// make sure at least one difficulty checkbox has been selected		
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

	$scope.kanaList = kanaChartService.kana_chart;

	$scope.choiceFilter = function(kana) {
		kanaSelected = $scope.kanaChoice.selected;
		// due to empty spaces in some rows, check to see that it has a sound
		if (kana.sound !== '') {
			if ((kanaSelected === 'Both') || (kana.kana === kanaSelected)) {
				// check that the kana's type is in the $scope.difficulty.selected[option]
				difficultySelected = $scope.difficulty.selected;
				if (difficultySelected.hasOwnProperty(kana.type)) {
					return kana;
				}
			}
		}
	};

}]);


KanaFlash.controller('ChartsController', ['$scope', 'kanaChartService', function($scope, kanaChartService) {
	createChart = function(kanaList, size) {
		var kanaChart = [];
		length = kanaList.length;

		for (var i = 0; i < length; i += size) {
			kanaChart.push(kanaList.slice(i, i + size));
		}
		return kanaChart;
	};

	basicHiraganaList = kanaChartService.selectKanaType('Hiragana', 'Basic');
	$scope.basicHiraganaChart = createChart(basicHiraganaList, 5);
	basicKatakanaList = kanaChartService.selectKanaType('Katakana', 'Basic');
	$scope.basicKatakanaChart = createChart(basicKatakanaList, 5);

	voicedHiraganaList = kanaChartService.selectKanaType('Hiragana', 'Voiced');
	$scope.voicedHiraganaChart = createChart(voicedHiraganaList, 5);
	voicedKatakanaList = kanaChartService.selectKanaType('Katakana', 'Voiced');
	$scope.voicedKatakanaChart = createChart(voicedKatakanaList, 5);

	comboHiraganaList = kanaChartService.selectKanaType('Hiragana', 'Combo');
	$scope.comboHiraganaChart = createChart(comboHiraganaList, 3);
	comboKatakanaList = kanaChartService.selectKanaType('Katakana', 'Combo');
	$scope.comboKatakanaChart = createChart(comboKatakanaList, 3);
}]);


KanaFlash.service('choicesService', function() {
	this.kanaChoice = {};
	this.difficulty = {};
});


KanaFlash.directive('kanaTable', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/kanaTable.html',
		replace: true,
		scope: {
			kanaChart: "=",
			kanaChoice: "@",
			typeChoice: "@",
			colSize: "@",
		}
	}
});
