const msg = (expected, got) => (got ? `expected ${expected}, got ${got}` : `expected ${expected}`);

export default {
  string(value) {
    if (typeof value !== 'string') {
      throw new TypeError(msg('string', `(${typeof value}) ${value}`));
    }
  },
  nonEmptyString(value) {
    this.string(value);
    if (value.length === 0) {
      throw new TypeError(msg('non empty string', '(string) ""'));
    }
  },
  number(value) {
    if (typeof value !== 'number' || !Number.isFinite(value)) {
      throw new TypeError(msg('number', `(${typeof value}) ${value}`));
    }
  },
  integer(value) {
    this.number(value);
    if (!Number.isInteger(value)) {
      throw new TypeError(msg('integer', `(number) ${value}`));
    }
  },
  boolean(value) {
    if (typeof value !== 'boolean') {
      throw new TypeError(msg('boolean', `(${typeof value}) ${value}`));
    }
  },
  array(value) {
    if (!Array.isArray(value)) {
      throw new TypeError(msg('array', `(${typeof value}) ${value}`));
    }
  },
  object(value) {
    if (typeof value !== 'object' || value === null) {
      throw new TypeError(msg('object', `(${typeof value}) ${value}`));
    }
  },
};
