let colorBtn = document.querySelector('#color')
let ritBtn = document.querySelector('#ritual')
let placeBtn = document.querySelector('#place')
// coming back to this, i want to create more diverse func
// thinking about ^^ and making it a nested array
// then making one function for all
// .target.value type stuff?

function color(){
    alert('blue')
}

function rit(){
    alert('saying BETTER, before something difficult')
}

function place() {
    alert('Cozumel with Sammy')
}
colorBtn.backgroundcolor = 'blue'
colorBtn.addEventListener("click", color)
ritBtn.addEventListener("click", rit)
placeBtn.addEventListener("click", place)

