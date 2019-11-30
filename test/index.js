import test1 from './mustBe.test.js';

/* eslint-disable no-console */
Promise.all([
  test1(),
])
  .then(
    () => {
      console.log('\x1b[32mPassed!');
      process.exit(0);
    },
    (error) => {
      if (error.code === 'ERR_ASSERTION') {
        console.table(error);
        console.trace();
      } else {
        console.error(error);
      }
      console.log('\x1b[31mFailed!');
      process.exit(1);
    },
  );
