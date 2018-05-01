
export var app = '';
export var AmmoList = {};
export var ArmourList = {};
export const AtHigherLevels = "At Higher Levels: ";
export var levels = [];
export var BackgroundFeatureList = {};
export var BackgroundList = {};
export var Base_ClassList = {};
export var ClassList = {};
export var ClassSubList = {};
export var CreatureList = {};
export var FeatsList = {};
export var FightingStyles = {};
export var GearList = {};
export var PacksList = {};
export var PsychicFocus = {};
export var PsionicsList = {};
export const RequiredSheetVersion = 12.999;
export var RaceList = {};
export var RaceSubList = {};
export var sheetVersion = 13;
export var SourceList = {};
export var SpellsList = {};
export var tDoc = { getField: {} };
export var typePF = true;
export var WeaponsList = {};
export function AddBackgroundVariant(baseBackgroundName, variantBackgroundName, backgroundObj) {

}
export function AddFightingStyle(listOfClasses, styleName, styleObject) {

}

export function AddRacialVariant(raceName, attributeType, attributeObject) {

}

export function AddSubClass(className, subclassName, subclassAttributes) {
	// this looks like one of the workhorses.
}

export function AddToNotes(target, textToAdd) {
	// example target: ClassSubList['sorcerer-wild magic'].features.subclassfeature1.wmsurgetable1
	// example textToAdd: "Wild Mage's Wild Magic Surge table, part 1"
}

export function AddWarlockInvocation(invocationName, invocationObject) {

}
export function ConvertToMetric(noteStr, roundingValue) {
	// roundingValue is passed in as a float
}

export function desc(descriptions) {
	// Don't know what to do with this yet.
}

export function DoTemplate(s1, s2) {
	// seems to always be DoTemplate("ASnotes", "Add");
}

export function isTemplVis(templName) {
	// appears to return a boolean.
	return true;
}

export function newObj(objName) {
	// This api is not at all clear yet. It seems to set up attributes in an object.
}

export function parseSource(tbd) {
	// do something with aDomain.features["subclassfeature1"].source
}

export function ReplaceString(noteFld, noteStr, trueFalseVar, oldNoteStr) {

}

export function RunFunctionAtEnd(passedFunction) {
	//ensure that the functions passed into this are run last.
}

export function toUni(someString) {
	// No idea what's going on here yet
}

export function What(setting) {
	if (setting === "Unit System") {
		return "metric" // Or non metric I guess?
	}
}


export function importdata() {
  //RaceList["foo"] = "bar";
  //RaceList["baz"] = "bonk";
  datafile.importData();
  console.log(RaceList);
}
