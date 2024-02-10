/** @format */
import Hut from "./hut"
import Duck from "./duck"
import Point from "./point"
import { distance } from "./util"
import { Outro } from "../static/script"
class Field {
  constructor(canvas) {
    // datas
    this.canvas = canvas
    this.ctx = canvas.getContext("2d")
    this.wishes = ["❤️❤️", "💰💰", "💪💪", "💼💼"]
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
    this.isFinish = false
    this.generateField()
    this.#addEventListener()
  }

  finish() {
    this.isFinish = true
    this.#removeEventListener()
  }

  generateField() {
    const ducks = Array.from(Array(10)).map((el, index) => {
      return new Duck(
        new Point(this.canvas.width / 2, this.canvas.height / 2),
        index
      )
    })

    this.ducks = ducks

    const hutX = 80
    const hutY = 50

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
          isPass = false
        }
      })

      if (!isPass) {
        return genHutPos(existingPos)
      }

      return newPos
    }

    const huts = []
    for (let i = 0; i < this.wishes.length; i += 1) {
      const p = genHutPos(huts.map((el) => el.center))
      huts.push(new Hut(p, this.wishes[i], { width: hutX, height: hutY }))
    }

    this.huts = huts
  }

  checkIsCloseToHut(duck) {
    const threshold =
      this.huts.length > 0
        ? Math.hypot(this.huts[0].size.width, this.huts[0].size.height) / 1.5
        : 80
    const hut = this.huts.find(
      (hut) => distance(hut.center, duck.center) < threshold
    )

    return hut
  }

  draw() {
    if (!this.isStart || this.isFinish) return

    if (this.isStart && this.ducks.length < 1) {
      this.finish()
      console.log(this.isStart, this.isFinish)
    }

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

  makeResult(outro) {
    const maps = {
      "❤️❤️": {
        content: "感情❤️",
        color: "pink",
      },
      "💰💰": {
        content: "財運💰",
        color: "gold",
      },
      "💪💪": {
        content: "健康💪",
        color: "green",
      },
      "💼💼": {
        content: "事業💼",
        color: "teal",
      },
    }
    const total = this.huts.map((el) => el.count).reduce((a, b) => a + b)
    const elements = this.huts.map((el) => ({
      title: maps[el.category].content,
      color: maps[el.category].color,
      score: el.count,
    }))
    const queue = []

    const context1 = `
      <div style="width: 100%; height: 15px; display: flex; flex-wrap: no-wrap">
        <div style="width: ${(elements[0].score / total) * 100}%; background: ${
      elements[0].color
    }">${elements[0].score}</div>
        <div style="width: ${(elements[1].score / total) * 100}%; background: ${
      elements[1].color
    }">${elements[1].score}</div>
        <div style="width: ${(elements[2].score / total) * 100}%; background: ${
      elements[2].color
    }">${elements[0].score}</div>
        <div style="width: ${(elements[3].score / total) * 100}%; background: ${
      elements[3].color
    }">${elements[3].score}</div>
      </div>
    `

    queue.push(context1)

    queue.forEach((el) => {
      outro.push(el)
    })
  }

  #handlePressDown(e) {
    if (!this.isStart || this.isFinish) return

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
    if (!this.isStart || this.isFinish) return

    if (this.selected) {
      this.selected.release()
    }

    const closeHut = this.selected
      ? this.checkIsCloseToHut(this.selected)
      : null
    if (closeHut) {
      const selectedIndex = this.ducks.findIndex(
        (el) => el.id === this.selected.id
      )
      closeHut.putDuck()
      this.ducks.splice(selectedIndex, 1)
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

  #removeEventListener() {
    this.canvas.removeEventListener(
      "mousedown",
      this.#handlePressDown.bind(this)
    )
    this.canvas.removeEventListener(
      "touchstart",
      this.#handlePressDown.bind(this)
    )
    this.canvas.removeEventListener(
      "touchmove",
      this.#handlePressMove.bind(this)
    )
    this.canvas.removeEventListener(
      "mousemove",
      this.#handlePressMove.bind(this)
    )
    this.canvas.removeEventListener("mouseup", this.#handlePressUp.bind(this))
    this.canvas.removeEventListener("touchend", this.#handlePressUp.bind(this))
  }
}

export default Field
