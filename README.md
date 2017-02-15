# Avow
Avow is a minimalist testing function with no dependencies, that works in the browser (script tag) or Node.js (require).

- Supports single assertions
- Supports assertion groups
- Works in the browser console, or Terminal
- Shows red for fail, and green for pass
- Optionally supports an expected and actual value to be passed in that will be displayed when there's a failure
- You can use the `console.time` and `console.timeEnd` to time tests
- You can use `{}` along with `let` to scope variables for each test
- You can use something like [LoDash isEqual](https://lodash.com/docs#isEqual) for deep comparison

### Installation
`yarn add https://github.com/tiyindyfee/avow`

### Node Usage

```javascript
const avow = require('avow')

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
```

### Browser Usage

```html
<!doctype html>
<html>
<head>
  <title>Avow Demo</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>
  <p>Open your developer console to see the test results.</p>
  
  <script src="https://gitcdn.xyz/repo/tiyindyfee/avow/master/avow.js"></script>
  <!--<script src="avow.js"></script>-->
  <script src="browser.js"></script>
</body>
</html>
```

```javascript
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
```