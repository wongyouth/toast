export const defaultOption = {
  hideAfter: 2000, // in milliseconds
  className: '',

  // style
  backgroundColor: 'black',
  borderRadius: '2px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  color: 'white',
  left: '50%',
  padding: '4px 8px',
  position: 'fixed',
  fontSize: '14px',
  top: '50%',
  transform: 'translate(-50%)',
  transition: 'opacity 0.3s ease-in-out',
  zIndex: 999999,
}

export type ToastOption = typeof defaultOption

export function toast(message: string, option: Partial<ToastOption> = {}) {
  const { hideAfter, className, ...styleOption } = {
    ...defaultOption,
    ...option,
  }

  const toastElement = document.createElement('div')
  toastElement.className = className
  toastElement.textContent = message

  for (const [key, value] of Object.entries(styleOption)) {
    (toastElement.style as any)[key] = value
  }

  document.body.appendChild(toastElement)

  setTimeout(() => {
    toastElement.remove()
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
