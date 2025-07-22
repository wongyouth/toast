# Show a notification without blocking

## Features

- Without any dependencies
- Working with jQuery, Vue, React and others
- Show a notification on the center of screen
- Without blocking other elements
- All CSS can be customized

## Usage

#### Show a notification

toast("Copied")

#### With option

Show a toast with black background and white font color.

```
toast("Copied", { backgroundColor: 'white', color: 'black' })
```

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
defaultOption.color = 'lightblue'
toast("Message Copied")
```

## credits to

- [vite-vanilla-library-template](https://github.com/hywax/vite-vanilla-library-template)

## License

This script was created under the [MIT License](LICENSE).
