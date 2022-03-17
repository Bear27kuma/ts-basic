export default function tupleSample() {
  // 一般的なタプルの型定義
  const response: [number, string] = [200, 'OK'];
  // response = [response = [400, 'Bad Request', 'Email parameter is missing'];
  // response = ['400', 'Bad Request'];]
  console.log('Array tuple sample 1:', response);

  // 可変長引数を使ったタプル
  const girlFriends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko'];
  girlFriends.push('Misa');
  console.log('Array tuple sample 2:', girlFriends);
}
