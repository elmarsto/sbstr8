
interface Bar {
  value: string;
}

class Baz implements Bar {
  value = 'bazzy';
}

container.register<Bar>('bar', { useClass: Baz });

@injectable()
export class Foo {
  constructor(@inject('bar') public bar: Bar) {}
}

const myFoo = container.resolve(Foo);
console.log(myFoo?.bar?.value);

import 'reflect-metadata';
import { inject, injectable, container } from 'tsyringe';
