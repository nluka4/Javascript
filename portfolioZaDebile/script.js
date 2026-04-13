const rightSlidingBtn = document.querySelector("#right-btn");
const leftSlidingBtn = document.querySelector("#left-btn");
let slider = document.querySelector(".slider-images");
let list = document.querySelector("ul");
let kliknuto = true;
const portfolioKategorije = document.querySelector(".portfolio-categories");
const portfolioElementi = document.querySelector(".portfolio-items").children;
let kategorija;
let iterator = 0;

function slide(e) {
  e.stopPropagation();

  slider.children[iterator].style.display = "none";
  if (e.currentTarget.id == "right-btn") {
    iterator++;
    if (iterator < slider.children.length) {
      slider.children[iterator].style.display = "block";
    } else {
      iterator = 0;
      slider.children[iterator].style.display = "block";
    }
  } else {
    iterator--;
    if (iterator >= 0) {
      slider.children[iterator].style.display = "block";
    } else {
      iterator = slider.children.length - 1;
      slider.children[iterator].style.display = "block";
    }
  }
}

rightSlidingBtn.addEventListener("click", slide);
leftSlidingBtn.addEventListener("click", slide);

function mobileMenu() {
  if (kliknuto) {
    list.style.display = "block";
    kliknuto = false;
  } else {
    list.style.display = "none";
    kliknuto = true;
  }
}

let kategorije = portfolioKategorije.children;

// portfolioKategorije.children.foreach((dugme) => {
//   console.log(dugme);
// });

// function portfolioSort(btn) {
//   kategorija = btn.dataset.category;
//   for (let el of portfolioElementi) {
//     if (el.dataset.category.includes(",")) {
//       for (let tmp of el.dataset.category.split(",")) {
//         if (tmp == kategorija) {
//           el.style.display = "block";
//         } else {
//           el.style.display = "none";
//         }
//       }
//     } else {
//       if (kategorija == "sve") {
//         el.style.display = "block";
//       } else if (el.dataset.category != kategorija) {
//         el.style.display = "none";
//       } else {
//         el.style.display = "block";
//       }
//     }
//   }
// }

function portfolioSort(btn) {
  let kategorija = btn.dataset.category;

  for (let el of portfolioElementi) {
    let prikazi =
      kategorija === "sve" ||
      el.dataset.category
        .split(",")
        .map((k) => k.trim())
        .includes(kategorija);

    el.style.display = prikazi ? "block" : "none";
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 1000) {
    list.style.display = "flex";
  } else {
    list.style.display = "none";
  }
});

function openModal() {
  document.querySelector(".popup-modal").style.display = "block";
  document.querySelector(".overlay").style.display = "block";
}

document.querySelector("#closeModal").addEventListener("click", () => {
  document.querySelector(".popup-modal").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
});

document.querySelector(".overlay").addEventListener("click", () => {
  document.querySelector(".popup-modal").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
});
