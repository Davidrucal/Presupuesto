let btning = document.querySelector("#ingresos");
let uling = document.querySelector("#uling");
let btnegr = document.querySelector("#egresos");
let uleg = document.querySelector("#uleg");
let sumaing = document.getElementById("sumaing");
var sumaegr = document.getElementById("sumaegr");
var disponible = document.getElementById("disponible");
var suma1 = 0;
var suma2 = 0;
let resultado = 0;

btning.addEventListener("click", function () {
  let detallesing = document.querySelector("#detalleing").value;
  let quetzalesing = document.querySelector("#quetzalesing").value;
  var quetzalesvalueing = parseInt(quetzalesing);

  let julio = " ";

  let ori = detallesing + julio + quetzalesing;

  if (detallesing.trim() !== "" || quetzalesing.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = ori;

    li.appendChild(addDeleteBtn(li, quetzalesvalueing, true));
    uling.appendChild(li);

    suma2 = suma2 + quetzalesvalueing;
    sumaing.textContent = suma2.toString();

    resultado = suma2 - suma1;
    disponible.textContent = resultado;
  }
});

btnegr.addEventListener("click", function () {
  let detallesegr = document.querySelector("#detalleegr").value;
  let quetzalesegr = document.querySelector("#quetzalesegr").value;
  let quetzalesvalueegr = parseInt(quetzalesegr);

  let julio = " ";

  let ori = detallesegr + julio + quetzalesegr;

  if (detallesegr.trim() !== "" || quetzalesegr.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = ori;

    li.appendChild(addDeleteBtn(li, quetzalesvalueegr, false));
    uleg.appendChild(li);

    suma1 = suma1 + quetzalesvalueegr;
    sumaegr.textContent = suma1.toString();

    resultado = suma2 - suma1;
    disponible.textContent = resultado;
  }
});

function addDeleteBtn(li, quetzalesvalue, isIncome) {
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Borrar";

  deleteBtn.addEventListener("click", (e) => {
    let item = e.target.parentElement;
    if (isIncome) {
      suma2 = suma2 - quetzalesvalue;
      sumaing.textContent = suma2.toString();
    } else {
      suma1 = suma1 - quetzalesvalue;
      sumaegr.textContent = suma1.toString();
    }
    resultado = suma2 - suma1;
    disponible.textContent = resultado;
    item.remove();
  });

  return deleteBtn;
}
