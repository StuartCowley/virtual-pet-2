const ageIncrease = 1;
const hungerIncrease = 5;
const fitnessDecrease = 3;
const fitnessIncrease = 4;
const fitnessMax = 10;

function Pet(name) {
	this.name = name;
	this.age = 0;
	this.hunger = 0;
	this.fitness = 10;
	this.children = [];
}

Pet.prototype = {
	get isAlive() {
		return this.age < 30 && this.hunger < 10 && this.fitness > 0;
	},
};

Pet.prototype.growUp = function () {
	if (!this.isAlive) {
		throw new Error('Your pet is no longer alive :(');
	}
	this.age += ageIncrease;
	this.hunger += hungerIncrease;
	this.fitness -= fitnessDecrease;
};

Pet.prototype.walk = function () {
	if (!this.isAlive) {
		throw new Error('Your pet is no longer alive :(');
	}
	if (this.fitness < fitnessMax - fitnessIncrease) {
		this.fitness += fitnessIncrease;
	} else {
		this.fitness = fitnessMax;
	}
};

Pet.prototype.feed = function () {
	if (!this.isAlive) {
		throw new Error('Your pet is no longer alive :(');
	}
	if (this.hunger > 2) {
		this.hunger -= 3;
	} else {
		this.hunger = 0;
	}
};

Pet.prototype.checkUp = function () {
	if (!this.isAlive) {
		return 'Your pet is no longer alive :(';
	}
	if (this.fitness < 4 && this.hunger > 4) {
		return 'I am hungry AND I need a walk';
	}
	if (this.fitness < 4 && this.hunger < 5) {
		return 'I need a walk';
	}
	if (this.hunger > 4 && this.fitness > 3) {
		return 'I am hungry';
	} else {
		return 'I feel great!';
	}
};

Pet.prototype.adoptChild = function (childName) {
	this.children.push(childName);
};

Pet.prototype.haveaChild = function (childName) {
	const child = new Pet(childName);
	this.children.push(child);
};

module.exports = Pet;
