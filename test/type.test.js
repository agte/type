import type from '../index.js';

let failures = 0;

const notThrows = (f) => {
  try {
    f();
    console.log('- PASSED');
  } catch (e) {
    console.log('- FAILED', e.message);
    failures++;
  }
};

const throws = (f) => {
  try {
    f();
    throw new Error('TEST_FAILED');
  } catch (e) {
    if (e.message === 'TEST_FAILED') {
      console.log('- FAILED', 'must throw an error, but did not');
      failures++;
    } else {
      console.log('- PASSED');
    }
  }
}

console.log('string');
notThrows(() => type.string('abc'));
notThrows(() => type.string(''));
throws(() => type.string(new String('abc')));
throws(() => type.string(12));
throws(() => type.string(true));
throws(() => type.string(false));
throws(() => type.string({}));
throws(() => type.string([]));
throws(() => type.string(null));
throws(() => type.string(undefined));

console.log('strings');
notThrows(() => type.strings(['abc', 'def']));
notThrows(() => type.strings([]));
notThrows(() => type.strings(new Array()));
throws(() => type.strings({}));
throws(() => type.strings({ '0': 'abc', '1': 'def' }));
throws(() => type.strings(['abc', 12]));
throws(() => type.strings(null));
throws(() => type.strings(undefined));

console.log('number');
notThrows(() => type.number(1));
notThrows(() => type.number(-2));
notThrows(() => type.number(5.15));
notThrows(() => type.number(0));
throws(() => type.number(NaN));
throws(() => type.number(Infinity));
throws(() => type.number('abc'));
throws(() => type.number('12'));
throws(() => type.number('0'));
throws(() => type.number(''));
throws(() => type.number(new Number(5)));
throws(() => type.number(true));
throws(() => type.number(false));
throws(() => type.number({}));
throws(() => type.number([]));
throws(() => type.number(null));
throws(() => type.number(undefined));

console.log('numbers');
notThrows(() => type.numbers([5, 7]));
throws(() => type.numbers([5, '7']));

console.log('boolean');
notThrows(() => type.boolean(false));
notThrows(() => type.boolean(true));
throws(() => type.boolean(0));
throws(() => type.boolean(''));
throws(() => type.boolean(1));
throws(() => type.boolean([]));
throws(() => type.boolean({}));
throws(() => type.boolean(null));
throws(() => type.boolean(undefined));
throws(() => type.boolean(NaN));
throws(() => type.boolean(Infinity));

console.log('booleans');
notThrows(() => type.booleans([false, true]));
notThrows(() => type.booleans([]));
throws(() => type.booleans([false, 0]));

console.log('object');
notThrows(() => type.object({ a: 5, b: false }));
notThrows(() => type.object({}));
notThrows(() => type.object([]));
notThrows(() => type.object(new Map()));
notThrows(() => type.object(new Set()));
notThrows(() => type.object(new Boolean()));
throws(() => type.object(1));
throws(() => type.object(true));
throws(() => type.object('{}'));
throws(() => type.object(null));
throws(() => type.object(undefined));
throws(() => type.object(NaN));
throws(() => type.object(Infinity));

console.log('objects');
notThrows(() => type.objects([{ a: 5 }, {}]));
notThrows(() => type.objects([]));
throws(() => type.objects([{ a: 5 }, {}, null]));

if (failures) {
  process.exit(1);
} else {
  process.exit(0);
}