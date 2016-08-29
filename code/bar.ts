export function hello(word: string = "TypeScript") {
  return 'hello, ${word}';
}
export default function(word: string = "default") {
  return 'hi, ${word}';
}