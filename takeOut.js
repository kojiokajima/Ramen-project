const dark = document.getElementById('dark');
const card = document.querySelectorAll('.order-card')
const modal = document.querySelectorAll('.modal')
const body = document.querySelector('body')

for (let i = 0; i < modal.length; i++) {
    card[i].addEventListener('click', () => {
        modal[i].style.display = "unset";
        dark.classList.add('clicked');
    })
    
    dark.addEventListener('click', () => {
        modal[i].style.display = "none";
        dark.classList.remove('clicked');
    })
}

const plus = document.querySelectorAll('.plus');
const count = document.querySelectorAll('.count');
const minus = document.querySelectorAll('.minus');


// console.log(typeof(plus))
// console.log(plus)

for (let j = 0; j < plus.length; j++) {
    let currentQuantity = parseInt(count[j].innerHTML)

    plus[j].addEventListener('click', () => {
        count[j].innerHTML = ++currentQuantity
    })
    minus[j].addEventListener('click', () => {
        count[j].innerHTML = --currentQuantity
    })

}

const test = {
    name: "koji",
    age: 32,
    gender: "male"
}

console.log(test)
console.log("teat: " + Object.keys(test).length)