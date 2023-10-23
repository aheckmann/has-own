
var has = require('hasown');

module.exports = exports = function hasOwn(prop, obj) {
  return has(obj, prop);
}

exports.version = require('./package.json').version;
