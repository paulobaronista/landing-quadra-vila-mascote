/*  $(document).ready(function(){
     $(".enviar").on("click",function() {
       var erros = "";
       //Nome 
       if($("input.statusnome").val() == "") 
       {
         erros = 1;
         $("input.statusnome").css({
           "background":"#ed1c24",
           "color":"#FFF"
         });
         $("input.statusnome").attr("placeholder","Campo nome está vazio")

       }else{
         $("input.statusnome").css({
           "background":"#292d55",
           "color":"#FFF"
         })
       }

        //Telefone
       if($("input.statustelefone").val() == "")
       {
         erros = 1;
         $("input.statustelefone").css({
           "background":"#ed1c24",
           "color":"#FFF"
         });
         $("input.statustelefone").attr("placeholder","Campo telefone está vazio")

       }else{
         $("input.statustelefone").css({
           "background":"#292d55",
           "color":"#FFF"
         })
       }

       //E-mail
       if($("input.statusemail").val() == "")
       {
         erros = 1;
         $("input.statusemail").css({
           "background":"#ed1c24",
           "color":"#FFF"
         });
         $("input.statusemail").attr("placeholder","Campo email está vazio")

       }else{
         $("input.statusemail").css({
           "background":"#292d55",
           "color":"#FFF"
         });
       }
       
       //Mensagem
       if($("textarea.statusMensagem").val() == "")
       {
         erros = 1;
        $("textarea.statusMensagem").css({
           "background":"#ed1c24",
           "color":"#FFF"
         }); 
          $("textarea.statusMensagem").attr("placeholder","Campo mensagem está vazio")
       }else{
         $("textarea.statusMensagem").css({
           "background":"#292d55",
           "color":"#FFF"
         });
       }

       if(erros == "") {

         $.ajax({
                 url: "envia.php",
                 type: 'POST',
                 success: function( data )  
                   { 
                     
                    $(location).attr('href', 'http://www.apartamentovilamascote.com.br/obrigado.html');

                   },
                   data: {nome:$("input.statusnome").val(), telefone:$("input.statustelefone").val(), email:$("input.statusemail").val(),
                          mensagem:$("textarea.statusMensagem").val() }
             });
       }
 
       return false;
     });
 });
*/