// default を bar という名前に hello 関数をそのままの名前で import
import bar, { hello } from './bar';

// モジュール全体を bar2 に拘束
import * as bar2 from './bar';

// CommonJS 形式でも import できる
import bar3 = require('./bar');

// hello, TypeScriptと表示される
console.log(hello());
// hi, TypeScriptと表示される
console.log(bar());

// bar2 に拘束したもの
// hello, TypeScriptと表示される
console.log(bar2.hello());
// hi, TypeScriptと表示される
console.log(bar2.default());

// CommonJS 形式
// hello, TypeScriptと表示される
console.log(bar3.hello());
// hi, TypeScriptと表示される
console.log(bar3.default());



// export = xxx 形式の場合、モジュール全体を buzz に拘束
import * as buzz from './buzz';

// CommonJS 形式に対して一番まっとうな書き方 in TypeScript
import buzz2 = require('./buzz');

// 両方共 Good bye, TypeScript と表示される
console.log(buzz());
console.log(buzz2());
