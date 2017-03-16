function pet(name, species) {
    this.name = name;
    this.species = species;
    this.sleepy = 0;
    this.hunger = 0;
    this.awake = true;
}

function speak() {
    if (this.species == "Dog") {
        this.hunger = this.hunger + 1;
        this.sleepy = this.sleepy + 1;
        return "Woof! That means I love you!"
    } else if (this.species == "Cat") {
        this.hunger = this.hunger + 1;
        this.sleepy = this.sleepy + 1;
        return "Ugh. Meow."
    }
}

function rollOver() {
    if (this.species == "Dog" && this.hunger < 4 && this.sleepy < 5 && this.awake == true) {
        this.hunger = this.hunger + 1;
        this.sleepy = this.sleepy + 1;
        return "Rolling! Now what? I love you"
    } else if (this.species == "Dog" && this.hunger < 4 && this.sleepy < 5 && this.awake ==)


    } else if (this.species == "Cat" && this.hunger < 4 && this.sleepy < 5) {
        this.hunger = this.hunger + 1;
        this.sleepy = this.sleepy + 1;
        return "Ugh. Meow."
    }
}
