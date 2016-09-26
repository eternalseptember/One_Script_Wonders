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


// This isn't in the controllers.js file because this just controls the bootstrap pills.
KanaFlash.controller('HeaderController', ['$scope', '$location', function($scope, $location) {
	$scope.isActive = function(viewLocation) {
		//return viewLocation === $location.path();
		return $location.path().indexOf(viewLocation) == 0;
	}
}]);


KanaFlash.service('choicesService', function() {
	this.kanaChoice = {};
	this.typeChoice = {};
	this.numOfCards = 5;
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