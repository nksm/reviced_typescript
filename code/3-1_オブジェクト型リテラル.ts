// オブジェクト型リテラル
// JS のオブジェクトリテラルに似た記法で匿名の型を作り出す機能

// オブジェクトリテラルで値を作成
let objA = {
  x: 1,
  y: 2,
};

// オブジェクト型リテラルで型を作成（値はなし）
/*
上記の objA は型推論で objB と同一になる
値の代わりに型名
型名の終わりに `,` ではなく `;` を記述する
*/
let objB: {
  x: number;
  y: number;
}

objB = {
  x: 1,
  y: 2
}

objA = objB;
objB = objA;

// オブジェクト型リテラルは型を指定する箇所であればどこでも使える
function move(
  value: { x: number; y: number },
  delta: { dx?: number, dy?: number },
): { x: number; y: number; } {
  if (delta.dx) {
    value.x += delta.dx;
  }
  if (delta.dy) {
    value.y += delta.dy;
  }
  return value;
}

let result = move({x: 1, y: 2}, {dx: -2});
console.log(JSON.stringify(result, null, 2));


// オブジェクトリテラルの厳格な型チェック
let obj: { name: string; } = {
  name: "TypeScript",
}

// 変数の型に対してプロパティが多すぎる
// obj = {
//   name: "javaSciprt",
//   version: "2016",
// }

// 直接代入しなければOK
let tmp = {
  name: "javaScript",
  version: "2016",
};
obj = tmp;

// オプション名の typo に役立つ
interface FooOptions {
  fileName?: string;
  checkBar?: boolean;
}
declare function foo(opts: FooOptions): void;

foo({
  // 大文字小文字を間違えるとエラー
  // filename: "foo.text",
  fileName: "foo.text",
  checkBar: true,
})

export {}