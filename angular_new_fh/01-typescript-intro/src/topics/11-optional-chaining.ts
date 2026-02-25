export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Roberto",
};

const passenger2: Passenger = {
  name: "Jei",
  children: ["Sara", "Sofia"],
};

const printChildren = (passenger: Passenger): void => {
  const howManyChildren = passenger.children?.length || 0;
  console.log(howManyChildren);
};

printChildren(passenger1);
printChildren(passenger2);
