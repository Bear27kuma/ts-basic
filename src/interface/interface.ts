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
