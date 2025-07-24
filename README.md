# Show a notification without blocking other elements

## Features

- Dependency-free
- Non-blocking
- Tiny footprint (~2kb)
- Framework-agnostic (jQuery, Vue, React, etc.)
- Displays centered notifications
- Fully customizable CSS
- Fade-in/out animation by default

## Usage

### Get Started

```
toast("Clicked 2 times")
```

![ScreenShot](https://github.com/wongyouth/toast/raw/main/docs/screenshot.gif?raw=true)

### Options

Hide notification after 5 seconds.

```
toast("Copied", { hideAfter: 5000 })
```

#### Default Option

- **hideAfter** - hidding the notification after this duration
- **className** - Notification Class name
- **transitionClassName** - Transition Class name. check [Animation](#animatin) below

```
export const defaultOption = {
  hideAfter: 2000, // in milliseconds
  className: "", // element class name
  transitionClassName: "wy-toast",

  // style
  backgroundColor: "black",
  borderRadius: "2px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  color: "white",
  padding: "4px 8px",
  fontSize: "14px",
};
```

### Animation

By default, using css transition to do animation. It's the same logic that [Vue 3 transition][css-base-transition] is using.

```css
.wy-toast-active {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  opacity: 1;
  transform: translateY(0);
}

.wy-toast-from {
  opacity: 0;
  transform: translateY(+20px);
}

.wy-toast-to {
  opacity: 0;
  transform: translateY(-20px);
}
```

If you want to customize animation, you can add your styles to overwrite the styles.

Or you can also provide a different transition className and add your own css styles. For example, with option transitionClassName: `notify`, you need to add 3 styles:

- `notify-active`
- `notify-from`
- `notify-to`

### ES Module, CDN

#### ES Module

```
import { toast, defaultOption } from '@wontyouth/toast'
defaultOption.hideAfter = 5000
toast("Message Copied", { hideAfter: 2000})
```

#### From CDN

```
<script src='https://cdn.jsdelivr.net/npm/@wongyouth/toast'></script>
<script>
  Toast.option.hideAfter = 5000
  Toast.toast('Toast')
</script>
```

#### jQuery

If jQuery is available

```
$.toast.option.hideAfter = 5000
$.toast("Message Copied")
```

## credits to

- [vite-vanilla-library-template](https://github.com/hywax/vite-vanilla-library-template)
- [CSS transitions and transforms for beginners](https://thoughtbot.com/blog/transitions-and-transforms)

## License

This script was created under the [MIT License](LICENSE).

[css-base-transition]: https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
