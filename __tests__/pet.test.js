const Pet = require('../src/pet');

describe('constructor', () => {
	it('returns an object', () => {
		expect(new Pet('Fido')).toBeInstanceOf(Object);
	});
	it('sets pet name to parameter name', () => {
		const pet = new Pet('Fido');
		expect(pet.name).toEqual('Fido');
	});
	it('sets inital age to 0', () => {
		const pet = new Pet('Fido');
		expect(pet.age).toEqual(0);
	});
	it('sets inital hunger to 0', () => {
		const pet = new Pet('Fido');
		expect(pet.hunger).toEqual(0);
	});
	it('sets initial fitness to 10', () => {
		const pet = new Pet('Fido');
		expect(pet.fitness).toEqual(10);
	});
});

describe('growUp', () => {
	it('increments the pet age by one', () => {
		const pet = new Pet('Fido');
		pet.growUp();
		expect(pet.age).toEqual(1);
	});
	it('increases the pet hunger by 5', () => {
		const pet = new Pet('Fido');
		pet.growUp();
		expect(pet.hunger).toEqual(5);
	});
	it('decreases the pet fitness by 3', () => {
		const pet = new Pet('Fido');
		pet.growUp();
		expect(pet.fitness).toEqual(7);
	});
});

describe('walk', () => {
	it('increases fitness by 4', () => {
		const pet = new Pet('Fido');
		pet.fitness = 5;
		pet.walk();
		expect(pet.fitness).toEqual(9);
	});
	it('stops fitness going over 10', () => {
		const pet = new Pet('Fido');
		pet.fitness = 9;
		pet.walk();
		expect(pet.fitness).toEqual(10);
	});
});

describe('feed', () => {
	it('decreases pet hunger level by 3', () => {
		const pet = new Pet('Fido');
		pet.hunger = 5;
		pet.feed();
		expect(pet.hunger).toEqual(2);
	});
	it('stops hunger going less than 0', () => {
		const pet = new Pet('Fido');
		pet.hunger = 1;
		pet.feed();
		expect(pet.hunger).toEqual(0);
	});
});
