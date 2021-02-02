# 執行環境：創造與提升 (Creation and Hoisting)</h2>

1. 在逐行執行代碼之前，JavaScript已經爲`變數和函數在記憶體中建立了空間`。
2. 我們寫的程式碼不會直接被執行，而是會經過JavaScript的轉換。在第一個創造執行環境的階段(creation phrase)，它會在記憶體中空出空間給變數和函數。因此在它們實際出現在詞彙環境(lexical environment)裡面之前，我們可以有限的取用它們。
3. 所有`JavaScript的變數`一開始都會被設定爲`undefined`，`函數`則是完全被設定好放進`記憶體(Memory)`中

首先我們來看看函數的例子：
```javascript
a();

function a() {
    console.log('Hello World');
}
```
```javascript
function a() {
    console.log('Hello World');
}

a();
```
以上兩個例子出現的結果是一樣的，都會打印出「Hello World」。但儘量避免使用這種「hoisting」，否則容易掉入陷阱。

接著我們再看看變數（使用`var`）的例子：
```javascript
console.log(a);
var a = 10;
```
這出現的結果爲「undefined」，實際上它與下面的程式碼相似：
```javascript
var a;
console.log(a);
a = 10;
```

但如果我們使用`let`來宣告函數，則會出現不一樣的結果：
```javascript
console.log(a);
let a = 10;
```
<img src="../img/5.png" width="100%">

因此，這就是使用`let`的好處，一是可以避免依賴「hoisting」，二是防止掉入陷阱。