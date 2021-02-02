# 函數呼叫與執行堆 (Function Invocation and the Execution Stack)

1. Function Invocation -> Call function
2. Execution Stack -> 位於執行堆最上面的先執行，執行完之後丟棄，進而執行下一層

讓我們來看看例子：
```javascript
function a() {
    b();
    console.log("I'm a function");
    let c;
}

function b() {
    console.log("I'm b function");
    let d;
}

a();
let d;
```
首先會呼叫a函數，再執行a函數裏的b函數（我們可以看到下圖的b函數位於stack的最上層），此時跳過`let c`，這是因爲單執行緒與同步執行。在b函數裏，首先會打印出「I'm b function」，再執行`let b`。執行完b函數裏所有行數之後就回到a函數裏，執行下一行，打印「I'm a function」,以此類推。最後當a和b函數都執行完畢之後，stack堆只剩下Global Excution Context，在這個環境中僅剩`let d`，最後就執行它。參考下圖：

<img src="../img/11.png" width="100%"><br>

Step1:
<img src="../img/12.png" width="100%"><br>

Step2:
<img src="../img/13.png" width="100%"><br>

Step3:
<img src="../img/14.png" width="100%"><br>