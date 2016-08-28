class Base {

  // クラス変数・インスタンス変数
  /* 
  クラスそのものやインスタンスに紐づく変数
  JS っぽく言うとプロパティ。

  アクセス修飾子として、下記が利用できる。
  - public // デフォルト
  - private
  - protected
  何も指定しないと public になる。

  プロパティには省略可能を明示する `?` を指定できる。
  コンストラクタ内の処理が終わる間に値がセットされないプロパティについては、省略可能である旨指定したほうがよいかも。
  */

  // インスタンス変数
  numA: number;
  strA = "string";
  public numB: number;
  private numC: number;
  regexpA?: RegExp;

  // クラス変数
  static numA: number;
  public static numB: number;
  private static numC: number;
  protected static numD: number;
  static regexpA?: RegExp;


  // コンストラクタ
  /*
  コンストラクタにもアクセス修飾子として、下記が利用できる。
  - public // デフォルト
  - private
  - protected

  引数にアクセス修飾子をあわせて書くと、インスタンス変数としてその値が利用可能になる。
  これを **引数プロパティ宣言** と呼ぶ。
  → parameter_property_declaration.ts
  */
  constructor(
    boolA: boolean,
    public boolB: boolean,
    private boolC: boolean,
    protected boolD: boolean
  ) {
    // 使われないとエラーがでるため console.log で使用する
    console.log(boolA, boolB, boolC, boolD);
  }

  // メソッド
  hello(world: string) {
    return 'Hello, ' + world;
  }

  // get, set アクセサ
  // コンパイル時に --taget es5 以上が必要
  /** @internal **/
  private _date: Date;
  get dateA(): Date {
    return this._date;
  }
  set dateA(value: Date): Date {
    this._date = value;
  }

  optional() {
    // 省略可能なプロパティは値の存在チェックが必要
    if (this.regexpA != null) {
      this.regexpA.test('hi!');
    }
    if (Base.regexpA != null) {
      Base.regexpA.test('hi!');
    }
  }
}

let obj = new Base(true, false, true, false);
obj.numA;
obj.strA;
obj.numB;
// obj.numC; // private なメンバにはアクセスできない
// obj.numD; // protected なメンバにはアクセスできない
obj.boolB;
// obj.boolC; // private なメンバにはアクセスできない
// obj.boolD; // protected なメンバにはアクセスできない
obj.hello('TypeScript');
obj.dateA = new Date();
obj.dateA;

export {}

