const clock = document.querySelector("h2#clock");

// function sayHello(){
//     console.log("hello");
// }

// 5초마다 sayHello함수실행
// setInterval(sayHello, 5000)

// 5초 기다린 후에 sayHello함수 실행
// setTimeout(sayHello, 5000)
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)

    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
getClock()
setInterval(getClock, 1000)
