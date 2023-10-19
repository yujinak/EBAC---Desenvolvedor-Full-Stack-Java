"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const nome = document.querySelector(".profile-name");
  const avatar = document.querySelector(".profile-avatar");
  const username = document.getElementById("login");
  const link = document.querySelector(".profile-link");
  const repositorios = document.querySelector(".repos");
  const seguidores = document.querySelector(".seguidores");
  const seguindo = document.querySelector(".seguindo");

  const endpoint = "https://api.github.com/users/yujinak";

  // JS vanilla
  //   const xhttp = new XMLHttpRequest();
  //   console.log(xhttp.open("GET", endpoint));
  //   console.log(xhttp.send());

  // fetch
  fetch(endpoint)
    .then((response) => response.json())
    .then((json) => {
      nome.innerHTML = json.name;
      username.innerHTML = json.login;
      avatar.src = json.avatar_url;
      link.href = json.html_url;
      repositorios.innerHTML = json.public_repos;
      seguidores.innerHTML = json.followers;
      seguindo.innerHTML = json.following;
    })
    .catch((error) => alert(`Ocorreu o seguinte erro: \n ${error}`));
});
