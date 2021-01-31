// We cannot use 'let' to do like this way, 
// it will show Uncaught ReferenceError: Cannot access 'a' before initialization

console.log(a);

var a = "Hello World"; 
                        
console.log(a);