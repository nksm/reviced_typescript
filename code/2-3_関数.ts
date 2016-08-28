// 返り値の型を () の後に指定する
function hello(word: string):string {
  console.log(word);
  return "hello, ${word}";
}
hello("TypeScript");

// 返り値の方を省略したケース
// 型については返り値の型から推論される
function bye(word: string) {
  console.log(word);
  return "Bye, ${word}";
}
bye("TypeScript");

// 引数に `?` をつけると呼び出し時に引数が省略可能に
function hey(word?: string):string {
  console.log(word);
  // 省略可能にした場合は `undefined` の時の考慮が必要
  return "Hey, ${word || 'TypeScript'}";
}
hey();

// デフォルト値を指定することもできる（ `?` をつけたのと同じ扱い + α）
function ahoy(word: string = "TypeScript") {
  console.log(word);
  return "Ahoy, ${word}";
}
ahoy();

// 可変長引数
function hello2(...args: string[]):string {
  console.log(args);
  return "Hello, ${args.join(' & ')}";
}
console.log(hello2("ts", "js"));　// => Hello, ts & js


// アロー関数
/*
下記 funcA と funcB は同じ意味
*/
let funcA = () => true;
let funcB = function() {
  return true;
}

funcA();
funcB();

// 引数を一つとって返り値なしの関数を表する
function asyncModoki(callback: (value: string) => void) {
  callback("TypeScript");
}

// ES5 時代の書き方
asyncModoki(function(value: string) {
  console.log(value);
  console.log("hello, ${value}");
});

// アロー関数を利用する
asyncModoki(value =>
  console.log("hello, ${value}")
);
// アロー関数に型をつける
// asyncModoki((value: string): void => console.log('hello, ${value}'));

export {}
