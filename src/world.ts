// Worldクラスを作成する
export default class World {
  // messageプロパティを定義する
  message: string;

  // constructorで初期化する
  constructor(message: string) {
    this.message = message;
  }

  // messageの値をhTMLの要素に表示させる
  public sayHello(elem: HTMLElement | null) {
    if (elem) {
      elem.innerText = this.message;
    }
  }
}
