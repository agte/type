const msg = (expected, got) => (got ? `expected ${expected}, got ${got}` : `expected ${expected}`);

const isString = (value) => typeof value === 'string';
const isNumber = (value) => typeof value === 'number' && Number.isFinite(value);
const isBoolean = (value) => typeof value === 'boolean';
const isObject = (value) => typeof value === 'object' && value !== null;

export default {
  string(value) {
    if (!isString(value)) {
      throw new TypeError(msg('string', `(${typeof value}) ${value}`));
    }
  },
  strings(value) {
    if (!Array.isArray(value)) {
      throw new TypeError(msg('array', `(${typeof value}) ${value}`));
    }
    if (!value.every((item) => isString(item))) {
      throw new TypeError(msg('only strings'));
    }
  },

  number(value) {
    if (!isNumber(value)) {
      throw new TypeError(msg('number', `(${typeof value}) ${value}`));
    }
  },
  numbers(value) {
    if (!Array.isArray(value)) {
      throw new TypeError(msg('array', `(${typeof value}) ${value}`));
    }
    if (!value.every((item) => isNumber(item))) {
      throw new TypeError(msg('only numbers'));
    }
  },

  boolean(value) {
    if (!isBoolean(value)) {
      throw new TypeError(msg('boolean', `(${typeof value}) ${value}`));
    }
  },
  booleans(value) {
    if (!Array.isArray(value)) {
      throw new TypeError(msg('array', `(${typeof value}) ${value}`));
    }
    if (!value.every((item) => isBoolean(item))) {
      throw new TypeError(msg('only booleans'));
    }
  },

  object(value) {
    if (!isObject(value)) {
      throw new TypeError(msg('object', `(${typeof value}) ${value}`));
    }
  },
  objects(value) {
    if (!Array.isArray(value)) {
      throw new TypeError(msg('array', typeof value));
    }
    if (!value.every((item) => isObject(item))) {
      throw new TypeError(msg('only objects'));
    }
  },

  // instance(value, constructor) {
  //   if (typeof value !== 'object' || !(value instanceof constructor)) {
  //     throw new TypeError(msg(`instance of class "${constructor.name}"`, typeof value));
  //   }
  // },
  // instances(value, constructor) {
  //   if (Array.isArray(value)) {
  //     throw new TypeError(msg('array', typeof value));
  //   }
  //   if (!value.every(item => typeof item === 'object' && item instanceof constructor)) {
  //     throw new TypeError(`only instances of class ${constructor.name}`);
  //   }
  // },
  // inheritor(value, ancestor) {
  //   if (typeof value !== 'function') {
  //     throw new TypeError(msg('class', typeof value));
  //   }
  //   if (value !== ancestor && !Object.prototype.isPrototypeOf.call(ancestor, value)) {
  //     throw new TypeError(msg(`inheritor of class ${ancestor.name} or class itself`));
  //   }
  // },
};
