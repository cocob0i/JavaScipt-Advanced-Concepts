// long running function
function waitThreeSeconds() {
    let ms = 3000 + new Date().getTime();
    while(new Date() < ms){}
    console.log("Finished function");
}

function clickHandler() {
    console.log("Click event!");
}

// listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log("Finished execution");

