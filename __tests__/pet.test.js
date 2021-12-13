const Pet = require('../src/pet');

let pet;
beforeEach(() => {
	pet = new Pet('Fido');
});
describe('constructor', () => {
	it('returns an object', () => {
		expect(new Pet('Fido')).toBeInstanceOf(Object);
	});
	it('sets pet name to parameter name', () => {
		expect(pet.name).toEqual('Fido');
	});
	it('sets inital age to 0', () => {
		expect(pet.age).toEqual(0);
	});
	it('sets inital hunger to 0', () => {
		expect(pet.hunger).toEqual(0);
	});
	it('sets initial fitness to 10', () => {
		expect(pet.fitness).toEqual(10);
	});
});

describe('growUp', () => {
	it('increments the pet age by one', () => {
		pet.growUp();
		expect(pet.age).toEqual(1);
	});
	it('increases the pet hunger by 5', () => {
		pet.growUp();
		expect(pet.hunger).toEqual(5);
	});
	it('decreases the pet fitness by 3', () => {
		pet.growUp();
		expect(pet.fitness).toEqual(7);
	});
});

describe('walk', () => {
	it('increases fitness by 4', () => {
		pet.fitness = 5;
		pet.walk();
		expect(pet.fitness).toEqual(9);
	});
	it('stops fitness going over 10', () => {
		pet.fitness = 9;
		pet.walk();
		expect(pet.fitness).toEqual(10);
	});
});

describe('feed', () => {
	it('decreases pet hunger level by 3', () => {
		pet.hunger = 5;
		pet.feed();
		expect(pet.hunger).toEqual(2);
	});
	it('stops hunger going less than 0', () => {
		pet.hunger = 1;
		pet.feed();
		expect(pet.hunger).toEqual(0);
	});
});

describe('checkUp', () => {
	it('return "I need a walk" if fitness less than 4 and hunger less than 5', () => {
		pet.hunger = 1;
		pet.fitness = 1;
		expect(pet.checkUp()).toEqual('I need a walk');
	});
	it('return "I am hungry" if hunger greater than 4 and fitness greater than 3', () => {
		pet.hunger = 5;
		pet.fitness = 9;
		expect(pet.checkUp()).toEqual('I am hungry');
	});
	it('return "I am hungry AND I need a walk" if hunger greater than 4 and fitness less than 4', () => {
		pet.hunger = 9;
		pet.fitness = 1;
		expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
	});

	it('return "I feel great!" if hunger less than 5 and fitness greater than 3', () => {
		expect(pet.checkUp()).toEqual('I feel great!');
	});
});

describe('isAlive', () => {
	it('returns false if fitness < 1', () => {
		pet.fitness = 0;
		expect(pet.isAlive).toEqual(false);
	});
	it('returns true if fitness > 0', () => {
		expect(pet.isAlive).toEqual(true);
	});
	it('returns false if hunger > 9', () => {
		pet.hunger = 10;
		expect(pet.isAlive).toEqual(false);
	});
	it('returns true if hunger < 10', () => {
		expect(pet.isAlive).toEqual(true);
	});
	it('returns false if age > 29', () => {
		pet.age = 30;
		expect(pet.isAlive).toEqual(false);
	});
	it('returns true if age < 30', () => {
		expect(pet.isAlive).toEqual(true);
	});
});
