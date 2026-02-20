function addNumber(a: number, b: number): number {
  return a + b;
}

const square = (a: number) => a * a;

function multiple(a: number, b?: number, c: number = 10) {
  let result = a * c;
  if (b) {
    result *= b;
  }
  return result;
}

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

console.log(addNumber(1, 3));
console.log(addNumber(115_591, 3_288));
console.log(square(12));

console.log(multiple(5));
console.log(multiple(5, 2));
console.log(multiple(5, 5, 3));

const Goku: Character = {
  name: "Goku",
  hp: 0,
  showHp: function (): void {
    console.log(this.hp);
  },
};

Goku.showHp();
healCharacter(Goku, 85);
Goku.showHp();

export {};
