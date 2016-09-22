KanaFlash.service('kanaChartService', function() {
	this.kana_chart = [
		// Basic Hiragana
		{sound: 'a', char: '&#12354;', kana: 'hiragana', type: 'basic'},
		{sound: 'i', char: '&#12356;', kana: 'hiragana', type: 'basic'},
		{sound: 'u', char: '&#12358;', kana: 'hiragana', type: 'basic'},
		{sound: 'e', char: '&#12360;', kana: 'hiragana', type: 'basic'},
		{sound: 'o', char: '&#12362;', kana: 'hiragana', type: 'basic'},

		{sound: 'ka', char: '&#12363;', kana: 'hiragana', type: 'basic'},
		{sound: 'ki', char: '&#12365;', kana: 'hiragana', type: 'basic'},
		{sound: 'ku', char: '&#12367;', kana: 'hiragana', type: 'basic'},
		{sound: 'ke', char: '&#12369;', kana: 'hiragana', type: 'basic'},
		{sound: 'ko', char: '&#12371;', kana: 'hiragana', type: 'basic'},

		{sound: 'sa', char: '&#12373;', kana: 'hiragana', type: 'basic'},
		{sound: 'shi', char: '&#12375;', kana: 'hiragana', type: 'basic'},
		{sound: 'su', char: '&#12377;', kana: 'hiragana', type: 'basic'},
		{sound: 'se', char: '&#12379;', kana: 'hiragana', type: 'basic'},
		{sound: 'so', char: '&#12381;', kana: 'hiragana', type: 'basic'},

		{sound: 'ta', char: '&#12383;', kana: 'hiragana', type: 'basic'},
		{sound: 'chi', char: '&#12385;', kana: 'hiragana', type: 'basic'},
		{sound: 'tsu', char: '&#12388;', kana: 'hiragana', type: 'basic'},
		{sound: 'te', char: '&#12390;', kana: 'hiragana', type: 'basic'},
		{sound: 'to', char: '&#12392;', kana: 'hiragana', type: 'basic'},

		{sound: 'na', char: '&#12394;', kana: 'hiragana', type: 'basic'},
		{sound: 'ni', char: '&#12395;', kana: 'hiragana', type: 'basic'},
		{sound: 'nu', char: '&#12396;', kana: 'hiragana', type: 'basic'},
		{sound: 'ne', char: '&#12397;', kana: 'hiragana', type: 'basic'},
		{sound: 'no', char: '&#12398;', kana: 'hiragana', type: 'basic'},

		{sound: 'ha', char: '&#12399;', kana: 'hiragana', type: 'basic'},
		{sound: 'hi', char: '&#12402;', kana: 'hiragana', type: 'basic'},
		{sound: 'fu', char: '&#12405;', kana: 'hiragana', type: 'basic'},
		{sound: 'he', char: '&#12408;', kana: 'hiragana', type: 'basic'},
		{sound: 'ho', char: '&#12411;', kana: 'hiragana', type: 'basic'},

		{sound: 'ma', char: '&#12414;', kana: 'hiragana', type: 'basic'},
		{sound: 'mi', char: '&#12415;', kana: 'hiragana', type: 'basic'},
		{sound: 'mu', char: '&#12416;', kana: 'hiragana', type: 'basic'},
		{sound: 'me', char: '&#12417;', kana: 'hiragana', type: 'basic'},
		{sound: 'mo', char: '&#12418;', kana: 'hiragana', type: 'basic'},

		{sound: 'ya', char: '&#12420;', kana: 'hiragana', type: 'basic'},
		{sound: 'yu', char: '&#12422;', kana: 'hiragana', type: 'basic'},
		{sound: 'yo', char: '&#12424;', kana: 'hiragana', type: 'basic'},

		{sound: 'ra', char: '&#12425;', kana: 'hiragana', type: 'basic'},
		{sound: 'ri', char: '&#12426;', kana: 'hiragana', type: 'basic'},
		{sound: 'ru', char: '&#12427;', kana: 'hiragana', type: 'basic'},
		{sound: 're', char: '&#12428;', kana: 'hiragana', type: 'basic'},
		{sound: 'ro', char: '&#12429;', kana: 'hiragana', type: 'basic'},

		{sound: 'wa', char: '&#12431;', kana: 'hiragana', type: 'basic'},
		{sound: 'wo', char: '&#12434;', kana: 'hiragana', type: 'basic'},

		{sound: 'n', char: '&#12435;', kana: 'hiragana', type: 'basic'},


		// Voiced Hiragana
		{sound: 'ga', char: '&#12364;', kana: 'hiragana', type: 'voiced'},
		{sound: 'gi', char: '&#12366;', kana: 'hiragana', type: 'voiced'},
		{sound: 'gu', char: '&#12368;', kana: 'hiragana', type: 'voiced'},
		{sound: 'ge', char: '&#12370;', kana: 'hiragana', type: 'voiced'},
		{sound: 'go', char: '&#12372;', kana: 'hiragana', type: 'voiced'},

		{sound: 'za', char: '&#12374;', kana: 'hiragana', type: 'voiced'},
		{sound: 'ji', char: '&#12376;', kana: 'hiragana', type: 'voiced'},
		{sound: 'zu', char: '&#12378;', kana: 'hiragana', type: 'voiced'},
		{sound: 'ze', char: '&#12380;', kana: 'hiragana', type: 'voiced'},
		{sound: 'zo', char: '&#12382;', kana: 'hiragana', type: 'voiced'},

		{sound: 'da', char: '&#12384;', kana: 'hiragana', type: 'voiced'},
		{sound: 'ji', char: '&#12386;', kana: 'hiragana', type: 'voiced'},
		{sound: 'dzu', char: '&#12389;', kana: 'hiragana', type: 'voiced'},
		{sound: 'de', char: '&#12391;', kana: 'hiragana', type: 'voiced'},
		{sound: 'do', char: '&#12393;', kana: 'hiragana', type: 'voiced'},

		{sound: 'ba', char: '&#12400;', kana: 'hiragana', type: 'voiced'},
		{sound: 'bi', char: '&#12403;', kana: 'hiragana', type: 'voiced'},
		{sound: 'bu', char: '&#12406;', kana: 'hiragana', type: 'voiced'},
		{sound: 'be', char: '&#12409;', kana: 'hiragana', type: 'voiced'},
		{sound: 'bo', char: '&#12412;', kana: 'hiragana', type: 'voiced'},

		{sound: 'pa', char: '&#12401;', kana: 'hiragana', type: 'voiced'},
		{sound: 'pi', char: '&#12404;', kana: 'hiragana', type: 'voiced'},
		{sound: 'pu', char: '&#12407;', kana: 'hiragana', type: 'voiced'},
		{sound: 'pe', char: '&#12410;', kana: 'hiragana', type: 'voiced'},
		{sound: 'po', char: '&#12413;', kana: 'hiragana', type: 'voiced'},


		// Combo Hiragana
		{sound: 'kya', char: '&#12365;&#12419;', kana: 'hiragana', type: 'combo'},
		{sound: 'kyu', char: '&#12365;&#12421;', kana: 'hiragana', type: 'combo'},
		{sound: 'kyo', char: '&#12365;&#12423;', kana: 'hiragana', type: 'combo'},

		{sound: 'sha', char: '&#12375;&#12419;', kana: 'hiragana', type: 'combo'},
		{sound: 'shu', char: '&#12375;&#12421;', kana: 'hiragana', type: 'combo'},
		{sound: 'sho', char: '&#12375;&#12423;', kana: 'hiragana', type: 'combo'},

		{sound: 'cha', char: '&#12385;&#12419;', kana: 'hiragana', type: 'combo'},
		{sound: 'chu', char: '&#12385;&#12421;', kana: 'hiragana', type: 'combo'},
		{sound: 'cho', char: '&#12385;&#12423;', kana: 'hiragana', type: 'combo'},

		{sound: 'nya', char: '&#12395;&#12419;', kana: 'hiragana', type: 'combo'},
		{sound: 'nyu', char: '&#12395;&#12421;', kana: 'hiragana', type: 'combo'},
		{sound: 'nyo', char: '&#12395;&#12423;', kana: 'hiragana', type: 'combo'},

		{sound: 'hya', char: '&#12402;&#12419;', kana: 'hiragana', type: 'combo'},
		{sound: 'hyu', char: '&#12402;&#12421;', kana: 'hiragana', type: 'combo'},
		{sound: 'hyo', char: '&#12402;&#12423;', kana: 'hiragana', type: 'combo'},

		{sound: 'mya', char: '&#12415;&#12419;', kana: 'hiragana', type: 'combo'},
		{sound: 'myu', char: '&#12415;&#12421;', kana: 'hiragana', type: 'combo'},
		{sound: 'myo', char: '&#12415;&#12423;', kana: 'hiragana', type: 'combo'},

		{sound: 'rya', char: '&#12426;&#12419;', kana: 'hiragana', type: 'combo'},
		{sound: 'ryu', char: '&#12426;&#12421;', kana: 'hiragana', type: 'combo'},
		{sound: 'ryo', char: '&#12426;&#12423;', kana: 'hiragana', type: 'combo'},

		{sound: 'gya', char: '&#12366;&#12419;', kana: 'hiragana', type: 'combo'},
		{sound: 'gyu', char: '&#12366;&#12421;', kana: 'hiragana', type: 'combo'},
		{sound: 'gyo', char: '&#12366;&#12423;', kana: 'hiragana', type: 'combo'},

		{sound: 'jya', char: '&#12376;&#12419;', kana: 'hiragana', type: 'combo'},
		{sound: 'jyu', char: '&#12376;&#12421;', kana: 'hiragana', type: 'combo'},
		{sound: 'jyo', char: '&#12376;&#12423;', kana: 'hiragana', type: 'combo'},

		{sound: 'bya', char: '&#12403;&#12419;', kana: 'hiragana', type: 'combo'},
		{sound: 'byu', char: '&#12403;&#12421;', kana: 'hiragana', type: 'combo'},
		{sound: 'byo', char: '&#12403;&#12423;', kana: 'hiragana', type: 'combo'},

		{sound: 'pya', char: '&#12404;&#12419;', kana: 'hiragana', type: 'combo'},
		{sound: 'pyu', char: '&#12404;&#12421;', kana: 'hiragana', type: 'combo'},
		{sound: 'pyo', char: '&#12404;&#12423;', kana: 'hiragana', type: 'combo'},


		// Basic Katakana
		{sound: 'a', char: '&#12450;', kana: 'katakana', type: 'basic'},
		{sound: 'i', char: '&#12452;', kana: 'katakana', type: 'basic'},
		{sound: 'u', char: '&#12454;', kana: 'katakana', type: 'basic'},
		{sound: 'e', char: '&#12456;', kana: 'katakana', type: 'basic'},
		{sound: 'o', char: '&#12458;', kana: 'katakana', type: 'basic'},

		{sound: 'ka', char: '&#12459;', kana: 'katakana', type: 'basic'},
		{sound: 'ki', char: '&#12461;', kana: 'katakana', type: 'basic'},
		{sound: 'ku', char: '&#12463;', kana: 'katakana', type: 'basic'},
		{sound: 'ke', char: '&#12465;', kana: 'katakana', type: 'basic'},
		{sound: 'ko', char: '&#12467;', kana: 'katakana', type: 'basic'},

		{sound: 'sa', char: '&#12469;', kana: 'katakana', type: 'basic'},
		{sound: 'shi', char: '&#12471;', kana: 'katakana', type: 'basic'},
		{sound: 'su', char: '&#12473;', kana: 'katakana', type: 'basic'},
		{sound: 'se', char: '&#12475;', kana: 'katakana', type: 'basic'},
		{sound: 'so', char: '&#12477;', kana: 'katakana', type: 'basic'},

		{sound: 'ta', char: '&#12479;', kana: 'katakana', type: 'basic'},
		{sound: 'chi', char: '&#12481;', kana: 'katakana', type: 'basic'},
		{sound: 'tsu', char: '&#12484;', kana: 'katakana', type: 'basic'},
		{sound: 'te', char: '&#12486;', kana: 'katakana', type: 'basic'},
		{sound: 'to', char: '&#12488;', kana: 'katakana', type: 'basic'},

		{sound: 'na', char: '&#12490;', kana: 'katakana', type: 'basic'},
		{sound: 'ni', char: '&#12491;', kana: 'katakana', type: 'basic'},
		{sound: 'nu', char: '&#12492;', kana: 'katakana', type: 'basic'},
		{sound: 'ne', char: '&#12493;', kana: 'katakana', type: 'basic'},
		{sound: 'no', char: '&#12494;', kana: 'katakana', type: 'basic'},

		{sound: 'ha', char: '&#12495;', kana: 'katakana', type: 'basic'},
		{sound: 'hi', char: '&#12498;', kana: 'katakana', type: 'basic'},
		{sound: 'fu', char: '&#12501;', kana: 'katakana', type: 'basic'},
		{sound: 'he', char: '&#12504;', kana: 'katakana', type: 'basic'},
		{sound: 'ho', char: '&#12507;', kana: 'katakana', type: 'basic'},

		{sound: 'ma', char: '&#12510;', kana: 'katakana', type: 'basic'},
		{sound: 'mi', char: '&#12511;', kana: 'katakana', type: 'basic'},
		{sound: 'mu', char: '&#12512;', kana: 'katakana', type: 'basic'},
		{sound: 'me', char: '&#12513;', kana: 'katakana', type: 'basic'},
		{sound: 'mo', char: '&#12514;', kana: 'katakana', type: 'basic'},

		{sound: 'ya', char: '&#12516;', kana: 'katakana', type: 'basic'},
		{sound: 'yu', char: '&#12518;', kana: 'katakana', type: 'basic'},
		{sound: 'yo', char: '&#12520;', kana: 'katakana', type: 'basic'},

		{sound: 'ra', char: '&#12521;', kana: 'katakana', type: 'basic'},
		{sound: 'ri', char: '&#12522;', kana: 'katakana', type: 'basic'},
		{sound: 'ru', char: '&#12523;', kana: 'katakana', type: 'basic'},
		{sound: 're', char: '&#12524;', kana: 'katakana', type: 'basic'},
		{sound: 'ro', char: '&#12525;', kana: 'katakana', type: 'basic'},

		{sound: 'wa', char: '&#12527;', kana: 'katakana', type: 'basic'},
		{sound: 'wo', char: '&#12530;', kana: 'katakana', type: 'basic'},

		{sound: 'n', char: '&#12531;', kana: 'katakana', type: 'basic'},


		// Voiced Katakana
		{sound: 'ga', char: '&#12460;', kana: 'katakana', type: 'voiced'},
		{sound: 'gi', char: '&#12462;', kana: 'katakana', type: 'voiced'},
		{sound: 'gu', char: '&#12464;', kana: 'katakana', type: 'voiced'},
		{sound: 'ge', char: '&#12466;', kana: 'katakana', type: 'voiced'},
		{sound: 'go', char: '&#12468;', kana: 'katakana', type: 'voiced'},

		{sound: 'za', char: '&#12470;', kana: 'katakana', type: 'voiced'},
		{sound: 'ji', char: '&#12472;', kana: 'katakana', type: 'voiced'},
		{sound: 'zu', char: '&#12474;', kana: 'katakana', type: 'voiced'},
		{sound: 'ze', char: '&#12476;', kana: 'katakana', type: 'voiced'},
		{sound: 'zo', char: '&#12478;', kana: 'katakana', type: 'voiced'},

		{sound: 'da', char: '&#12480;', kana: 'katakana', type: 'voiced'},
		{sound: 'ji', char: '&#12482;', kana: 'katakana', type: 'voiced'},
		{sound: 'dzu', char: '&#12485;', kana: 'katakana', type: 'voiced'},
		{sound: 'de', char: '&#12487;', kana: 'katakana', type: 'voiced'},
		{sound: 'do', char: '&#12489;', kana: 'katakana', type: 'voiced'},

		{sound: 'ba', char: '&#12496;', kana: 'katakana', type: 'voiced'},
		{sound: 'bi', char: '&#12499;', kana: 'katakana', type: 'voiced'},
		{sound: 'bu', char: '&#12502;', kana: 'katakana', type: 'voiced'},
		{sound: 'be', char: '&#12505;', kana: 'katakana', type: 'voiced'},
		{sound: 'bo', char: '&#12508;', kana: 'katakana', type: 'voiced'},

		{sound: 'pa', char: '&#12497;', kana: 'katakana', type: 'voiced'},
		{sound: 'pi', char: '&#12500;', kana: 'katakana', type: 'voiced'},
		{sound: 'pu', char: '&#12503;', kana: 'katakana', type: 'voiced'},
		{sound: 'pe', char: '&#12506;', kana: 'katakana', type: 'voiced'},
		{sound: 'po', char: '&#12509;', kana: 'katakana', type: 'voiced'},


		// Combo Katakana
		{sound: 'kya', char: '&#12461;&#12515;', kana: 'katakana', type: 'combo'},
		{sound: 'kyu', char: '&#12461;&#12517;', kana: 'katakana', type: 'combo'},
		{sound: 'kyo', char: '&#12461;&#12519;', kana: 'katakana', type: 'combo'},

		{sound: 'sha', char: '&#12471;&#12515;', kana: 'katakana', type: 'combo'},
		{sound: 'shu', char: '&#12471;&#12517;', kana: 'katakana', type: 'combo'},
		{sound: 'sho', char: '&#12471;&#12519;', kana: 'katakana', type: 'combo'},

		{sound: 'cha', char: '&#12481;&#12515;', kana: 'katakana', type: 'combo'},
		{sound: 'chu', char: '&#12481;&#12517;', kana: 'katakana', type: 'combo'},
		{sound: 'cho', char: '&#12481;&#12519;', kana: 'katakana', type: 'combo'},

		{sound: 'nya', char: '&#12491;&#12515;', kana: 'katakana', type: 'combo'},
		{sound: 'nyu', char: '&#12491;&#12517;', kana: 'katakana', type: 'combo'},
		{sound: 'nyo', char: '&#12491;&#12519;', kana: 'katakana', type: 'combo'},

		{sound: 'hya', char: '&#12498;&#12515;', kana: 'katakana', type: 'combo'},
		{sound: 'hyu', char: '&#12498;&#12517;', kana: 'katakana', type: 'combo'},
		{sound: 'hyo', char: '&#12498;&#12519;', kana: 'katakana', type: 'combo'},

		{sound: 'mya', char: '&#12511;&#12515;', kana: 'katakana', type: 'combo'},
		{sound: 'myu', char: '&#12511;&#12517;', kana: 'katakana', type: 'combo'},
		{sound: 'myo', char: '&#12511;&#12519;', kana: 'katakana', type: 'combo'},

		{sound: 'rya', char: '&#12522;&#12515;', kana: 'katakana', type: 'combo'},
		{sound: 'ryu', char: '&#12522;&#12517;', kana: 'katakana', type: 'combo'},
		{sound: 'ryo', char: '&#12522;&#12519;', kana: 'katakana', type: 'combo'},

		{sound: 'gya', char: '&#12462;&#12515;', kana: 'katakana', type: 'combo'},
		{sound: 'gyu', char: '&#12462;&#12517;', kana: 'katakana', type: 'combo'},
		{sound: 'gyo', char: '&#12462;&#12519;', kana: 'katakana', type: 'combo'},
		
		{sound: 'jya', char: '&#12472;&#12515;', kana: 'katakana', type: 'combo'},
		{sound: 'jyu', char: '&#12472;&#12517;', kana: 'katakana', type: 'combo'},
		{sound: 'jyo', char: '&#12472;&#12519;', kana: 'katakana', type: 'combo'},

		{sound: 'bya', char: '&#12499;&#12515;', kana: 'katakana', type: 'combo'},
		{sound: 'byu', char: '&#12499;&#12517;', kana: 'katakana', type: 'combo'},
		{sound: 'byo', char: '&#12499;&#12519;', kana: 'katakana', type: 'combo'},

		{sound: 'pya', char: '&#12500;&#12515;', kana: 'katakana', type: 'combo'},
		{sound: 'pyu', char: '&#12500;&#12517;', kana: 'katakana', type: 'combo'},
		{sound: 'pyo', char: '&#12500;&#12519;', kana: 'katakana', type: 'combo'},


	]
});
