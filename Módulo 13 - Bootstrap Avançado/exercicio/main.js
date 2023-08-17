"use strict";

// const artigo = document.getElementsByClassName("artigo");

// function alterarParaCelular(telaCelular) {
//   if (telaCelular.matches) {
//     // alert("modo celular");
//     // artigo.style.backgroundColor = "yellow";
//     document.querySelector(".artigo").className = "artigo col-12";
//   }
// }
// function alterarParaTablet(telaTablet) {
//   if (telaTablet.matches) {
//     // alert("modo tablet");
//     // artigo.style.backgroundColor = "pink";
//     document.querySelector(".artigo").className = "artigo col-6";
//   }
// }

// function alterarParaDesktop(telaDesktop) {
//   if (telaDesktop.matches) {
//     document.querySelector(".artigo").className = "artigo col-4";
//   }
// }

// const telaCelular = window.matchMedia("(max-width: 767px)");
// const telaTablet = window.matchMedia(
//   "(min-width: 768px) and (max-width: 1023px)"
// );
// const telaDesktop = window.matchMedia("(min-width: 1024px");
// alterarParaCelular(telaCelular);
// alterarParaTablet(telaTablet);
// alterarParaDesktop(telaDesktop);
// telaCelular.addListener(alterarParaCelular);
// telaTablet.addListener(alterarParaTablet);
// // telaDesktop.addListener(alterarParaDesktop);

// const artigos = document.getElementsByClassName("artigo");
// const todosArtigos = artigos[(0, 1, 2, 3, 4)];

// window.addEventListener("resize", function () {
//   if (window.innerWidth <= 767) {
//     console.log("celular");
//     todosArtigos.className = "artigo col-12";
//   } else if (window.innerWidth > 767 && window.innerHeight < 1024) {
//     console.log("tablet");
//     todosArtigos.className = "artigo col-6";
//   } else if (window.innerWidth > 1023) {
//     console.log("desktop");
//     todosArtigos.className = "artigo col-4";
//   }
// });
