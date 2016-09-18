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

	$scope.kanaChoice = choicesService.kanaChoice;

	$scope.$watch('kanaChoice', function() {
		choicesService.kanaChoice = $scope.kanaChoice;
	});

	$scope.submit = function() {
		$location.path("/cards");
	};

}]);


KanaFlash.controller('CardsController', ['$scope', 'choicesService', function($scope, choicesService) {
	$scope.kanaChoice = choicesService.kanaChoice;

	$scope.$watch('kanaChoice', function() {
		choicesService.kanaChoice = $scope.kanaChoice;
	});

}]);


KanaFlash.service('choicesService', function() {
	this.kanaChoice = {};
});