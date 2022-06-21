window.onscroll = () => {
  scrollFunction();
};

window.onresize = () => {
  checkeoPixels();
};

const checkeoPixels = () => {
  let pixelsDeAncho = window.innerWidth;
  if (pixelsDeAncho <= 768) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("navbar").style.padding = "2px 2px";
      document.getElementById("logo-mt").style.width = "3%";
      const clases = document.querySelectorAll(".nav-color-change");
      clases.forEach((clase) => {
        clase.style.fontSize = "12px";
      });
    } else {
      document.getElementById("navbar").style.padding = "5px 5px";
      document.getElementById("logo-mt").style.width = "4%";
      const clases = document.querySelectorAll(".nav-color-change");
      clases.forEach((clase) => {
        clase.style.fontSize = "15px";
      });
    }
  } else if (pixelsDeAncho > 768) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("navbar").style.padding = "10px 10px";
      document.getElementById("logo-mt").style.width = "4%";
      const clases = document.querySelectorAll(".nav-color-change");
      clases.forEach((clase) => {
        clase.style.fontSize = "18px";
      });
    } else {
      document.getElementById("navbar").style.padding = "30px 10px";
      document.getElementById("logo-mt").style.width = "5%";
      const clases = document.querySelectorAll(".nav-color-change");
      clases.forEach((clase) => {
        clase.style.fontSize = "21px";
      });
    }
  }
};

setInterval(checkeoPixels, 50);

function scrollFunction() {
  let pixelsDeAncho = window.innerWidth;
  if (pixelsDeAncho > 768) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("navbar").style.padding = "10px 10px";
      document.getElementById("logo-mt").style.width = "4%";
      const clases = document.querySelectorAll(".nav-color-change");
      clases.forEach((clase) => {
        clase.style.fontSize = "18px";
      });
    } else {
      document.getElementById("navbar").style.padding = "30px 10px";
      document.getElementById("logo-mt").style.width = "5%";
      const clases = document.querySelectorAll(".nav-color-change");
      clases.forEach((clase) => {
        clase.style.fontSize = "21px";
      });
    }
  } else if (pixelsDeAncho <= 768) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("navbar").style.padding = "2px 2px";
      document.getElementById("logo-mt").style.width = "3%";
      const clases = document.querySelectorAll(".nav-color-change");
      clases.forEach((clase) => {
        clase.style.fontSize = "12px";
      });
    } else {
      document.getElementById("navbar").style.padding = "5px 5px";
      document.getElementById("logo-mt").style.width = "4%";
      const clases = document.querySelectorAll(".nav-color-change");
      clases.forEach((clase) => {
        clase.style.fontSize = "15px";
      });
    }
  }
}
