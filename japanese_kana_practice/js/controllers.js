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

	$scope.numOfCards = choicesService.numOfCards;

	$scope.$watchCollection('[kanaChoice.selected, typeChoice.selected, numOfCards, kanaMult, maxNumOfCards]', function() {
		choicesService.kanaChoice = $scope.kanaChoice.selected;
		choicesService.typeChoice = $scope.typeChoice.selected;
		choicesService.numOfCards = $scope.numOfCards;
		choicesService.maxNumOfCards = $scope.kanaMult * $scope.maxNumOfCards;
	});

	// For validating that at least one checkbox was checked
	$scope.isChecked = false;
	$scope.$watch('typeChoice.selected', function(newSelection) {
		$scope.isChecked = false;
		angular.forEach(newSelection, function(isChecked) {
			if (isChecked) $scope.isChecked = true;
		});
	}, true);
	
	// Calculates the maximum number of cards
	$scope.$watch('kanaChoice.selected', function(newValue) {
		switch(newValue) {
			case 'Both':
				$scope.kanaMult = 2;
				break;
			case 'Hiragana':
			case 'Katakana':
				$scope.kanaMult = 1;
				break;
			default: 
				$scope.kanaMult = 0;
		}
	});

	$scope.maxNumOfCards = 0;
	$scope.$watch('typeChoice.selected', function(newValue) {	
		if (newValue !== null) {
			$scope.maxNumOfCards = 0;
			if (newValue['Basic']) $scope.maxNumOfCards += 46;
			if (newValue['Voiced']) $scope.maxNumOfCards += 25;
			if (newValue['Combo']) $scope.maxNumOfCards += 33;
		}
	}, true);
	
	$scope.submit = function() {
		// Clears any saved cards. The new deck will be created in the next page.
		localStorage.removeItem('cards');

		// Goes to cards page
		$location.path("/cards");
	};
}]);


KanaFlash.controller('CardsController', ['$scope', 'choicesService', 'kanaChartService', function($scope, choicesService, kanaChartService) {
	$scope.kanaChoice = choicesService.kanaChoice;
	$scope.typeChoice = choicesService.typeChoice;
	$scope.numOfCards = choicesService.numOfCards;
	$scope.maxNumOfCards = choicesService.maxNumOfCards;

	$scope.cardsList = showCards();


	function showCards() {
		var cards = [];

		// Checks to see if there's already a deck of cards saved in localStorage.
		// It checks the length to be greater than 2 because cards is stored as a string,
		// and an empty array would be '[]', which is two characters long.
		var savedCards = localStorage.getItem('cards');
		if ((savedCards !== null) && (savedCards.length > 2)) 
			cards = JSON.parse(savedCards);
		else {
			cards = getCards(choicesService.kanaChoice, choicesService.typeChoice);
			localStorage.setItem('cards', JSON.stringify(cards));
		}
		return cards;
	};

	function getCards(kanaChoice, typeChoice) {
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
		cardsList = shuffle(cardsList);
		cardsList = dealCards(cardsList, choicesService.numOfCards, choicesService.maxNumOfCards);
		return cardsList;
	};
	
	function shuffle(listOfCards) {
		let counter = listOfCards.length;

		while (counter > 0) {
			let index = Math.floor(Math.random() * counter);
			counter--;

			let temp = listOfCards[counter];
			listOfCards[counter] = listOfCards[index];
			listOfCards[index] = temp;
		}
		return listOfCards;
	};

	function dealCards(listOfCards, numOfCards, maxNumOfCards) {
		var howMany = (numOfCards <= maxNumOfCards) ? numOfCards : maxNumOfCards;
		return listOfCards.slice(0, howMany);
	};

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
