export default function objectSample() {
  const a: object = {
    name: 'Kumahack',
    age: 26,
  };
  // a.name;

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string;
    name: string;
  } = {
    language: 'Japanese',
    name: 'Japan',
  };

  console.log('Object object sample 1:', country);

  country = {
    language: 'English',
    name: 'United States of America',
  };
  console.log('Object object sample 2:', country);
}
