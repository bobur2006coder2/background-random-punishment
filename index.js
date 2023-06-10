let one = document.querySelector(".one-box")
let two = document.querySelector(".two-box")
let three = document.querySelector(".three-box")
let btn = document.querySelector(".btn")
console.log(three.value);
function needcolor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor; 
}

btn.onclick = () => {
   two.value = "#" + needcolor();
  three.value= "#"+needcolor()
    one.style.backgroundImage=` linear-gradient(${two.value}, ${three.value} )`

}