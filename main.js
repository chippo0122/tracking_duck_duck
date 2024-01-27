/** @format */
import Field from "./assets/js/field"
import "./assets/styles/style.scss"

const main = () => {
  const CANVAS = document.getElementById("CANVAS")

  CANVAS.width = window.innerWidth
  CANVAS.height = window.innerHeight - 100

  const field = new Field(CANVAS)

  const generateBtn = document.querySelector(".generate-duck")

  generateBtn.addEventListener("click", () => {
    if (field.isStart) {
      field.generateDucks()
      return
    }

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
