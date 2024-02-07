/** @format */
import Field from "./assets/js/field"
import "./assets/styles/style.scss"

const main = () => {
  const CANVAS = document.getElementById("CANVAS")

  CANVAS.width = window.innerWidth
  CANVAS.height = window.innerHeight

  const field = new Field(CANVAS)

  const generateBtn = document.querySelector(".generate-duck")

  generateBtn.addEventListener("click", () => {
    if (field.isStart) {
      field.generateField()
      return
    }

    field.start()
    animate()
  })

  const animate = () => {
    field.draw()
    requestAnimationFrame(animate)
  }

  // field.start()
  // field.generateField()
  // animate()
}

window.onload = main
