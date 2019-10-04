/* eslint-disable no-new-wrappers, max-classes-per-file */
import test from 'ava';
import type from '../index.js';

test('string', (t) => {
  t.notThrows(() => type.string('abc'));
  t.notThrows(() => type.string(''));
  t.throws(() => type.string(new String('abc')));
  t.throws(() => type.string(12));
  t.throws(() => type.string(true));
  t.throws(() => type.string(false));
  t.throws(() => type.string({}));
  t.throws(() => type.string([]));
  t.throws(() => type.string(null));
  t.throws(() => type.string(undefined));
});

test('non empty string', (t) => {
  t.notThrows(() => type.nonEmptyString('abc'));
  t.throws(() => type.nonEmptyString(''));
  t.throws(() => type.nonEmptyString(new String('abc')));
  t.throws(() => type.nonEmptyString(12));
  t.throws(() => type.nonEmptyString(true));
  t.throws(() => type.nonEmptyString(false));
  t.throws(() => type.nonEmptyString({}));
  t.throws(() => type.nonEmptyString([]));
  t.throws(() => type.nonEmptyString(null));
  t.throws(() => type.nonEmptyString(undefined));
});

test('number', (t) => {
  t.notThrows(() => type.number(1));
  t.notThrows(() => type.number(-2));
  t.notThrows(() => type.number(5.15));
  t.notThrows(() => type.number(0));
  t.throws(() => type.number(NaN));
  t.throws(() => type.number(Infinity));
  t.throws(() => type.number('abc'));
  t.throws(() => type.number('12'));
  t.throws(() => type.number('0'));
  t.throws(() => type.number(''));
  t.throws(() => type.number(new Number(5)));
  t.throws(() => type.number(true));
  t.throws(() => type.number(false));
  t.throws(() => type.number({}));
  t.throws(() => type.number([]));
  t.throws(() => type.number(null));
  t.throws(() => type.number(undefined));
});

test('integer', (t) => {
  t.notThrows(() => type.integer(1));
  t.notThrows(() => type.integer(-2));
  t.throws(() => type.integer(5.15));
  t.notThrows(() => type.integer(0));
  t.throws(() => type.integer(NaN));
  t.throws(() => type.integer(Infinity));
  t.throws(() => type.integer('abc'));
  t.throws(() => type.integer('12'));
  t.throws(() => type.integer('0'));
  t.throws(() => type.integer(''));
  t.throws(() => type.integer(new Number(5)));
  t.throws(() => type.integer(true));
  t.throws(() => type.integer(false));
  t.throws(() => type.integer({}));
  t.throws(() => type.integer([]));
  t.throws(() => type.integer(null));
  t.throws(() => type.integer(undefined));
});

test('boolean', (t) => {
  t.notThrows(() => type.boolean(false));
  t.notThrows(() => type.boolean(true));
  t.throws(() => type.boolean(0));
  t.throws(() => type.boolean(''));
  t.throws(() => type.boolean(1));
  t.throws(() => type.boolean([]));
  t.throws(() => type.boolean({}));
  t.throws(() => type.boolean(null));
  t.throws(() => type.boolean(undefined));
  t.throws(() => type.boolean(NaN));
  t.throws(() => type.boolean(Infinity));
});

test('object', (t) => {
  t.notThrows(() => type.object({ a: 5, b: false }));
  t.notThrows(() => type.object({}));
  t.notThrows(() => type.object([]));
  t.notThrows(() => type.object(new Map()));
  t.notThrows(() => type.object(new Set()));
  t.notThrows(() => type.object(new Boolean()));
  t.throws(() => type.object(1));
  t.throws(() => type.object(true));
  t.throws(() => type.object('{}'));
  t.throws(() => type.object(null));
  t.throws(() => type.object(undefined));
  t.throws(() => type.object(NaN));
  t.throws(() => type.object(Infinity));
});

test('function', (t) => {
  t.throws(() => type.function({}));
  t.throws(() => type.function([]));
  t.throws(() => type.function(new Map()));
  t.throws(() => type.function(class {}));
  t.notThrows(() => type.function(function a() {})); // eslint-disable-line prefer-arrow-callback
  t.notThrows(() => type.function(() => {}));
});

test('class', (t) => {
  t.throws(() => type.class({}));
  t.throws(() => type.class([]));
  t.throws(() => type.class(new Map()));
  t.throws(() => type.class(function a() {})); // eslint-disable-line prefer-arrow-callback
  t.throws(() => type.class(() => {}));
  t.notThrows(() => type.class(class {}));
});
