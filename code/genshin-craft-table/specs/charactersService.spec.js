import { baseCharacterStats } from '../src/services/characterServices';

test('should be able to read JSON', () => {
    expect(baseCharacterStats('Default')).toBe(require('../src/data/characters/Default.json'))
});

