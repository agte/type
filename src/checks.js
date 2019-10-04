const msg = (expected, got) => (got ? `expected ${expected}, got ${got}` : `expected ${expected}`);

const classRegExp = /^class\s[^(]/;

export default {
  string(value) {
    if (typeof value !== 'string') {
      throw new TypeError(msg('string', typeof value));
    }
  },
  nonEmptyString(value) {
    this.string(value);
    if (value.length === 0) {
      throw new TypeError(msg('non empty string', '""'));
    }
  },
  number(value) {
    if (typeof value !== 'number') {
      throw new TypeError(msg('number', typeof value));
    }
    if (!Number.isFinite(value)) {
      throw new TypeError(msg('number', value));
    }
  },
  integer(value) {
    this.number(value);
    if (!Number.isInteger(value)) {
      throw new TypeError(msg('integer', value));
    }
  },
  boolean(value) {
    if (typeof value !== 'boolean') {
      throw new TypeError(msg('boolean', typeof value));
    }
  },
  array(value) {
    if (!Array.isArray(value)) {
      throw new TypeError(msg('array', typeof value));
    }
  },
  object(value) {
    if (typeof value !== 'object') {
      throw new TypeError(msg('object', typeof value));
    }
    if (value === null) {
      throw new TypeError(msg('object', 'null'));
    }
  },
  function(value) {
    if (typeof value !== 'function') {
      throw new TypeError(msg('function', typeof value));
    }
    if (classRegExp.test(Function.prototype.toString.call(value))) {
      throw new TypeError(msg('function', 'class'));
    }
  },
  class(value) {
    if (typeof value !== 'function') {
      throw new TypeError(msg('class', typeof value));
    }
    if (!classRegExp.test(Function.prototype.toString.call(value))) {
      throw new TypeError(msg('class', 'function'));
    }
  },
};
