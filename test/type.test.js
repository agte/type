/* eslint-disable no-new-wrappers */
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

test('strings', (t) => {
  t.notThrows(() => type.strings(['abc', 'def']));
  t.notThrows(() => type.strings([]));
  t.throws(() => type.strings({}));
  t.throws(() => type.strings({ 0: 'abc', 1: 'def' }));
  t.throws(() => type.strings(['abc', 12]));
  t.throws(() => type.strings(null));
  t.throws(() => type.strings(undefined));
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

test('numbers', (t) => {
  t.notThrows(() => type.numbers([5, 7]));
  t.throws(() => type.numbers([5, '7']));
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

test('booleans', (t) => {
  t.notThrows(() => type.booleans([false, true]));
  t.notThrows(() => type.booleans([]));
  t.throws(() => type.booleans([false, 0]));
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

test('objects', (t) => {
  t.notThrows(() => type.objects([{ a: 5 }, {}]));
  t.notThrows(() => type.objects([]));
  t.throws(() => type.objects([{ a: 5 }, {}, null]));
});
