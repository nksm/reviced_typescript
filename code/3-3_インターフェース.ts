// インターフェース
/*
一番基本的な使い方は名前付きオブジェクト型リテラルを作ること
*/

// 一般的な用法
interface A {
  str: string;
}
// クラスに特定の実装を強制する
class AImpl implements A {
  str: string;
}
let objA: A = new AImpl();


// インターフェースは他のインターフェースを拡張できる
interface B1 {
  str: string;
}
interface B2 extends B1 {
  num: number;
}
// 代入する値はインターフェースを実装したクラスに限らない
let objB: B2 = {
  str: "string",
  num: 42,
}

// interface はクラスも拡張できる
// 実装はなかったことになる
class FooClass {
  constructor(
    public num: number
  ) {}
}
interface C extends FooClass {
  str: string;
}
let objC: C = {
  num: 11,
  str: "string",
}

export { }