/** @format */

class Hut {
  constructor(center, { width = 120, hegiht = 90 } = {}) {
    this.center = center
    this.size = {
      width: width,
      hegiht: hegiht,
    }
  }

  draw(ctx) {
    const initX = this.center.x - this.size.width / 2
    const initY = this.center.y - this.size.hegiht / 2

    const splictSecX = this.size.width / 6
    const splictSecY = this.size.hegiht / 2

    const inset = splictSecX / 2

    // 下半部
    ctx.beginPath()
    ctx.fillStyle = "rgb(180, 21, 19)"
    ctx.rect(
      initX + inset,
      initY + splictSecY * 1,
      this.size.width - inset * 2,
      splictSecY
    )
    ctx.fill()

    // 屋頂
    ctx.beginPath()
    ctx.fillStyle = "rgb(180, 21, 19)"
    ctx.moveTo(initX + splictSecX * 3, initY)
    ctx.lineTo(initX + splictSecX, initY + splictSecY / 2)
    ctx.lineTo(initX, initY + splictSecY)
    ctx.lineTo(initX + this.size.width, initY + splictSecY)
    ctx.lineTo(initX + splictSecX * 5, initY + splictSecY / 2)
    ctx.lineTo(initX + splictSecX * 3, initY)
    ctx.closePath()
    ctx.fill()

    // 屋頂的瓦片
    ctx.beginPath()
    ctx.strokeStyle = "white"
    ctx.lineWidth = 5
    ctx.moveTo(initX + splictSecX * 3, initY)
    ctx.lineTo(initX + splictSecX, initY + splictSecY / 2)
    ctx.lineTo(initX, initY + splictSecY)
    ctx.stroke()
    ctx.moveTo(initX + splictSecX * 3, initY)
    ctx.lineTo(initX + splictSecX * 5, initY + splictSecY / 2)
    ctx.lineTo(initX + this.size.width, initY + splictSecY)
    ctx.stroke()

    // 窗戶
    ctx.beginPath()
    ctx.fillStyle = "white"
    ctx.rect(
      initX + splictSecX,
      initY + splictSecY * 0.75,
      splictSecX,
      splictSecX
    )
    ctx.rect(
      initX + splictSecX * 4,
      initY + splictSecY * 0.75,
      splictSecX,
      splictSecX
    )
    ctx.fill()

    // 門
    ctx.beginPath()
    ctx.fillStyle = "black"
    ctx.rect(
      initX + splictSecX * 2,
      initY + splictSecY * 1.45,
      splictSecX * 2,
      splictSecY * 0.55
    )
    ctx.fill()
  }
}

export default Hut
