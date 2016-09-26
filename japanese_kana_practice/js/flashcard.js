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


KanaFlash.controller('HeaderController', ['$scope', '$location', function($scope, $location) {
	$scope.isActive = function(viewLocation) {
		//return viewLocation === $location.path();
		return $location.path().indexOf(viewLocation) == 0;
	}
}]);


KanaFlash.controller('KanaController', ['$scope', '$location', 'choicesService', function($scope, $location, choicesService) {
	$scope.kanaChoice = {
		selected: null,
		options: [
			'Hiragana',
			'Katakana',
			'Both'
		]
	};

	$scope.typeChoice = {
		selected: null,
		options: [
			'Basic',
			'Voiced',
			'Combo'
		]
	};

	$scope.$watchCollection('[kanaChoice.selected, typeChoice.selected]', function() {
		choicesService.kanaChoice = $scope.kanaChoice.selected;
		choicesService.typeChoice = $scope.typeChoice.selected;
	});

	// For validating that at least one checkbox was checked
	$scope.isChecked = false;
	$scope.$watch('typeChoice.selected', function(selected) {
		$scope.isChecked = false;
		angular.forEach(selected, function(isChecked) {
			if (isChecked) $scope.isChecked = true;
		});
	}, true);

	$scope.submit = function() {
		$location.path("/cards");
	};
}]);


KanaFlash.controller('CardsController', ['$scope', 'choicesService', 'kanaChartService', function($scope, choicesService, kanaChartService) {
	$scope.kanaChoice = choicesService.kanaChoice;
	$scope.typeChoice = choicesService.typeChoice;

	var getCards = function(kanaChoice, typeChoice) {
		var cardsList = [];
		var fullKanaList = kanaChartService.kanaList;
		var length = fullKanaList.length;

		for (var i = 0; i < length; i++) {
			var kanaObject = fullKanaList[i];

			// Excludes empty placeholder sounds
			if (kanaObject.sound === '') continue;

			if ((kanaChoice === 'Both') || (kanaObject.kana === kanaChoice)) {
				// Check that the kana's type is in typeChoice
				if ((typeChoice.hasOwnProperty(kanaObject.type)) && (typeChoice[kanaObject.type])) {
					cardsList.push(kanaObject);					
				}
			}
		}
		return cardsList;
	};

	$scope.cardsList = getCards(choicesService.kanaChoice, choicesService.typeChoice);
}]);


KanaFlash.controller('ChartsController', ['$scope', 'kanaChartService', function($scope, kanaChartService) {
	var createChart = function(kanaList, size) {
		var kanaChart = [];
		var length = kanaList.length;

		for (var i = 0; i < length; i += size) {
			kanaChart.push(kanaList.slice(i, i + size));
		}
		return kanaChart;
	};

	var basicHiraganaList = kanaChartService.selectKanaType('Hiragana', 'Basic');
	$scope.basicHiraganaChart = createChart(basicHiraganaList, 5);
	var basicKatakanaList = kanaChartService.selectKanaType('Katakana', 'Basic');
	$scope.basicKatakanaChart = createChart(basicKatakanaList, 5);

	var voicedHiraganaList = kanaChartService.selectKanaType('Hiragana', 'Voiced');
	$scope.voicedHiraganaChart = createChart(voicedHiraganaList, 5);
	var voicedKatakanaList = kanaChartService.selectKanaType('Katakana', 'Voiced');
	$scope.voicedKatakanaChart = createChart(voicedKatakanaList, 5);

	var comboHiraganaList = kanaChartService.selectKanaType('Hiragana', 'Combo');
	$scope.comboHiraganaChart = createChart(comboHiraganaList, 3);
	var comboKatakanaList = kanaChartService.selectKanaType('Katakana', 'Combo');
	$scope.comboKatakanaChart = createChart(comboKatakanaList, 3);
}]);


KanaFlash.service('choicesService', function() {
	this.kanaChoice = {};
	this.typeChoice = {};
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

KanaFlash.directive('playSound', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			kana: "=",
		},
		link: function(scope, element, attrs) {
			scope.playSound = function() {
				var obj = document.createElement("audio");
				obj.src="sounds/" + scope.kana.sound + ".mp3";
				obj.play();
			}
		},
		template: 
			'<a href="javascript:void(0)" ng-click="playSound()" ng-bind-html="kana.char">{{ kana.char }}</a>'
	}
});