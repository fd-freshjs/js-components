
class Animal {
  constructor(age, name, isSleeping, food) {
    this.age = age;
    this.name = name;
    this.isSleeping = isSleeping;
    this.food = food;
  }

  say() {
    console.log(this.name);
  }

  sleep(isSleeping) {
    this.isSleeping = isSleeping;
  }

  checkIfLikes(meal) {
    return this.food.includes(meal);
  }

  getMeat() {
    const result = this.food.filter((v) => {
      return v === 'meat';
    });
  }

  isIsNameArray(names) {
    const found = names.find((v) => {
      return v === this.name;
    });

    return Boolean(found);
  }

  logFood() {
    const inner = function () {
      this.food.forEach(console.log)
    }

    inner();
  }

  static myValue = function(instance) {
    instance.value;
  };
}





const animal1 = new Animal(4, 'Murzik', true, ['meet', 'fish']);
const animal2 = new Animal(8, 'Sharik', false, ['meet', 'bones']);

animal1.say();
const ret1 = animal1.checkIfLikes('fish');
const ret2 = animal1.checkIfLikes('mouse');
console.log(ret1, ret2);


const ret3 = animal1.isIsNameArray(['Vadka', 'Rom', 'Rizhyk', 'Murzik']);
console.log(ret3);

animal1.logFood();
