const path = require('path');
module.exports = {
  // モジュールバンドルを行う起点となるファイルの指定
  // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
  // 下記はオブジェクトを指定した例
  entry: {
    bundle: './src/index.ts'
  },
  // モジュールバンドラを行なった結果を出力するファイル名や指定
  output: {
    // "__dirname"はファイルが存在するディレクトリ
    path: path.join(__dirname, 'dist'),
    // [name]はentryで記述した名前（この設定ではbundle）
    filename: '[name].js'
  },
  // import文でファイル拡張子を書かずに名前解決するための設定
  // ex. 「import World form '.world'」と記述すると、"world.tsという名前のファイルをモジュールとして探す
  resolve: {
    // Reactの.tsxや.jsxの拡張子も扱いたい場合は配列内に追加する
    extensions: ['.ts', '.js']
  },
  // 開発用サーバーの設定
  devServer: {
    // *contentBase → staticに設定プロパティが変わっている
    static: {
      // webpack-dev-serverの公開
      directory: path.join(__dirname, 'dist')
    },
    // サーバー起動時にブラウザを開く
    open: true
  },
  // モジュールに適用おするルールの設定（ローダーの設定を行うことが多い）
  module: {
    rules: [
      {
        // 拡張子が.tsのファイルに対してTypeScriptコンパイラを適用する
        // Reactで用いる.tsxの拡張子にも適用する場合、test:/\.(ts|tsx)$/
        loader: 'ts-loader',
        test: /\.ts$/
      }
    ]
  }
}
