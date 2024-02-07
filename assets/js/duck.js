/** @format */

class Duck {
  constructor(point, id) {
    this.id = id
    this.center = point
    this.size = 60
    // workaround
    this.speed = 1
    this.directionX = 0
    this.directionY = 0
    // status
    this.isCatch = false
    //random seed
    this.count = Math.min(3, Math.random() * 5) * 60

    this.#getRandomDirectionAndSpeed()
  }

  draw(ctx) {
    if (this.isCatch) {
      this.drawCatchingDuck(ctx)
      return
    }
    this.drawNormalDuck(ctx)
  }

  drawCatchingDuck(ctx) {
    const startX = this.center.x - this.size / 2
    const startY = this.center.y - this.size / 2
    const splitSec = this.size / 8

    ctx.beginPath()
    ctx.fillStyle = "white"
    //頭
    ctx.rect(startX + splitSec * 3, startY, splitSec * 2, splitSec * 3)
    //脖子
    ctx.rect(
      startX + splitSec * 2,
      startY + splitSec * 3,
      splitSec * 4,
      splitSec
    )
    ctx.rect(startX + splitSec, startY + splitSec * 4, splitSec * 6, splitSec)
    //身體
    ctx.rect(startX, startY + splitSec * 5, this.size, splitSec * 2)
    //屁股
    ctx.rect(startX + splitSec, startY + splitSec * 7, splitSec * 6, splitSec)
    ctx.fill()

    //眼睛
    ctx.beginPath()
    ctx.fillStyle = "black"
    ctx.rect(
      startX + splitSec * 3.25,
      startY + splitSec * 1,
      splitSec / 2,
      splitSec / 2
    )
    ctx.rect(
      startX + splitSec * 4.25,
      startY + splitSec * 1,
      splitSec / 2,
      splitSec / 2
    )
    ctx.fill()

    //嘴
    ctx.beginPath()
    ctx.fillStyle = "orange"
    ctx.rect(
      startX + splitSec * 2.5,
      startY + splitSec * 2,
      splitSec,
      splitSec / 4
    )
    ctx.fill()

    //腳
    ctx.beginPath()
    ctx.strokeStyle = "orange"
    ctx.lineWidth = 4
    ctx.moveTo(startX + splitSec * 3.5, startY + this.size)
    ctx.lineTo(startX + splitSec * 3.5, startY + this.size + splitSec * 1.5)
    ctx.moveTo(startX + splitSec * 4.5, startY + this.size)
    ctx.lineTo(startX + splitSec * 4.5, startY + this.size + splitSec * 1.5)
    ctx.stroke()
  }

  drawHead(ctx) {
    const startX = this.center.x - this.size / 2
    const startY = this.center.y - this.size / 2

    const splitSec = this.size / 4

    // 頭
    ctx.fillStyle = "white"
    const headStartX = this.directionX > 0 ? startX + splitSec * 3 : startX // 向左向右
    ctx.rect(headStartX, startY, splitSec, splitSec * 2)
    ctx.fill()

    // 嘴巴
    ctx.fillStyle = "orange"
    const mouthSize = {
      x: splitSec / 2,
      y: splitSec / 4,
    }
    ctx.beginPath()
    const mouthStartX =
      this.directionX > 0 ? startX + splitSec * 4 : headStartX - mouthSize.x
    ctx.rect(mouthStartX, startY + splitSec, mouthSize.x, mouthSize.y)
    ctx.fill()

    // 眼睛
    ctx.fillStyle = "black"
    const eyeSize = splitSec / 4
    ctx.beginPath()
    ctx.rect(headStartX + splitSec / 2, startY + splitSec / 2, eyeSize, eyeSize)
    ctx.fill()
  }

  drawBody(ctx) {
    // 鴨鴨身體占下半部二分之一
    const startX = this.center.x - this.size / 2
    const splitSec = this.size / 4

    //身體
    ctx.beginPath()
    ctx.fillStyle = "white"
    ctx.rect(startX, this.center.y, this.size, splitSec * 2)
    ctx.fill()

    // //翅膀
    ctx.beginPath()
    ctx.strokeStyle = "gray"
    ctx.lineWidth = 3
    const wingStartX =
      this.directionX > 0 ? startX + splitSec * 3 : startX + splitSec
    const wingEndX =
      this.directionX > 0
        ? wingStartX - splitSec * 2
        : wingStartX + splitSec * 2
    ctx.moveTo(wingStartX, this.center.y + splitSec / 2)
    ctx.lineTo(wingStartX, this.center.y + splitSec * 1.5)
    ctx.lineTo(wingEndX, this.center.y + splitSec * 1.5)
    ctx.stroke()
  }

  drawFeet(ctx) {
    const splitSec = this.size / 16
    const baseY = this.center.y + this.size / 2 - splitSec
    const baseX =
      this.directionX > 0 ? this.center.x - splitSec : this.center.x + splitSec

    ctx.beginPath()
    ctx.strokeStyle = "orange"
    ctx.lineWidth = 4
    ctx.moveTo(baseX, baseY)
    ctx.lineTo(baseX, baseY + splitSec * 4)
    let toeX = this.directionX > 0 ? baseX + splitSec : baseX - splitSec
    ctx.lineTo(toeX, baseY + splitSec * 4)

    ctx.moveTo(baseX - splitSec * 2, baseY + splitSec)
    ctx.lineTo(baseX - splitSec * 2, baseY + splitSec * 4)
    toeX = this.directionX > 0 ? baseX - splitSec : baseX - splitSec * 3
    ctx.lineTo(toeX, baseY + splitSec * 4)
    ctx.stroke()
  }

  drawNormalDuck(ctx) {
    this.drawBody(ctx)
    this.drawHead(ctx)
    this.drawFeet(ctx)
  }

  #getRandomDirectionAndSpeed() {
    //隨機角度
    const angle = Math.random() * Math.PI * 2.0 - Math.PI
    this.directionX = Math.cos(angle)
    this.directionY = Math.sin(angle)

    //隨機速度
    const speed = (Math.floor(Math.random() * 2) + 1) / 2
    this.speed = speed
  }

  //抓起鴨鴨
  pick() {
    this.isCatch = true
  }

  //放下鴨鴨
  release() {
    this.isCatch = false
    this.#getRandomDirectionAndSpeed()
  }

  workAround(borderX, borderY) {
    if (this.isCatch) return

    const { x, y } = this.center

    if (x + this.size / 2 >= borderX || x - this.size / 2 <= 0) {
      this.directionX = 0 - this.directionX
    }
    if (y + this.size / 2 >= borderY || y - this.size / 2 <= 0) {
      this.directionY = 0 - this.directionY
    }

    this.center.move(
      x + this.directionX * this.speed,
      y + this.directionY * this.speed
    )

    this.count -= 1

    if (this.count < 0) {
      this.#getRandomDirectionAndSpeed()
      this.count = Math.min(5, Math.random() * 15) * 60
    }
  }

  escape() {
    this.directionX = 0 - this.directionX
    this.directionY = 0 - this.directionY

    this.speed = 2
  }
}

export default Duck
