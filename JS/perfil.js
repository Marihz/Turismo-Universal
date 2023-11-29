const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("ativo");
  navMenu.classList.toggle("ativo");
});

document.addEventListener("DOMContentLoaded", function () {
  // Encontrar elementos DOM
  var uploadBtn = document.getElementById("uploadBtn");
  var fileInput = document.getElementById("fileInput");

  // Adicionar evento de clique ao ícone
  uploadBtn.addEventListener("click", function () {
    fileInput.click();
  });

  // Adicionar evento de alteração ao input de arquivo para lidar com o upload de arquivo
  fileInput.addEventListener("change", function () {
    var fileName = fileInput.value.split("\\").pop(); // Pega o nome do arquivo
    // Aqui você pode adicionar lógica para exibir o nome do arquivo ou enviar o arquivo para o servidor.
    console.log("Arquivo selecionado: " + fileName);
  });
});
