// 型アサーション
// 他の言語でいうところのキャスト

// 書き方
// - <変換後型名値>
// - 値 as 変換後型名

let obj: any = 1;

// any 型から number 型に変換
let num = <number>obj;

let str = "string";
// num を any 型 str を代入する
num = <any>str;

// 後置のキャスト
// 値 as 型
num = str as any;

// 互換性のない型に変換しようとするとエラー
// let num: number = str as number;

// ダウンキャスト
class Base {
  str: string;
}

class InheritA extends Base {
  num: number;
}
class InheritB extends Base {
  bool: boolean;
}

let obj: Base = new InheritA();

// obj の中身を InheritA にダウンキャスト
(obj as InheritA).num;

// instanceof で調べると勝手に対象の型にダウンキャストされる
// キャストするよりこちらの方が安全
if (obj instanceof InheritA) {
  obj.num;
} else if (obj instanceof InheritB) {
  obj.bool;
} else {
  obj.str;
}

// 型定義ファイルに不足や誤りがある場合、型アサーションでとりあえず切り抜ける
declare class Base2 {
  str: string;
}
let obj2 = new Base2();
// Base2 クラスが本当は num プロパティもあるけど不足している場合 any で逃げる
let num: number = (obj2 as any).num;

export { }