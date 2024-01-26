/** @format */

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  distanceTo() {
    return null
  }

  draw(ctx, { size = 30, color = "black" } = {}) {
    const radius = size / 2

    const vector = Math.PI * 0.75

    ctx.beginPath()
    ctx.fillStyle = color
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2)
    ctx.fill()
  }

  move(x, y) {
    this.x = x
    this.y = y
  }

  moveSelf() {}
}

export default Point
