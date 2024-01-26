/** @format */
import Field from "./assets/js/field"
import "./assets/styles/style.scss"

const main = () => {
  const CANVAS = document.getElementById("CANVAS")

  CANVAS.width = window.innerWidth - 30
  CANVAS.height = window.innerHeight - 30

  const field = new Field(CANVAS)

  const generateBtn = document.querySelector(".generate-duck")

  generateBtn.addEventListener("click", () => {
    field.start()
    animate()
  })

  const animate = () => {
    field.draw()
    requestAnimationFrame(animate)
  }

  animate()
}

window.onload = main
