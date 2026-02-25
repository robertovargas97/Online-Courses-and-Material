// export class Person {
//   constructor(
//     public name: string,
//     public address: string,
//     private age: number = 29,
//   ) {
//     this.name = name;
//     this.address = address;
//     this.age = age;
//   }
// }

// const robert: Person = new Person("Robertillo", "Porve", 29);
// console.log(robert);

// export class SuperHero extends Person {
//   constructor(
//     public name: string,
//     public superPower: string,
//   ) {
//     super(name, "My house");
//     this.superPower = superPower;
//   }
// }

// const superRobert: SuperHero = new SuperHero("Super Roberto", "kamhehameha");

// console.log(superRobert);

//  Composicion
export class Person {
  constructor(
    public firstName: string,
    public homeAddress: string,
    private age: number = 29,
  ) {
    this.firstName = firstName;
    this.homeAddress = homeAddress;
    this.age = age;
  }
}

const robertOne: Person = new Person("Robertillo", "Porve", 29);
console.log(robertOne);

export class SuperHero {
  constructor(
    public name: string,
    public superPower: string,
    public person: Person,
  ) {}
}

const robertTwo = new Person("Robert", "Jei's house");

const superRobert: SuperHero = new SuperHero(
  "Super Roberto",
  "kamhehameha",
  robertTwo,
);

console.log(superRobert);
