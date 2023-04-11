function verificar(){

    var n = document.getElementsByClassName("numero")[0]
    var numero=Number(n.value)
    var resultado=document.getElementsByClassName("mensagem")[0]
    
    resultado.innerHTML = ""    // para resetar o botao a cada interaçao do usuarios

        for(var i=1;i<=10;i++){
            resultado.innerHTML+=`${numero} x ${i} = ${numero*i} <br>`
         }


}