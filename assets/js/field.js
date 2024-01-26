/** @format */
import Hut from "./hut"
import Duck from "./duck"
import Point from "./point"
import { distance } from "./util"
class Field {
  constructor(canvas) {
    // datas
    this.canvas = canvas
    this.ctx = canvas.getContext("2d")
    this.ducks = []
    this.hut = null

    // process
    this.isStart = false
    this.isFinish = false

    // control
    this.drag = false
    this.selected = null
  }

  start() {
    this.isStart = true
    this.generateDucks()
    this.#addEventListener()
  }

  generateDucks() {
    const arr = Array.from(Array(1)).map(() => {
      return new Duck(new Point(this.canvas.width / 2, this.canvas.height / 2))
    })

    this.ducks = arr
  }

  draw() {
    if (!this.isStart || this.isFinish) return

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    if (this.ducks.length < 1) return

    this.ducks.forEach((duck) => {
      duck.workAround(this.canvas.width, this.canvas.height)
      duck.draw(this.ctx)
    })
  }

  #handlePressDown(e) {
    this.drag = true
    const x = e.type === "touchstart" ? e.touches[0].clientX : e.offsetX
    const y = e.type === "touchstart" ? e.touches[0].clientY : e.offsetY
    const current = new Point(x, y)

    let minDis = Number.MAX_SAFE_INTEGER
    let nearset = null
    const threshold = 30

    this.ducks.forEach((el) => {
      const dis = distance(el.center, current)
      if (dis < minDis && dis < threshold) {
        minDis = dis
        nearset = el
      }
    })

    if (nearset) {
      this.selected = nearset
      this.selected.pick()
      return
    }

    this.selected = null
  }

  #handlePressMove(e) {
    if (!this.selected || !this.drag) return

    const x = e.type === "touchmove" ? e.touches[0].clientX : e.offsetX
    const y = e.type === "touchmove" ? e.touches[0].clientY : e.offsetY

    if (this.drag) {
      this.selected.center.move(x, y)
    }
  }

  #handlePressUp() {
    if (this.selected) {
      this.selected.release()
    }

    this.drag = false
    this.selected = null
  }

  #addEventListener() {
    this.canvas.addEventListener("mousedown", this.#handlePressDown.bind(this))
    this.canvas.addEventListener("touchstart", this.#handlePressDown.bind(this))
    this.canvas.addEventListener("touchmove", this.#handlePressMove.bind(this))
    this.canvas.addEventListener("mousemove", this.#handlePressMove.bind(this))
    this.canvas.addEventListener("mouseup", this.#handlePressUp.bind(this))
    this.canvas.addEventListener("touchend", this.#handlePressUp.bind(this))
  }
}

export default Field
