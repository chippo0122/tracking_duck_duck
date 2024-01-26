/** @format */
import Point from "./point"
class Field {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext("2d")
    this.ducks = []
  }

  generateDucks() {
    const arr = Array.from(Array(10)).map(() => {
      const x = Math.random() * this.canvas.width
      const y = Math.random() * this.canvas.height
      return new Point(x, y)
    })

    this.ducks = arr
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    if (this.ducks.length < 1) return

    this.ducks.forEach((el) => {
      el.draw(this.ctx)
    })
  }
}

export default Field
