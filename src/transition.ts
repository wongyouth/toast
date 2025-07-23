import './transition.css'

export async function enter(element: Element, className: string) {
  element.classList.add(`${className}-active`)
  element.classList.add(`${className}-from`)

  await nextFrame()

  element.classList.remove(`${className}-from`)

  await afterTransition(element)

  element.classList.remove(`${className}-active`)
}

export async function leave(element: Element, className: string) {
  element.classList.add(`${className}-active`)

  await nextFrame()

  element.classList.add(`${className}-to`)

  await afterTransition(element)

  element.classList.remove(`${className}-to`)
  element.classList.remove(`${className}-active`)
}

function nextFrame() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve)
    })
  })
}

function afterTransition(element: Element) {
  return new Promise((resolve) => {
    const times = getComputedStyle(element)
      .transitionDuration
      .replace(/s/g, '')
      .split(',')
      .map(Number)

    const duration = Math.max(...times) * 1000

    setTimeout(() => {
      resolve(void 0)
    }, duration)
  })
}
