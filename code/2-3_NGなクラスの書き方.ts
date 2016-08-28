// NG な記述
// 省略可能な引数は、省略不可の引数の後
function funcA(arg1?: string, arg2: string) {
  return "Hello, ${arg1}, ${arg2}";
}

// 可変長引数は必ず最後じゃないとだめ
function funcB(...args: string[], rest: string) {
  return "hello, ${args.join(' & ')} and ${rest}";
}

export {}
