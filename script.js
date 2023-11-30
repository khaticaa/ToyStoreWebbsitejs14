const bannerText = document.querySelector(".banner-text");

document.addEventListener("DOMContentLoaded", () => {
  bannerText.style.transform = "scale(1)";
});

document.addEventListener("DOMContentLoaded", function () {
  let navbarTop = document.querySelector(".navbar-top");
  let nav = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    let scroll = window.scrollY || document.documentElement.scrollTop;

    if (scroll > navbarTop.offsetHeight) {
      navbarTop.classList.add("scrolling");
      nav.classList.add("scrolling");
    } else {
      navbarTop.classList.remove("scrolling");
      nav.classList.remove("scrolling");
    }
  });
});

let mouse = document.querySelector("#mouse");
mouse.addEventListener("click", (e) => {
  e.preventDefault();
  section2.scrollIntoView({
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let nav = document.querySelector("nav");
  let menuButton = document.getElementById("click");
  let menu = document.querySelector(".menu");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("show-menu");
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 800) {
      menu.classList.remove("show-menu");
    }
  });
});

document.addEventListener("click", () => {
  const modal = document.getElementById("myModal");
  const modalTriggerElements = document.querySelectorAll(".nav-r li");
  const closeModalButton = document.getElementById("closeModal");

  const openModal = () => {
    modal.style.display = "block";
  };

  const closeModal = () => {
    modal.style.display = "none";
  };

  modalTriggerElements.forEach((element) => {
    element.addEventListener("click", openModal);
  });

  closeModalButton.addEventListener("click", closeModal);

  document.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});

const stuffedAnimals = [
  { name: "Tedy Bear", price: "$10 USD", imageSrc: "s1left.png" },
  {
    name: "Mega Plush Toy",
    price: "$88USD",
    imageSrc:
      "5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png",
  },
  { name: "Cute Dog", price: "$30USD", imageSrc: "cutedog.png" },
  { name: "Little Friend", price: "$31USD", imageSrc: "littlefriend.png" },
];

const container = document.querySelector("#section2 .s2-o .s2boxes");

stuffedAnimals.forEach((animal) => {
  const box = document.createElement("div");
  box.classList.add("box");

  box.innerHTML = `
    <div class="bimg">
      <img src="${animal.imageSrc}" alt="" />
    </div>
    <h3>${animal.name}</h3>
    <button>${animal.price}</button>
  `;

  container.appendChild(box);
});

const stuffedAnimals1 = [
  { name: "Happy Flowers", price: "$38.000USD", imageSrc: "s1right.png" },
  { name: "Lift Machine", price: "$38.000USD", imageSrc: "liftmachine.png" },
  { name: "Wodden Camera", price: "$38.000USD", imageSrc: "camera.png" },
  { name: "LIttle Rabit", price: "$38.000USD", imageSrc: "littlerabbit.png" },
];

const boxes3 = document.querySelector(".s3boxes");

stuffedAnimals1.forEach((item) => {
  const box = document.createElement("div");
  box.classList.add("box");

  box.innerHTML = `
      <div class="bimg">
        <img src="${item.imageSrc}" alt="" />
      </div>
      <h3>${item.name}</h3>
      <button>${item.price}</button>
    `;

  boxes3.appendChild(box);
});
