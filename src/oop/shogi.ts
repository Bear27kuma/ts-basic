// 筋
type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
// 段
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
// 先手か後手のどちらか
type Player = 'first' | 'second';

// 駒の位置を表すクラス
class Position {
  constructor(private suji: Suji, private dan: Dan) {}
}

// 駒を表すクラス
abstract class Piece {
  // Pieceクラスとサブクラスでアクセスできる
  protected position: Position;

  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    this.position = new Position(suji, dan);
  }

  // メソッドの定義
  // 駒の移動用メソッド
  moveTo(position: Position) {
    this.position = position;
  }

  // 移動できるかどうかを判定するメソッド
  abstract canMoveTo(position: Position, player: Player): boolean;
}

// new Piece('first', 1, '1');
