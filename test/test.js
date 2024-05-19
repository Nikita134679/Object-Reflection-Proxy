import { obj } from '../src/app.js';
import { orderByProps } from '../src/app.js';
import { character } from '../src/app.js';
import { getSpecialAttack } from '../src/app.js';

test('test sort array', () => {
    const arrCharacted = orderByProps(obj, ['name', 'level']);
    const sortArray = [
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 }
    ];
    expect(arrCharacted).toEqual(sortArray);
});

test('test search characted', () => {
    const attachChar = getSpecialAttack(character);
    const resultAttack = {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
    };
    expect(attachChar).toEqual(resultAttack);
});
