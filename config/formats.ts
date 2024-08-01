// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [
	// Digimon Metas
	{
		section: "Digimon Random Battles",
		column: 1,
	},
	{
		name: "[Digimon] Random Battle",
		desc: "Battle and play with your friends with this Digimon & LGPE hyrbid.",
		mod: "gen7digimon",
		team: "randomDigimon",
		ruleset: ['Standard'],
	},
	{
		name: "[Digimon] Random Doubles",
		desc: "Battle and play with your friends with this Digimon & LGPE hyrbid.",
		mod: "gen7digimon",
		gameType: 'doubles',
		team: "randomDigimon",
		ruleset: ['Standard'],
	},
	{
		name: "[Digimon] Random Triples",
		desc: "Battle and play with your friends with this Digimon & LGPE hyrbid.",
		mod: "gen7digimon",
		gameType: 'triples',
		team: "randomDigimon",
		ruleset: ['Standard'],
	},
	{
		name: "[Digimon] Random Monotype",
		desc: "Battle in this Digimon & LGPE Monotype format!",
		mod: "gen7digimon",
		team: "randomDigimon",
		ruleset: ['Standard'],
	},
	{
		name: "[Digimon] Random Monotype Doubles",
		desc: "Battle in this Digimon & LGPE Monotype format!",
		mod: "gen7digimon",
		gameType: 'doubles',
		team: "randomDigimon",
		ruleset: ['Standard'],
	},
	{
		name: "[Digimon] Digimon x Pokemon Random Battle",
		desc: "Worlds Collide in this Digimon & LGPE Format!",
		mod: "gen7digimon",
		team: "randomDigimon",
		ruleset: ['Standard'],
	},
	{
		name: "[Digimon] Digimon x Pokemon Random Doubles",
		desc: "Worlds Collide in this Digimon & LGPE Format!",
		mod: "gen7digimon",
		gameType: 'doubles',
		team: "randomDigimon",
		ruleset: ['Standard'],
	},
	{
		section: "Digimon Metas",
		column: 1,
	},
	{
		name: "[Gen 7] Digimon Test",
		desc: "Test",
		mod: "gen7digimon",
		ruleset: ['Standard', 'Standard NEXT'],
	},
];
