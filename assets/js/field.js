/** @format */
class Field {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext("2d")
    this.ducks = []
  }

  generateDucks() {
    console.log(this.canvas.width, this.canvas.height)
  }

  draw() {
    console.log("!!!")
  }
}

export default Field
