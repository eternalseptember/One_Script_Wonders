KanaFlash.service('kanaChartService', function() {
	this.kana_chart = [
		// Basic Hiragana
		{sound: 'a', char: '&#12354;', kana: 'Hiragana', type: 'basic'},
		{sound: 'i', char: '&#12356;', kana: 'Hiragana', type: 'basic'},
		{sound: 'u', char: '&#12358;', kana: 'Hiragana', type: 'basic'},
		{sound: 'e', char: '&#12360;', kana: 'Hiragana', type: 'basic'},
		{sound: 'o', char: '&#12362;', kana: 'Hiragana', type: 'basic'},

		{sound: 'ka', char: '&#12363;', kana: 'Hiragana', type: 'basic'},
		{sound: 'ki', char: '&#12365;', kana: 'Hiragana', type: 'basic'},
		{sound: 'ku', char: '&#12367;', kana: 'Hiragana', type: 'basic'},
		{sound: 'ke', char: '&#12369;', kana: 'Hiragana', type: 'basic'},
		{sound: 'ko', char: '&#12371;', kana: 'Hiragana', type: 'basic'},

		{sound: 'sa', char: '&#12373;', kana: 'Hiragana', type: 'basic'},
		{sound: 'shi', char: '&#12375;', kana: 'Hiragana', type: 'basic'},
		{sound: 'su', char: '&#12377;', kana: 'Hiragana', type: 'basic'},
		{sound: 'se', char: '&#12379;', kana: 'Hiragana', type: 'basic'},
		{sound: 'so', char: '&#12381;', kana: 'Hiragana', type: 'basic'},

		{sound: 'ta', char: '&#12383;', kana: 'Hiragana', type: 'basic'},
		{sound: 'chi', char: '&#12385;', kana: 'Hiragana', type: 'basic'},
		{sound: 'tsu', char: '&#12388;', kana: 'Hiragana', type: 'basic'},
		{sound: 'te', char: '&#12390;', kana: 'Hiragana', type: 'basic'},
		{sound: 'to', char: '&#12392;', kana: 'Hiragana', type: 'basic'},

		{sound: 'na', char: '&#12394;', kana: 'Hiragana', type: 'basic'},
		{sound: 'ni', char: '&#12395;', kana: 'Hiragana', type: 'basic'},
		{sound: 'nu', char: '&#12396;', kana: 'Hiragana', type: 'basic'},
		{sound: 'ne', char: '&#12397;', kana: 'Hiragana', type: 'basic'},
		{sound: 'no', char: '&#12398;', kana: 'Hiragana', type: 'basic'},

		{sound: 'ha', char: '&#12399;', kana: 'Hiragana', type: 'basic'},
		{sound: 'hi', char: '&#12402;', kana: 'Hiragana', type: 'basic'},
		{sound: 'fu', char: '&#12405;', kana: 'Hiragana', type: 'basic'},
		{sound: 'he', char: '&#12408;', kana: 'Hiragana', type: 'basic'},
		{sound: 'ho', char: '&#12411;', kana: 'Hiragana', type: 'basic'},

		{sound: 'ma', char: '&#12414;', kana: 'Hiragana', type: 'basic'},
		{sound: 'mi', char: '&#12415;', kana: 'Hiragana', type: 'basic'},
		{sound: 'mu', char: '&#12416;', kana: 'Hiragana', type: 'basic'},
		{sound: 'me', char: '&#12417;', kana: 'Hiragana', type: 'basic'},
		{sound: 'mo', char: '&#12418;', kana: 'Hiragana', type: 'basic'},

		{sound: 'ya', char: '&#12420;', kana: 'Hiragana', type: 'basic'},
		{sound: 'yu', char: '&#12422;', kana: 'Hiragana', type: 'basic'},
		{sound: 'yo', char: '&#12424;', kana: 'Hiragana', type: 'basic'},

		{sound: 'ra', char: '&#12425;', kana: 'Hiragana', type: 'basic'},
		{sound: 'ri', char: '&#12426;', kana: 'Hiragana', type: 'basic'},
		{sound: 'ru', char: '&#12427;', kana: 'Hiragana', type: 'basic'},
		{sound: 're', char: '&#12428;', kana: 'Hiragana', type: 'basic'},
		{sound: 'ro', char: '&#12429;', kana: 'Hiragana', type: 'basic'},

		{sound: 'wa', char: '&#12431;', kana: 'Hiragana', type: 'basic'},
		{sound: 'wo', char: '&#12434;', kana: 'Hiragana', type: 'basic'},

		{sound: 'n', char: '&#12435;', kana: 'Hiragana', type: 'basic'},


		// Voiced Hiragana
		{sound: 'ga', char: '&#12364;', kana: 'Hiragana', type: 'voiced'},
		{sound: 'gi', char: '&#12366;', kana: 'Hiragana', type: 'voiced'},
		{sound: 'gu', char: '&#12368;', kana: 'Hiragana', type: 'voiced'},
		{sound: 'ge', char: '&#12370;', kana: 'Hiragana', type: 'voiced'},
		{sound: 'go', char: '&#12372;', kana: 'Hiragana', type: 'voiced'},

		{sound: 'za', char: '&#12374;', kana: 'Hiragana', type: 'voiced'},
		{sound: 'ji', char: '&#12376;', kana: 'Hiragana', type: 'voiced'},
		{sound: 'zu', char: '&#12378;', kana: 'Hiragana', type: 'voiced'},
		{sound: 'ze', char: '&#12380;', kana: 'Hiragana', type: 'voiced'},
		{sound: 'zo', char: '&#12382;', kana: 'Hiragana', type: 'voiced'},

		{sound: 'da', char: '&#12384;', kana: 'Hiragana', type: 'voiced'},
		{sound: 'ji', char: '&#12386;', kana: 'Hiragana', type: 'voiced'},
		{sound: 'dzu', char: '&#12389;', kana: 'Hiragana', type: 'voiced'},
		{sound: 'de', char: '&#12391;', kana: 'Hiragana', type: 'voiced'},
		{sound: 'do', char: '&#12393;', kana: 'Hiragana', type: 'voiced'},

		{sound: 'ba', char: '&#12400;', kana: 'Hiragana', type: 'voiced'},
		{sound: 'bi', char: '&#12403;', kana: 'Hiragana', type: 'voiced'},
		{sound: 'bu', char: '&#12406;', kana: 'Hiragana', type: 'voiced'},
		{sound: 'be', char: '&#12409;', kana: 'Hiragana', type: 'voiced'},
		{sound: 'bo', char: '&#12412;', kana: 'Hiragana', type: 'voiced'},

		{sound: 'pa', char: '&#12401;', kana: 'Hiragana', type: 'voiced'},
		{sound: 'pi', char: '&#12404;', kana: 'Hiragana', type: 'voiced'},
		{sound: 'pu', char: '&#12407;', kana: 'Hiragana', type: 'voiced'},
		{sound: 'pe', char: '&#12410;', kana: 'Hiragana', type: 'voiced'},
		{sound: 'po', char: '&#12413;', kana: 'Hiragana', type: 'voiced'},


		// Combo Hiragana
		{sound: 'kya', char: '&#12365;&#12419;', kana: 'Hiragana', type: 'combo'},
		{sound: 'kyu', char: '&#12365;&#12421;', kana: 'Hiragana', type: 'combo'},
		{sound: 'kyo', char: '&#12365;&#12423;', kana: 'Hiragana', type: 'combo'},

		{sound: 'sha', char: '&#12375;&#12419;', kana: 'Hiragana', type: 'combo'},
		{sound: 'shu', char: '&#12375;&#12421;', kana: 'Hiragana', type: 'combo'},
		{sound: 'sho', char: '&#12375;&#12423;', kana: 'Hiragana', type: 'combo'},

		{sound: 'cha', char: '&#12385;&#12419;', kana: 'Hiragana', type: 'combo'},
		{sound: 'chu', char: '&#12385;&#12421;', kana: 'Hiragana', type: 'combo'},
		{sound: 'cho', char: '&#12385;&#12423;', kana: 'Hiragana', type: 'combo'},

		{sound: 'nya', char: '&#12395;&#12419;', kana: 'Hiragana', type: 'combo'},
		{sound: 'nyu', char: '&#12395;&#12421;', kana: 'Hiragana', type: 'combo'},
		{sound: 'nyo', char: '&#12395;&#12423;', kana: 'Hiragana', type: 'combo'},

		{sound: 'hya', char: '&#12402;&#12419;', kana: 'Hiragana', type: 'combo'},
		{sound: 'hyu', char: '&#12402;&#12421;', kana: 'Hiragana', type: 'combo'},
		{sound: 'hyo', char: '&#12402;&#12423;', kana: 'Hiragana', type: 'combo'},

		{sound: 'mya', char: '&#12415;&#12419;', kana: 'Hiragana', type: 'combo'},
		{sound: 'myu', char: '&#12415;&#12421;', kana: 'Hiragana', type: 'combo'},
		{sound: 'myo', char: '&#12415;&#12423;', kana: 'Hiragana', type: 'combo'},

		{sound: 'rya', char: '&#12426;&#12419;', kana: 'Hiragana', type: 'combo'},
		{sound: 'ryu', char: '&#12426;&#12421;', kana: 'Hiragana', type: 'combo'},
		{sound: 'ryo', char: '&#12426;&#12423;', kana: 'Hiragana', type: 'combo'},

		{sound: 'gya', char: '&#12366;&#12419;', kana: 'Hiragana', type: 'combo'},
		{sound: 'gyu', char: '&#12366;&#12421;', kana: 'Hiragana', type: 'combo'},
		{sound: 'gyo', char: '&#12366;&#12423;', kana: 'Hiragana', type: 'combo'},

		{sound: 'jya', char: '&#12376;&#12419;', kana: 'Hiragana', type: 'combo'},
		{sound: 'jyu', char: '&#12376;&#12421;', kana: 'Hiragana', type: 'combo'},
		{sound: 'jyo', char: '&#12376;&#12423;', kana: 'Hiragana', type: 'combo'},

		{sound: 'bya', char: '&#12403;&#12419;', kana: 'Hiragana', type: 'combo'},
		{sound: 'byu', char: '&#12403;&#12421;', kana: 'Hiragana', type: 'combo'},
		{sound: 'byo', char: '&#12403;&#12423;', kana: 'Hiragana', type: 'combo'},

		{sound: 'pya', char: '&#12404;&#12419;', kana: 'Hiragana', type: 'combo'},
		{sound: 'pyu', char: '&#12404;&#12421;', kana: 'Hiragana', type: 'combo'},
		{sound: 'pyo', char: '&#12404;&#12423;', kana: 'Hiragana', type: 'combo'},


		// Basic Katakana
		{sound: 'a', char: '&#12450;', kana: 'Katakana', type: 'basic'},
		{sound: 'i', char: '&#12452;', kana: 'Katakana', type: 'basic'},
		{sound: 'u', char: '&#12454;', kana: 'Katakana', type: 'basic'},
		{sound: 'e', char: '&#12456;', kana: 'Katakana', type: 'basic'},
		{sound: 'o', char: '&#12458;', kana: 'Katakana', type: 'basic'},

		{sound: 'ka', char: '&#12459;', kana: 'Katakana', type: 'basic'},
		{sound: 'ki', char: '&#12461;', kana: 'Katakana', type: 'basic'},
		{sound: 'ku', char: '&#12463;', kana: 'Katakana', type: 'basic'},
		{sound: 'ke', char: '&#12465;', kana: 'Katakana', type: 'basic'},
		{sound: 'ko', char: '&#12467;', kana: 'Katakana', type: 'basic'},

		{sound: 'sa', char: '&#12469;', kana: 'Katakana', type: 'basic'},
		{sound: 'shi', char: '&#12471;', kana: 'Katakana', type: 'basic'},
		{sound: 'su', char: '&#12473;', kana: 'Katakana', type: 'basic'},
		{sound: 'se', char: '&#12475;', kana: 'Katakana', type: 'basic'},
		{sound: 'so', char: '&#12477;', kana: 'Katakana', type: 'basic'},

		{sound: 'ta', char: '&#12479;', kana: 'Katakana', type: 'basic'},
		{sound: 'chi', char: '&#12481;', kana: 'Katakana', type: 'basic'},
		{sound: 'tsu', char: '&#12484;', kana: 'Katakana', type: 'basic'},
		{sound: 'te', char: '&#12486;', kana: 'Katakana', type: 'basic'},
		{sound: 'to', char: '&#12488;', kana: 'Katakana', type: 'basic'},

		{sound: 'na', char: '&#12490;', kana: 'Katakana', type: 'basic'},
		{sound: 'ni', char: '&#12491;', kana: 'Katakana', type: 'basic'},
		{sound: 'nu', char: '&#12492;', kana: 'Katakana', type: 'basic'},
		{sound: 'ne', char: '&#12493;', kana: 'Katakana', type: 'basic'},
		{sound: 'no', char: '&#12494;', kana: 'Katakana', type: 'basic'},

		{sound: 'ha', char: '&#12495;', kana: 'Katakana', type: 'basic'},
		{sound: 'hi', char: '&#12498;', kana: 'Katakana', type: 'basic'},
		{sound: 'fu', char: '&#12501;', kana: 'Katakana', type: 'basic'},
		{sound: 'he', char: '&#12504;', kana: 'Katakana', type: 'basic'},
		{sound: 'ho', char: '&#12507;', kana: 'Katakana', type: 'basic'},

		{sound: 'ma', char: '&#12510;', kana: 'Katakana', type: 'basic'},
		{sound: 'mi', char: '&#12511;', kana: 'Katakana', type: 'basic'},
		{sound: 'mu', char: '&#12512;', kana: 'Katakana', type: 'basic'},
		{sound: 'me', char: '&#12513;', kana: 'Katakana', type: 'basic'},
		{sound: 'mo', char: '&#12514;', kana: 'Katakana', type: 'basic'},

		{sound: 'ya', char: '&#12516;', kana: 'Katakana', type: 'basic'},
		{sound: 'yu', char: '&#12518;', kana: 'Katakana', type: 'basic'},
		{sound: 'yo', char: '&#12520;', kana: 'Katakana', type: 'basic'},

		{sound: 'ra', char: '&#12521;', kana: 'Katakana', type: 'basic'},
		{sound: 'ri', char: '&#12522;', kana: 'Katakana', type: 'basic'},
		{sound: 'ru', char: '&#12523;', kana: 'Katakana', type: 'basic'},
		{sound: 're', char: '&#12524;', kana: 'Katakana', type: 'basic'},
		{sound: 'ro', char: '&#12525;', kana: 'Katakana', type: 'basic'},

		{sound: 'wa', char: '&#12527;', kana: 'Katakana', type: 'basic'},
		{sound: 'wo', char: '&#12530;', kana: 'Katakana', type: 'basic'},

		{sound: 'n', char: '&#12531;', kana: 'Katakana', type: 'basic'},


		// Voiced Katakana
		{sound: 'ga', char: '&#12460;', kana: 'Katakana', type: 'voiced'},
		{sound: 'gi', char: '&#12462;', kana: 'Katakana', type: 'voiced'},
		{sound: 'gu', char: '&#12464;', kana: 'Katakana', type: 'voiced'},
		{sound: 'ge', char: '&#12466;', kana: 'Katakana', type: 'voiced'},
		{sound: 'go', char: '&#12468;', kana: 'Katakana', type: 'voiced'},

		{sound: 'za', char: '&#12470;', kana: 'Katakana', type: 'voiced'},
		{sound: 'ji', char: '&#12472;', kana: 'Katakana', type: 'voiced'},
		{sound: 'zu', char: '&#12474;', kana: 'Katakana', type: 'voiced'},
		{sound: 'ze', char: '&#12476;', kana: 'Katakana', type: 'voiced'},
		{sound: 'zo', char: '&#12478;', kana: 'Katakana', type: 'voiced'},

		{sound: 'da', char: '&#12480;', kana: 'Katakana', type: 'voiced'},
		{sound: 'ji', char: '&#12482;', kana: 'Katakana', type: 'voiced'},
		{sound: 'dzu', char: '&#12485;', kana: 'Katakana', type: 'voiced'},
		{sound: 'de', char: '&#12487;', kana: 'Katakana', type: 'voiced'},
		{sound: 'do', char: '&#12489;', kana: 'Katakana', type: 'voiced'},

		{sound: 'ba', char: '&#12496;', kana: 'Katakana', type: 'voiced'},
		{sound: 'bi', char: '&#12499;', kana: 'Katakana', type: 'voiced'},
		{sound: 'bu', char: '&#12502;', kana: 'Katakana', type: 'voiced'},
		{sound: 'be', char: '&#12505;', kana: 'Katakana', type: 'voiced'},
		{sound: 'bo', char: '&#12508;', kana: 'Katakana', type: 'voiced'},

		{sound: 'pa', char: '&#12497;', kana: 'Katakana', type: 'voiced'},
		{sound: 'pi', char: '&#12500;', kana: 'Katakana', type: 'voiced'},
		{sound: 'pu', char: '&#12503;', kana: 'Katakana', type: 'voiced'},
		{sound: 'pe', char: '&#12506;', kana: 'Katakana', type: 'voiced'},
		{sound: 'po', char: '&#12509;', kana: 'Katakana', type: 'voiced'},


		// Combo Katakana
		{sound: 'kya', char: '&#12461;&#12515;', kana: 'Katakana', type: 'combo'},
		{sound: 'kyu', char: '&#12461;&#12517;', kana: 'Katakana', type: 'combo'},
		{sound: 'kyo', char: '&#12461;&#12519;', kana: 'Katakana', type: 'combo'},

		{sound: 'sha', char: '&#12471;&#12515;', kana: 'Katakana', type: 'combo'},
		{sound: 'shu', char: '&#12471;&#12517;', kana: 'Katakana', type: 'combo'},
		{sound: 'sho', char: '&#12471;&#12519;', kana: 'Katakana', type: 'combo'},

		{sound: 'cha', char: '&#12481;&#12515;', kana: 'Katakana', type: 'combo'},
		{sound: 'chu', char: '&#12481;&#12517;', kana: 'Katakana', type: 'combo'},
		{sound: 'cho', char: '&#12481;&#12519;', kana: 'Katakana', type: 'combo'},

		{sound: 'nya', char: '&#12491;&#12515;', kana: 'Katakana', type: 'combo'},
		{sound: 'nyu', char: '&#12491;&#12517;', kana: 'Katakana', type: 'combo'},
		{sound: 'nyo', char: '&#12491;&#12519;', kana: 'Katakana', type: 'combo'},

		{sound: 'hya', char: '&#12498;&#12515;', kana: 'Katakana', type: 'combo'},
		{sound: 'hyu', char: '&#12498;&#12517;', kana: 'Katakana', type: 'combo'},
		{sound: 'hyo', char: '&#12498;&#12519;', kana: 'Katakana', type: 'combo'},

		{sound: 'mya', char: '&#12511;&#12515;', kana: 'Katakana', type: 'combo'},
		{sound: 'myu', char: '&#12511;&#12517;', kana: 'Katakana', type: 'combo'},
		{sound: 'myo', char: '&#12511;&#12519;', kana: 'Katakana', type: 'combo'},

		{sound: 'rya', char: '&#12522;&#12515;', kana: 'Katakana', type: 'combo'},
		{sound: 'ryu', char: '&#12522;&#12517;', kana: 'Katakana', type: 'combo'},
		{sound: 'ryo', char: '&#12522;&#12519;', kana: 'Katakana', type: 'combo'},

		{sound: 'gya', char: '&#12462;&#12515;', kana: 'Katakana', type: 'combo'},
		{sound: 'gyu', char: '&#12462;&#12517;', kana: 'Katakana', type: 'combo'},
		{sound: 'gyo', char: '&#12462;&#12519;', kana: 'Katakana', type: 'combo'},
		
		{sound: 'jya', char: '&#12472;&#12515;', kana: 'Katakana', type: 'combo'},
		{sound: 'jyu', char: '&#12472;&#12517;', kana: 'Katakana', type: 'combo'},
		{sound: 'jyo', char: '&#12472;&#12519;', kana: 'Katakana', type: 'combo'},

		{sound: 'bya', char: '&#12499;&#12515;', kana: 'Katakana', type: 'combo'},
		{sound: 'byu', char: '&#12499;&#12517;', kana: 'Katakana', type: 'combo'},
		{sound: 'byo', char: '&#12499;&#12519;', kana: 'Katakana', type: 'combo'},

		{sound: 'pya', char: '&#12500;&#12515;', kana: 'Katakana', type: 'combo'},
		{sound: 'pyu', char: '&#12500;&#12517;', kana: 'Katakana', type: 'combo'},
		{sound: 'pyo', char: '&#12500;&#12519;', kana: 'Katakana', type: 'combo'},


	]
});
