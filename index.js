var Plus = document.querySelectorAll(".btnPlus")
var Moins = document.querySelectorAll(".btnMoins")
var heart= document.querySelectorAll(".heart")
var trash= document.querySelectorAll(".trash")

for (let i=0;i<Plus.length;i++){
Plus[i].addEventListener("click",function(){
    Plus[i].previousElementSibling.innerText++
    SommeTotal()
})
}

for(let i=0; i<Moins.length; i++){
    Moins[i].addEventListener("click",function(){
        if(Moins[i].nextElementSibling.innerText>0){
        Moins[i].nextElementSibling.innerText--
        SommeTotal()
    }
    })
}

function SommeTotal(){
    var prix = document.querySelectorAll(".prix")
    var qte = document.querySelectorAll(".qte")
    var PrixTotale = document.querySelector("#PrixTotale")
    console.log(prix)
    console.log(qte)
    console.log(PrixTotale)
    var sum = 0

    for(let i =0; i < qte.length;i++){
        sum = sum + prix[i].innerText * qte[i].innerText
    }

    PrixTotale.innerText = sum
}



for (let i=0;i<heart.length;i++){
    heart[i].addEventListener("click",function(){
        heart[i].classList.toggle("red")
    })
    }
  
    for (let i=0; i<trash.length; i++){
        trash[i].addEventListener("click",function(){
            trash[i].parentElement.parentElement.parentElement.remove()
            SommeTotal()
        })
    }