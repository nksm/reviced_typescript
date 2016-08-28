// 構造的部分型
// 乱暴にいうと静的型付け用の duck typing
// TypeScript では構造が一致するかで型の互換性を判定する

// クラス Foo は 
// string 型の str という名前のプロパティと
// number 型の num というプロパティを持つ
class Foo {
  str = "string";
  num = 1;
}

// 構造が完全に Foo クラスと一緒
// 構造が同じなら、同じと判断する
let obj: Foo = {
  str: "Hi!",
  num: 42,
}

interface Point {
  x: number;
  y: number;
}

// Point の実装を強制する
class PointImpl implements Point {
  constructor(
    public x: number,
    public y: number
  ) {}
}
// Point の実装は強制されないけど、互換性ある
class PointImpl2 {
  constructor(
    public x: number,
    public y: number
  ) {}
}

// 引数に Point をとる関数
function double(p: Point): Point {
  return {
    x: p.x * 2,
    y: p.y * 2
  };
}

// 以下はすべて正しい
double(new PointImpl(1, 2));
// PointImpl 2 は Point を拡張していないが、互換性があるためエラーにならない
double(new PointImpl2(3, 4));
double({
  x: 5,
  y: 6
});
let p = {
  x: 7,
  y: 8,
  z: 9,
};
double(p);


// 省略可能なプロパティは値がなくても OK
interface Point {
  x: number;
  y: number;
  color?: string; // なくても OK
}
function printPoint(p: Point): void {
  let message = 'x=${p.x}, y=${p.y}';
  if (p.color) {
    message = '${p.color}(${message})';
  }
  console.log(message);
}
// optional なプロパティはなくても大丈夫
// x=1, y=2 と表示される
printPoint({
  x: 1,
  y: 2,
});
// red(x=3, y=4) と表示される
printPoint({
  x: 3,
  y: 4,
  color: 'red',
});
// 型が間違うとエラーが表示される
// printPoint({
//   x: 3,
//   y: 4,
//   color: true,
// });

export { Foo, obj }