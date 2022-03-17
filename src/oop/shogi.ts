// 筋
type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
// 段
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
// 先手か後手のどちらか
type Player = 'first' | 'second';

// 駒の位置を表すクラス
class Position {
  constructor(private suji: Suji, private dan: Dan) {}

  // パラメーターに渡された位置と現在の位置を比較するメソッド
  distanceFrom(position: Position, player: Player) {
    if (player === 'first') {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(this.dan)),
      };
    } else {
      return {
        suji: Math.abs(position.suji - this.suji),
        // 段（縦の位置）は正負反転
        dan: -Math.abs(Number(position.dan) - Number(this.dan)),
      };
    }
  }
}

// 駒を表すクラス
abstract class Piece {
  // Pieceクラスとサブクラスでアクセスできる
  protected position: Position;

  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    this.position = new Position(suji, dan);
  }

  // パラメーターに渡された位置へ駒を移動するメソッド
  // publicなので、サブクラスでオーバーライド（上書き）できる
  moveTo(position: Position) {
    this.position = position;
  }

  // 移動できるかどうかを判定するメソッド
  // abstractをつけて宣言しておき、サブクラスで具体的に実装する
  abstract canMoveTo(position: Position, player: Player): boolean;
}

// 王将クラス
class Osho extends Piece {
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player);
    return distance.suji < 2 && distance.dan < 2;
  }
}

// 歩クラス
class Fu extends Piece {
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player);
    // 移動先との距離が前方1マスであれば
    return distance.suji === 0 && distance.dan === -1;
  }
}

// 成金クラス
class Narikin extends Fu {
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player);
    return (
      // 移動先が1マス以内
      distance.suji < 2 &&
      distance.dan < 2 &&
      // 左後方と右後方には進めない
      distance.suji !== 0 &&
      distance.dan === -1
    );
  }
}

// 駒を生成&初期化するクラス
class Game {
  private pieces = Game.makePieces();
  private static makePieces() {
    return [
      // 王将を初期値に置く
      new Osho('first', 5, '1'),
      new Osho('second', 5, '9'),
    ];
  }
}
