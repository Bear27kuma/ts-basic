import World from './world';

const root = document.getElementById('root');
// Worldクラスのインスタンスを作成
const world = new World('Hello World');
// WorldクラスのsayHelloメソッドを実行する
world.sayHello(root);
