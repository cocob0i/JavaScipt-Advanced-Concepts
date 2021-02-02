# 全域環境與全域物件 (The Global Environment and The Global Object)

1. 在執行空的JavaScript文件時，即使在開發者工具中沒有任何東西顯示，但實際上它已經爲開發者創造了全域的環境，全域物件以及特殊變數「this」（此時，window = this = Global Object, 在開發者工具中輸入這兩個值所返回的結果是相同的）。
2. 注意，當我們說「Global」的時候，實際上表達的是「Codes or Variables Are Not Inside a Function」。
3. 注意，如果在全域範圍使用`let`宣告變數，此變數並不會成爲全域物件的特性（即使使用者可以在開發中工具中直接輸入它的值並返回，但它不存在於全域中）。
4. 在函數內使用`var`宣告變數，而在函數外部同樣使用`var`宣告相同命名的變數時，會導致洩露到全域中，即區域變數覆蓋全域變數。
5. 因此開發者應該儘量避免使用`var`,而用`let`與`const`替代。
6. `let`所宣告的變數，在全局環境中不能相同，在區域環境內也不能相同，`即在同一個環境中都不能相同。`但區域環境與全局環境的變數命名可以相同。例如在全局環境定義`let price = 10;`，在區域環境也可以定義`let price = 20;`

讓我們來看一個例子：

```javascript
var a = 10;
let b = "John";

function test() {
    var c = 5;
}
```

<img src="../img/1.png" width="100%">
<img src="../img/2.png" width="100%">
<img src="../img/3.png" width="100%">

當嘗試在開發者工具輸入c的時候，會顯示「c is not defined」，因爲它是區域函數。
<img src="../img/4.png" width="100%">

讓我們再看看`var`變數洩露的例子：

```javascript
var price = 40;

if(true) {
    var price = 30;
}

console.log(price);
```
上述出現的結果爲30，區域變數覆蓋全域變數。

```javascript
for (var i = 0; i<10 ; i++) {
      …
}
console.log(i)
```
上述出現的結果爲10，循環變數洩漏為全域變數。

<br>

接下來，讓我們來看看`let`的例子：
```javascript
let price = 40;

if(true) {
    let price = 30;
}

console.log(price);
```
上述出現的結果爲40，沒有發生洩露。