# 🚗 uber-chrome

## What is _uber-chrome_? 🤔

Easily call an Uber on your desktop from Chrome.

- All information stays local, extension is just a few lines of JavaScript. 🎉

## How to Use

Clone the repository and install all dependencies by running:

```bash
git clone https://github.com/nicholasadamou/uber-chrome
cd uber-chrome/
yarn install # Optionally, 'npm' can be used instead.
yarn build
```

Finally, toss the contents of the `./build/` directory into [`chrome://extensions`](chrome://extensions).

## Watching

```bash
yarn watch
```

Then, open `https://localhost:9966`.

## Credits

- [Segment](https://open.segment.com/)'s [chrome-sidebar](https://www.npmjs.com/package/chrome-sidebar) module is used to embed an _iframe as a chrome extension_.

## License

Copyright (c) by Nicholas Adamou. Some rights reserved.

`uber-chrome` is under the terms of the **MIT License**, following all clarifications stated in the [license file](license.md).
