function bye(word: string = "TypeScript") {
  return 'Good bye, ${word}';
}

// ECMA 2015 形式で import する際、エラーがでるのでハック
namespace bye {}

// CommonJS 向け
// ECMA 2015 では☓
export = bye;