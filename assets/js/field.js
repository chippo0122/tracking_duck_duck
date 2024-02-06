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
    this.huts = []

    // process
    this.isStart = false
    this.isFinish = false

    // control
    this.drag = false
    this.selected = null
  }

  start() {
    this.isStart = true
    this.generateField()
    this.#addEventListener()
  }

  generateField() {
    const ducks = Array.from(Array(10)).map(() => {
      return new Duck(new Point(this.canvas.width / 2, this.canvas.height / 2))
    })

    this.ducks = ducks

    const hutX = 100
    const hutY = 80

    const genHutPos = (existingPos) => {
      let x = Math.floor(Math.random() * (this.canvas.width - hutX))
      let y = Math.floor(Math.random() * (this.canvas.height - hutY))

      if (x < hutX) x = hutX
      if (y < hutY) y = hutY

      const newPos = new Point(x, y)
      let isPass = true

      const range = Math.hypot(hutX, hutY)
      existingPos.forEach((el) => {
        if (distance(el, newPos) < range) {
          isPass = false
        }
      })

      this.ducks.forEach((duck) => {
        if (distance(duck.center, newPos) < range) {
          console.log(duck.center, newPos, "<<<")
          isPass = false
        }
      })

      if (!isPass) {
        return genHutPos(existingPos)
      }

      return newPos
    }

    const huts = []
    for (let i = 0; i < 3; i += 1) {
      const p = genHutPos(huts.map((el) => el.center))
      huts.push(new Hut(p, { width: hutX, height: hutY }))
    }

    this.huts = huts
  }

  checkIsCloseToHut(duck) {
    const threshold =
      this.huts.length > 0
        ? Math.hypot(this.huts[0].size.width, this.huts[0].size.height)
        : 100
    const hut = this.huts.find(
      (el) => distance(el.center, duck.center) < threshold
    )

    return hut
  }

  draw() {
    if (!this.isStart || this.isFinish) return

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    if (this.ducks.length < 1) return

    this.huts.forEach((hut) => {
      hut.draw(this.ctx)
    })

    this.ducks.forEach((duck) => {
      // 逃離hut
      const check = this.checkIsCloseToHut(duck)

      if (check) {
        duck.escape()
      }

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
    const threshold = this.ducks[0].size

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
