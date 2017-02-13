// Example Usage
// Use standard JS expressions, or community libraries to perform comparisons,
// such as LoDash's isEqual to deep compare: https://lodash.com/docs#isEqual
//
// You can also use curly brackets for scoping let variables, and console.time
// to benchmark the time it takes to complete the tests.


/*

console.time('Total Running Time')
avow('Simple assertion that one equals one.', 1 === 1)

avow('Numbers', () => {
  {
    let expected = 1,
        actual = 2
    avow('1 should equal 1', expected === actual, expected, actual)
  }
})

avow('Math', () => {
  let expected = 2,
        actual = 1 + 1
  avow('1 added to 1 should equal 2', expected === actual, expected, actual)
})

avow('Tests Completed')
console.timeEnd('Total Running Time')

*/

function avow(description, assertion, expected, actual) {
  var log = console.log.bind(console),
      isBrowser = typeof window != 'undefined',
      isAssertionGroup = typeof assertion === 'function' || arguments.length === 1,
      isAssertion = !isAssertionGroup,
      isPass = assertion,
      showContext = isAssertion && !isPass && typeof expected != 'undefined';

  if (isAssertionGroup) {
    isBrowser?
    log('\n' + '%c> ' + description, 'font-weight: bold; color: goldenrod;'):
    log('\n' + '\x1b[1m\x1b[33m> ' + description + '\x1b[22m\x1b[0m');
    isPass? assertion() : undefined;
  }

  else if (isAssertion) {
    isBrowser?
    log('[%c' + (isPass? 'PASSED' : 'FAILED') + '%c] %c ' + description, 'font-weight: bold; color: ' + (isPass? 'green' : 'red') + ';', 'font-weight: normal; color: inherit;', 'color: darkcyan;'):
    log('[\x1b[1m' + (isPass? '\x1b[32mPASSED' : '\x1b[31mFAILED') + '\x1b[22m\x1b[0m]\x1b[36m ' + description + '\x1b[0m');
  }

  if (showContext) {
    isBrowser?
    log('%cExpected:', 'color: red;'):
    log('\x1b[31mExpected:\x1b[0m');
    console.dir(expected);
    isBrowser?
    log('%cActual:', 'color: red;'):
    log('\x1b[31mActual:\x1b[0m');
    console.dir(actual);
  }
}

if (typeof module != 'undefined') {
  module.exports = avow;
}
