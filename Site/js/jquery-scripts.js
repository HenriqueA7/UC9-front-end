// Esconder formulário cadastro
$(document).ready(function(){

    //document.getElementByID("botao-cadastrar").click()
    $("#botaoCadastrar").click(function(){

        $("#boxCadastro").slideToggle("slow");
        $("#boxLogin").slideToggle("slow");

    });

    $("#botaoVoltar").click(function(){

        $("#boxLogin").slideToggle("slow");
        $("#boxCadastro").slideToggle("slow");

    });

});