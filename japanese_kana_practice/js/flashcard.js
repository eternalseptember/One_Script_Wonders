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


KanaFlash.controller('ChartsController', ['$scope', 'kanaChartService', function($scope, kanaChartService) {
	$scope.kanaChart = kanaChartService.kana_chart;
}]);


KanaFlash.filter('renderKana', ['$sce', function($sce) {
	return function(input) {
		return $sce.trustAsHtml(input);
	}
}]);


KanaFlash.service('choicesService', function() {
	this.kanaChoice = {};
	this.difficulty = {};
});


KanaFlash.service('kanaChartService', function() {
	this.kana_chart = [
		// Basic Hiragana
		{sound: 'a', char: '&#12354;', kana: 'hiragana', type: 'basic'},
		{sound: 'i', char: '&#12356;', kana: 'hiragana', type: 'basic'},
		{sound: 'u', char: '&#12358;', kana: 'hiragana', type: 'basic'},
		{sound: 'e', char: '&#12360;', kana: 'hiragana', type: 'basic'},
		{sound: 'o', char: '&#12362;', kana: 'hiragana', type: 'basic'},

		// Voiced Hiragana
		{sound: 'ga', char: '&#12364;', kana: 'hiragana', type: 'voiced'},
		{sound: 'gi', char: '&#12366;', kana: 'hiragana', type: 'voiced'},
		{sound: 'gu', char: '&#12368;', kana: 'hiragana', type: 'voiced'},
		{sound: 'ge', char: '&#12370;', kana: 'hiragana', type: 'voiced'},
		{sound: 'go', char: '&#12372;', kana: 'hiragana', type: 'voiced'},

		// Combo Hiragana
		{sound: 'kya', char: '&#12365;&#12419;', kana: 'hiragana', type: 'combo'},
		{sound: 'kyu', char: '&#12365;&#12421;', kana: 'hiragana', type: 'combo'},
		{sound: 'kyo', char: '&#12365;&#12423;', kana: 'hiragana', type: 'combo'},

		// Basic Katakana
		{sound: 'a', char: '&#12450;', kana: 'katakana', type: 'basic'},
		{sound: 'i', char: '&#12452;', kana: 'katakana', type: 'basic'},
		{sound: 'u', char: '&#12454;', kana: 'katakana', type: 'basic'},
		{sound: 'e', char: '&#12456;', kana: 'katakana', type: 'basic'},
		{sound: 'o', char: '&#12458;', kana: 'katakana', type: 'basic'},

		// Voiced Katakana
		{sound: 'ga', char: '&#12460;', kana: 'katakana', type: 'voiced'},
		{sound: 'gi', char: '&#12462;', kana: 'katakana', type: 'voiced'},
		{sound: 'gu', char: '&#12464;', kana: 'katakana', type: 'voiced'},
		{sound: 'ge', char: '&#12466;', kana: 'katakana', type: 'voiced'},
		{sound: 'go', char: '&#12468;', kana: 'katakana', type: 'voiced'},

		// Combo Katakana
		{sound: 'kya', char: '&#12461;&#12515;', kana: 'katakana', type: 'combo'},
		{sound: 'kyu', char: '&#12461;&#12517;', kana: 'katakana', type: 'combo'},
		{sound: 'kyo', char: '&#12461;&#12519;', kana: 'katakana', type: 'combo'},

	]
});
