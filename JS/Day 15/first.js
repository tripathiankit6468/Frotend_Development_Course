// function textChange(){
//     const text = document.getElementById("first");
//     text.textContent = "Strike is coming...";
// }

const element = document.getElementById('first');
element.addEventListener('click', ()=> {
    element.textContent = "Strike is coming...";
})
element.addEventListener('click', ()=> {
    element.style.backgroundColor = "brown";
})