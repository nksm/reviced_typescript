// ジェネリクス
// 総称型ともいう

// ジェネリクスの基本
let strArray: Array<string> = ["a", "b", "c"];
let numArray: Array<number> = [1, 2, 3];

strArray.forEach(v => v.charAt(0));
numArray.forEach(v => v.toFixed(2));
strArray.forEach((v: string) => v.charAt(0));
numArray.forEach((v: number) => v.toFixed(2));


// string[] は Array<string> と同じ意味になる
let strArray2: string[] = ["a", "b", "c"];
let numArray2: number[] = [1, 2, 3];

strArray2.forEach(v => v.charAt(0));
numArray2.forEach(v => v.toFixed(2));
strArray2.forEach((v: string) => v.charAt(0));
numArray2.forEach((v: number) => v.toFixed(2));


// ジェネリクス書き方いろいろ
// クラス・インターフェース・関数型はよく利用する
// クラスとジェネリクス
class SampleA<T> {
  constructor(
    public data: T
  ) {}
}
let objA = new SampleA<string>("str");

// インターフェースとジェネリクス
interface SampleB<T> {
  data: T;
}

let objB: SampleB<number> = { data: 1 };

// 関数型
let func: <T>(array: T[]) => T;
// 使い方
func = <T>(array: T[]) => array[0];
func<number>([1, 2, 3]);

// オブジェクト型リテラル各種
let obj: {
  new <T>(value: T): any;
  <T>(value: T): any;
  methodA<T>(value: T): any;
  // 型パラメータは複数でも OK
  methodB<T, U>(value: T): U;
}

// コンストラクタ型
let ctor: new <T>(value: T) => any;
// 使い方
ctor = SampleA;
new ctor<string>("str");

// type alias
type SampleC<T> = { data: T };
let objC: SampleC<number> = { data: 1 };


export { SampleA, objA, SampleB, objB, obj, SampleC, objC }