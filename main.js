const botao1 = document.querySelector("#button1")
const botao2 = document.querySelector("#button2")
const botao3 = document.querySelector("#button3")
const botao4 = document.querySelector("#button4")
const botao5 = document.querySelector("#button5")
const botao6 = document.querySelector("#button6")
const botao7 = document.querySelector("#button7")
const botao8 = document.querySelector("#button8")

const div1 = document.querySelector(".projeto-div-informacao1")
const div2 = document.querySelector(".projeto-div-informacao2")
const div3 = document.querySelector(".projeto-div-informacao3")
const div4 = document.querySelector(".projeto-div-informacao4")
const div5 = document.querySelector(".projeto-div-informacao5")
const div6 = document.querySelector(".projeto-div-informacao6")
const div7 = document.querySelector(".projeto-div-informacao7")
const div8 = document.querySelector(".projeto-div-informacao8")

const img1 = document.querySelector("#seta1")
const img2 = document.querySelector("#seta2")
const img3 = document.querySelector("#seta3")
const img4 = document.querySelector("#seta4")
const img5 = document.querySelector("#seta5")
const img6 = document.querySelector("#seta6")
const img7 = document.querySelector("#seta7")
const img8 = document.querySelector("#seta8")

botao1.onclick = clickBotao1

function clickBotao1 (){

    if(div1.style.display === 'block'){
        div1.style.display = 'none'
        img1.setAttribute('src', 'img/setaDown.png')
    } else {
        div1.style.display = 'block'
        img1.setAttribute('src', 'img/setaUp.png')
    }
}

botao2.onclick = clickBotao2

function clickBotao2 (){

    if(div2.style.display === 'block'){
        div2.style.display = 'none'
        img2.setAttribute('src', 'img/setaDown.png')
    } else {
        div2.style.display = 'block'
        img2.setAttribute('src', 'img/setaUp.png')
    }
}

botao3.onclick = clickBotao3

function clickBotao3 (){

    if(div3.style.display === 'block'){
        div3.style.display = 'none'
        img3.setAttribute('src', 'img/setaDown.png')
    } else {
        div3.style.display = 'block'
        img3.setAttribute('src', 'img/setaUp.png')
    }
}

botao4.onclick = clickBotao4

function clickBotao4 (){

    if(div4.style.display === 'block'){
        div4.style.display = 'none'
        img4.setAttribute('src', 'img/setaDown.png')
    } else {
        div4.style.display = 'block'
        img4.setAttribute('src', 'img/setaUp.png')
    }
}

botao5.onclick = clickBotao5

function clickBotao5 (){

    if(div5.style.display === 'block'){
        div5.style.display = 'none'
        img5.setAttribute('src', 'img/setaDown.png')
    } else {
        div5.style.display = 'block'
        img5.setAttribute('src', 'img/setaUp.png')
    }
}

botao6.onclick = clickBotao6

function clickBotao6 (){

    if(div6.style.display === 'block'){
        div6.style.display = 'none'
        img6.setAttribute('src', 'img/setaDown.png')
    } else {
        div6.style.display = 'block'
        img6.setAttribute('src', 'img/setaUp.png')
    }
}

botao7.onclick = clickBotao7

function clickBotao7 (){

    if(div7.style.display === 'block'){
        div7.style.display = 'none'
        img7.setAttribute('src', 'img/setaDown.png')
    } else {
        div7.style.display = 'block'
        img7.setAttribute('src', 'img/setaUp.png')
    }
}

botao8.onclick = clickBotao8

function clickBotao8 (){

    if(div8.style.display === 'block'){
        div8.style.display = 'none'
        img8.setAttribute('src', 'img/setaDown.png')
    } else {
        div8.style.display = 'block'
        img8.setAttribute('src', 'img/setaUp.png')
    }
}
