export const Pokedex: {[speciesid: string]: ModdedSpeciesData} = {

// Template
	/*
	name: {
 // fusion: ['P1', 'P2'],
		num: x,
		name: "Name",
		types: [""],
		baseStats: {hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0},
		abilities: {0: ""},
		weightkg: ,
	},
	
	*/

// OU
	revarantis: {
 // fusion: ['Revavroom', 'Lurantis'],
		num: 1,
		name: "Revarantis",
		types: ["Steel", "Grass"],
		baseStats: {hp: 75, atk: 112, def: 90, spa: 87, spd: 78, spe: 67},
		abilities: {0: "Unfiltered"},
		weightkg: 69.3,
	},
	rotoghold: {
 // fusion: ['Gholdengo', 'Rotom'],
		num: 2,
		name: "Rotoghold",
		gender: "N",
		types: ["Ghost", "Steel"],
		baseStats: {hp: 70, atk: 55, def: 87, spa: 115, spd: 85, spe: 93},
		abilities: {0: "Holy Grail"},
		weightkg: 15.2,
	},
	guguzzparce: {
 // fusion: ['Guzzlord', 'Dudunsparce'],
		num: 3,
		name: "Guguzzparce",
		types: ["Dark", "Normal"],
		baseStats: {hp: 179, atk: 103, def: 73, spa: 103, spd: 73, spe: 53},
		abilities: {0: "All-Devouring"},
		weightkg: 463.6,
	},
	toedieleki: {
 // fusion: ['Toedscruel', 'Regieleki'],
		num: 4,
		name: "Toedieleki",
		types: ["Electric", "Ground"],
		baseStats: {hp: 80, atk: 85, def: 57, spa: 105, spd: 85, spe: 155},
		abilities: {0: "Galvanic Relay"},
		weightkg: 101.5,
	},
	arbolosionhisui: {
 // fusion: ['Arboliva', 'Typhlosion-Hisui'],
		num: 5,
		name: "Arbolosion-Hisui",
		types: ["Grass", "Fire"],
		baseStats: {hp: 90, atk: 76, def: 84, spa: 122, spd: 102, spe: 67},
		abilities: {0: "Grassy Surge"},
		weightkg: 63.9,
	},
	zarubok: {
 // fusion: ['Zarude', 'Arbok'],
		num: 6,
		name: "Zarubok",
		types: ["Dark", "Poison"],
		baseStats: {hp: 82, atk: 114, def: 87, spa: 67, spd: 87, spe: 105},
		abilities: {0: "Forest Fury"},
		weightkg: 67.5,
	},
	ironmeta: {
 // fusion: ['Iron Jugulis', 'Metagross'],
		num: 7,
		name: "Iron Meta",
		types: ["Steel", "Flying"],
		gender: "N",
		baseStats: {hp: 90, atk: 110, def: 110, spa: 110, spd: 90, spe: 90},
		abilities: {0: "Light Drive"},
		weightkg: 330.5,
		otherFormes: ["Iron Meta-Mega"],
		formeOrder: ["Iron Meta", "Iron Meta-Mega"],
		tags: ["Paradox"],
	},
	ironmetamega: {
 // fusion: ['Iron Jugulis', 'Metagross'],
		num: 7,
		name: "Iron Meta-Mega",
		baseSpecies: "Iron Meta",
		gender: "N",
		forme: "Mega",
		types: ["Steel", "Flying"],
		baseStats: {hp: 90, atk: 120, def: 130, spa: 120, spd: 110, spe: 130},
		abilities: {0: "Tough Claws"},
		weightkg: 723.4,
		requiredItem: "Metagrossite",
		battleOnly: "Iron Meta",
	},
	deciperiorhisui: {
 // fusion: ['Decidueye-Hisui', 'Rhyperior'],
		num: 8,
		name: "Deciperior-Hisui",
		types: ["Ground", "Fighting"],
		baseStats: {hp: 105, atk: 130, def: 105, spa: 75, spd: 75, spe: 50},
		abilities: {0: "Scrap Rock"},
		weightkg: 160,
	},
	slitherking: {
 // fusion: ['Slither Wing', 'Klefki'],
		num: 9,
		name: "Slither King",
		types: ["Bug", "Steel"],
		baseStats: {hp: 79, atk: 107, def: 85, spa: 83, spd: 97, spe: 79},
		abilities: {0: "Opening Act"},
		weightkg: 47.5,
		tags: ["Paradox"],
	},
	gargamise: {
 // fusion: ['Garganacl', 'Dhelmise'],
		num: 13,
		name: "Gargamise",
		types: ["Rock", "Grass"],
		baseStats: {hp: 85, atk: 115, def: 115, spa: 65, spd: 90, spe: 40},
		abilities: {0: "Necromancer"},
		weightkg: 225,
	},
	drampiclus: {
 // fusion: ['Drampa', 'Reuniclus'],
		num: 10,
		name: "Drampiclus",
		types: ["Dragon", "Psychic"],
		baseStats: {hp: 105, atk: 62, def: 80, spa: 130, spd: 90, spe: 33},
		abilities: {0: "Regain Patience"},
		weightkg: 102.6,
	},
	muktariaalola: {
 // fusion: ['Muk-Alola', 'Altaria'],
		num: 11,
		name: "Muktaria-Alola",
		types: ["Poison", "Dragon"],
		baseStats: {hp: 90, atk: 95, def: 85, spa: 70, spd: 105, spe: 65},
		abilities: {0: "Neutralizing Gas"},
		weightkg: 36.3,
		otherFormes: ["Muktaria-Alola-Mega"],
		formeOrder: ["Muktaria-Alola", "Muktaria-Alola-Mega"],
	},
	muktariaalolamega: {
 // fusion: ['Muk-Alola', 'Altaria'],
		num: 11,
		name: "Muktaria-Alola-Mega",
		baseSpecies: "Muktaria-Alola",
		forme: "Mega",
		types: ["Poison", "Fairy"],
		baseStats: {hp: 90, atk: 135, def: 105, spa: 110, spd: 105, spe: 65},
		abilities: {0: "Pixilate"},
		weightkg: 36.3,
		requiredItem: "Altarianite",
		battleOnly: "Muktaria-Alola",
	},
	ironpins: {
 // fusion: ['Iron Leaves', 'Pincurchin'],
		num: 12,
		name: "Iron Pins",
		types: ["Electric", "Psychic"],
		baseStats: {hp: 70, atk: 116, def: 92, spa: 80, spd: 96, spe: 76},
		abilities: {0: "Quark Surge"},
		weightkg: 63,
		tags: ["Paradox"],
	},
	roaringsal: {
 // fusion: ['Roaring Moon', 'Salazzle'],
		num: 14,
		name: "Roaring Sal",
		gender: "F",
		types: ["Fire", "Dark"],
		baseStats: {hp: 89, atk: 101, def: 65, spa: 85, spd: 81, spe: 119},
		abilities: {0: "Primitive"},
		weightkg: 201.1,
		tags: ["Paradox"],
	},
	solvaliant: {
 // fusion: ['Iron Valiant', 'Absol'],
		num: 15,
		name: "Sol Valiant",
		types: ["Dark", "Fairy"],
		baseStats: {hp: 70, atk: 130, def: 80, spa: 100, spd: 60, spe: 100},
		abilities: {0: "System Purge"},
		weightkg: 41,
		tags: ["Paradox"],
		otherFormes: ["Sol Valiant-Mega"],
		formeOrder: ["Sol Valiant", "Sol Valiant-Mega"],
	},
	solvaliantmega: {
 // fusion: ['Iron Valiant', 'Absol'],
		num: 15,
		name: "Sol Valiant-Mega",
		baseSpecies: "Sol Valiant",
		forme: "Mega",
		types: ["Dark", "Fairy"],
		baseStats: {hp: 70, atk: 150, def: 80, spa: 140, spd: 60, spe: 140},
		abilities: {0: "Magic Bounce"},
		weightkg: 43,
		requiredItem: "Absolite",
		battleOnly: "Sol Valiant",
	},
	golisorospaldeablaze: {
 // fusion: ['Golisopod', 'Tauros-Paldea-Blaze'],
		num: 16,
		name: "Golisoros-Paldea-Blaze",
		gender: "M",
		types: ["Water", "Fighting"],
		baseStats: {hp: 79, atk: 125, def: 125, spa: 45, spd: 85, spe: 70},
		abilities: {0: "Delayed Reaction"},
		weightkg: 98.2,
	},
	brambleswine: {
 // fusion: ['Brambleghast', 'Mamoswine'],
		num: 18,
		name: "Brambleswine",
		types: ["Ice", "Grass"],
		baseStats: {hp: 82, atk: 123, def: 75, spa: 75, spd: 65, spe: 104},
		abilities: {0: "Squall"},
		weightkg: 148.5,
	},
	meowscoriosensu: {
 // fusion: ['Meowscarada', 'Oricorio-Sensu'],
		num: 17,
		name: "Meowscorio-Sensu",
		types: ["Ghost", "Dark"],
		baseStats: {hp: 75, atk: 90, def: 70, spa: 109, spd: 70, spe: 108},
		abilities: {0: "Choreography"},
		weightkg: 17.3,
	},
	whimsysands: {
 // fusion: ['Whimsicott', 'Sandy Shocks'],
		num: 19,
		name: "Whimsy Sands",
		types: ["Fairy", "Ground"],
		baseStats: {hp: 75, atk: 75, def: 91, spa: 113, spd: 81, spe: 111},
		abilities: {0: "Once Upon a Time"},
		weightkg: 33.3,
		tags: ["Paradox"],
	},
	relishadow: {
 // fusion: ['Relicanth', 'Marshadow'],
		num: 20,
		name: "Relishadow",
		types: ["Rock", "Ghost"],
		baseStats: {hp: 95, atk: 116, def: 105, spa: 67, spd: 77, spe: 101},
		abilities: {0: "Stone Age"},
		weightkg: 22.8,
		otherFormes: ["Relishadow-Zenith"],
		formeOrder: ["Relishadow", "Relishadow-Zenith"],
	},
	relishadowzenith: {
 // fusion: ['Relicanth', 'Marshadow'],
		num: 20,
		name: "Relishadow-Zenith",
		baseSpecies: "Relishadow",
		forme: "Zenith",
		types: ["Rock", "Ghost"],
		baseStats: {hp: 95, atk: 116, def: 105, spa: 67, spd: 77, spe: 101},
		abilities: {0: "Stone Age"},
		weightkg: 22.8,
		requiredAbility: "Stone Age",
		battleOnly: "Relishadow",
	},
	lashiram: {
 // fusion: ['Lairon', 'Reshiram'],
		num: 21,
		name: "Lashiram",
		types: ["Steel", "Fire"],
		baseStats: {hp: 95, atk: 110, def: 120, spa: 100, spd: 85, spe: 60},
		abilities: {0: "Molten Core"},
		weightkg: 225,
	},
	garpyuku: {
 // fusion: ['Garchomp', 'Pyukumuku'],
		num: 22,
		name: "Garpyuku",
		types: ["Water", "Ground"],
		baseStats: {hp: 81, atk: 100, def: 114, spa: 55, spd: 107, spe: 53},
		abilities: {0: "Eczema"},
		weightkg: 48.1,
		otherFormes: ["Garpyuku-Mega"],
		formeOrder: ["Garpyuku", "Garpyuku-Mega"],
	},
	garpyukumega: {
 // fusion: ['Garchomp', 'Pyukumuku'],
		num: 22,
		name: "Garpyuku-Mega",
		baseSpecies: "Garpyuku",
		forme: "Mega",
		types: ["Water", "Ground"],
		baseStats: {hp: 81, atk: 140, def: 134, spa: 95, spd: 117, spe: 43},
		abilities: {0: "Sand Force"},
		weightkg: 48.1,
		requiredItem: "Garchompite",
		battleOnly: "Garpyuku",
	},
	yveltox: {
 // fusion: ['Yveltal', 'Dustox'],
		num: 23,
		name: "Yveltox",
		types: ["Flying", "Poison"],
		baseStats: {hp: 93, atk: 90, def: 87, spa: 90, spd: 94, spe: 91},
		abilities: {0: "Aura Shield"},
		weightkg: 117.3,
	},
	ironmimic: {
 // fusion: ['Iron Thorns', 'Mimikyu'],
		num: 24,
		name: "Iron Mimic",
		types: ["Rock", "Fairy"],
		baseStats: {hp: 78, atk: 114, def: 96, spa: 60, spd: 102, spe: 90},
		abilities: {0: "Faulty Photon"},
		weightkg: 151.9,
		otherFormes: ["Iron Mimic-Busted"],
		formeOrder: ["Iron Mimic", "Iron Mimic-Busted"],
		tags: ["Paradox"],
	},
	ironmimicbusted: {
 // fusion: ['Iron Thorns', 'Mimikyu'],
		num: 24,
		name: "Iron Mimic-Busted",
		baseSpecies: "Iron Mimic",
		forme: "Busted",
		types: ["Rock", "Fairy"],
		baseStats: {hp: 78, atk: 114, def: 96, spa: 60, spd: 102, spe: 90},
		abilities: {0: "Faulty Photon"},
		weightkg: 151.9,
		requiredAbility: "Faulty Photon",
		battleOnly: "Iron Mimic",
		tags: ["Paradox"],
	},
	irondirge: {
 // fusion: ['Iron Treads', 'Skeledirge'],
		num: 25,
		name: "Iron Dirge",
		types: ["Fire", "Ground"],
		baseStats: {hp: 98, atk: 96, def: 110, spa: 96, spd: 74, spe: 86},
		abilities: {0: "Dyschronometria"},
		weightkg: 283.3,
		tags: ["Paradox"],
	},
	irontornado: {
 // fusion: ['Iron Hands', 'Tornadus'],
		num: 26,
		name: "Iron Tornado",
		gender: "M",
		types: ["Fighting", "Flying"],
		baseStats: {hp: 118, atk: 120, def: 100, spa: 80, spd: 80, spe: 92},
		abilities: {0: "Nanorepairs"},
		weightkg: 221.9,
		tags: ["Paradox"],
	},
	deliraidon: {
 // fusion: ['Delibird', 'Miraidon'],
		num: 27,
		name: "Deliraidon",
		types: ["Dragon", "Flying"],
		baseStats: {hp: 72, atk: 85, def: 72, spa: 100, spd: 80, spe: 106},
		abilities: {0: "Iron Sights"},
		weightkg: 128,
	},
	stargrowth: {
 // fusion: ['Starmie', 'Tangrowth'],
		num: 28,
		name: "Stargrowth",
		types: ["Grass", "Water"],
		baseStats: {hp: 90, atk: 90, def: 105, spa: 105, spd: 70, spe: 85},
		abilities: {0: "Rejuvenate"},
		weightkg: 104.3,
	},
	floatzera: {
 // fusion: ['Floatzel', 'Zeraora'],
		num: 29,
		name: "Floatzera",
		types: ["Electric", "Water"],
		baseStats: {hp: 90, atk: 115, def: 65, spa: 101, spd: 65, spe: 130},
		abilities: {0: "Electromagnetic Veil"},
		weightkg: 39,
	},
	crygargonal: {
 // fusion: ['Cryogonal', 'Gengar'],
		num: 30,
		name: "Crygargonal",
		types: ["Poison", "Ice"],
		baseStats: {hp: 80, atk: 57, def: 55, spa: 122, spd: 105, spe: 107},
		abilities: {0: "Rising Tension"},
		weightkg: 94.3,
		otherFormes: ["Crygargonal-Mega"],
		formeOrder: ["Crygargonal", "Crygargonal-Mega"],
	},
	crygargonalmega: {
 // fusion: ['Cryogonal', 'Gengar'],
		num: 30,
		name: "Crygargonal-Mega",
		baseSpecies: "Crygargonal",
		forme: "Mega",
		types: ["Poison", "Ice"],
		baseStats: {hp: 80, atk: 57, def: 75, spa: 162, spd: 125, spe: 127},
		abilities: {0: "Shadow Tag"},
		weightkg: 94.3,
		requiredItem: "Gengarite",
		battleOnly: "Crygargonal",
	},
	wopple: {
 // fusion: ['Flapple', 'Wo-Chien'],
		num: 31,
		name: "Wopple",
		types: ["Grass", "Dragon"],
		baseStats: {hp: 80, atk: 97, def: 90, spa: 95, spd: 97, spe: 75},
		abilities: {0: "Grindset"},
		weightkg: 37.6,
	},
	amphamence: {
 // fusion: ['Ampharos', 'Salamence'],
		num: 32,
		name: "Amphamence",
		types: ["Electric", "Flying"],
		baseStats: {hp: 92, atk: 105, def: 82, spa: 112, spd: 85, spe: 95},
		abilities: {0: "Shock Factor"},
		weightkg: 82.1,
		otherFormes: ["Amphamence-Mega-X", "Amphamence-Mega-Y"],
		formeOrder: ["Amphamence", "Amphamence-Mega-X", "Amphamence-Mega-Y"],
	},
	amphamencemegax: {
 // fusion: ['Ampharos', 'Salamence'],
		num: 32,
		name: "Amphamence-Mega-X",
		baseSpecies: "Amphamence",
		forme: "Mega-X",
		types: ["Electric", "Flying"],
		baseStats: {hp: 92, atk: 115, def: 132, spa: 122, spd: 95, spe: 115},
		abilities: {0: "Aerilate"},
		weightkg: 92.1,
		requiredItem: "Salamencite",
		battleOnly: "Amphamence",
	},
	amphamencemegay: {
 // fusion: ['Ampharos', 'Salamence'],
		num: 32,
		name: "Amphamence-Mega-Y",
		baseSpecies: "Amphamence",
		forme: "Mega-Y",
		types: ["Electric", "Dragon"],
		baseStats: {hp: 92, atk: 125, def: 102, spa: 162, spd: 105, spe: 85},
		abilities: {0: "Mold Breaker"},
		weightkg: 82.1,
		requiredItem: "Ampharosite",
		battleOnly: "Amphamence",
	},
	bronzebonnet: {
 // fusion: ['Brute Bonnet', 'Bronzong'],
		num: 33,
		name: "Bronze Bonnet",
		gender: "N",
		types: ["Dark", "Steel"],
		baseStats: {hp: 97, atk: 111, def: 107, spa: 79, spd: 107, spe: 45},
		abilities: {0: "Weight of Life"},
		weightkg: 104,
		tags: ["Paradox"],
	},
	ironlegion: {
 // fusion: ['Iron Bundle', 'Basculegion-F'],
		num: 34,
		name: "Iron Legion",
		types: ["Water", "Ghost"],
		baseStats: {hp: 88, atk: 92, def: 90, spa: 112, spd: 68, spe: 110}, 
		abilities: {0: "Circuit Breaker"},
		weightkg: 60.5,
		tags: ["Paradox"],
	},
	celedos: {
 // fusion: ['Celebi', 'Zapdos'],
		num: 35,
		name: "Celedos",
		types: ["Grass", "Electric"],
		baseStats: {hp: 95, atk: 95, def: 95, spa: 115, spd: 100, spe: 100}, 
		abilities: {0: "Natural Pressures"},
		weightkg: 28.8,
	},
	primeleo: {
 // fusion: ['Primeape', 'Solgaleo'],
		num: 36,
		name: "Primeleo",
		types: ["Fighting", "Steel"],
		baseStats: {hp: 101, atk: 125, def: 83, spa: 86, spd: 79, spe: 96}, 
		abilities: {0: "Vital Metal Body"},
		weightkg: 131,
	},
	bellikiss: {
 // fusion: ['Bellibolt', 'Togekiss'],
		num: 37,
		name: "Bellikiss",
		types: ["Electric", "Fairy"],
		baseStats: {hp: 107, atk: 57, def: 94, spa: 111, spd: 99, spe: 62}, 
		abilities: {0: "Fortunomorphosis"},
		weightkg: 75.5,
	},
	samuraiaihisui: {
 // fusion: ['Samurott-Hisui', 'Grafaiai'],
		num: 38,
		name: "Samuraiai-Hisui",
		types: ["Water", "Poison"],
		baseStats: {hp: 76, atk: 121, def: 77, spa: 90, spd: 68, spe: 97}, 
		abilities: {0: "Rebel's Blade"},
		weightkg: 42.7,
	},
	florgerouge: {
 // fusion: ['Florges', 'Armarouge'],
		num: 39,
		name: "Florgerouge",
		types: ["Fire", "Fairy"],
		baseStats: {hp: 81, atk: 62, def: 84, spa: 118, spd: 135, spe: 75}, 
		abilities: {0: "Burning Petals"},
		weightkg: 47.5,
	},
	urshiluxerapidstrike: {
 // fusion: ['Vanilluxe', 'Urshifu'],
		num: 40,
		name: "Urshiluxe-Rapid-Strike",
		types: ["Ice", "Fighting"],
		baseStats: {hp: 85, atk: 120, def: 92, spa: 88, spd: 77, spe: 98}, 
		abilities: {0: "Snowblind"},
		weightkg: 81.3,
	},
	tinkovish: {
 // fusion: ['Tinkaton', 'Arctovish'],
		num: 41,
		name: "Tinkovish",
		types: ["Water", "Steel"],
		baseStats: {hp: 90, atk: 85, def: 90, spa: 80, spd: 100, spe: 75}, 
		abilities: {0: "Slushie"},
		weightkg: 143.9,
	},
	tyranix: {
 // fusion: ['Tyranitar', 'Steelix'],
		num: 42,
		name: "Tyranix",
		types: ["Rock", "Ground"],
		baseStats: {hp: 87, atk: 109, def: 155, spa: 75, spd: 102, spe: 45}, 
		abilities: {0: "Sand Wrath"},
		weightkg: 301,
		otherFormes: ["Tyranix-Mega-X", "Tyranix-Mega-Y"],
		formeOrder: ["Tyranix", "Tyranix-Mega-X", "Tyranix-Mega-Y"],
	},
	tyranixmegax: {
 // fusion: ['Tyranitar', 'Steelix'],
		num: 42,
		name: "Tyranix-Mega-X",
		baseSpecies: "Tyranix",
		forme: "Mega-X",
		types: ["Rock", "Ground"],
		baseStats: {hp: 87, atk: 139, def: 195, spa: 75, spd: 122, spe: 55}, 
		abilities: {0: "Sand Stream"},
		weightkg: 354,
		requiredItem: "Tyranitarite",
		battleOnly: "Tyranix",
	},
	tyranixmegay: {
 // fusion: ['Tyranitar', 'Steelix'],
		num: 42,
		name: "Tyranix-Mega-Y",
		baseSpecies: "Tyranix",
		forme: "Mega-Y",
		types: ["Rock", "Ground"], 
		baseStats: {hp: 87, atk: 149, def: 185, spa: 75, spd: 132, spe: 45}, 
		abilities: {0: "Sand Force"},
		weightkg: 641,
		requiredItem: "Steelixite",
		battleOnly: "Tyranix",
	},
	gooperthisui: {
 // fusion: ['Swampert', 'Goodra-Hisui'],
		num: 43,
		name: "Goopert-Hisui", 
		types: ["Water", "Dragon"], 
		baseStats: {hp: 90, atk: 105, def: 100, spa: 110, spd: 120, spe: 60}, 
		abilities: {0: "Pondweed"},
		weightkg: 208,
		otherFormes: ["Goopert-Hisui-Mega"],
		formeOrder: ["Goopert-Hisui", "Goopert-Hisui-Mega"],
	},
	gooperthisuimega: {
 // fusion: ['Swampert', 'Goodra-Hisui'],
		num: 43,
		name: "Goopert-Hisui-Mega",
		baseSpecies: "Goopert-Hisui",
		forme: "Mega",
		types: ["Water", "Dragon"], 
		baseStats: {hp: 90, atk: 145, def: 120, spa: 120, spd: 140, spe: 70}, 
		abilities: {0: "Swift Swim"},
		weightkg: 228,
		requiredItem: "Swampertite",
		battleOnly: "Goopert-Hisui",
	},
	baxgeistlarge: {
 // fusion: ['Baxcalibur', 'Gourgeist'],
		num: 44,
		name: "Baxgeist-Large",
		types: ["Dragon", "Ghost"], 
		baseStats: {hp: 95, atk: 120, def: 110, spa: 70, spd: 80, spe: 85}, 
		abilities: {0: "Frisk Exchange"},
		weightkg: 112,
	},
	cresserace: {
 // fusion: ['Cinderace', 'Cresselia'],
		num: 45,
		name: "Cresserace",
		types: ["Fire", "Psychic"], 
		baseStats: {hp: 100, atk: 95, def: 100, spa: 70, spd: 100, spe: 105}, 
		abilities: {0: "Free Flight"},
		weightkg: 112,
	},
	zoinkazenta: {
 // fusion: ['Oinkologne', 'Zamazenta'],
		num: 46,
		name: "Zoinkazenta",
		types: ["Fighting", "Normal"],
		baseStats: {hp: 101, atk: 120, def: 95, spa: 69, spd: 97, spe: 108}, 
		abilities: {0: "Pillage"},
		weightkg: 165,
	},
	decidulax: {
 // fusion: ['Decidueye', 'Snorlax'],
		num: 47,
		name: "Decidulax",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 120, atk: 108, def: 70, spa: 82, spd: 105, spe: 50}, 
		abilities: {0: "Fat Fingers"},
		weightkg: 248.3,
	},
	corvizolt: {
 // fusion: ['Corviknight', 'Dracozolt'],
		num: 48,
		name: "Corvizolt",
		types: ["Electric", "Flying"], 
		baseStats: {hp: 95, atk: 95, def: 100, spa: 70, spd: 80, spe: 75}, 
		abilities: {0: "Hourglass"},
		weightkg: 132.5,
	},
	taputitan: {
 // fusion: ['Tapu Bulu', 'Cetitan'],
		num: 49,
		name: "Tapu Titan",
		types: ["Fairy", "Ice"], 
		baseStats: {hp: 120, atk: 121, def: 90, spa: 65, spd: 75, spe: 74}, 
		abilities: {0: "Field Day"},
		weightkg: 372.8,
	},
	necrotrikdawnwings: {
 // fusion: ['Eelektrik', 'Necrozma'],
		num: 50,
		name: "Necrotrik-Dawn-Wings",
		types: ["Electric", "Ghost"], 
		baseStats: {hp: 83, atk: 101, def: 89, spa: 127, spd: 101, spe: 59}, 
		abilities: {0: "Airborne Armor"},
		weightkg: 186,
		otherFormes: ["Necrotrik-Dawn-Wings"],
		formeOrder: ["Necrotrik-Dawn-Wings", "Necrotrik-Ultra"],
	},
	necrotrikultra: {
 // fusion: ['Eelektrik', 'Necrozma'],
		num: 50,
		name: "Necrotrik-Ultra",
		baseSpecies: "Necrotrik-Dawn-Wings",
		forme: "Ultra",
		types: ["Electric", "Dragon"],
		baseStats: {hp: 83, atk: 137, def: 79, spa: 137, spd: 79, spe: 111}, 
		abilities: {0: "Neuroforce"},
		weightkg: 66,
		requiredItem: "Depleted Ultranecrozium Z",
		battleOnly: ["Necrotrik-Dawn-Wings"],
	},
	druddizor: {
 // fusion: ['Druddigon', 'Scizor'],
		num: 51,
		name: "Druddizor",
		types: ["Steel", "Dragon"],
		baseStats: {hp: 80, atk: 125, def: 100, spa: 57, spd: 90, spe: 56}, 
		abilities: {0: "Bleeding Edge"},
		weightkg: 128.5,
		otherFormes: ["Druddizor-Mega"],
		formeOrder: ["Druddizor", "Druddizor-Mega"],
	},
	druddizormega: {
 // fusion: ['Druddigon', 'Scizor'],
		num: 51,
		name: "Druddizor-Mega",
		baseSpecies: "Druddizor",
		forme: "Mega",
		types: ["Steel", "Dragon"],
		baseStats: {hp: 80, atk: 145, def: 140, spa: 67, spd: 110, spe: 66}, 
		abilities: {0: "Technician"},
		weightkg: 135.5,
		requiredItem: "Scizorite",
		battleOnly: "Druddizor",
	},	
	greatkleav: {
 // fusion: ['Great Tusk', 'Kleavor'],
		num: 52,
		name: "Great Kleav",
		types: ["Bug", "Ground"],
		baseStats: {hp: 101, atk: 133, def: 113, spa: 49, spd: 67, spe: 87}, 
		abilities: {0: "Ancient Marble"},
		weightkg: 204.5,
		tags: ["Paradox"],
	},
	screamcomorant: {
 // fusion: ['Scream Tail', 'Cramorant'],
		num: 53,
		name: "Scream Comorant",
		types: ["Water", "Fairy"],
		baseStats: {hp: 95, atk: 75, def: 79, spa: 75, spd: 105, spe: 111}, 
		abilities: {0: "Prehistoric Hunter"},
		weightkg: 13,
		otherFormes: ["Scream Comorant-Gulping", "Scream Comorant-Gorging"],
		formeOrder: ["Scream Comorant", "Scream Comorant-Gulping", "Scream Comorant-Gorging"],
		tags: ["Paradox"],
	},
	screamcomorantgulping: {
		num: 53,
		name: "Scream Comorant-Gulping",
		baseSpecies: "Scream Comorant",
		forme: "Gulping",
		types: ["Water", "Fairy"],
		baseStats: {hp: 95, atk: 75, def: 79, spa: 75, spd: 105, spe: 111}, 
		abilities: {0: "Prehistoric Hunter"},
		weightkg: 13,
		requiredAbility: "Prehistoric Hunter",
		battleOnly: "Scream Comorant",
	},
	screamcomorantgorging: {
		num: 53,
		name: "Scream Comorant-Gorging",
		baseSpecies: "Scream Comorant",
		forme: "Gorging",
		types: ["Water", "Fairy"],
		baseStats: {hp: 95, atk: 75, def: 79, spa: 75, spd: 105, spe: 111}, 
		abilities: {0: "Prehistoric Hunter"},
		weightkg: 13,
		requiredAbility: "Prehistoric Hunter",
		battleOnly: "Scream Comorant",
	},
	yuclod: {
 // fusion: ['Chi-Yu', 'Clodsire'],
		num: 54,
		name: "Yu-Clod",
		types: ["Fire", "Poison"],
		baseStats: {hp: 95, atk: 80, def: 75, spa: 90, spd: 110, spe: 65}, 
		abilities: {0: "Sponge of Ruin"},
		weightkg: 114,
	},
	mawlakazam: {
 // fusion: ['Mawile', 'Alakazam'],
		num: 55,
		name: "Mawlakazam",
		types: ["Psychic", "Fairy"],
		baseStats: {hp: 52, atk: 67, def: 65, spa: 95, spd: 75, spe: 95}, 
		abilities: {0: "Overwhelming"},
		weightkg: 30,
		otherFormes: ["Mawlakazam-Mega-X", "Mawlakazam-Mega-Y"],
		formeOrder: ["Mawlakazam", "Mawlakazam-Mega-X", "Mawlakazam-Mega-Y"],
	},
	mawlakazammegax: {
 // fusion: ['Mawile', 'Alakazam'],
		num: 55,
		name: "Mawlakazam-Mega-X",
		baseSpecies: "Mawlakazam",
		forme: "Mega-X",
		types: ["Psychic", "Fairy"],
		baseStats: {hp: 52, atk: 87, def: 105, spa: 95, spd: 115, spe: 95}, 
		abilities: {0: "Huge Power"},
		weightkg: 42,
		requiredItem: "Mawilite",
		battleOnly: "Mawlakazam",
	},	
	mawlakazammegay: {
 // fusion: ['Mawile', 'Alakazam'],
		num: 55,
		name: "Mawlakazam-Mega-Y",
		baseSpecies: "Mawlakazam",
		forme: "Mega-Y",
		types: ["Psychic", "Fairy"],
		baseStats: {hp: 52, atk: 67, def: 85, spa: 135, spd: 85, spe: 125}, 
		abilities: {0: "Trace"},
		weightkg: 30,
		requiredItem: "Alakazite",
		battleOnly: "Mawlakazam",
	},	
	
