"use strict";

$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const tarefaInput = $("#input-tarefas").val(); //pega o valor inputado e guarda
    const tarefaListada = $(`<li>${tarefaInput}</li>`);
    $(tarefaListada).appendTo("#lista-tarefas");
  });

  $("ul").on("click", "li", function () {
    $(this).css("text-decoration", "line-through"); //solução 1
  });

  $("ul").on("dblclick", "li", function () {
    $(this).css("text-decoration", "none");
  });
});

///////outras possiveis soluções///////////
//   $("ul").addClass("riscado"); //solução 2
// });

// $("ul").click(function () {
//   $("ul li").css("text-decoration", "line-through"); //solução 3
// });
//   });
