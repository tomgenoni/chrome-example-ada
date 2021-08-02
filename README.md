# chrome-example-ada

Example organization of simple Chrome extension

## File notes

**`popup.html`**

- Any manual javascript that needs to hook into the HTML should load last. Here we're loading `script.js` right before the closing `</body>` tag. That way we don't need to use the `DOMContentLoaded` event listener in the JS.
- If you're using any JS libraries you'd mostly likely load that in the `<head>`. Though sometimes for performance reasons you also load them last, above any custom code.
- I use `class` exclusively for CSS styling and `id` exclusively for JavaScript hooks. This way you can change class names (mostly) without fear that you'll mess up your JavaScript. In frameworks like React you'll never need ids for styling and I haven't used them for styling for many years.
- I don't usually add `onclick` handlers directly into the HTML, instead putting everything in the `script.js`. It's not a hard rule, I just find it easier if I'm not mixing `onclick` on some elements and `addEventListner` on others.

**`script.js`**

This is the way I usually organize my JS files. I find it helps to orient myself in the code, especially if it starts to get long and if I'm having others look at or review it.

1. In the first section I grab my elements from the DOM so they can be used throughout the file. Again, I exclusively use the `id` attribute for this.
2. The second section will hold all the functions.
3. Global event handlers go in the third section. We put them at the bottom because the functions they reference need to have been declared first, in our case in the second section.

## Click to copy

I'm using an `input` here for the click-to-copy functionality. There are examples that use `<p>` or `<div>` but in the code are actually creating hidden `input` or `textarea` elements and doing the work. You can do it that way, it's just a bit more complicated.

Note that the `input` has a `readonly` attribute. This will prevent the user from typing in the input.
