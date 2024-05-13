let num = []
let div = document.getElementById("uga")
for(let i=0;i<50;i++){
    let a = Math.ceil(Math.random()* (100 - (-100) + 1)) -100 
    num.push(a)
    div.innerHTML += a+","
}
