import { classNames } from "./classNames"

describe('classNames', () => {
    test('without params', () => {
        expect(classNames({})).toBe('');
    });

    test('with first param', () => {
        expect(classNames({cls: 'someClass'})).toBe('someClass');
    });

    test('with second param', () => {
        expect(classNames({mods: {'first': true, 'second': false}})).toBe('first');
    });

    test('with third param', () => {
        expect(classNames({additional: ['test1', 'test2']})).toBe('test1 test2');
    });

    test('all params', () => {
        expect(classNames({
            cls: 'main', 
            mods: {'first': true, 'second': false}, 
            additional: ['test1', 'test2']
        })).toBe('main test1 test2 first');
    });
})