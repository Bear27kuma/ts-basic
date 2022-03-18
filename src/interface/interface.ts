// Interfaceを使って表現する
interface Bread {
  calories: number;
}

// 宣言が追加（マージ）される
interface Bread {
  type: string;
}

const francePan: Bread = {
  calories: 300,
  type: 'hard',
};

// Type Aliasを使って表現する
type MaboDofu = {
  calories: number;
  spicyLevel: number;
};

type Rice = {
  calories: number;
  gram: number;
};

type MaboDon = MaboDofu & Rice; // 交差型（Intersection）

const maboDon: MaboDon = {
  calories: 500,
  spicyLevel: 10,
  gram: 350,
};

// インターフェースの継承
interface Book {
  page: number;
  title: string;
}

interface Book {
  page: number;
  title: string;
}

interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

const jump: Magazine = {
  page: 300,
  title: '週刊少年ジャンプ',
  cycle: 'weekly',
};

// 型エイリアスから継承することもできる
type BookType = {
  page: number;
  title: string;
};

interface HandBook extends BookType {
  theme: string;
}

const cotrip: HandBook = {
  page: 120,
  title: 'ことりっぷ',
  theme: '旅行',
};
