function carregar (){
    var msg=document.getElementsByClassName("msg")[0]
    var img=document.getElementsByClassName("fotomanha")[0]
    //var data=new Date()
    var hora=2

    msg.innerHTML=`Agora sao ${hora} horas`
        if(hora>0&&hora<12){
          
            img.src="imagens/manha.jpg"
            document.body.style.background="pink"
        }
        else if(hora>12&&hora<18){
            //boa tarde
            img.src="imagens/tarde.jpg"
            document.body.style.background="green"
        }
        else{
            //boa noite
            img.src="imagens/noite.jpg"
            document.body.style.background="black"
            Document.titulo.style.color="green"
        }






}
