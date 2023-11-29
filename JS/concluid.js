const reservationData = JSON.parse(sessionStorage.getItem("reservationData"));

if (reservationData) {
  Object.keys(reservationData).forEach((key) => {
    document.write(
      `<p>${key.charAt(0).toUpperCase() + key.slice(1)}: ${
        reservationData[key]
      }</p>`
    );
  });
} else {
  document.write("<p>Dados de reserva não encontrados.</p>");
}
