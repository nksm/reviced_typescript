// 抽象クラスは単独ではインスタンス化できない
// そのかわり抽象クラスを継承したクラスに対して、 `abstract` で指定した要素の実装を強制できる。

abstract class Animal {
  abstract name: string;
  abstract get poo(): string;

  abstract speak(): string;
  sleep(): string {
    return "zzz";
  }
}

class Cat extends Animal {
  // プロパティの実装を強制される
  name = "Cat";
  poo = "poo";
  // メソッドの実装を強制される
  speak(): string {
    return "meow";
  }
}

new Cat();

export {}
