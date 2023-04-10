function verificar(){
    usuarioidade=document.getElementsByClassName("inputnumber")[0]
    ano_corrente=new Date()
    anocorrente=ano_corrente.getFullYear()

    if(usuarioidade.value==0||usuarioidade.value>anocorrente){
        window.alert(`Insira um ano nascimento valido`)
    }
    else{
    idade= anocorrente-Number(usuarioidade.value)
    mensagem=document.getElementsByClassName("mensagem1")[0]
    var tiposexo=document.getElementsByName("tiposexo")
    
    var genero= ''
        if(tiposexo[0].checked){
            genero="Masculino"
        }
        else if(tiposexo[1].checked){
            genero="Feminino"
        }



    
    if (idade>=0&&idade<=18){
        mensagem.innerHTML=`Voce ainda é um jovem, ${idade} anos do sexo ${genero}`
        img.src="imagens/familiat.jpg"
    }

    else if (idade>18&&idade<=50){
        mensagem.innerHTML=`Voce  é um adulto, ${idade} anos  sexo ${genero}!`
        img.src="imagens/familiat.jpg"
    }

    else{
        mensagem.innerHTML=`Voce é um idoso, ${idade} anos  sexo ${genero}!`
        img.src="imagens/familiat.jpg"
    }
    }
    }



