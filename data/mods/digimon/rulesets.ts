import DIGIMON_SETS from './digimon-sets';
function getLearnset(learnset) {
	return learnset.species === this;
}
function correctLearnset(learnset) {
	let corrected = learnset;
	for(const i in learnset.moves) {
		let name = learnset.moves[i];
		corrected.moves[i] = name.replace(/\s/g, "").toLowerCase();
	}
	return corrected;
}
function correctMoveset(moveset) {
	let corrected = moveset;
	for(const i in moveset) {
		let name = moveset[i];
		corrected[i] = name.replace(/\s/g, "").toLowerCase();
	}
	return corrected;
}
//Rulesets
export const Rulesets: {[k: string]: ModdedFormatData} = {
	standard: {
		inherit: true,
		desc: "The standard ruleset for all Digimon tiers",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview', 'Terastal Clause'],
		onBegin() {
			this.add('raw', '<center><table style="height: 34px;border-color: #006c86;background-color: #FFF;color: #000;" border="4" width="276"><tbody><tr><td style="width: 260px; text-align: center;"><strong><a href="https://github.com/DieterReinert/Lets-Go-Digimon" target="_blank" rel="noopener">Let\'s Go Digimon!</a><br /></strong></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Mod Features</strong><hr /><ul><li style="text-align: left;">Let\'s Go Pikachu & Eevee Meta</li><li style="text-align: left;">Mega Stones & X-Antibody</li><li style="text-align: left;">Digimon Attribute Abilites</li></ul></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>Type Colors</strong></strong></strong><hr /><ul><li style="text-align: left;">DigiTypes are Color Coated</li><li style="text-align: left;">This is due to limitations</li></ul><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.imgur.com/20GLWTR.png" /></strong></p></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>X-Antibody</strong></strong></strong><hr /><ul><li style="text-align: left;">X-Antibody is a Held Item</li><li style="text-align: left;">Low HP Activates it</li><li style="text-align: left;">1 Digimon Per Party X-Evolves</li><li style="text-align: left;">Mega Stones are unaffected</li></ul><img src="https://i.imgur.com/Me5Sbt4.png" /></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Digimon Abilities</strong><hr /><ul><li style="text-align: left;">Digimon have 3 Abilities</li><li style="text-align: left;">Vaccine, Virus & Data</li></ul><p><img src="https://i.imgur.com/RbZ8Wxv.png" /></p><ul><li style="text-align: left;">Base Power is <strong>🡅</strong>1.2x or <strong>🡇</strong>0.8x</li></ul><p><img src="https://i.imgur.com/asZtwWl.png" /></p></td></tr></tbody></table></center>');
		},
		onValidateSet(set) {
			const rule_breaks = new Array();
			const mon = this.dex.species.get(set.species);
			if(mon.universe === 'Digimon') {
				//X-Form not valid as standalone
				if(mon.name.includes("-X")) {
					return[ //Must return, breaks other checks
						`Invalid mon: ${mon.name}.`,
						`Use the base form of this Digimon and equip X-Antibody as held item.`
					];
				}
				//Only X-Antibody as item
				if(set.item && set.item !== 'X-Antibody') {
					rule_breaks.push(
						`Invalid item: ${set.item} on ${mon.name}.`,
						'The only valid item is X-Antibody.'
					);
				}
				//Check move validity
				let moveset = correctMoveset(set.moves);
				let learns = DIGIMON_SETS.find(getLearnset, mon.name);
				learns = correctLearnset(learns);
				for(const i in moveset) {
					if (!learns?.moves.includes(moveset[i])) {
						rule_breaks.push(`Invalid move: ${mon.name} cannot learn ${set.moves[i]}.`);
					}
				}
				//Ability check
				if(set.ability !== mon.abilities[0]) {
					rule_breaks.push(`Invalid ability: ${mon.name}'s ability is ${mon.abilities[0]}, not ${set.ability}.`);
				}
			}
			//Return if rules broken
			if(rule_breaks.length > 0) {
				return rule_breaks;
			}
		},
	},
	standardnext: {
		effectType: 'ValidatorRule',
		name: 'Standard NEXT',
		desc: "Restricted teambuilder for Digimon-only formats",
		onValidateTeam(team) {
			const invalid_mons = new Array();
			for (const set of team) {
				const mon = this.dex.species.get(set.species);
				//Ban all pokemon
				if(mon.universe === 'Pokemon') {
					invalid_mons.push(mon.name);
				}
			}
			if(invalid_mons.length > 0) {
				return [
					`Invalid mons: ${invalid_mons}.`,
					'Pokemon are not allowed in Digimon-only formats.'
				];
			}
		},
	},
};
