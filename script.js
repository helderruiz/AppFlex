let etanol = document.querySelector('#etanol').value
let gasolina = document.querySelector('#gasolina')
let imagem = document.querySelector('#imagem')
const botaoVantegem = document.querySelector('#btnVantagem')
const botaoLimpar = document.querySelector('#btnLimpar')




botaoVantegem.addEventListener('click', ()=> {
    etanol = parseFloat(flex.etanol.value.replace(',','.'))
    gasolina = parseFloat(flex.gasolina.value.replace(',',','))

    if(etanol < 0.7 * gasolina){
        imagem.setAttribute('src', 'img/etanol.png')
    }else{
        imagem.setAttribute('src', 'img/gasolina.png')
    }
})

botaoLimpar.addEventListener('click', ()=> {
    imagem.setAttribute('src', 'img/neutro.png')
})
