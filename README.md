# Show a notification without blocking

## Features

- Without any dependencies
- Working with jQuery, Vue, React and others
- Show a notification on the center of screen
- Without blocking other elements
- All CSS can be customized
- Fade int out animation by default

## Usage

#### Show a notification

toast("Copied")

#### With option

Hide notification after 5 seconds.

```
toast("Copied", { hideAfter: 5000 })
```

#### Option

- **hideAfter** - hidding the notification after this duration
- **className** - Notification Class name

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

#### Animation

By default, using css transition to do animation. It's same logic that Vue 3 transition use.

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

If you want to customize animation, you can provide a different transition className and add your own css styles.

For example, with option transitionClassName: `notify`, you need to add 3 styles:

- `notify-active`
- `notify-from`
- `notify-to`

#### Common JS

require '@wongyouth/toast'

If jQuery is available

```
$.toast("Message Copied")
```

Change default option

```
$.toast.option.className = 'toast'
```

#### Module

```
import { toast, defaultOption } from '@wontyouth/toast'
defaultOption.hideAfter = 5000
toast("Message Copied")
```

## credits to

- [vite-vanilla-library-template](https://github.com/hywax/vite-vanilla-library-template)

## License

This script was created under the [MIT License](LICENSE).
