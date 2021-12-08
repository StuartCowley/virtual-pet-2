const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets pet name to Fido', () => {
      expect(new Pet('Fido')).toEqual({name: 'Fido'});
    });
  });