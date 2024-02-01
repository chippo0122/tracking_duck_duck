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
    // console.log(this.center)
    const initX = this.center.x - this.size.width / 2
    const initY = this.center.y - this.size.hegiht / 2

    const splictSecX = this.size.width / 6
    const splictSecY = this.size.hegiht / 2

    const inset = splictSecX / 4
    ctx.beginPath()
    ctx.fillStyle = "white"
    ctx.rect(initX - inset, initY, this.size.width - inset, this.size.hegiht)
    ctx.fill()

    ctx.beginPath()
    ctx.fillStyle = "rgb(158, 21, 19)"
    ctx.rect(initX, initY + splictSecY * 1, this.size.width, splictSecY)
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(initX + splictSecX * 3, initY)
    ctx.lineTo(initX + splictSecX, initY + splictSecY / 2)
    ctx.lineTo(initX, initY + splictSecY)
    ctx.stroke()
  }
}

export default Hut
