// 関数も型として表現できる

let func: (value: string) => string;
// アロー関数との違いに気をつけること
let funcArrow = (word: string): string => 'hello, ${word}';

// 値を当てはめると下記のような感じ
func = word => 'hello, ${word}';
func = (word: string) => {
  return 'hello, ${word}';
}
func = function(word: string) {
  return 'hello, ${word}';
}

// 型に対して、実装の引数が少ないのはOK
func = () => 'hello, TypeScipt';

// 型に対して、実装の引数の数が多い場合、省略可能かデフォルト値つきじゃないとダメ
func = (v1: string, v2 = "JavaScript") => 'hello, ${v1} & ${v2}';

export { }