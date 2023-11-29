// calendario.js

document.addEventListener("DOMContentLoaded", function () {
  const buscarDisponibilidadeBtn = document.getElementById(
    "buscarDisponibilidade"
  );

  buscarDisponibilidadeBtn.addEventListener("click", mostrarCalendario);

  const destinosDisponiveis = {
    Paris: {
      2023: {
        1: [5, 10, 15, 20],
        2: [3, 8, 12, 18],
      },
      2024: {
        3: [2, 7, 14, 21],
        4: [4, 9, 16, 22],
      },
    },
    Roma: {
      2023: {
        5: [8, 15, 20, 25],
        6: [2, 7, 12, 18],
      },
    },
    Sidney: {
      2023: {
        5: [8, 15, 20, 25],
        6: [2, 7, 12, 18],
      },
    },
    Tóquio: {
      2023: {
        5: [8, 15, 20, 25],
        6: [2, 7, 12, 18],
      },
    },
    Pequim: {
      2023: {
        5: [8, 15, 20, 25],
        6: [2, 7, 12, 18],
      },
    },
    Lisboa: {
      2023: {
        5: [8, 15, 20, 25],
        6: [2, 7, 12, 18],
      },
    },
    Londres: {
      2023: {
        5: [8, 15, 20, 25],
        6: [2, 7, 12, 18],
      },
    },

    Madrid: {
      2023: {
        5: [8, 15, 20, 25],
        6: [2, 7, 12, 18],
      },
    },
    Seul: {
      2023: {
        5: [8, 15, 20, 25],
        6: [2, 7, 12, 18],
      },
    },
    "Hong Kong": {
      2023: {
        5: [8, 15, 20, 25],
        6: [2, 7, 12, 18],
      },
    },
  };

  function mostrarCalendario() {
    const destino = document.getElementById("destination").value;
    const mes = parseInt(document.getElementById("month").value.split("-")[1]);
    const ano = parseInt(document.getElementById("month").value.split("-")[0]);

    if (
      destino &&
      destinosDisponiveis.hasOwnProperty(destino) &&
      destinosDisponiveis[destino].hasOwnProperty(ano) &&
      destinosDisponiveis[destino][ano].hasOwnProperty(mes) &&
      !isNaN(mes) &&
      mes >= 1 &&
      mes <= 12 &&
      !isNaN(ano)
    ) {
      const calendario = document.getElementById("calendario");
      const reservaButton = document.getElementById("reservaButton");

      buscarDisponibilidadeBtn.style.display = "none";
      calendario.style.display = "block";

      const diasDisponiveis = destinosDisponiveis[destino][ano][mes];

      function criarCalendario() {
        const diasNoMes = new Date(ano, mes, 0).getDate();
        const primeiroDiaDaSemana = new Date(ano, mes - 1, 1).getDay();

        const tabela = document.createElement("table");
        const cabecalho = criarCabecalho();
        const corpoTabela = criarCorpoTabela(diasNoMes, primeiroDiaDaSemana);

        tabela.appendChild(cabecalho);
        tabela.appendChild(corpoTabela);

        calendario.innerHTML = "";
        calendario.appendChild(tabela);

        // Adiciona evento de clique aos dias disponíveis
        document.querySelectorAll(".disponivel").forEach((dia) => {
          dia.addEventListener("click", () =>
            redirecionarParaReserva(
              destino,
              ano,
              mes,
              parseInt(dia.textContent)
            )
          );
        });

        // Mostra o botão de reserva
        reservaButton.style.display = "inline";
      }

      function criarCabecalho() {
        const cabecalho = document.createElement("thead");
        const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

        const linha = document.createElement("tr");

        diasSemana.forEach((dia) => {
          const coluna = document.createElement("th");
          coluna.textContent = dia;
          linha.appendChild(coluna);
        });

        cabecalho.appendChild(linha);

        return cabecalho;
      }

      function criarCorpoTabela(diasNoMes, primeiroDiaDaSemana) {
        const corpoTabela = document.createElement("tbody");
        let contadorDia = 1;

        for (let i = 0; i < 6; i++) {
          const linha = document.createElement("tr");

          for (let j = 0; j < 7; j++) {
            const coluna = document.createElement("td");

            if (
              (i === 0 && j < primeiroDiaDaSemana) ||
              contadorDia > diasNoMes
            ) {
              coluna.textContent = "";
            } else {
              coluna.textContent = contadorDia;

              if (diasDisponiveis.includes(contadorDia)) {
                coluna.classList.add("disponivel");
              } else {
                coluna.classList.add("indisponivel");
              }

              contadorDia++;
            }

            linha.appendChild(coluna);
          }

          corpoTabela.appendChild(linha);
        }

        return corpoTabela;
      }

      function redirecionarParaReserva(destino, ano, mes, dia) {
        const urlReserva = `../HTML/reservation.html?destino=${encodeURIComponent(
          destino
        )}&ano=${ano}&mes=${mes}&dia=${dia}`;
        window.location.href = urlReserva;
      }

      criarCalendario();
    } else {
      alert(
        "Por favor, insira um destino válido, um ano e um mês entre 1 e 12 associados ao destino."
      );
    }
  }
});
