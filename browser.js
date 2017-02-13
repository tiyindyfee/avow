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