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

  // オプショナルとreadonly
  const kumahack: {
    age: number;
    lastName: string;
    readonly firstName: string;
    gender?: string;
  } = {
    age: 26,
    lastName: 'Yamada',
    firstName: 'Taro',
  };

  kumahack.gender = 'male';
  kumahack.lastName = 'Kamado';
  // kumahack.firstName = 'Tanjiro';

  console.log('Object object sample 3:', kumahack);

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string;
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  };

  capitals.China = 'Beijing';
  capitals.Canada = 'Ottawa';

  console.log('Object object sample 4:', capitals);
}
