export default function arraySample() {
  // シンプルな配列の型定義
  const colors: string[] = ['red', 'blue'];
  colors.push('yellow');
  // colors.push(123);
  console.log('Array array sample 1:', colors);

  const even: Array<number> = [2, 4, 6];
  even.push(8);
  // even.push('10');
  console.log('Array array sample 2:', even);

  // 合併型
  const ids: (string | number)[] = ['ABC', 123];
  ids.push('DEF');
  ids.push(456);
  // ids.push(true);
  console.log('Array array sample 3:', ids);
}
