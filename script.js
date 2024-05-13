let num = []
let div = document.getElementById("uga")
for(let i=0;i<50;i++){
    let a = Math.ceil(Math.random() * (100 - (-100) + 1)) -100
    a = (a>0) ? a : 0
    num.push(a)
    div.innerHTML += a+","
}
