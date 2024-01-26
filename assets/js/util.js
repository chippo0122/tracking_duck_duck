/** @format */

const distance = (p1, p2) => {
  const x = Math.abs(p1.x - p2.x)
  const y = Math.abs(p1.y - p2.y)
  return Math.hypot(x, y)
}

export { distance }
