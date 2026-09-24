/**
 * アイコン(1アイコン1ファイル、src/icons/*.svg)をボタンへ挿入する共通ヘルパー。
 * innerHTML代入で注入することで、SVGのfill/stroke="currentColor"がCSSの色指定
 * (hover/active等)に追従する。同じアイコンを複数箇所で使い回す時はこの関数を呼ぶだけでよい
 */
export function setIcon(el: Element, svg: string) {
  el.innerHTML = svg
}

/** 矢印(chevron)をn個並べて挿入する。ステップボタン(◀◀◀/▶▶等)の表現に使う */
export function setChevronSteps(el: Element, chevronSvg: string, count: number) {
  el.innerHTML = chevronSvg.repeat(count)
}
