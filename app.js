let celIn=document.querySelector('#c > input')
let fahIn=document.querySelector('#f > input')
let kelIn=document.querySelector('#k > input')

let btn=document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celIn.addEventListener('input',function(){
    let cTemp=parseFloat(celIn.value)
    let fTemp=(cTemp*(9/5))+32
    let kTemp=cTemp+273.15

    fahIn.value=roundNumber(fTemp)
    kelIn.value=roundNumber(kTemp)
})

fahIn.addEventListener('input',function(){
    let fTemp=parseFloat(fahIn.value)
    let cTemp=(fTemp-32)*(5/9)
    let kTemp=(fTemp-32)*(5/9)+273.15

    celIn.value=roundNumber(cTemp)
    kelIn.value=roundNumber(kTemp)
})

kelIn.addEventListener('input',function(){
    let kTemp=parseFloat(kelIn.value)
    let fTemp=(kTemp-273.15)*(9/5)+32
    let cTemp=kTemp-273.15

    fahIn.value=roundNumber(fTemp)
    celIn.value=roundNumber(cTemp)
})


btn.addEventListener('click',()=>{
    celIn.value=""
    fahIn.value=""
    kelIn.value=""
})