// LCs and NFEs
	varantis: {
 // fusion: ['Varoom', 'Fomantis'],
		num: 1001,
		name: "Varantis",
		types: ["Steel", "Grass"],
		baseStats: {hp: 45, atk: 82, def: 49, spa: 40, spd: 40, spe: 41},
		abilities: {0: "Quickstart"},
		weightkg: 18.3,
		evos: ["Revarantis"],
	},
	dollava: {
 // fusion: ['Dolliv', 'Quilava'],
		num: 1003,
		name: "Dollava",
		types: ["Grass", "Fire"],
		baseStats: {hp: 70, atk: 58, def: 59, spa: 79, spd: 76, spe: 56},
		abilities: {0: "Growth Spurt"},
		weightkg: 15.5,
		evos: ["Arbolosion-Hisui"],
	},
	smoliqwil: {
 // fusion: ['Smoliv', 'Cyndaquil'],
		num: 1002,
		name: "Smoliqwil",
		types: ["Grass", "Fire"],
		baseStats: {hp: 55, atk: 43, def: 44, spa: 59, spd: 55, spe: 47},
		abilities: {0: "Growth Spurt"},
		weightkg: 7.2,
		evos: ["Dollava"],
	},
	rhylet: {
 // fusion: ['Rhyhorn', 'Rowlet'],
		num: 1004,
		name: "Rhylet",
		types: ["Ground", "Flying"],
		baseStats: {hp: 75, atk: 75, def: 75, spa: 40, spd: 40, spe: 40},
		abilities: {0: "Reachless"},
		weightkg: 58.3,
		evos: ["Rhytrix"],
	},
	rhytrix: {
 // fusion: ['Rhydon', 'Dartrix'],
		num: 1005,
		name: "Rhytrix",
		types: ["Ground", "Flying"],
		baseStats: {hp: 105, atk: 105, def: 100, spa: 57, spd: 60, spe: 46},
		abilities: {0: "Reachless"},
		weightkg: 68,
		evos: ["Deciperior-Hisui"],
	},
	grimeblualola: {
 // fusion: ['Grimer-Alola', 'Swablu'],
		num: 1006,
		name: "Grimeblu-Alola",
		types: ["Poison", "Normal"],
		baseStats: {hp: 65, atk: 70, def: 60, spa: 40, spd: 64, spe: 37},
		abilities: {0: "Neutralizing Gas"},
		weightkg: 21.6,
		evos: ["Muktaria-Alola"],
	},
	bramblinub: {
 // fusion: ['Bramblin', 'Swinub'],
		num: 1007,
		name: "Bramblinub",
		types: ["Ice", "Grass"],
		baseStats: {hp: 45, atk: 57, def: 35, spa: 37, spd: 32, spe: 65},
		abilities: {0: "Squall"},
		weightkg: 3.6,
		evos: ["Brambleswine"],
	},
	stargela: {
 // fusion: ['Staryu', 'Tangela'],
		num: 1008,
		name: "Stargela",
		types: ["Grass", "Water"],
		baseStats: {hp: 50, atk: 50, def: 85, spa: 85, spd: 50, spe: 75},
		abilities: {0: "Rejuvenate"},
		weightkg: 34.8,
		evos: ["Stargrowth"],
	},
	mareegon: {
 // fusion: ['Mareep', 'Bagon'],
		num: 1009,
		name: "Mareegon",
		types: ["Electric", "Dragon"],
		baseStats: {hp: 50, atk: 61, def: 50, spa: 52, spd: 37, spe: 50},
		abilities: {0: "Shell Shock"},
		weightkg: 25,
		evos: ["Flaalgon"],
	},
	flaalgon: {
 // fusion: ['Flaaffy', 'Shelgon'],
		num: 1010,
		name: "Flaalgon",
		types: ["Electric", "Dragon"],
		baseStats: {hp: 67, atk: 85, def: 77, spa: 70, spd: 55, spe: 51},
		abilities: {0: "Shell Shock"},
		weightkg: 61.9,
		evos: ["Amphamence"],
	},
	cosmonkey: {
 // fusion: ['Mankey', 'Cosmog'],
		num: 1011,
		name: "Cosmonkey",
		types: ["Fighting", "Psychic"],
		baseStats: {hp: 41, atk: 59, def: 37, spa: 37, spd: 41, spe: 53},
		abilities: {0: "Unvital"},
		weightkg: 14.1,
		evos: ["Primeleo"],
	},
	tadpi: {
 // fusion: ['Tadbulb', 'Togepi'],
		num: 1012,
		name: "Tadpi",
		types: ["Electric", "Fairy"],
		baseStats: {hp: 58, atk: 25, def: 53, spa: 52, spd: 50, spe: 32},
		abilities: {0: "Own Luck"},
		weightkg: 1,
		evos: ["Bellikiss"],
	},
	shroowott: {
 // fusion: ['Oshawott', 'Shroodle'],
		num: 1013,
		name: "Shroowott",
		types: ["Water", "Poison"],
		baseStats: {hp: 67, atk: 60, def: 40, spa: 51, spd: 40, spe: 60},
		abilities: {0: "Armour Lock"},
		weightkg: 3.3,
		evos: ["Samuraiai-Hisui"],
	},
	charbebe: {
 // fusion: ['Flabebe', 'Charcadet'],
		num: 1014,
		name: "Charbebe",
		types: ["Fire", "Fairy"],
		baseStats: {hp: 42, atk: 45, def: 40, spa: 55, spd: 60, spe: 48},
		abilities: {0: "Burning Petals"},
		weightkg: 8.2,
		evos: ["Florgerouge"],
	},
	vanifu: {
 // fusion: ['Vanillite', 'Kubfu'],
		num: 1015,
		name: "Vanifu",
		types: ["Ice", "Fighting"],
		baseStats: {hp: 48, atk: 70, def: 55, spa: 59, spd: 55, spe: 58},
		abilities: {0: "Glacial Focus"},
		weightkg: 8.9,
		evos: ["Urshiluxe-Rapid-Strike"],
	},
	larvix: {
 // fusion: ['Larvitar', 'Onix'],
		num: 1016,
		name: "Larvix",
		types: ["Rock", "Ground"],
		baseStats: {hp: 42, atk: 74, def: 105, spa: 37, spd: 47, spe: 55},
		abilities: {0: "Sand Rush"},
		weightkg: 141,
		evos: ["Tyranix"],
	},
	goomud: {
 // fusion: ['Goomy', 'Mudkip'],
		num: 1017,
		name: "Goomud",
		types: ["Water", "Dragon"],
		baseStats: {hp: 50, atk: 60, def: 45, spa: 60, spd: 65, spe: 40},
		abilities: {0: "Wet Skin"},
		weightkg: 5.2,
		evos: ["Marshgoo-Hisui"],
	},
	marshgoohisui: {
 // fusion: ['Sliggoo-Hisui', 'Marshtomp'],
		num: 1018,
		name: "Marshgoo-Hisui",
		types: ["Water", "Dragon"], 
		baseStats: {hp: 65, atk: 80, def: 80, spa: 80, spd: 95, spe: 45},
		abilities: {0: "Pondweed"},
		weightkg: 48.3,
		evos: ["Goopert-Hisui"],
	},
	frigiboolarge: {
 // fusion: ['Frigibax', 'Pumpkaboo'],
		num: 1019,
		name: "Frigiboo-Large",
		types: ["Dragon", "Ghost"], 
		baseStats: {hp: 60, atk: 70, def: 60, spa: 40, spd: 50, spe: 50},
		abilities: {0: "Frisk Exchange"},
		weightkg: 12.3,
		evos: ["Baxgeist-Large"],
	},
	rowlax: {
 // fusion: ['Rowlet', 'Munchlax'],
		num: 1020,
		name: "Rowlax",
		types: ["Normal", "Flying"], 
		baseStats: {hp: 103, atk: 70, def: 47, spa: 45, spd: 67, spe: 23},
		abilities: {0: "Fat Fingers"},
		weightkg: 53.3,
		evos: ["Decidulax"],
	},
};
