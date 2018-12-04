# hint.js
generate hint from answer.

[![npm Package Version](https://img.shields.io/npm/v/hint.js.svg?maxAge=2592000)](https://www.npmjs.com/package/hint.js)

## Usage

### Use from node.js code
Install in shell:
```bash
> npm i hint.js
```
Run in node.js or browser:
```javascript
console.log(require('hint.js').mess('the answer')); // teh newrsa
```

### Use from cli
Install and run in shell:
```bash
> npm i -g hint.js
> hint apple          # pleap
> echo 'apple' | hint # alpep
```

## Example

### Answer (original)
```text
This is an apple tree. What is your name? This is Beeno's watch. 
 Sorry. We’re having trouble getting your pages back.
 ```

### Hint (messed)
```text
Tshi is an elpap tere. Wath is uyro name? Tish is Bneoe's awcth. 
 Srory. We’er vnghai tulobre tiegtng uryo geaps kacb.
 ```
