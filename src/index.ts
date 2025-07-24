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

  // container style
  containerStyle: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    zIndex: '999999',
  },
}

export type ToastOption = typeof defaultOption

export async function toast(
  message: string,
  option: Partial<ToastOption> = {},
) {
  const {
    hideAfter,
    className,
    transitionClassName,
    containerStyle,
    ...styleOption
  } = {
    ...defaultOption,
    ...option,
    containerStyle: {
      ...defaultOption.containerStyle,
      ...option.containerStyle,
    },
  }

  const toastContainer = document.createElement('div')
  Object.assign(toastContainer.style, containerStyle)

  const toastElement = document.createElement('div')
  toastElement.className = className
  toastElement.textContent = message

  Object.assign(toastElement.style, styleOption)

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
    Toast?: any
  }
}

// Declare the build format variable that gets injected by the build process
declare const BUILD_FORMAT: string | undefined

// Only add to window when building for IIFE format
if (typeof BUILD_FORMAT !== 'undefined' && BUILD_FORMAT === 'iife') {
  if (typeof window !== 'undefined' && typeof window.jQuery !== 'undefined') {
    toast.option = defaultOption
    window.jQuery.toast = toast
  } else if (typeof window !== 'undefined') {
    window.Toast = {
      toast,
      option: defaultOption,
    }
  }
}
