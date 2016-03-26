
// Data sources
const src = {
  ewg_meg_2011: {
    year: 2011,
    assoc_code: 'EWG',
    assoc_name: 'Environmental Working Group',
    title: "Meat eater's guide to climate change and health",
    url: 'http://www.ewg.org/meateatersguide'
  },
  fa_milk_2012: {
    year: 2012,
    assoc_name: 'Franklin Associates',
    title: 'Life Cycle Assessment of Coconut Milk and Two Non-Dairy Milk Beverage Alternatives',
    url: 'http://lcacenter.org/lcaxii/final-presentations/719.pdf'
    // see also http://sodeliciousdairyfree.com/environmental-footprint
  },
  blonk_2008: {
    year: 2008,
    assoc_name: 'Blonk Milieu Advies',
    title: 'Milieueffecten van Nederlandse consumptie van eiwitrijke producten',
    url: 'http://library.wur.nl/WebQuery/wurpubs/369782'
    // direct pdf at http://edepot.wur.nl/117665
  }
};

// impact: kg CO2-equivalents per kg of consumed food
const data = [
  {area: 'us', impact: 'co2',      food: 'lamb',          value: 39.2,   source: src.ewg_meg_2011},
  {area: 'us', impact: 'co2',      food: 'beef',          value: 27.0,   source: src.ewg_meg_2011},
  {area: 'us', impact: 'co2',      food: 'cheese',        value: 13.5,   source: src.ewg_meg_2011},
  {area: 'us', impact: 'co2',      food: 'lamb',          value: 39.2,   source: src.ewg_meg_2011},
  {area: 'us', impact: 'co2',      food: 'beef',          value: 27.0,   source: src.ewg_meg_2011},
  {area: 'us', impact: 'co2',      food: 'cheese',        value: 13.5,   source: src.ewg_meg_2011},
  {area: 'us', impact: 'co2',      food: 'pork',          value: 12.1,   source: src.ewg_meg_2011},
  {area: 'us', impact: 'co2',      food: 'salmon',        value: 11.9,   source: src.ewg_meg_2011}, // farmed
  {area: 'us', impact: 'co2',      food: 'turkey',        value: 10.9,   source: src.ewg_meg_2011},
  {area: 'us', impact: 'co2',      food: 'chicken',       value:  6.9,   source: src.ewg_meg_2011},
  {area: 'us', impact: 'co2',      food: 'tuna',          value:  6.1,   source: src.ewg_meg_2011}, // canned
  {area: 'us', impact: 'co2',      food: 'eggs',          value:  4.8,   source: src.ewg_meg_2011},
  {area: 'us', impact: 'co2',      food: 'potatoes',      value:  2.9,   source: src.ewg_meg_2011},
  {area: 'us', impact: 'co2',      food: 'rice',          value:  2.7,   source: src.ewg_meg_2011},
  {area: 'us', impact: 'co2',      food: 'peanutbutter',  value:  2.5,   source: src.ewg_meg_2011},
  {area: 'us', impact: 'co2',      food: 'nuts',          value:  2.3,   source: src.ewg_meg_2011},
  {area: 'us', impact: 'co2',      food: 'yoghurt',       value:  2.2,   source: src.ewg_meg_2011},
  {area: 'us', impact: 'co2',      food: 'brocolli',      value:  2.0,   source: src.ewg_meg_2011},
  {area: 'us', impact: 'co2',      food: 'tofu',          value:  2.0,   source: src.ewg_meg_2011},
  {area: 'us', impact: 'co2',      food: 'beans',         value:  2.0,   source: src.ewg_meg_2011}, // dry
  {area: 'us', impact: 'co2',      food: 'milk',          value:  1.9,   source: src.ewg_meg_2011}, // 2.0% fat
  {area: 'us', impact: 'co2',      food: 'tomatoes',      value:  1.1,   source: src.ewg_meg_2011},
  {area: 'us', impact: 'co2',      food: 'lentils',       value:  0.9,   source: src.ewg_meg_2011},
  // original data given per 0.5 us gallons = 1.89 liters = 1.89 kg
  // this may not be fully comparable with the above, but it's the best we have now
  {area: 'us', impact: 'co2',      food: 'soymilk',       value:  0.32,  source: src.fa_milk_2012},
  {area: 'us', impact: 'co2',      food: 'almondmilk',    value:  0.058, source: src.fa_milk_2012},
  {area: 'us', impact: 'co2',      food: 'coconutmilk',   value:  0.053, source: src.fa_milk_2012}, // specific brand

  {area: 'nl', impact: 'co2',      food: 'beef',          value: 15.9,   source: src.blonk_2008,    origin: 'nl'},
  {area: 'nl', impact: 'co2',      food: 'beef',          value: 38.3,   source: src.blonk_2008,    origin: 'ie'},
  {area: 'nl', impact: 'co2',      food: 'beef',          value: 59.0,   source: src.blonk_2008,    origin: 'br'},
  //{area: 'nl', impact: 'co2',      food: 'beef',          value:  8.9,   source: src.blonk_2008} // from milk cattle
  {area: 'nl', impact: 'co2',      food: 'lamb',          value: 16.3,   source: src.blonk_2008},
  {area: 'nl', impact: 'co2',      food: 'veal',          value:  6.3,   source: src.blonk_2008},  // white veal
  {area: 'nl', impact: 'co2',      food: 'pork',          value:  4.5,   source: src.blonk_2008},
  {area: 'nl', impact: 'co2',      food: 'chicken',       value:  2.6,   source: src.blonk_2008,    origin: 'nl'},
  {area: 'nl', impact: 'co2',      food: 'chicken',       value:  4.5,   source: src.blonk_2008,    origin: 'br'},
  {area: 'nl', impact: 'co2',      food: 'soymilk',       value:  0.6,   source: src.blonk_2008},
  {area: 'nl', impact: 'co2',      food: 'milk',          value:  1.2,   source: src.blonk_2008},
  {area: 'nl', impact: 'co2',      food: 'cheese',        value:  8.9,   source: src.blonk_2008},
  {area: 'nl', impact: 'co2',      food: 'eggs',          value:  2.0,   source: src.blonk_2008},
  {area: 'nl', impact: 'co2',      food: 'shrimp',        value:  9.7,   source: src.blonk_2008},
  {area: 'nl', impact: 'co2',      food: 'prawn',         value:  6.3,   source: src.blonk_2008},
  {area: 'nl', impact: 'co2',      food: 'salmon',        value:  2.1,   source: src.blonk_2008}, // farmed
  {area: 'nl', impact: 'co2',      food: 'pollock',       value:  1.6,   source: src.blonk_2008}, // wild
  {area: 'nl', impact: 'co2',      food: 'valess',        value:  6.2,   source: src.blonk_2008},
  {area: 'nl', impact: 'co2',      food: 'tofu',          value:  2.0,   source: src.blonk_2008},
  {area: 'nl', impact: 'co2',      food: 'tempeh',        value:  1.1,   source: src.blonk_2008},
  {area: 'nl', impact: 'co2',      food: 'cashew',        value:  2.3,   source: src.blonk_2008},
  {area: 'nl', impact: 'co2',      food: 'walnut',        value:  2.1,   source: src.blonk_2008},
  {area: 'nl', impact: 'co2',      food: 'peanut',        value:  1.4,   source: src.blonk_2008},
  {area: 'nl', impact: 'co2',      food: 'beans',         value:  1.6,   source: src.blonk_2008}, // brown beans in glass
  // not all foods from src.blonk_2008 are included here
  // to get a value for nuts, we take the average of peants(0.5), walnut(0.25) and cashew(0.25)
  {area: 'nl', impact: 'co2',      food: 'nuts',          value:  1.8,   source: src.blonk_2008},
];

// food categories
export const meat = ['lamb', 'beef', 'veal', 'pork'];
export const poultry = ['chicken', 'turkey'];
export const fish = ['salmon', 'tuna', 'shrimp', 'prawn', 'pollock'];
export const dairy = ['milk', 'yoghurt', 'cheese', 'valess'];
export const nonVegetarian = Array.concat(meat, poultry, fish);
export const nonVegan = Array.concat(nonVegetarian, 'eggs', dairy);

export default function(query) {
  const entries = Object.entries(query);
  return data.find((x) =>
    entries.findIndex(([key,val]) => x[key] !== val) < 0
  );
};
