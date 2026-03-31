//kod je malo odvratan iskr, mrsko mi je bilo da ga lepo napisem
//treba uvesti jos jednu proveru a to je da ne moze da se klikne dodaj ukoliko je 0 proizvoda selektovano

let vrednost = 0;
let img,
  nazivProizvoda,
  rezultat = 0,
  cena = 0;
let totalHTML = document.querySelector(".total");

function addToCart(dugme) {
  //selektovanje potrebnih elemenata
  //closest uzima najblizeg roditelja koji se podudara sa: tagName-om,id-jem ili klasom
  //parseInt() -> svaki podatak koji dobijes iz htmla je string po def.
  //querySelector -> vraca prvi element iz html-a koji se podudara sa  tagName-om,id-jem ili klasom
  const containerProduct = dugme.closest(".single-item");
  const quantity = parseInt(dugme.previousElementSibling.value);
  const img = containerProduct.querySelector("img").src;
  const si_content = containerProduct.querySelector(".si-content");
  const productPrice = parseInt(
    si_content.querySelector(".price").innerText.slice(1),
  );

  rezultat = quantity * productPrice;
  cena += rezultat;

  /**
   Kako dinamicki dodati elemente? 
   1. napravis neki div
   2. preko innerHTML attributa pod "" samo navedes html kao i u obicnom fajlu
   3. selektas mesto gde hoces da ubacis 
   4. appendChild() i tjt 
   */
  const proizvod = document.createElement("div");
  proizvod.className = "product-container";
  proizvod.innerHTML = `<img src=${img} style="width:30%;">
  <span style="font-weight: bold; font-size: 16px;">${quantity} X ${productPrice} = ${rezultat}</span>
  <button class="ponistiBtn">Ponisti</button>
  `;
  let cart_items = document.querySelector(".cart-items");
  cart_items.appendChild(proizvod);

  /*
  htmlELEMENT.addEventListener("eventName",() => fja(p1,p2,p3));
  */
  const ponistiButton = proizvod.querySelector(".ponistiBtn");
  ponistiButton.addEventListener("click", () =>
    ponistiBtn(ponistiButton, dugme),
  );

  totalHTML.innerText = cena;
  dugme.disabled = true;
}

function clearInput(input) {
  input.value = "";
}

function ponistiBtn(dugme, originalDugme) {
  const parent_container = dugme.closest("div");
  cena -= rezultat;
  totalHTML.innerText = cena;

  const parent_parent_container = dugme.closest(".container");
  originalDugme.disabled = false;
  //htmlELEMENT.remove()
  parent_container.remove();
}
