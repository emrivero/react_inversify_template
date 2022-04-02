export class Counter {
  constructor(public count: number, public name: string) {}

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }

  changeName(name: string) {
    this.name = name;
  }
}
