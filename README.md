# chrome-example-ada

Example organization of CSS and JS in a simple Chrome extension.

## General notes

**`popup.html`**

- Any manual javascript that needs to hook into the DOM should load last in the HTML file. Here we're loading `script.js` right before the closing `</body>` tag. That way we don't have to use the `DOMContentLoaded` event listener in the JS because the DOM will be loaded.
- I use `class` exclusively for CSS styling and `id` exclusively (as possible) for JavaScript hooks. This way you can usually change `class` names without fear that you'll break JavaScript. And you can change `id` names without fear you'll break your CSS. Though there will be times you're grabbing an array of DOM elements and in that case it's common to use the classname. In frameworks like React you'll never need ids for styling and I haven't used them in my CSS for many years.
- I don't usually add `onclick` handlers directly into the HTML, instead putting everything in the `script.js`. It's not a hard rule, I just find it easier to not use `onclick` on some elements in the HTML and `addEventListner` for others in the JS.

**`script.js`**

This is the way I usually organize my custom JS files. I find it helps to orient myself in the code, especially if it starts to get long and if I'm having others look at or review it.

1. In the first section I add any global constants I'll be using.
2. In the second section I grab my elements from the DOM so they can be used throughout the file. Again, I exclusively use the `id` attribute for this.
3. The third section will hold all the functions.
4. Global event handlers go in the fourth section. We put them at the bottom because the functions they reference need to have been declared first, in our case in the second section. Note that in `script.js` we're intentionally waiting to add an event handler for the `input` until after we get the data.

## Click to copy

I'm using an `input` here for the click-to-copy functionality. There are examples that use `<p>` or `<div>` but in the code are actually creating hidden `input` or `textarea` elements and doing the work. You can do it that way, it's just a bit more complicated.

Note that the `input` has a `readonly` attribute. This will prevent the user from typing in the input.
