function MyDecorator<T extends new (...args: any[]) => {}>(constructor: T) {
  return class extends constructor {
    newProperty = "Hello Decorators";
  };
}

@MyDecorator
export class SuperClass {
  public myProperty: string = "Hello World";

  print() {
    console.log(this.myProperty);
  }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);
