# Profanity Matcher

This is a very small, and simple string matcher that scans for words or strings. Its inspired by the concept of machine learning.

This version returns an array of matched words, or an empty array if none were found.

### Example Usage

```js
var string_matcher = require('String_Matcher');
var sm = new string_matcher()
sm.scan('hello there!') // returns []
sm.add(['hello']) // add method
sm.scan('hello there!') // returns ['hello']

sm.remove_word('hello') // returns true if removed
```
