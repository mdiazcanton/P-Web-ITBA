const countdown = () => {
  const countDate = new Date("July 22, 2022 07:00:00").getTime();
  const currentTime = new Date().getTime();
  const diferencia = countDate - currentTime;
  console.log(countDate);
  console.log(currentTime);
  console.log(diferencia);

  const segundos = 1000;
  const minutos = segundos * 60;
  const horas = minutos * 60;
  const dias = horas * 24;

  const textoDia = Math.floor(diferencia / dias);
  const textoHora = Math.floor((diferencia % dias) / horas);
  const textoMinuto = Math.floor((diferencia % horas) / minutos);
  const textoSegundo = Math.floor((diferencia % minutos) / segundos);
  console.log(diferencia % dias);
  console.log(diferencia / dias);
  console.log(textoDia);
  console.log(textoHora);
  console.log(textoMinuto);
  console.log(textoSegundo);

  document.querySelector(".dia").innerText = textoDia;
  document.querySelector(".hora").innerText = textoHora;
  document.querySelector(".minuto").innerText = textoMinuto;
  document.querySelector(".segundo").innerText = textoSegundo;
};

setInterval(countdown, 1000);
