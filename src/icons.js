
export const all = {
  milk:     'assets/icons/icon-milk.svg',
  cheese:   'assets/icons/icon-cheese.svg',
  eggs:     'assets/icons/icon-eggs.svg',
  chicken:  'assets/icons/icon-chicken.svg',
  beef:     'assets/icons/icon-beef.svg'
};

export default function icon(id) {
  return all[id];
}
