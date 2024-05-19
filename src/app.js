// Задание 1

export const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
export function orderByProps(obj, [first, second]) {
  const arrKey = [];
  const arrAlphabet = [];
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === first || keys[i] === second) {
      arrKey.push({key: keys[i], value: obj[keys[i]]});
    };
  };

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] !== first && keys[i] !== second) {
        arrAlphabet.push({key: keys[i], value: obj[keys[i]]});
        arrAlphabet.sort((a, b) => a.key > b.key ? 1 : -1);
    };
  };

  const sortArr = arrKey.concat(arrAlphabet);
  return sortArr
};

//Задание 2

export const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
};

export function getSpecialAttack(character) {
    const special = character.special.find(item => item.id === 8);
    if (special) {
      if (special.description) {
        return {
          id: special.id,
          name: special.name,
          icon: special.icon,
          description: special.description
        };
      } else {
          return {
            id: special.id,
            name: special.name,
            icon: special.icon,
            description: 'Описание недоступно'
          };
        };
    };
    return null;
};