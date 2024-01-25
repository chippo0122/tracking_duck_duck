/** @format */
import Field from "./assets/js/field"
import "./assets/styles/style.scss"

const main = () => {
  const CANVAS = document.getElementById("CANVAS")

  CANVAS.width = window.innerWidth - 100
  CANVAS.height = window.innerHeight - 100

  const field = new Field(CANVAS)

  const generateBtn = document.querySelector(".generate-duck")

  generateBtn.addEventListener("click", () => {
    field.generateDucks()
  })

  // const animate = () => {
  //   field.draw()
  //   requestAnimationFrame(animate)
  // }

  // animate()
}

window.onload = main
