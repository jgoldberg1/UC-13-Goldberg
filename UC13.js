function pet(name, species) {
    this.name = name;
    this.species = species;
    this.sleepy = 0;
    this.hunger = 0;
    this.awake = true;
    this.speak = speak;
    this.rollOver = rollOver;
    this.nap = nap;
    this.eat = eat;
    this.wakeUp = wakeUp;
    this.fetch = fetch;
    this.shake = shake;

    function speak() {
        if (this.species === "Dog") {
            this.hunger = this.hunger + 1;
            this.sleepy = this.sleepy + 1;
            return "Woof! That means I love you!";
        }
        else if (this.species === "Cat") {
            this.hunger = this.hunger + 1;
            this.sleepy = this.sleepy + 1;
            return "Ugh. Meow.";
        }
    }

    function eat() {
        if (this.species === "Dog") {
            this.hunger = 0;
            this.sleepy = this.sleepy + 1;
            return "Nom nom nom nom. Yum, thank you for this delicious food! I love you!";
        }
        else if (this.species === "Cat") {
            this.hunger = 0;
            this.sleepy = this.sleepy + 1;
            return "Ugh, I guess I'll eat this";
        }
    }
   function nap() {
        if (this.species === "Dog") {
            this.awake == false;
            this.sleepy = 0;
            return "Zzz";
        }
        else if (this.species === "Cat") {
            this.awake = false;
            this.sleepy = 0;
            return "Zzz";
        }
    }

    function wakeUp() {
        if (this.species === "Dog") {
            this.awake == true;
            this.sleepy = 0;
            this.hungry = 4;
            return "I'm awake! Let's eat and then play! I love you!";
        }
        else if (this.species === "Cat") {
            this.awake = true;
            this.sleepy = 0;
            this.hungry = 4
            return "Ugh. I'm awake now. Is there anything to eat around here?";
        }
    }

    function rollOver() {
        //dog roll over success
        if (this.species === "Dog" && this.hunger < 4 && this.sleepy < 5 && this.awake == true) {
            this.hunger = this.hunger + 1;
            this.sleepy = this.sleepy + 1;
            return "Rolling! Now what? I love you";
            //dog too tired
        }
        else if (this.species === "Dog" && this.hunger < 4 && this.sleepy >= 5 && this.awake == true) {
            return "Yawn. Let's play after a nap. I love you!";
            //dog too hungry
        }
        else if (this.species === "Dog" && this.hunger >= 4 && this.sleepy < 5 && this.awake == true) {
            return "I'm hungry! Let's eat first. I love you!";
            //dog asleep
        }
        else if (this.species === "Dog" && this.awake == false) {
            return "Zzz";
            //cat roll over success
        }
        else if (this.species === "Cat" && this.hunger < 4 && this.sleepy < 5 && this.awake == true) {
            this.hunger = this.hunger + 1;
            this.sleepy = this.sleepy + 1;
            return "Ugh. I'm a cat. I only roll over if I want to.";
            //cat too tired
        }
        else if (this.species === "Cat" && this.hunger < 4 && this.sleepy >= 5 && this.awake == true) {
            return "Ugh. I need a 12 hour nap first";
            //cat too hungry
        }
        else if (this.species === "Cat" && this.hunger >= 4 && this.sleepy < 5 && this.awake == true) {
            return "Ugh. Feed me before I even think about it.";
            //cat asleep
        }
        else if (this.species === "Cat" && this.awake == false) {
            return "Zzz";
        }
    }

    function fetch() {
        //dog succes
        if (this.species === "Dog" && this.hunger < 4 && this.sleepy < 5 && this.awake == true) {
            this.hunger = this.hunger + 1;
            this.sleepy = this.sleepy + 1;
            return "Must get the stick! I love you!";
            //dog too tired
        }
        else if (this.species === "Dog" && this.hunger < 4 && this.sleepy >= 5 && this.awake == true) {
            return "Yawn. Let's play after a nap. I love you!";
            //dog too hungry
        }
        else if (this.species === "Dog" && this.hunger >= 4 && this.sleepy < 5 && this.awake == true) {
            return "I'm hungry! Let's eat first. I love you!";
            //dog asleep
        }
        else if (this.species === "Dog" && this.awake == false) {
            return "Zzz";
            //cat roll over success
        }
        else if (this.species === "Cat" && this.hunger < 4 && this.sleepy < 5 && this.awake == true) {
            this.hunger = this.hunger + 1;
            this.sleepy = this.sleepy + 1;
            return "Ugh. I'm a cat. I don't fetch.";
            //cat too tired
        }
        else if (this.species === "Cat" && this.hunger < 4 && this.sleepy >= 5 && this.awake == true) {
            return "Ugh. I need a 12 hour nap first";
            //cat too hungry
        }
        else if (this.species === "Cat" && this.hunger >= 4 && this.sleepy < 5 && this.awake == true) {
            return "Ugh. Feed me before I even think about it.";
            //cat asleep
        }
        else if (this.species === "Cat" && this.awake == false) {
            return "Zzz";
        }
    }

    function shake() {
        //dog succes
        if (this.species === "Dog" && this.hunger < 4 && this.sleepy < 5 && this.awake == true) {
            this.hunger = this.hunger + 1;
            this.sleepy = this.sleepy + 1;
            return "Nice to meet you! I love you!";
            //dog too tired
        }
        else if (this.species === "Dog" && this.hunger < 4 && this.sleepy >= 5 && this.awake == true) {
            return "Yawn. Let's play after a nap. I love you!";
            //dog too hungry
        }
        else if (this.species === "Dog" && this.hunger >= 4 && this.sleepy < 5 && this.awake == true) {
            return "I'm hungry! Let's eat first. I love you!";
            //dog asleep
        }
        else if (this.species === "Dog" && this.awake == false) {
            return "Zzz";
            //cat roll over success
        }
        else if (this.species === "Cat" && this.hunger < 4 && this.sleepy < 5 && this.awake == true) {
            this.hunger = this.hunger + 1;
            this.sleepy = this.sleepy + 1;
            return "Ugh. I'm a cat. I never shake.";
            //cat too tired
        }
        else if (this.species === "Cat" && this.hunger < 4 && this.sleepy >= 5 && this.awake == true) {
            return "Ugh. I need a 12 hour nap first";
            //cat too hungry
        }
        else if (this.species === "Cat" && this.hunger >= 4 && this.sleepy < 5 && this.awake == true) {
            return "Ugh. Feed me before I even think about it.";
            //cat asleep
        }
        else if (this.species === "Cat" && this.awake == false) {
            return "Zzz";
        }
    }
}
