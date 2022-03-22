export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	orchile: {
		num: 1001,
		name: "Orchile",
		types: ["Grass", "Psychic"],
		baseStats: {hp: 65, atk: 85, def: 75, spa: 135, spd: 105, spe: 65},
		abilities: {0: "Overgrow", H: "Metamorphosis"},
		weightkg: 45,
	},
	dolphena: {
		num: 1002,
		name: "Dolphena",
		types: ["Water", "Dragon"],
		baseStats: {hp: 95, atk: 125, def: 80, spa: 74, spd: 75, spe: 85},
		abilities: {0: "Torrent", H: "Mythical Presence"},
		weightkg: 271,
	},
	scalaron: {
		num: 1003,
		name: "Scalaron",
		types: ["Flying", "Fire"],
		baseStats: {hp: 90, atk: 70, def: 90, spa: 100, spd: 105, spe: 75},
		abilities: {0: "Blaze", H: "Retaliation"},
		weightkg: 70,
	},
	rantler: {
		num: 1004,
		name: "Rantler",
		types: ["Normal", "Ice"],
		baseStats: {hp: 79, atk: 118, def: 84, spa: 43, spd: 68, spe: 68},
		abilities: {0: "Intimidate", 1: "Slush Rush", H: "Tough Claws"},
		weightkg: 67,
	},
	cobracotta: {
		num: 1005,
		name: "Cobracotta",
		types: ["Grass", "Poison"],
		baseStats: {hp: 80, atk: 90, def: 95, spa: 80, spd: 115, spe: 35},
		abilities: {0: "Mold Breaker", 1: "Weak Armor", H: "Heatproof"},
		weightkg: 68,
	},
	albatrygon: {
		num: 1006,
		name: "Albatrygon",
		types: ["Flying"],
		baseStats: {hp: 80, atk: 105, def: 70, spa: 65, spd: 60, spe: 95},
		abilities: {0: "Prankster", 1: "Klutz", H: "Unburden"},
		weightkg: 3.1,
	},
	electangle: {
		num: 1007,
		name: "Electangle",
		types: ["Electric", "Steel"],
		baseStats: {hp: 120, atk: 80, def: 110, spa: 80, spd: 90, spe: 30},
		abilities: {0: "Filter"},
		weightkg: 190,
	},
	torgeist: {
		num: 1008,
		name: "Torgeist",
		types: ["Flying", "Ghost"],
		baseStats: {hp: 55, atk: 65, def: 95, spa: 115, spd: 100, spe: 105},
		abilities: {0: "Cursed Body", 1: "Clear Body", H: "Merciless"},
		weightkg: 9.7,
	},
	platypad: {
		num: 1009,
		name: "Platypad",
		types: ["Grass", "Water"],
		baseStats: {hp: 120, atk: 100, def: 80, spa: 100, spd: 80, spe: 40},
		abilities: {0: "Thick Fat", 1: "Triage", H: "Flower Veil"},
		weightkg: 89,
	},
	soleron: {
		num: 1010,
		name: "Soleron",
		types: ["Electric", "Flying"],
		baseStats: {hp: 70, atk: 75, def: 65, spa: 115, spd: 75, spe: 115},
		abilities: {0: "Awakening"},
		otherFormes: ["Soleron-Awakened"],
		formeOrder: ["Soleron", "Soleron-Awakened"],
		weightkg: 12,
	},
	soleronawakened: {
		num: 1011,
		name: "Soleron-Awakened",
		baseSpecies: "Soleron",
		forme: "Awakened",
		types: ["Electric", "Flying"],
		baseStats: {hp: 70, atk: 105, def: 85, spa: 135, spd: 95, spe: 125},
		abilities: {0: "Awakening"},
		requiredAbility: "Awakening",
		battleOnly: "Soleron",
		weightkg: 24,
	},
	nunopod: {
		num: 1012,
		name: "Nunopod",
		types: ["Bug", "Ground"],
		baseStats: {hp: 80, atk: 110, def: 125, spa: 70, spd: 75, spe: 65},
		abilities: {0: "Firm Footing", H: "Terrain Power"},
		weightkg: 68,
	},
	zeploom: {
		num: 1013,
		name: "Zeploom",
		types: ["Grass", "Ground"],
		baseStats: {hp: 55, atk: 55, def: 145, spa: 65, spd: 150, spe: 45},
		abilities: {0: "Levitate"},
		weightkg: 5,
	},
	brawnkey: {
		num: 1014,
		name: "Brawnkey",
		types: ["Fighting", "Steel"],
		baseStats: {hp: 95, atk: 105, def: 105, spa: 95, spd: 90, spe: 50},
		abilities: {0: "Levitate"},
		weightkg: 85,
	},
	salamalix: {
		num: 1015,
		name: "Salamalix",
		types: ["Rock", "Steel"],
		baseStats: {hp: 70, atk: 120, def: 120, spa: 45, spd: 65, spe: 90},
		abilities: {0: "No Guard", 1: "Sand Force", H: "Intimidate"},
		weightkg: 85,
	},
	cinnastar: {
		num: 1016,
		name: "Cinnastar",
		types: ["Rock", "Poison"],
		baseStats: {hp: 110, atk: 95, def: 80, spa: 95, spd: 80, spe: 80},
		abilities: {0: "Mold Breaker", H: "Regenerator"},
		weightkg: 56,
	},
	muabboa: {
		num: 1017,
		name: "MuabBoa",
		types: ["Fighting", "Ground"],
		baseStats: {hp: 65, atk: 110, def: 75, spa: 55, spd: 65, spe: 120},
		abilities: {0: "Anticipation", 1: "Sand Rush", H: "Inner Focus"},
		weightkg: 25,
	},
	volvolpa: {
		num: 1018,
		name: "Volvolpa",
		types: ["Normal", "Electric"],
		baseStats: {hp: 70, atk: 100, def: 65, spa: 65, spd: 92, spe: 133},
		abilities: {0: "Slush Rush", 1: "Volt Absorb", H: "Rattled"},
		weightkg: 27,
	},
	harzodia: {
		num: 1019,
		name: "Harzodia",
		types: ["Psychic"],
		baseStats: {hp: 65, atk: 55, def: 75, spa: 125, spd: 75, spe: 95},
		abilities: {0: "Prankster", 1: "Unburden", H: "Solar Power"},
		weightkg: 35,
	},
	cyllindrake: {
		num: 1001,
		name: "Cyllindrake",
		types: ["Steel", "Dragon"],
		baseStats: {hp: 70, atk: 85, def: 115, spa: 95, spd: 70, spe: 110},
		abilities: {0: "Heavy Metal", 1: "Punk Rock", H: "Wake the Dead"},
		weightkg: 180,
	},
	kodokai: {
		num: 1020,
		name: "Kodokai",
		types: ["Ghost", "Fire"],
		baseStats: {hp: 110, atk: 75, def: 100, spa: 110, spd: 90, spe: 30},
		abilities: {0: "White Smoke", H: "Aroma Veil"},
		weightkg: 50,
	},
	jaegorm: {
		num: 1021,
		name: "Jaegorm",
		types: ["Bug", "Psychic"],
		baseStats: {hp: 60, atk: 65, def: 40, spa: 130, spd: 40, spe: 130},
		abilities: {0: "Schooling"},
		otherFormes: ["Jaegorm-Collective"],
		formeOrder: ["Jaegorm", "Jaegorm-Collective"],
		weightkg: 10,
	},
	jaegormcollective: {
		num: 1022,
		name: "Jaegorm-Collective",
		baseSpecies: "Jaegorm",
		forme: "Collective",
		types: ["Bug", "Psychic"],
		baseStats: {hp: 60, atk: 145, def: 130, spa: 100, spd: 130, spe: 80},
		abilities: {0: "Schooling"},
		requiredAbility: "Schooling",
		battleOnly: "Jaegorm",
		weightkg: 122,
	},
	faerenheit: {
		num: 1023,
		name: "Faerenheit",
		types: ["Fire", "Fairy"],
		baseStats: {hp: 71, atk: 109, def: 83, spa: 127, spd: 97, spe: 83},
		abilities: {0: "Beast Boost"},
		weightkg: 2.1,
	},
	cellsius: {
		num: 1024,
		name: "Cellsius",
		types: ["Water", "Fairy"],
		baseStats: {hp: 71, atk: 83, def: 83, spa: 109, spd: 127, spe: 97},
		abilities: {0: "Beast Boost"},
		weightkg: 2.4,
	},
	kelven: {
		num: 1025,
		name: "Kelven",
		types: ["Ice", "Fairy"],
		baseStats: {hp: 71, atk: 127, def: 97, spa: 83, spd: 83, spe: 109},
		abilities: {0: "Beast Boost"},
		weightkg: 3,
	},
	salaos: {
		num: 1026,
		name: "Salaos",
		types: ["Dark"],
		baseStats: {hp: 75, atk: 85, def: 90, spa: 110, spd: 130, spe: 90},
		abilities: {0: "Heatproof"},
		weightkg: 74,
	},
	morndos: {
		num: 1027,
		name: "Morndos",
		types: ["Dark", "Flying"],
		baseStats: {hp: 85, atk: 90, def: 110, spa: 75, spd: 90, spe: 130},
		abilities: {0: "Synchronize"},
		weightkg: 56,
	},
	pythos: {
		num: 1028,
		name: "Pythos",
		types: ["Dark"],
		baseStats: {hp: 90, atk: 110, def: 130, spa: 85, spd: 90, spe: 75},
		abilities: {0: "Long Reach"},
		weightkg: 178,
	},
	quadringo: {
		num: 1029,
		name: "Quadringo",
		types: ["Dragon", "Fairy"],
		baseStats: {hp: 75, atk: 130, def: 95, spa: 100, spd: 120, spe: 80},
		abilities: {0: "Keen Eye", 1: "Pastel Veil", H: "Swift Swim"},
		weightkg: 156,
	},
	corundell: {
		num: 1030,
		name: "Corundell",
		types: ["Rock", "Electric"],
		baseStats: {hp: 50, atk: 100, def: 150, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Clear Body"},
		weightkg: 137,
	},
	flocura: {
		num: 1031,
		name: "Flocura",
		types: ["Bug", "Ghost"],
		baseStats: {hp: 55, atk: 95, def: 55, spa: 105, spd: 180, spe: 110},
		abilities: {0: "Xenospore"},
		otherFormes: ["Flocura-Nexus"],
		formeOrder: ["Flocura", "Flocura-Nexus"],
		weightkg: 7.1,
	},
	flocuranexus: {
		num: 1032,
		name: "Flocura-Nexus",
		baseSpecies: "Flocura",
		forme: "Nexus",
		types: ["Bug", "Ghost"],
		baseStats: {hp: 105, atk: 125, def: 105, spa: 135, spd: 180, spe: 50},
		abilities: {0: "Xenospore"},
		requiredAbility: "Xenospore",
		battleOnly: "Flocura",
		weightkg: 999,
	},
};