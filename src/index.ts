import { enter, leave } from './transition'

export const defaultOption = {
  hideAfter: 2000, // in milliseconds
  className: '',
  transitionClassName: 'wy-toast', // transition class name

  // style
  backgroundColor: 'black',
  borderRadius: '2px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  color: 'white',
  padding: '4px 8px',
  fontSize: '14px',
}

export type ToastOption = typeof defaultOption

export async function toast(
  message: string,
  option: Partial<ToastOption> = {},
) {
  const { hideAfter, className, transitionClassName, ...styleOption } = {
    ...defaultOption,
    ...option,
  }

  const toastContainer = document.createElement('div')
  Object.assign(toastContainer.style, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    zIndex: '999999',
  })

  const toastElement = document.createElement('div')
  toastElement.className = className
  toastElement.textContent = message

  for (const [key, value] of Object.entries(styleOption)) {
    (toastElement.style as any)[key] = value
  }

  toastContainer.appendChild(toastElement)
  document.body.appendChild(toastContainer)

  await enter(toastElement, transitionClassName)

  setTimeout(async () => {
    await leave(toastElement, transitionClassName)

    toastContainer.remove()
  }, hideAfter)
}

declare global {
  interface Window {
    jQuery?: any
  }
}

if (typeof window.jQuery !== 'undefined') {
  toast.option = defaultOption
  window.jQuery.toast = toast
}
