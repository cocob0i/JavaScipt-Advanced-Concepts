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