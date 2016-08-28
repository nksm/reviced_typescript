// readonly としてしたプロパティは、読み取り専用となり変更を禁止する

interface Foo {
  // readonly を使うと直接は書き換えできなくなる
  readonly str: string;
}

let objA: Foo = {
  str: "TypeScript",
};

// const じゃないので、迂回路から変更できてしまう
let objB = {
  str: "Mutable",
}
objA = objB;
objB.str = "Modified!";
// Modified! と表示される
console.log(objA.str);


// クラスプロパティで readonly を利用する場合、コンストラクタのみ変更可能
class Bar {
  readonly str: string;
  constructor() {
    // 変更可能
    this.str = "TypeScript";
  }
  modify() {
    // readonly を変更できるのは、constructor のみ
    // this.str = "JavaScript";
  }
}

export { }