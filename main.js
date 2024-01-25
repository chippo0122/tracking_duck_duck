/** @format */
import Duck from "./assets/js/duck"
import Field from "./assets/js/field"
import "./assets/styles/style.scss"

const main = () => {
  const CANVAS = document.getElementById("CANVAS")

  CANVAS.width = window.innerWidth - 20
  CANVAS.height = window.innerHeight - 20

  const field = new Field(CANVAS)

  const animate = () => {
    field.draw()
    requestAnimationFrame(animate)
  }

  // animate()
}

window.onload = main
