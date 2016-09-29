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
			if (newValue.Basic) $scope.maxNumOfCards += 46;
			if (newValue.Voiced) $scope.maxNumOfCards += 25;
			if (newValue.Combo) $scope.maxNumOfCards += 33;
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

	$scope.cardsList = getCards();
	$scope.cardsIndex = 0;
	$scope.maxNumOfCards = $scope.cardsList.length;
	$scope.reviewDeck = getReviewDeck();

	$scope.reviewLater = function(card) {
		console.log('Review later: ' + JSON.stringify(card));

		if (!isDuplicate(card)) {
			$scope.reviewDeck.push(card);
			localStorage.setItem('reviewDeck', JSON.stringify($scope.reviewDeck));
		}
		
		$scope.nextCard();
	};

	$scope.nextCard = function() {
		console.log('Next card');

		$scope.cardsIndex += 1;
		// loop around for testing purposes
		if ($scope.cardsIndex >= ($scope.cardsList.length))
			$scope.cardsIndex = 0;
	};

	function isDuplicate(card) {
		// is the card in the reviewDeck already?
		// kana.char is unique
	}

	function getCards() {
		var cards = [];

		// Checks to see if there's already a deck of cards saved in localStorage.
		// It checks the length to be greater than 2 because cards is stored as a string,
		// and an empty array would be '[]', which is two characters long.
		var savedCards = localStorage.getItem('cards');
		if ((savedCards !== null) && (savedCards.length > 2)) {
			cards = JSON.parse(savedCards);
		}
		else {
			cards = getNewCards(choicesService.kanaChoice, choicesService.typeChoice);
			localStorage.setItem('cards', JSON.stringify(cards));
		}
		return cards;
	}

	function getReviewDeck() {
		var savedCards = localStorage.getItem('reviewDeck');
		if ((savedCards !== null) && (savedCards.length > 2)) 
			return JSON.parse(savedCards);
		else 
			return [];
	}

	function getNewCards(kanaChoice, typeChoice) {
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
		cardsList = dealCards(cardsList);
		return cardsList;
	}
	
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
	}

	function dealCards(listOfCards) {
		var howMany = getCount();
		return listOfCards.slice(0, howMany);
	}

	function getCount() {
		var numOfCards = choicesService.numOfCards;
		var maxNumOfCards = choicesService.maxNumOfCards;
		return (numOfCards <= maxNumOfCards) ? numOfCards : maxNumOfCards;
	}

}]);


KanaFlash.controller('ReviewDeckController', ['$scope', function($scope) {

	$scope.cardsList = getReviewDeck();
	$scope.cardsIndex = 0;
	$scope.maxNumOfCards = $scope.cardsList.length;

	$scope.removeCard = function(card) {
		console.log('Remove: ' + JSON.stringify(card));

		// stuff here

		$scope.nextCard();
	};

	$scope.nextCard = function() {
		console.log('Next card');

		$scope.cardsIndex += 1;
		// loop around for testing purposes
		if ($scope.cardsIndex >= ($scope.cardsList.length))
			$scope.cardsIndex = 0;
	};

	function getReviewDeck() {
		var savedCards = localStorage.getItem('reviewDeck');
		if ((savedCards !== null) && (savedCards.length > 2)) {
			var cards = JSON.parse(savedCards);
			cards = shuffle(cards);
			return cards;
		}
		else
			return [];
	}

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
	}

}]);


KanaFlash.controller('ChartsController', ['$scope', 'kanaChartService', function($scope, kanaChartService) {
	var basicHiraganaList = kanaChartService.selectKanaType('Hiragana', 'Basic');
	var basicKatakanaList = kanaChartService.selectKanaType('Katakana', 'Basic');
	var voicedHiraganaList = kanaChartService.selectKanaType('Hiragana', 'Voiced');
	var voicedKatakanaList = kanaChartService.selectKanaType('Katakana', 'Voiced');
	var comboHiraganaList = kanaChartService.selectKanaType('Hiragana', 'Combo');
	var comboKatakanaList = kanaChartService.selectKanaType('Katakana', 'Combo');

	$scope.basicHiraganaChart = createChart(basicHiraganaList, 5);
	$scope.basicKatakanaChart = createChart(basicKatakanaList, 5);
	$scope.voicedHiraganaChart = createChart(voicedHiraganaList, 5);
	$scope.voicedKatakanaChart = createChart(voicedKatakanaList, 5);
	$scope.comboHiraganaChart = createChart(comboHiraganaList, 3);
	$scope.comboKatakanaChart = createChart(comboKatakanaList, 3);

	function createChart(kanaList, size) {
		var kanaChart = [];
		var length = kanaList.length;

		for (var i = 0; i < length; i += size) {
			kanaChart.push(kanaList.slice(i, i + size));
		}
		return kanaChart;
	}

}]);
