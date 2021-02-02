# 執行環境：程序執行 (The Execution Context - Code Execution)

1. 提醒：在`創造階段`，已經設定好了`Global Object`, `'this'` 和`Outer Environment`。之後就進入`執行階段`逐行對代碼進行編譯和轉換。

現在讓我們來看看例子：
```javascript
// We cannot use 'let' to do like this way, 
// it will show Uncaught ReferenceError: Cannot access 'a' before initialization

console.log(a);

var a = "Hello World"; 
                        
console.log(a);
```
<img src="../img/10.png" width="100%">
因爲a在創造階段被設爲undefined，所以上方會打印出undefined。然後在執行階段把記憶體中的a值設定爲"Hello World"字串，之後就在下方那一行將a在記憶體中的值輸出至console。