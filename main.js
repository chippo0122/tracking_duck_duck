/** @format */
import { Intro } from "./assets/static/script"
import Field from "./assets/js/field"
import "./assets/styles/style.scss"

const main = () => {
  // controls
  const contact = document.querySelector(".contact")
  const generateBtn = document.querySelector(".generate-duck")
  const modal = document.querySelector(".show-story")
  const next = document.querySelector(".step")

  // utils
  const toggleModal = () => {
    if (modal.classList.contains("hide")) {
      modal.classList.remove("hide")
      return
    }

    modal.classList.add("hide")
  }

  const showContact = (arr, idx) => {
    contact.innerHTML = arr[idx]
  }
  // intro
  let currentIntroStep = 0

  const nextIntro = () => {
    if (currentIntroStep + 1 >= Intro.length) {
      toggleModal()
      return
    }

    currentIntroStep += 1
    showContact(Intro, currentIntroStep)
  }

  contact.innerHTML = Intro[currentIntroStep]

  next.addEventListener("click", nextIntro)

  //game starts
  const CANVAS = document.getElementById("CANVAS")

  CANVAS.width = window.innerWidth
  CANVAS.height = window.innerHeight

  const field = new Field(CANVAS)

  generateBtn.addEventListener("click", () => {
    if (field.isStart && !field.isFinish) {
      field.generateField()
      return
    }

    if (field.isStart && field.isFinish) {
      field.start()
      return
    }

    field.start()
    animate()
  })

  const animate = () => {
    field.draw()
    requestAnimationFrame(animate)
  }
}

window.onload = main
