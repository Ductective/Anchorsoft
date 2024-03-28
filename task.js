let taskName = document.querySelector('.taskName')
let taskTime = document.querySelector('.taskTime')
let addTask = document.querySelector('.addTask')

//New task

let nTT = document.createElement('li')
let ol = document.querySelector('li')
ol.cr

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#form').onsubmit = submitHandler;
})

function submitHandler(){
    let del = document.createElement('input')
    del.setAttribute('type', 'checkbox')
    let nTN = document.createElement('li')
    nTN.innerHTML = `<li>${taskName.value}: ${taskTime.value}</li>`
    ol.appendChild(nTN).insertAdjacentElement(del)
    return false
}


