export const toast = (message, options = {}) => {
  options = { ...toast.options, ...options };

  const hideAfter = options.hideAfter

  const toastElement = document.createElement('div');
  toastElement.className = `toast-content`;
  toastElement.textContent = message;

  for (const [key, value] of Object.entries(options)) {
    if (key !== 'hideAfter') {
      toastElement.style[key] = value;
    }
  }

  document.body.appendChild(toastElement);

  setTimeout(() => {
    toastElement.remove();
  }, hideAfter);
}

toast.options = {
  hideAfter: 2000, // in milliseconds

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
  zIndex: 1000,
}

if (typeof jQuery !== 'undefined') {
  jQuery.toast = toast;
}

