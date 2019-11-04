/* eslint-disable no-new-wrappers, max-classes-per-file */
import test from 'ava';
import { assert } from '../index.js';

test('string', (t) => {
  t.notThrows(() => assert.string('abc'));
  t.notThrows(() => assert.string(''));
  t.throws(() => assert.string(new String('abc')));
  t.throws(() => assert.string(12));
  t.throws(() => assert.string(true));
  t.throws(() => assert.string(false));
  t.throws(() => assert.string({}));
  t.throws(() => assert.string([]));
  t.throws(() => assert.string(null));
  t.throws(() => assert.string(undefined));
});

test('non empty string', (t) => {
  t.notThrows(() => assert.nonEmptyString('abc'));
  t.throws(() => assert.nonEmptyString(''));
  t.throws(() => assert.nonEmptyString(new String('abc')));
  t.throws(() => assert.nonEmptyString(12));
  t.throws(() => assert.nonEmptyString(true));
  t.throws(() => assert.nonEmptyString(false));
  t.throws(() => assert.nonEmptyString({}));
  t.throws(() => assert.nonEmptyString([]));
  t.throws(() => assert.nonEmptyString(null));
  t.throws(() => assert.nonEmptyString(undefined));
});

test('number', (t) => {
  t.notThrows(() => assert.number(1));
  t.notThrows(() => assert.number(-2));
  t.notThrows(() => assert.number(5.15));
  t.notThrows(() => assert.number(0));
  t.throws(() => assert.number(NaN));
  t.throws(() => assert.number(Infinity));
  t.throws(() => assert.number('abc'));
  t.throws(() => assert.number('12'));
  t.throws(() => assert.number('0'));
  t.throws(() => assert.number(''));
  t.throws(() => assert.number(new Number(5)));
  t.throws(() => assert.number(true));
  t.throws(() => assert.number(false));
  t.throws(() => assert.number({}));
  t.throws(() => assert.number([]));
  t.throws(() => assert.number(null));
  t.throws(() => assert.number(undefined));
});

test('integer', (t) => {
  t.notThrows(() => assert.integer(1));
  t.notThrows(() => assert.integer(-2));
  t.throws(() => assert.integer(5.15));
  t.notThrows(() => assert.integer(0));
  t.throws(() => assert.integer(NaN));
  t.throws(() => assert.integer(Infinity));
  t.throws(() => assert.integer('abc'));
  t.throws(() => assert.integer('12'));
  t.throws(() => assert.integer('0'));
  t.throws(() => assert.integer(''));
  t.throws(() => assert.integer(new Number(5)));
  t.throws(() => assert.integer(true));
  t.throws(() => assert.integer(false));
  t.throws(() => assert.integer({}));
  t.throws(() => assert.integer([]));
  t.throws(() => assert.integer(null));
  t.throws(() => assert.integer(undefined));
});

test('boolean', (t) => {
  t.notThrows(() => assert.boolean(false));
  t.notThrows(() => assert.boolean(true));
  t.throws(() => assert.boolean(0));
  t.throws(() => assert.boolean(''));
  t.throws(() => assert.boolean(1));
  t.throws(() => assert.boolean([]));
  t.throws(() => assert.boolean({}));
  t.throws(() => assert.boolean(null));
  t.throws(() => assert.boolean(undefined));
  t.throws(() => assert.boolean(NaN));
  t.throws(() => assert.boolean(Infinity));
});

test('object', (t) => {
  t.notThrows(() => assert.object({ a: 5, b: false }));
  t.notThrows(() => assert.object({}));
  t.notThrows(() => assert.object([]));
  t.notThrows(() => assert.object(new Map()));
  t.notThrows(() => assert.object(new Set()));
  t.notThrows(() => assert.object(new Boolean()));
  t.throws(() => assert.object(1));
  t.throws(() => assert.object(true));
  t.throws(() => assert.object('{}'));
  t.throws(() => assert.object(null));
  t.throws(() => assert.object(undefined));
  t.throws(() => assert.object(NaN));
  t.throws(() => assert.object(Infinity));
});

test('function', (t) => {
  t.throws(() => assert.function({}));
  t.throws(() => assert.function([]));
  t.throws(() => assert.function(new Map()));
  t.throws(() => assert.function(class {}));
  t.notThrows(() => assert.function(function a() {})); // eslint-disable-line prefer-arrow-callback
  t.notThrows(() => assert.function(() => {}));
});

test('class', (t) => {
  t.throws(() => assert.class({}));
  t.throws(() => assert.class([]));
  t.throws(() => assert.class(new Map()));
  t.throws(() => assert.class(function a() {})); // eslint-disable-line prefer-arrow-callback
  t.throws(() => assert.class(() => {}));
  t.notThrows(() => assert.class(class {}));
});
