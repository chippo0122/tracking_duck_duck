/** @format */
import { Intro } from "./assets/static/script"
import Field from "./assets/js/field"
import "./assets/styles/style.scss"

const main = () => {
  // controls
  const contact = document.querySelector(".contact")
  const generateBtn = document.querySelector(".generate-duck")
  const modal = document.querySelector(".show-story")
  const next = document.querySelector(".next")
  const back = document.querySelector(".prev")

  // utils
  const showContact = (arr, idx) => {
    contact.innerHTML = arr[idx]
  }

  // intro
  let currentIntroStep = 0

  const backIntro = () => {
    currentIntroStep -= 1
    showContact(Intro, currentIntroStep)

    if (currentIntroStep < 1) {
      back.classList.add("hide")
      return
    }

    back.classList.remove("hide")
  }

  const nextIntro = () => {
    if (currentIntroStep + 1 >= Intro.length) {
      next.classList.add("hide")
      back.classList.add("hide")
      modal.classList.add("hide")
      field.start()
      animate()
      return
    }

    currentIntroStep += 1
    showContact(Intro, currentIntroStep)

    if (currentIntroStep > 0) {
      console.log("!!!")
      back.classList.remove("hide")
    }
  }

  contact.innerHTML = Intro[currentIntroStep]

  next.addEventListener("click", nextIntro)
  back.addEventListener("click", backIntro)

  //game starts
  const CANVAS = document.getElementById("CANVAS")

  CANVAS.width = window.innerWidth
  CANVAS.height = window.innerHeight

  const field = new Field(CANVAS)

  // generateBtn.addEventListener("click", () => {
  //   if (field.isStart && !field.isFinish) {
  //     field.generateField()
  //     return
  //   }

  //   if (field.isStart && field.isFinish) {
  //     field.start()
  //     return
  //   }

  //   field.start()
  //   animate()
  // })

  const animate = () => {
    if (field.isStart && field.isFinish) {
      //中斷點
      console.log("DONE")
      return
    }

    field.draw()
    requestAnimationFrame(animate)
  }
}

window.onload = main
