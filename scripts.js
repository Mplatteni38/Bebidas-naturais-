let list = document.querySelectorAll('.item')

let next = document.getElementById('next')
let prev = document.getElementById('prev')

let count = list.length
let active = 0

next.onclick = () => {
let activerOld = document.querySelector('.active')
activerOld.classList.remove('active')

active = active >= count -1 ? 0 : active + 1
list[active].classList.add('active')

}

prev.onclick = () => {
    list[active].classList.remove('active');
    

    active = active <= 0 ? count - 1 : active -1;
    list[active].classList.add('active');
    

}