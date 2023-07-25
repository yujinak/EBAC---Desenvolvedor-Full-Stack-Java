$(document).ready(function () {
  //plugin Slick de carrossel de imagens//
  $("#carousel-imagens").slick({
    autoplay: true,
  });
  //animação menu que abre e fecha//
  $(".menu-hamburguer").click(function () {
    $("nav").slideToggle();
  });
  //plugin de máscara, para os inputs seguirem padrões//
  $("#telefone").mask("(00) 00000-0000", {
    placeholder: "(11) 11111-1111",
  });
  //plugin de validação de formulário//
  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      mensagem: {
        required: true,
      },
      veiculoDeInteresse: {
        required: false,
      },
    },
    messages: {
      //msgs caso inputs estejam errados
      nome: "Por favor, insira o seu nome",
    },
    submitHandler: function (form) {
      //submit succesful case
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      //not succesful case
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos.`);
      }
    },
  });

  //colocando função de rolagem após clicar no tenho interesse//
  $(".lista-veiculos button").click(function () {
    const destino = $("#contato");
    const nomeVeiculo = $(this).parent().find("h3").text();

    $("#veiculo-interesse").val(nomeVeiculo);

    $("html").animate(
      {
        scrollTop: destino.offset().top,
      },
      1000
    );
  });
});
