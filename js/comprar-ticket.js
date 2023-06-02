function actualizarResumen() {
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var categoria = document.getElementById("categoria").value;
    var precioUnitario = 200;

    if (categoria !== "") {

    // Realizar cualquier otro cálculo necesario para el resumen
    var total = calcularTotal(cantidad, categoria);
    mostrarResumen(total);}
    else{

    }

}

  function calcularTotal(cantidad, categoria) {
    // Realizar el cálculo del total según la cantidad y la categoría
    var precioBase = 200;
    var descuento = 0;

    if (categoria === "estudiante") {
      descuento = 0.5;
    } else if (categoria === "jubilado") {
      descuento = 0.8;
    }
    

    var precioFinal = (precioBase - (precioBase * descuento)) * cantidad;
    return precioFinal.toFixed(2);
  }


  function mostrarResumen(total) {
    var resumenElement = document.getElementById("resumen");
    resumenElement.innerHTML = "Total a pagar: $<span id='spTotal'>" + total + "</span>";
  }

  function borrarFormulario() {
    document.getElementById("cantidad").value = "";
    document.getElementById("categoria").value = "ninguna";
    document.getElementById("resumen").textContent = "Total a pagar: ";
    document.getElementById("spTotal").textContent = "";
  }