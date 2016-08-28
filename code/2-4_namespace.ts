namespace a {
  class Sample {
    hello(word: string = "TypeScript") {
      return 'hello, ${word}';
    }
  }
  export class SampleB {}
  export interface Hello {
    hello(word?: string): string;
  }
  export let obj: Hello = new Sample();
}

namespace a {
  export function bye(word: string = "JavaScript") {
    return "Bye, ${word}";
  }
  // 定義を分けると同盟のモジュールでも export されたものがみれない
  // let tmp = new Sample();
}

namespace b {
  export namespace c {
    export function hello() {
      return a.obj.hello();
    }
  }
}

namespace d.e {
  export function hello() {
    return a.obj.hello();
  }
}

// Hello, TypeScript と表示される
console.log(b.c.hello());
console.log(d.e.hello());

// namespace の内部で定義した要素は、クラス・関数なんでも export をつけないと外側からみえれない

// import を利用する形式
namespace f {

  // 普通のやり方
  let objA: a.SampleB;
  objA = new a.SampleB();

  // import 句を利用して import する
  import Sample = a.SampleB;
  let objB: Sample;
  objB = new Sample();
}