// never 型
// ありえないことを示す型
// 到達不可能なコードは never 型になる

let str = "TypeScript";
if (typeof str === "number") {
  str.toUpperCase;
}

function test(): never {
  throw new Error();
}

let obj: never = test();
obj.test();

export { }