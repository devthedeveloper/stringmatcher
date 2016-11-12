# stringmatcher

This is a very small, and simple string matcher that scans for words or strings. Its inspired by the concept of machine learning.

## Description
This package returns an array of matched words, or an empty array if none were found.

### Example Usage

```js
var string_matcher = require('stringmatcher');
var sm = new string_matcher()
console.log(sm.scan('hello there!')) // returns [] 
console.log(sm.add_word(['hello']) )// add method 
console.log(sm.scan('hello there!')) // returns ['hello'] 
 
console.log(sm.remove_word('hello')) // returns true if removed 
```
