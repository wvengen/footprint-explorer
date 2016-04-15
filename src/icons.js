import React from 'react';

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

// using this insteaad of {SvgIcon} somehow doesn't work with dynamic changes :(
export const IconDefs = () => (
  <defs>
    {Object.entries(icons).map(([id,url]) =>
      <image id={"icon-"+id} key={id} x="-17.7" y="-21.25" height="35.4" width="42.5" xlinkHref={url} />
    )}
  </defs>
);

const AR = 12/10; // aspect ratio
export const SvgIcon = ({id, x=0, y=0, size=1}) =>
  <image x={x-size/2} y={y-size/2} width={size} height={size/AR} xlinkHref={icon(id)} />;
