<p>
    <img src="static/chain-timeout.png" alt="chain-timeout" width="175" />
</p>

[![MIT license](https://img.shields.io/github/license/alterebro/chain-timeout.svg)](https://github.com/alterebro/chain-timeout/blob/master/LICENSE) [![NPM Version](https://img.shields.io/npm/v/chain-timeout.svg)](https://www.npmjs.com/package/chain-timeout) [![gzip File Size](http://img.badgesize.io/https://unpkg.com/chain-timeout/dist/chain-timeout.min.js?compression=gzip)](https://unpkg.com/chain-timeout/dist/chain-timeout.min.js) [![Twitter Follow](https://img.shields.io/twitter/follow/alterebro.svg?color=%2338A1F3&style=popout)](https://twitter.com/alterebro)


# chain-timeout

**Execute chained setTimeout functions using requestAnimationFrame to improve performance**. <br>By using `requestAnimationFrame` the timeout defined will only get executed when the browser is active, if the browser tab is on the background the script won't be running so the performance increase and battery life is saved :)


## Install

```sh
$ npm install chain-timeout
```

This module is available in three flavours:

| Flavour       | Path          |
| ------------- | ------------- |
| **ES Module** | `dist/chain-timeout.mjs`      |
| **CommonJS**  | `dist/chain-timeout.js`       |
| **UMD**       | `dist/chain-timeout.min.js`   |

Include `chain-timeout`:

```javascript
// ES6
import chainTimeout from 'chain-timeout'

// CJS
const chainTimeout = require('chain-timeout');
```

To use it on the browser include the UMD minified file ( `dist/chain-timeout.min.js` ). You can also add the script directly from [unpkg.com](https://unpkg.com/chain-timeout):

```html
<script src="https://unpkg.com/chain-timeout"></script>
```


## Usage

Include it and create a chain :

```javascript
import chainTimeout from 'chain-timeout';

const chain = chainTimeout( fn, delay ).chainTimeout( fn, delay )...
```

Example :

```javascript
const chain = chainTimeout( () => console.log('hello!'), 2000 )
    .chainTimeout( () => console.log('...'), 3000 )
    .chainTimeout( () => console.log('bye!'), 1000 );
/*
    -> Outputs the string 'hello!' after 2000ms.
    -> Then outputs the string '...' 3000ms after the first message.
    -> Finally outputs 'bye!' when 1000ms have passed since previous function.
*/
```


## API

### chainTimeout(function, delay)

Returns an `Object` with `chainTimeout()` itself to get chained and `clear()` method to cancel the execution chain.

#### &mdash; function

Type : `function`. Function to get executed once the time set on the delay is reached

#### &mdash; delay

Type : `number`. Number defining the milliseconds to wait before the function is executed.

### chain.clear()

Cancels the execution chain.

```javascript
const chain = chainTimeout(fn, delay)
	.chainTimeout(fn, delay)
	.chainTimeout(fn, delay):

chain.clear() // Cancels chain
```

## License

MIT © 2019 [Jorge Moreno](https://moro.es), [@alterebro](https://twitter.com/alterebro)
