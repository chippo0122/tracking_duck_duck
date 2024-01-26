/** @format */

class Duck {
  constructor(point) {
    this.center = point
    this.size = 60
    // workaround
    this.speed = 1
    this.directionX = 0
    this.directionY = 0
    // status
    this.isCatch = false

    this.#getRandomDirectionAndSpeed()
  }

  draw(ctx) {
    this.drawNormalDuck(ctx)
  }

  drawHead(ctx) {
    const startX = this.center.x - this.size / 2
    const startY = this.center.y - this.size / 2

    const splitSec = this.size / 4

    ctx.fillStyle = "white"
    ctx.beginPath()
    ctx.moveTo(startX + splitSec * 4, startY)
    ctx.lineTo(startX + splitSec * 4, startY + splitSec * 2)
    ctx.lineTo(startX + splitSec * 3, startY + splitSec * 2)
    ctx.lineTo(startX + splitSec * 3, startY)
    ctx.closePath()
    ctx.fill()

    ctx.fillStyle = "orange"
    const mouthSize = {
      x: splitSec / 2,
      y: splitSec / 4,
    }
    ctx.beginPath()
    ctx.moveTo(startX + splitSec * 4 + mouthSize.x, startY + splitSec)
    ctx.lineTo(
      startX + splitSec * 4 + mouthSize.x,
      startY + splitSec + mouthSize.y
    )
    ctx.lineTo(startX + splitSec * 4, startY + splitSec + mouthSize.y)
    ctx.lineTo(startX + splitSec * 4, startY + splitSec)
    ctx.closePath()
    ctx.fill()

    // ctx.fillStyle = 'black'
    // const eyesize = splitSec / 16
    // ctx.rect(20, 20, 150, 100);
  }

  drawBody(ctx) {
    // 鴨鴨身體占下半部三分之二
    const startX = this.center.x - this.size / 2
    const splitSec = this.size / 2

    ctx.fillStyle = "white"
    ctx.beginPath()
    ctx.rect(startX, this.center.y, this.size, splitSec)
    ctx.fill()

    ctx.beginPath()
    ctx.fillStyle = "black"
    ctx.arc(this.center.x, this.center.y, 5, 0, Math.PI * 2)
    ctx.fill()
  }

  drawFeet(ctx) {}

  drawNormalDuck(ctx) {
    this.drawBody(ctx)
    this.drawHead(ctx)
    this.drawFeet()
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
  }
}

export default Duck
