# JavaScript與undefined (JavaScript and 'undefined')

1. `undefined`是在第一階段即創造階段被設定的值，此時會產生執行環境，把變數放進記憶體(Memory)中,並將變數設爲undefined。
2. `undefined` 不代表`空的(empty)`或者`還沒定義(doesn't exist)`，它是一個`特殊的關鍵值值(special key word)`，並且會`佔據記憶體空間`。意思爲這是JavaScript設定的初始值。
3. 注意：永遠不要將變數直接設置成undefined，這是非常危險的。例如 `a = undefined;`。（因爲如果這樣做會分不清是你自己設置成undefined或是JavaScript自身幫你設置）最好的做法是讓undefined表示我從未設定該值，例如 `var a;`

現在讓我們來看例子（沒有給a賦值）：
```javascript
let a; // use 'var' is the same
console.log(a);

if (a === undefined) {
    console.log("a is undefined!");
} else {
    console.log("a is defined!");
}
```
<img src="../img/6.png" width="100%"><br><br>

接著讓我們看看賦值的例子（給a賦值）：
```javascript
let a = "Hello World!"; // use 'var' is the same
console.log(a);

if (a === undefined) {
    console.log("a is undefined!");
} else {
    console.log("a is defined!");
}
```
<img src="../img/7.png" width="100%"><br><br>

再看看沒有宣告變數的例子：
```javascript
console.log(a);

if (a === undefined) {
    console.log("a is undefined!");
} else {
    console.log("a is defined!");
}
```
<img src="../img/8.png" width="100%">
這出現的原因是在創造階段中，沒有找到`var a;`或`let a;`，所以它從未出現在記憶體中，因此出現了`Uncaught ReferenceError: a in not defined`。

<br><br>

最後，如果我們直接設置undefined，這是非常危險和困擾的，來看看例子：
```javascript
let a = "Hello World"; // use 'var' is the same
console.log(a);

a = undefined; // don't use like this way

if (a === undefined) {
    console.log("a is undefined!");
} else {
    console.log("a is defined!");
}
```
<img src="../img/9.png" width="100%">
我們可以看到，此時結果a有值爲「Hello World」，又爲undefined，這是不是非常容易產生誤解？