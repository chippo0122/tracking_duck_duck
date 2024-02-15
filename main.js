/** @format */
import { Intro, Outro } from "./assets/static/script"
import Field from "./assets/js/field"
import "./assets/styles/style.scss"

const main = () => {
  // controls
  const body = document.querySelector("body")
  const contact = document.querySelector(".contact")
  const modal = document.querySelector(".show-story")
  const next = document.querySelector(".next")
  const back = document.querySelector(".prev")
  const restart = document.querySelector(".restart")

  /* util */
  const showContact = (arr, idx) => {
    contact.innerHTML = arr[idx]
  }
  /* end of util */

  /* intros */
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
      next.removeEventListener("click", nextIntro)
      back.removeEventListener("click", backIntro)
      field.start()
      animate()
      return
    }

    currentIntroStep += 1
    showContact(Intro, currentIntroStep)

    if (currentIntroStep > 0) {
      back.classList.remove("hide")
    }
  }

  showContact(Intro, currentIntroStep)

  next.addEventListener("click", nextIntro)
  back.addEventListener("click", backIntro)
  /* end of intro */
  /* outro */
  let currentOutroStep = 0
  let outro = []

  const nextOutro = () => {
    currentOutroStep += 1
    showContact(outro, currentOutroStep)

    if (currentOutroStep > 0) {
      back.classList.remove("hide")
    }

    if (currentOutroStep + 1 >= outro.length) {
      next.classList.add("hide")
      restart.classList.remove("hide")
    }
  }

  const backOutro = () => {
    currentOutroStep -= 1
    showContact(outro, currentOutroStep)

    if (currentOutroStep < 1) {
      back.classList.add("hide")
      return
    }

    back.classList.remove("hide")
  }

  const setOutro = () => {
    // 製作結果
    outro = field.makeResult(Outro)

    next.addEventListener("click", nextOutro)
    back.addEventListener("click", backOutro)

    next.classList.remove("hide")
    back.classList.remove("hide")
    modal.classList.remove("hide")

    showContact(outro, currentOutroStep)
  }

  /* end of outro */

  /* handle game start */
  const CANVAS = document.getElementById("CANVAS")

  CANVAS.width = body.offsetWidth
  CANVAS.height = body.offsetHeight

  const field = new Field(CANVAS)

  const restartGame = () => {
    window.location.reload()
  }

  restart.addEventListener("click", restartGame)

  const animate = () => {
    if (field.isStart && field.isFinish) {
      //中斷點
      setOutro()
      return
    }

    field.draw()
    requestAnimationFrame(animate)
  }
}

window.onload = main
