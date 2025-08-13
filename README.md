# DEPRECATED

With the wide availability of
[`Object.hasOwn()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn),
this project is no longer necessary and no longer maintained. Do not use this in your project.

# has-own

Shorthand `Object.prototype.hasOwnProperty.call(obj, name)`.

```js
var assert = require('assert');
var hasOwn = require('has-own');

var o = Object.create(null);
o.name = 'has-own';

assert(hasOwn('name', o)); // true
```

Why another module? Because I like its readability.

### Fork

Forked from pebble/has-own which isn't maintained anymore.

[LICENSE](https://github.com/pebble/has-own/blob/master/LICENSE)
