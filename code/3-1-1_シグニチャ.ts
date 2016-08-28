// プロパティシグニチャ
// プロパティを示す記法
let obj: {
  property: string;
};

obj = {
  property: "Hi!",
}


// コールシグニチャ
// オブジェクトが関数として呼び出し可能であることを示す記法
let obj2: {
  (word: string): string;
}

obj2 = word => "hello, ${word}";
// 以下は同じ
// obj2 = (word: string): string => {
//   return "hello, ${word}";
// }
// obj2 = function(word: string) {
//   return "hello, ${word}";
// }

let str = obj2("TypeScript");
console.log(str);

// オーバーロード表現
let obj3: {
  (word: string): string;
  (): number;
}

obj3 = (word?: string):any => {
  if(typeof word === "string") {
    return "hello, ${word}";
  } else {
    return 42;
  }
}

let str = obj3("TypeScript");

// 42 と表示される
let num = obj3();


// コンストラクトシグニチャ
// 対象のオブジェクトがコンストラクタとして利用可能であることを示す記法
// クラス定義をしなければ、コンストラクトシグニチャにマッチするコードは書けない
let clazz: {
  new (): any;
}

// 当てはまる値
class Sample {}
clazz = Sample;
let obj4 = new clazz();

// クラス式の場合
clazz = class {};
let obj5 = new clazz();


// インデックスシグニチャ
let objA: {
  [index: number]: string;
} = {};

let objB: {
  [index: string]: string;
} = {};

let s1 = objA[1];
// 型が違うのでエラーになる
// let s2 = objA["test"];

// string 型なのでエラーにならない
let s3 = objB[1];
let s4 = objB["test"];

objA = {
  0: "str",
  // 型に存在しない値があるとエラーになる
  // error TS2322: Type
  // '{ 0: string; str: string; }'
  // is not assignable to type '{ [index: number]: string; }'.
  // Object literal may only specify known properties,
  // and 'str' does not exist in type '{ [index: number]: string; }'.
  // str: "str"
}


// 変数にオブジェクトリテラル直で代入でなければ余計なパラメータがついていても許される
let tmp = {
  0: "str",
  str: "str",
}

objA = tmp;

objB = {
  0: "str",
  str: "str",
  // インデックスの方が string の場合、すべてのプロパティの方がインデックスシグニチャに反しなようにしなければならない
  // error TS2322: Type
  // '{ 0: string; str: string; num: number; }'
  //     is not assignable to type
  //  '{ [index: string]: string; }'.
  //  Property 'num' is incompatible with index signature.
  //    Type 'number' is not assignable to type 'string'.
  // num: 1,
}


// メソッドシグニチャ
// あるプロパティがメソッであることを表現
let objC: {
  hello(word: string): string;
}

// 当てはまる値は以下のよう関数型リテラルになる
// 3つとも同じ意味
objC = {
  hello(word: string) {
    return 'hello, ${word}';
  },
}

objC = {
  hello: (word: string) => 'hello, ${word}';
}

objC = {
  hello: function(word: string) {
    return 'hello, ${word}';
  },
}

// プロパティシグニチャ + 関数型リテラル と同じ意味
let objD: {
  hello: (word: string) => string;
}

export { s1, s3, s4 }