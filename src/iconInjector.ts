/**
 * アイコン(1アイコン1ファイル、src/icons/*.svg)をボタンへ挿入する共通ヘルパー。
 * innerHTML代入で注入することで、SVGのfill/stroke="currentColor"がCSSの色指定
 * (hover/active等)に追従する。同じアイコンを複数箇所で使い回す時はこの関数を呼ぶだけでよい
 */
export function setIcon(el: Element, svg: string) {
  el.innerHTML = svg
}
