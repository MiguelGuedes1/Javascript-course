function ratoentra(){
    var mudarcor=document.getElementsByClassName("acrescentar")[0]
    var texto=document.getElementsByClassName("analise")[0]
    texto.innerHTML=`Eu vou ser programador`
    mudarcor.setAttribute("style", "background-color: #FF0000;");
}


var numeros_guardados=[]
var numeros_adicionados=0
var soma=0

function acrescentarnumero(){
    var num=document.getElementsByClassName("input")[0]
    var numero_usuario=Number(num.value)    
    if(numero_usuario==0){
        alert("O numero zero nao benefecia nada a analise, escolha outro numero por favor")
    } 
    else{

    numeros_guardados.push(numero_usuario) 
    numeros_adicionados ++    // cada numero que usuario escolher vai ficar guardado no vetor numeros_guardados
    }
}

function verificar(){

        mensagem=document.getElementsByClassName("mensagem")[0]
        mensagem.innerHTML="" // para resetar a mensagem
        var numeromaior= numeros_guardados[0]
        var media=""

        soma=0

        for(var i=0;i<numeros_guardados.length;i++){           // for para descobrir qual o numero maior
       
            if(numeros_guardados[i]>numeromaior){
                numeromaior=numeros_guardados[i]
               }
            soma=soma+numeros_guardados[i]  
        }

            media=soma/numeros_adicionados
            mensagem.innerHTML=`Os numeros que inseriu foram: ${numeros_guardados} <br> A soma de todos os numeros que inseriu é ${soma} <br> O maior numero que inseriu foi o  ${numeromaior} <br> A media dos numeros que inseriu é: ${media.toFixed(2)}`
            
 }
      
        
     

    
    
        