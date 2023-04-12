function contar(){

     var inicio=document.getElementsByClassName("inicio")[0]
     var fim=document.getElementsByClassName("fim")[0]
     var passo=document.getElementsByClassName("passo")[0]
     var resposta=document.getElementsByClassName("mensagem")[0]

     var numeroinicio=Number(inicio.value)
     var numerofim=Number(fim.value)
     var numeropasso=Number(passo.value)
     resposta.innerHTML=`A sequencia é:`

        if(numeroinicio==0||numerofim==0||numeropasso==0){
            alert("Preencha todos os dados correctamente!")
        }
        else{
            for(var i=numeroinicio;i<=numerofim;i+=numeropasso){
            resposta.innerHTML+=`${i}➡️ <br>`
            }
        }
}




