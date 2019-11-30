/* eslint-disable no-new-wrappers, max-classes-per-file */
import assert from 'assert';
import mustBe from '../lib/mustBe.js';

export default async () => {
  assert.doesNotThrow(() => mustBe.string('abc'));
  assert.doesNotThrow(() => mustBe.string(''));
  assert.throws(() => mustBe.string(new String('abc')));
  assert.throws(() => mustBe.string(12));
  assert.throws(() => mustBe.string(true));
  assert.throws(() => mustBe.string(false));
  assert.throws(() => mustBe.string({}));
  assert.throws(() => mustBe.string([]));
  assert.throws(() => mustBe.string(null));
  assert.throws(() => mustBe.string(undefined));

  assert.doesNotThrow(() => mustBe.nonEmptyString('abc'));
  assert.throws(() => mustBe.nonEmptyString(''));
  assert.throws(() => mustBe.nonEmptyString(new String('abc')));
  assert.throws(() => mustBe.nonEmptyString(12));
  assert.throws(() => mustBe.nonEmptyString(true));
  assert.throws(() => mustBe.nonEmptyString(false));
  assert.throws(() => mustBe.nonEmptyString({}));
  assert.throws(() => mustBe.nonEmptyString([]));
  assert.throws(() => mustBe.nonEmptyString(null));
  assert.throws(() => mustBe.nonEmptyString(undefined));

  assert.doesNotThrow(() => mustBe.number(1));
  assert.doesNotThrow(() => mustBe.number(-2));
  assert.doesNotThrow(() => mustBe.number(5.15));
  assert.doesNotThrow(() => mustBe.number(0));
  assert.throws(() => mustBe.number(NaN));
  assert.throws(() => mustBe.number(Infinity));
  assert.throws(() => mustBe.number('abc'));
  assert.throws(() => mustBe.number('12'));
  assert.throws(() => mustBe.number('0'));
  assert.throws(() => mustBe.number(''));
  assert.throws(() => mustBe.number(new Number(5)));
  assert.throws(() => mustBe.number(true));
  assert.throws(() => mustBe.number(false));
  assert.throws(() => mustBe.number({}));
  assert.throws(() => mustBe.number([]));
  assert.throws(() => mustBe.number(null));
  assert.throws(() => mustBe.number(undefined));

  assert.doesNotThrow(() => mustBe.integer(1));
  assert.doesNotThrow(() => mustBe.integer(-2));
  assert.throws(() => mustBe.integer(5.15));
  assert.doesNotThrow(() => mustBe.integer(0));
  assert.throws(() => mustBe.integer(NaN));
  assert.throws(() => mustBe.integer(Infinity));
  assert.throws(() => mustBe.integer('abc'));
  assert.throws(() => mustBe.integer('12'));
  assert.throws(() => mustBe.integer('0'));
  assert.throws(() => mustBe.integer(''));
  assert.throws(() => mustBe.integer(new Number(5)));
  assert.throws(() => mustBe.integer(true));
  assert.throws(() => mustBe.integer(false));
  assert.throws(() => mustBe.integer({}));
  assert.throws(() => mustBe.integer([]));
  assert.throws(() => mustBe.integer(null));
  assert.throws(() => mustBe.integer(undefined));

  assert.doesNotThrow(() => mustBe.boolean(false));
  assert.doesNotThrow(() => mustBe.boolean(true));
  assert.throws(() => mustBe.boolean(0));
  assert.throws(() => mustBe.boolean(''));
  assert.throws(() => mustBe.boolean(1));
  assert.throws(() => mustBe.boolean([]));
  assert.throws(() => mustBe.boolean({}));
  assert.throws(() => mustBe.boolean(null));
  assert.throws(() => mustBe.boolean(undefined));
  assert.throws(() => mustBe.boolean(NaN));
  assert.throws(() => mustBe.boolean(Infinity));

  assert.doesNotThrow(() => mustBe.object({ a: 5, b: false }));
  assert.doesNotThrow(() => mustBe.object({}));
  assert.doesNotThrow(() => mustBe.object([]));
  assert.doesNotThrow(() => mustBe.object(new Map()));
  assert.doesNotThrow(() => mustBe.object(new Set()));
  assert.doesNotThrow(() => mustBe.object(new Boolean()));
  assert.throws(() => mustBe.object(1));
  assert.throws(() => mustBe.object(true));
  assert.throws(() => mustBe.object('{}'));
  assert.throws(() => mustBe.object(null));
  assert.throws(() => mustBe.object(undefined));
  assert.throws(() => mustBe.object(NaN));
  assert.throws(() => mustBe.object(Infinity));

  assert.throws(() => mustBe.function({}));
  assert.throws(() => mustBe.function([]));
  assert.throws(() => mustBe.function(new Map()));
  assert.throws(() => mustBe.function(class {}));
  /* eslint-disable prefer-arrow-callback */
  assert.doesNotThrow(() => mustBe.function(function a() {}));
  /* eslint-enable prefer-arrow-callback */
  assert.doesNotThrow(() => mustBe.function(() => {}));

  assert.throws(() => mustBe.class({}));
  assert.throws(() => mustBe.class([]));
  assert.throws(() => mustBe.class(new Map()));
  assert.throws(() => mustBe.class(function a() {})); // eslint-disable-line prefer-arrow-callback
  assert.throws(() => mustBe.class(() => {}));
  assert.doesNotThrow(() => mustBe.class(class {}));
};
