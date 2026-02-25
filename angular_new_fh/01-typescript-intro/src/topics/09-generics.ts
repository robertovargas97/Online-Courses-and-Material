export function whatsMyType<T>(arg: T): string {
  return typeof arg;
}

console.log(whatsMyType<string>("Hola"));
console.log(whatsMyType<number>(123));
console.log(whatsMyType<boolean>(true));
console.log(whatsMyType<number[]>([1, 2, 3]));
