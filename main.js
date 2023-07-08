$(document).ready(function () {
  $("#telefone").mask("(00)00000-0000", {
    placeholder: "(00) 00000-0000",
  });
  $("#cpf").mask("000.000.000-00", {
    placeholder: "000.000.000-00",
  });
  $("#cep").mask("00000-000", {
    placeholder: "00000-000",
  });

  $("form").validate({
    rules: {
      nome: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true, //pede que tenha qq caractere antes, o @, e alguma letra após
        minlength: 4,
      },
      telefone: {
        required: true,
      },
      cpf: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true,
      },
    },
    submitHandler: function (form) {
      alert("Cadastramento concluído com sucesso!");
    },
  });

  $("#carrossel-anuncios").slick({
    autoplay: true,
    autoplaySpeed: 5000,
  });
});
