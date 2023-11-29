//menu

const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("ativo");
  navMenu.classList.toggle("ativo");
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reservation-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Obter os valores dos campos do formulário
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const destination = document.getElementById("destination").value;
    const pacote = document.getElementById("pacote").value;
    const address = document.getElementById("address").value;

    const DateIn = document.getElementById("check-in").value;
    const DateOut = document.getElementById("check-out").value;
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor
    // Por exemplo, usando fetch() ou XMLHttpRequest para uma API de reserva

    // Exemplo de exibição dos dados na console (simulando envio)
    console.log("Reserva enviada:");
    console.log("Nome:", fullName);
    console.log("E-mail:", email);
    console.log("Telefone:", phoneNumber);
    console.log("Destino:", destination);
    console.log("Pacote:", pacote);
    console.log("Endereço:", address);
    console.log("Check-in:", DateIn);
    console.log("Check-out:", DateOut);

    // Limpar o formulário após o envio
    form.reset();
  });
});

function toggleDisabilityFields() {
  var hasDisability = document.getElementById("hasDisability").value;
  var disabilityFields = document.getElementById("disabilityFields");

  if (hasDisability === "yes") {
    disabilityFields.style.display = "block";
  } else {
    disabilityFields.style.display = "none";
  }
}

document
  .getElementById("reservation-form")
  .addEventListener("submit", function (event) {
    // Adicione lógica para validar e processar informações de pagamento
    var creditCardNumber = document.getElementById("creditCardNumber").value;
    var expirationDate = document.getElementById("expirationDate").value;
    var securityCode = document.getElementById("securityCode").value;
    var cardType = document.getElementById("cardType").value;

    // Exemplo de validação simples
    if (
      !isValidCreditCard(creditCardNumber) ||
      !isValidExpirationDate(expirationDate) ||
      !isValidSecurityCode(securityCode)
    ) {
      alert("Por favor, forneça informações de pagamento válidas.");
      event.preventDefault(); // Impede o envio do formulário se os dados de pagamento forem inválidos
    }
  });

function isValidCreditCard(creditCardNumber) {
  // Lógica de validação do número do cartão (exemplo: verifica se tem 16 dígitos)
  return;
}

function isValidExpirationDate(expirationDate) {
  // Lógica de validação da data de validade (exemplo: verifica se está no formato MM/YY e não está expirada)
  var today = new Date();
  var currentYear = today.getFullYear() % 100;
  var currentMonth = today.getMonth() + 1;

  var parts = expirationDate.split("/");
  if (parts.length !== 2) {
    return false;
  }

  var month = parseInt(parts[0], 10);
  var year = parseInt(parts[1], 10);

  return year > currentYear || (year === currentYear && month >= currentMonth);
}
function isValidSecurityCode(securityCode) {
  // Lógica de validação do código de segurança (exemplo: verifica se tem 3 dígitos)
  return;
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reservation-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os dados do formulário
    const destination = document.getElementById("destination").value;
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    // ... (Obtenha outros dados conforme necessário)

    // Cria um objeto com os dados da reserva
    const reservationData = {
      destination,
      fullName,
      email,
      // ... (Adicione outros campos conforme necessário)
    };

    // Armazena os dados da reserva na sessionStorage
    sessionStorage.setItem("reservationData", JSON.stringify(reservationData));

    // Redireciona para a página de conclusão
    window.location.href = "../HTML/concluid.html";
  });
});
