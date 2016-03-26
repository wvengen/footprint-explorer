const icons = {
  milk:       require('../assets/icons/icon-milk.svg'),
  cheese:     require('../assets/icons/icon-cheese.svg'),
  eggs:       require('../assets/icons/icon-eggs.svg'),
  chicken:    require('../assets/icons/icon-chicken.svg'),
  beef:       require('../assets/icons/icon-beef.svg'),
  soymilk:    require('../assets/icons/icon-soymilk.svg'),
  almondmilk: require('../assets/icons/icon-almondmilk.svg'),
  tofu:       require('../assets/icons/icon-tofu.svg'),
  beans:      require('../assets/icons/icon-beans.svg'),
  lentils:    require('../assets/icons/icon-lentils.svg'),
  nuts:       require('../assets/icons/icon-nuts.svg')
};

export default function icon(id) {
  return icons[id];
}
