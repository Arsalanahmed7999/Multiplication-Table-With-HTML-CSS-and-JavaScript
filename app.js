let btn = document.querySelector('.btn');
let inputVal = document.querySelector('#inputVal');
let num = document.querySelector('.nums');
let table = ''

btn.addEventListener('click', ()=>{
    for(let i = 1; i <=10; i++){
        table = table + "<p>"+inputVal.value + "x"+ i + "=" + inputVal.value *i + "</p>"
        num.innerHTML = table
    }
})