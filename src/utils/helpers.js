export function generateGrid(rows, cols, val) {
  return Array.from(new Array(rows), () => new Array(cols).fill(val))
}