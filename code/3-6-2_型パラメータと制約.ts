class Base {
  str: string;
}

class InheritA extends Base {
  num: number;
}

// T は Base を継承済みの型でならない制約を付与
interface Sample<T extends Base> {
  method(): T;
}

// InheritA は Base を継承しているので OK
let objA: Sample<InheritA>;

// Base を継承していないのでエラー
// let objB: Sample<RegExp>;

// オブジェクトリテラルは Base クラスの要件を満たす
let objC: Sample<{ str: string }>;

interface Service<T> {
  service(t: T): T;
}
// 制約に自分自身の参照を含む。稀に利用する。
function f<T extends Service<T>>(x: T) {
  return x.service(x);
}

export { Base, InheritA, Sample, objA, objC, Service, f }