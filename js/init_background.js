function loadBackground() {
  var bingBackground = getBingBackground();
  setBackground(bingBackground);
}

function getBingBackground() {
  return 'http://www.bing.com/az/hprichbg/rb/' + getRandomBackground();
}

function setBackground(filename) {
  document.body.style.backgroundImage="url(" + filename + ")";
}

function getRandomBackground() {
  var backgroundHash =
    {
      0 : 'Fireflies_ROW8934779312_1366x768.jpg',
      1 : 'SackvilleWaterfowlPark_ROW13898530841_1366x768.jpg',
      2 : 'HecetaLighthouse_ROW10376945185_1366x768.jpg',
      3 : 'PaloCorona_ROW14794353582_1366x768.jpg',
      4 : 'MunnarIndia_ROW7199944310_1366x768.jpg',
      5 : 'BernardSpitPolarBear_ROW13815406297_1366x768.jpg',
      6 : 'AberdeenLibrary_EN-GB10833519537_1366x768.jpg',
      7 : 'MossForrest_ROW7658579861_1366x768.jpg',
      8 : 'BajaBarchanDunes_ROW12112821012_1366x768.jpg',
      9 : 'StudenaDam_ROW10719107431_1366x768.jpg',
      10: 'HorsetailFalls_ROW11860605964_1366x768.jpg',
      11: 'SheepKingPenguin_ROW13000015193_1366x768.jpg',
      12: 'MECoast_ROW11999975647_1366x768.jpg',
      13: 'WildAmmonoosuc_ROW12301718809_1366x768.jpg',
      14: 'TorontoCityHall_ROW13168683251_1366x768.jpg',
      15: 'TobagoCays_ROW9974712822_1366x768.jpg',
      16: 'WallStreetNY_ROW10826249065_1366x768.jpg',
      17: 'Caiman_ROW15280369227_1366x768.jpg',
      18: 'SerrePonconLake_ROW12121799897_1366x768.jpg',
      19: 'TreeRoots_ROW11614539206_1366x768.jpg',
      20: 'GCNPLightning_ROW14500903370_1366x768.jpg',
      21: 'GreatLangdale_ROW13494299788_1366x768.jpg',
      22: 'FrenchSunset_ROW12311384056_1366x768.jpg',
      23: 'MontedaRochaDam_ROW10497820606_1366x768.jpg',
      24: 'RedFoxCanada_ROW11990496307_1366x768.jpg',
      25: 'EasterDuckling_ROW12245494642_1366x768.jpg',
      26: 'Hierapolis_ROW10762104195_1366x768.jpg',
      27: 'HungaryHouseBoats_ROW9528869772_1366x768.jpg',
      28: 'NarragansettBay_ROW12407457650_1366x768.jpg',
      29: 'LuckyBay_ROW12658366253_1366x768.jpg',
      30: 'Esskastanien_ROW10788338513_1366x768.jpg',
      31: 'ScalefinAnthias_ROW8576231616_1366x768.jpg',
      32: 'CroatiaCoast_ROW8512061718_1366x768.jpg',
      33: 'NormandyOwl_ROW16818428163_1366x768.jpg',
      34: 'ArticParadise_ROW13225645570_1366x768.jpg',
      35: 'YakBells_ROW15127460781_1366x768.jpg',
      36: 'BleachingAnemone_ROW13183285399_1366x768.jpg',
      37: 'WindMillLights_ROW12152247028_1366x768.jpg',
      38: 'WoerlitzPark_ROW12109785474_1366x768.jpg',
      39: 'MoerakiBouldersNZ_ROW10948737290_1366x768.jpg',
      40: 'HospitalReefs_ROW9370604272_1366x768.jpg',
      41: 'RainbowVista_ROW13782504955_1366x768.jpg',
      42: 'MozambiqueMarket_ROW12818847959_1366x768.jpg',
      43: 'NorthLights_ROW15673071702_1366x768.jpg',
      44: 'FennecFox_ROW15305901581_1366x768.jpg',
      45: 'GoldenLarches_ROW10133024843_1366x768.jpg',
      46: 'OilMacro_ROW14350883055_1366x768.jpg',
      47: 'CardinalsBerries_ROW11027757062_1366x768.jpg',
      48: 'LondonTrainStation_ROW11201202440_1366x768.jpg',
      49: 'DevilsIsland_ROW14950315741_1366x768.jpg',
      50: 'QingdaoJiaozhou_ROW11500406305_1366x768.jpg',
      51: 'Waterton_ROW13248007820_1366x768.jpg',
      52: 'WooleenStation_ROW13650953464_1366x768.jpg',
      53: 'ChlorophyteVideo_ROW8131115953_1366x768.jpg',
      54: 'Hiruzen_ROW9461947940_1366x768.jpg',
      55: 'SnowHillPenguins_ROW12447501718_1366x768.jpg',
      56: 'BonsaiRock_EN-GB8332657484_1366x768.jpg',
      57: 'UnionJackGuitar_EN-GB10469546183_1366x768.jpg',
      58: 'PrismasBasalticos_ROW9777650478_1366x768.jpg',
      59: 'StLawrenceHarpSeal_ROW9956081843_1366x768.jpg',
      60: 'AmericanWhitePelican_ROW15370400903_1366x768.jpg',
      61: 'AustraliaPrincesPier_ROW10995958756_1366x768.jpg',
      62: 'IguazuRiver_ROW14070257052_1366x768.jpg',
      63: 'TsocowisCreekBridge_ROW10039992335_1366x768.jpg',
      64: 'OryxHerd_ROW12403456094_1366x768.jpg',
      65: 'BikeChain_ROW12236857139_1366x768.jpg'
    }
  var MAX = Object.keys(backgroundHash).length;
  var index = Math.floor(Math.random() * MAX);
  return backgroundHash[index];
}
