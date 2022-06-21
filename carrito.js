function agregarAlCarrito1(nombre, precio) {
  divAEscribir = document.getElementById("lista-carrito1");
  divAEscribir.innerHTML =
    '<dd id="primer-dd">' +
    nombre +
    '  <button onclick="sumShorts()">+</button>' +
    '<input type="text" id="shorts-yokkao" class="input-cantidad" onchange="sumarAPrecioAShorts()" value="1">' +
    '<button onclick="resShorts()">-</button>' +
    '<div class="d-inline" id="precio-total-shorts"></div>' +
    "</dd>";
  cantidad = document.getElementById("shorts-yokkao").value;
  precioTotalShorts = precio * cantidad;
  console.log(cantidad);
  console.log(precio);
  shortsTot = document.getElementById("precio-total-shorts");
  shortsTot.innerHTML = " " + precioTotalShorts + "U$D";
  sacarTotal();
  botonComprar();
}

function agregarAlCarrito2(nombre, precio) {
  divAEscribir = document.getElementById("lista-carrito2");
  divAEscribir.innerHTML =
    '<dd id="segundo-dd">' +
    nombre +
    '  <button onclick="sumGuantes()">+</button>' +
    '<input type="text" id="guantes-twins" class="input-cantidad" onchange="sumarAPrecioAGuantes()" value="1">' +
    '<button onclick="resGuantes()">-</button>' +
    '<div class="d-inline" id="precio-total-guantes"></div>' +
    "</dd>";
  cantidad = document.getElementById("guantes-twins").value;
  precioTotalGuantes = precio * cantidad;
  console.log(cantidad);
  console.log(precio);
  guantesTot = document.getElementById("precio-total-guantes");
  guantesTot.innerHTML = " " + precioTotalGuantes + "U$D";
  sacarTotal();
  botonComprar();
}

function sumarAPrecioAShorts() {
  precioTotal = document.getElementById("precio-total-shorts");
  cantidad = document.getElementById("shorts-yokkao").value;
  precioTotal.innerText = " " + 59 * cantidad + "U$D";
  checkeo0Shorts();
}

function sumarAPrecioAGuantes() {
  precioTotal = document.getElementById("precio-total-guantes");
  cantidad = document.getElementById("guantes-twins").value;
  console.log(cantidad);
  precioTotal.innerText = " " + 158 * cantidad + "U$D";
  checkeo0Guantes();
}

function sumShorts() {
  cantidad = document.getElementById("shorts-yokkao").value;
  console.log(cantidad);
  cantidad = Number(cantidad) + 1;
  console.log(cantidad);
  document.getElementById("shorts-yokkao").value = cantidad;
  sacarPrecioShorts();
  sacarTotal();
}

function sumGuantes() {
  cantidad = document.getElementById("guantes-twins").value;
  console.log(cantidad);
  cantidad = Number(cantidad) + 1;
  console.log(cantidad);
  document.getElementById("guantes-twins").value = cantidad;
  sacarPrecioGuantes();
  sacarTotal();
}

function resShorts() {
  cantidad = document.getElementById("shorts-yokkao").value;
  console.log(cantidad);
  cantidad = Number(cantidad) - 1;
  console.log(cantidad);
  document.getElementById("shorts-yokkao").value = cantidad;
  sacarPrecioShorts();
  checkeo0Shorts();
  sacarTotal();
  botonComprar();
}

function resGuantes() {
  cantidad = document.getElementById("guantes-twins").value;
  cantidad = Number(cantidad) - 1;
  document.getElementById("guantes-twins").value = cantidad;
  sacarPrecioGuantes();
  checkeo0Guantes();
  sacarTotal();
  botonComprar();
}

const sacarPrecioShorts = () => {
  document.getElementById("precio-total-shorts").innerText =
    " " + cantidad * 59 + "U$D";
};

const sacarPrecioGuantes = () => {
  document.getElementById("precio-total-guantes").innerText =
    " " + cantidad * 158 + "U$D";
};

const checkeo0Shorts = () => {
  dd1 = document.getElementById("primer-dd");
  if (cantidad == 0) {
    dd1.innerHTML = "";
  }
};

const checkeo0Guantes = () => {
  dd2 = document.getElementById("segundo-dd");
  if (cantidad == 0) {
    dd2.innerHTML = "";
  }
};

const sacarTotal = () => {
  total = document.getElementById("total");
  if (
    document.getElementById("precio-total-guantes") == null &&
    document.getElementById("precio-total-shorts") == null
  ) {
    total.innerText = "";
  } else if (document.getElementById("precio-total-guantes") == null) {
    totalShorts = document.getElementById("precio-total-shorts").innerText;
    numShorts = "";
    for (let i = 0; i < totalShorts.length; i++) {
      if (Number.isInteger(Number(totalShorts[i]))) {
        numShorts = numShorts + totalShorts[i];
      }
      numShorts = Number(numShorts);
    }
    total.innerText = numShorts + "U$D";
  } else if (document.getElementById("precio-total-shorts") == null) {
    totalGuantes = document.getElementById("precio-total-guantes").innerText;
    numGuantes = "";
    for (let i = 0; i < totalGuantes.length; i++) {
      if (Number.isInteger(Number(totalGuantes[i]))) {
        numGuantes = numGuantes + totalGuantes[i];
      }
      numGuantes = Number(numGuantes);
      console.log(numGuantes);
    }
    total.innerText = numGuantes + "U$D";
  } else {
    totalGuantes = document.getElementById("precio-total-guantes").innerText;
    totalShorts = document.getElementById("precio-total-shorts").innerText;
    console.log(totalGuantes);
    numGuantes = "";
    numShorts = "";
    for (let i = 0; i < totalGuantes.length; i++) {
      if (Number.isInteger(Number(totalGuantes[i]))) {
        numGuantes = numGuantes + totalGuantes[i];
      }
      numGuantes = Number(numGuantes);
      console.log(numGuantes);
    }
    for (let i = 0; i < totalShorts.length; i++) {
      if (Number.isInteger(Number(totalShorts[i]))) {
        numShorts = numShorts + totalShorts[i];
      }
      numShorts = Number(numShorts);
      console.log(numShorts);
    }
    total.innerText = numGuantes + numShorts + "U$D";
  }
};

const botonComprar = () => {
  boton = document.getElementById("boton-compra");
  console.log(document.getElementById("total").innerHTML == "");
  if (document.getElementById("total").innerHTML !== "") {
    boton.style.visibility = "visible";
  } else {
    boton.style.visibility = "hidden";
  }
};
