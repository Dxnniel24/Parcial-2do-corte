document.querySelectorAll(".bar_nav .ul_links .li_links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu_burger").checked = false;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("tema") === "oscuro") {
    document.body.classList.add("tema-claro");
  } else {
    document.body.classList.remove("tema-claro");
  }
});

const botonTema = document.getElementById("boton");

botonTema.addEventListener("click", () => {
  document.body.classList.toggle("tema-claro");

  if (document.body.classList.contains("tema-claro")) {
    localStorage.setItem("tema", "oscuro");
  } else {
    localStorage.setItem("tema", "claro");
  }
});
