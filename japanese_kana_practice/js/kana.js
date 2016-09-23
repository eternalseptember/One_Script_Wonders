KanaFlash.service('kanaChartService', function() {
	this.kana_chart = [
		// Basic Hiragana
		{sound: 'a', char: '&#12354;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'i', char: '&#12356;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'u', char: '&#12358;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'e', char: '&#12360;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'o', char: '&#12362;', kana: 'Hiragana', type: 'Basic'},

		{sound: 'ka', char: '&#12363;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'ki', char: '&#12365;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'ku', char: '&#12367;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'ke', char: '&#12369;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'ko', char: '&#12371;', kana: 'Hiragana', type: 'Basic'},

		{sound: 'sa', char: '&#12373;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'shi', char: '&#12375;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'su', char: '&#12377;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'se', char: '&#12379;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'so', char: '&#12381;', kana: 'Hiragana', type: 'Basic'},

		{sound: 'ta', char: '&#12383;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'chi', char: '&#12385;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'tsu', char: '&#12388;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'te', char: '&#12390;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'to', char: '&#12392;', kana: 'Hiragana', type: 'Basic'},

		{sound: 'na', char: '&#12394;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'ni', char: '&#12395;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'nu', char: '&#12396;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'ne', char: '&#12397;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'no', char: '&#12398;', kana: 'Hiragana', type: 'Basic'},

		{sound: 'ha', char: '&#12399;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'hi', char: '&#12402;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'fu', char: '&#12405;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'he', char: '&#12408;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'ho', char: '&#12411;', kana: 'Hiragana', type: 'Basic'},

		{sound: 'ma', char: '&#12414;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'mi', char: '&#12415;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'mu', char: '&#12416;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'me', char: '&#12417;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'mo', char: '&#12418;', kana: 'Hiragana', type: 'Basic'},

		{sound: 'ya', char: '&#12420;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'yu', char: '&#12422;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'yo', char: '&#12424;', kana: 'Hiragana', type: 'Basic'},

		{sound: 'ra', char: '&#12425;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'ri', char: '&#12426;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'ru', char: '&#12427;', kana: 'Hiragana', type: 'Basic'},
		{sound: 're', char: '&#12428;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'ro', char: '&#12429;', kana: 'Hiragana', type: 'Basic'},

		{sound: 'wa', char: '&#12431;', kana: 'Hiragana', type: 'Basic'},
		{sound: 'wo', char: '&#12434;', kana: 'Hiragana', type: 'Basic'},

		{sound: 'n', char: '&#12435;', kana: 'Hiragana', type: 'Basic'},


		// Voiced Hiragana
		{sound: 'ga', char: '&#12364;', kana: 'Hiragana', type: 'Voiced'},
		{sound: 'gi', char: '&#12366;', kana: 'Hiragana', type: 'Voiced'},
		{sound: 'gu', char: '&#12368;', kana: 'Hiragana', type: 'Voiced'},
		{sound: 'ge', char: '&#12370;', kana: 'Hiragana', type: 'Voiced'},
		{sound: 'go', char: '&#12372;', kana: 'Hiragana', type: 'Voiced'},

		{sound: 'za', char: '&#12374;', kana: 'Hiragana', type: 'Voiced'},
		{sound: 'ji', char: '&#12376;', kana: 'Hiragana', type: 'Voiced'},
		{sound: 'zu', char: '&#12378;', kana: 'Hiragana', type: 'Voiced'},
		{sound: 'ze', char: '&#12380;', kana: 'Hiragana', type: 'Voiced'},
		{sound: 'zo', char: '&#12382;', kana: 'Hiragana', type: 'Voiced'},

		{sound: 'da', char: '&#12384;', kana: 'Hiragana', type: 'Voiced'},
		{sound: 'ji', char: '&#12386;', kana: 'Hiragana', type: 'Voiced'},
		{sound: 'dzu', char: '&#12389;', kana: 'Hiragana', type: 'Voiced'},
		{sound: 'de', char: '&#12391;', kana: 'Hiragana', type: 'Voiced'},
		{sound: 'do', char: '&#12393;', kana: 'Hiragana', type: 'Voiced'},

		{sound: 'ba', char: '&#12400;', kana: 'Hiragana', type: 'Voiced'},
		{sound: 'bi', char: '&#12403;', kana: 'Hiragana', type: 'Voiced'},
		{sound: 'bu', char: '&#12406;', kana: 'Hiragana', type: 'Voiced'},
		{sound: 'be', char: '&#12409;', kana: 'Hiragana', type: 'Voiced'},
		{sound: 'bo', char: '&#12412;', kana: 'Hiragana', type: 'Voiced'},

		{sound: 'pa', char: '&#12401;', kana: 'Hiragana', type: 'Voiced'},
		{sound: 'pi', char: '&#12404;', kana: 'Hiragana', type: 'Voiced'},
		{sound: 'pu', char: '&#12407;', kana: 'Hiragana', type: 'Voiced'},
		{sound: 'pe', char: '&#12410;', kana: 'Hiragana', type: 'Voiced'},
		{sound: 'po', char: '&#12413;', kana: 'Hiragana', type: 'Voiced'},


		// Combo Hiragana
		{sound: 'kya', char: '&#12365;&#12419;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'kyu', char: '&#12365;&#12421;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'kyo', char: '&#12365;&#12423;', kana: 'Hiragana', type: 'Combo'},

		{sound: 'sha', char: '&#12375;&#12419;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'shu', char: '&#12375;&#12421;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'sho', char: '&#12375;&#12423;', kana: 'Hiragana', type: 'Combo'},

		{sound: 'cha', char: '&#12385;&#12419;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'chu', char: '&#12385;&#12421;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'cho', char: '&#12385;&#12423;', kana: 'Hiragana', type: 'Combo'},

		{sound: 'nya', char: '&#12395;&#12419;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'nyu', char: '&#12395;&#12421;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'nyo', char: '&#12395;&#12423;', kana: 'Hiragana', type: 'Combo'},

		{sound: 'hya', char: '&#12402;&#12419;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'hyu', char: '&#12402;&#12421;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'hyo', char: '&#12402;&#12423;', kana: 'Hiragana', type: 'Combo'},

		{sound: 'mya', char: '&#12415;&#12419;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'myu', char: '&#12415;&#12421;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'myo', char: '&#12415;&#12423;', kana: 'Hiragana', type: 'Combo'},

		{sound: 'rya', char: '&#12426;&#12419;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'ryu', char: '&#12426;&#12421;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'ryo', char: '&#12426;&#12423;', kana: 'Hiragana', type: 'Combo'},

		{sound: 'gya', char: '&#12366;&#12419;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'gyu', char: '&#12366;&#12421;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'gyo', char: '&#12366;&#12423;', kana: 'Hiragana', type: 'Combo'},

		{sound: 'jya', char: '&#12376;&#12419;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'jyu', char: '&#12376;&#12421;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'jyo', char: '&#12376;&#12423;', kana: 'Hiragana', type: 'Combo'},

		{sound: 'bya', char: '&#12403;&#12419;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'byu', char: '&#12403;&#12421;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'byo', char: '&#12403;&#12423;', kana: 'Hiragana', type: 'Combo'},

		{sound: 'pya', char: '&#12404;&#12419;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'pyu', char: '&#12404;&#12421;', kana: 'Hiragana', type: 'Combo'},
		{sound: 'pyo', char: '&#12404;&#12423;', kana: 'Hiragana', type: 'Combo'},


		// Basic Katakana
		{sound: 'a', char: '&#12450;', kana: 'Katakana', type: 'Basic'},
		{sound: 'i', char: '&#12452;', kana: 'Katakana', type: 'Basic'},
		{sound: 'u', char: '&#12454;', kana: 'Katakana', type: 'Basic'},
		{sound: 'e', char: '&#12456;', kana: 'Katakana', type: 'Basic'},
		{sound: 'o', char: '&#12458;', kana: 'Katakana', type: 'Basic'},

		{sound: 'ka', char: '&#12459;', kana: 'Katakana', type: 'Basic'},
		{sound: 'ki', char: '&#12461;', kana: 'Katakana', type: 'Basic'},
		{sound: 'ku', char: '&#12463;', kana: 'Katakana', type: 'Basic'},
		{sound: 'ke', char: '&#12465;', kana: 'Katakana', type: 'Basic'},
		{sound: 'ko', char: '&#12467;', kana: 'Katakana', type: 'Basic'},

		{sound: 'sa', char: '&#12469;', kana: 'Katakana', type: 'Basic'},
		{sound: 'shi', char: '&#12471;', kana: 'Katakana', type: 'Basic'},
		{sound: 'su', char: '&#12473;', kana: 'Katakana', type: 'Basic'},
		{sound: 'se', char: '&#12475;', kana: 'Katakana', type: 'Basic'},
		{sound: 'so', char: '&#12477;', kana: 'Katakana', type: 'Basic'},

		{sound: 'ta', char: '&#12479;', kana: 'Katakana', type: 'Basic'},
		{sound: 'chi', char: '&#12481;', kana: 'Katakana', type: 'Basic'},
		{sound: 'tsu', char: '&#12484;', kana: 'Katakana', type: 'Basic'},
		{sound: 'te', char: '&#12486;', kana: 'Katakana', type: 'Basic'},
		{sound: 'to', char: '&#12488;', kana: 'Katakana', type: 'Basic'},

		{sound: 'na', char: '&#12490;', kana: 'Katakana', type: 'Basic'},
		{sound: 'ni', char: '&#12491;', kana: 'Katakana', type: 'Basic'},
		{sound: 'nu', char: '&#12492;', kana: 'Katakana', type: 'Basic'},
		{sound: 'ne', char: '&#12493;', kana: 'Katakana', type: 'Basic'},
		{sound: 'no', char: '&#12494;', kana: 'Katakana', type: 'Basic'},

		{sound: 'ha', char: '&#12495;', kana: 'Katakana', type: 'Basic'},
		{sound: 'hi', char: '&#12498;', kana: 'Katakana', type: 'Basic'},
		{sound: 'fu', char: '&#12501;', kana: 'Katakana', type: 'Basic'},
		{sound: 'he', char: '&#12504;', kana: 'Katakana', type: 'Basic'},
		{sound: 'ho', char: '&#12507;', kana: 'Katakana', type: 'Basic'},

		{sound: 'ma', char: '&#12510;', kana: 'Katakana', type: 'Basic'},
		{sound: 'mi', char: '&#12511;', kana: 'Katakana', type: 'Basic'},
		{sound: 'mu', char: '&#12512;', kana: 'Katakana', type: 'Basic'},
		{sound: 'me', char: '&#12513;', kana: 'Katakana', type: 'Basic'},
		{sound: 'mo', char: '&#12514;', kana: 'Katakana', type: 'Basic'},

		{sound: 'ya', char: '&#12516;', kana: 'Katakana', type: 'Basic'},
		{sound: 'yu', char: '&#12518;', kana: 'Katakana', type: 'Basic'},
		{sound: 'yo', char: '&#12520;', kana: 'Katakana', type: 'Basic'},

		{sound: 'ra', char: '&#12521;', kana: 'Katakana', type: 'Basic'},
		{sound: 'ri', char: '&#12522;', kana: 'Katakana', type: 'Basic'},
		{sound: 'ru', char: '&#12523;', kana: 'Katakana', type: 'Basic'},
		{sound: 're', char: '&#12524;', kana: 'Katakana', type: 'Basic'},
		{sound: 'ro', char: '&#12525;', kana: 'Katakana', type: 'Basic'},

		{sound: 'wa', char: '&#12527;', kana: 'Katakana', type: 'Basic'},
		{sound: 'wo', char: '&#12530;', kana: 'Katakana', type: 'Basic'},

		{sound: 'n', char: '&#12531;', kana: 'Katakana', type: 'Basic'},


		// Voiced Katakana
		{sound: 'ga', char: '&#12460;', kana: 'Katakana', type: 'Voiced'},
		{sound: 'gi', char: '&#12462;', kana: 'Katakana', type: 'Voiced'},
		{sound: 'gu', char: '&#12464;', kana: 'Katakana', type: 'Voiced'},
		{sound: 'ge', char: '&#12466;', kana: 'Katakana', type: 'Voiced'},
		{sound: 'go', char: '&#12468;', kana: 'Katakana', type: 'Voiced'},

		{sound: 'za', char: '&#12470;', kana: 'Katakana', type: 'Voiced'},
		{sound: 'ji', char: '&#12472;', kana: 'Katakana', type: 'Voiced'},
		{sound: 'zu', char: '&#12474;', kana: 'Katakana', type: 'Voiced'},
		{sound: 'ze', char: '&#12476;', kana: 'Katakana', type: 'Voiced'},
		{sound: 'zo', char: '&#12478;', kana: 'Katakana', type: 'Voiced'},

		{sound: 'da', char: '&#12480;', kana: 'Katakana', type: 'Voiced'},
		{sound: 'ji', char: '&#12482;', kana: 'Katakana', type: 'Voiced'},
		{sound: 'dzu', char: '&#12485;', kana: 'Katakana', type: 'Voiced'},
		{sound: 'de', char: '&#12487;', kana: 'Katakana', type: 'Voiced'},
		{sound: 'do', char: '&#12489;', kana: 'Katakana', type: 'Voiced'},

		{sound: 'ba', char: '&#12496;', kana: 'Katakana', type: 'Voiced'},
		{sound: 'bi', char: '&#12499;', kana: 'Katakana', type: 'Voiced'},
		{sound: 'bu', char: '&#12502;', kana: 'Katakana', type: 'Voiced'},
		{sound: 'be', char: '&#12505;', kana: 'Katakana', type: 'Voiced'},
		{sound: 'bo', char: '&#12508;', kana: 'Katakana', type: 'Voiced'},

		{sound: 'pa', char: '&#12497;', kana: 'Katakana', type: 'Voiced'},
		{sound: 'pi', char: '&#12500;', kana: 'Katakana', type: 'Voiced'},
		{sound: 'pu', char: '&#12503;', kana: 'Katakana', type: 'Voiced'},
		{sound: 'pe', char: '&#12506;', kana: 'Katakana', type: 'Voiced'},
		{sound: 'po', char: '&#12509;', kana: 'Katakana', type: 'Voiced'},


		// Combo Katakana
		{sound: 'kya', char: '&#12461;&#12515;', kana: 'Katakana', type: 'Combo'},
		{sound: 'kyu', char: '&#12461;&#12517;', kana: 'Katakana', type: 'Combo'},
		{sound: 'kyo', char: '&#12461;&#12519;', kana: 'Katakana', type: 'Combo'},

		{sound: 'sha', char: '&#12471;&#12515;', kana: 'Katakana', type: 'Combo'},
		{sound: 'shu', char: '&#12471;&#12517;', kana: 'Katakana', type: 'Combo'},
		{sound: 'sho', char: '&#12471;&#12519;', kana: 'Katakana', type: 'Combo'},

		{sound: 'cha', char: '&#12481;&#12515;', kana: 'Katakana', type: 'Combo'},
		{sound: 'chu', char: '&#12481;&#12517;', kana: 'Katakana', type: 'Combo'},
		{sound: 'cho', char: '&#12481;&#12519;', kana: 'Katakana', type: 'Combo'},

		{sound: 'nya', char: '&#12491;&#12515;', kana: 'Katakana', type: 'Combo'},
		{sound: 'nyu', char: '&#12491;&#12517;', kana: 'Katakana', type: 'Combo'},
		{sound: 'nyo', char: '&#12491;&#12519;', kana: 'Katakana', type: 'Combo'},

		{sound: 'hya', char: '&#12498;&#12515;', kana: 'Katakana', type: 'Combo'},
		{sound: 'hyu', char: '&#12498;&#12517;', kana: 'Katakana', type: 'Combo'},
		{sound: 'hyo', char: '&#12498;&#12519;', kana: 'Katakana', type: 'Combo'},

		{sound: 'mya', char: '&#12511;&#12515;', kana: 'Katakana', type: 'Combo'},
		{sound: 'myu', char: '&#12511;&#12517;', kana: 'Katakana', type: 'Combo'},
		{sound: 'myo', char: '&#12511;&#12519;', kana: 'Katakana', type: 'Combo'},

		{sound: 'rya', char: '&#12522;&#12515;', kana: 'Katakana', type: 'Combo'},
		{sound: 'ryu', char: '&#12522;&#12517;', kana: 'Katakana', type: 'Combo'},
		{sound: 'ryo', char: '&#12522;&#12519;', kana: 'Katakana', type: 'Combo'},

		{sound: 'gya', char: '&#12462;&#12515;', kana: 'Katakana', type: 'Combo'},
		{sound: 'gyu', char: '&#12462;&#12517;', kana: 'Katakana', type: 'Combo'},
		{sound: 'gyo', char: '&#12462;&#12519;', kana: 'Katakana', type: 'Combo'},
		
		{sound: 'jya', char: '&#12472;&#12515;', kana: 'Katakana', type: 'Combo'},
		{sound: 'jyu', char: '&#12472;&#12517;', kana: 'Katakana', type: 'Combo'},
		{sound: 'jyo', char: '&#12472;&#12519;', kana: 'Katakana', type: 'Combo'},

		{sound: 'bya', char: '&#12499;&#12515;', kana: 'Katakana', type: 'Combo'},
		{sound: 'byu', char: '&#12499;&#12517;', kana: 'Katakana', type: 'Combo'},
		{sound: 'byo', char: '&#12499;&#12519;', kana: 'Katakana', type: 'Combo'},

		{sound: 'pya', char: '&#12500;&#12515;', kana: 'Katakana', type: 'Combo'},
		{sound: 'pyu', char: '&#12500;&#12517;', kana: 'Katakana', type: 'Combo'},
		{sound: 'pyo', char: '&#12500;&#12519;', kana: 'Katakana', type: 'Combo'},
	];

	this.selectKanaType = function(kanaChoice, typeChoice) {
		var selectKanaList = [];
		length = this.kana_chart.length;

		for (i = 0; i < length; i++) {
			kanaObject = this.kana_chart[i];

			if ((kanaObject.kana === kanaChoice) && (kanaObject.type === typeChoice)) {
				selectKanaList.push(kanaObject);
			}
		}

		return selectKanaList;
	};
});
