"use strict";
document.addEventListener("DOMContentLoaded", () => {
  // variables
  const categorias = [
    "todos",
    "animacion",
    "grafico",
    "web",
    "productos",
    "motion",
    "ilustracion",
    "vr",
    "postpo",
  ];
  const formaciones = ["todos", "carreras", "masters", "cursos"];
  const modalidadBotones = document.querySelectorAll(".button__landing");
  const modalidad = document.querySelectorAll(".contenedor__padre");

  let botonesPresencial = document.querySelectorAll(
    ".button__landing__presencial"
  );
  let contenedoresPresencial = document.querySelectorAll(
    ".contenedor__hijo__presencial"
  );

  let botonesOnline = document.querySelectorAll(".button__landing__online");
  let contenedoresOnline = document.querySelectorAll(
    ".contenedor__hijo__online"
  );

  const arrayPresencial = Array.from(contenedoresPresencial);
  const arrayOnline = Array.from(contenedoresOnline);

  const verMasButtonPresencial = document.getElementById("verMasPresencial");

  const verMasButtonOnline = document.getElementById("verMasOnline");
  const submenuPresencial = document.querySelectorAll(
    ".button__presencial__submenu__item"
  );
  const submenuOnline = document.querySelectorAll(
    ".button__online__submenu__item"
  );
  const noContentPresencial = document.querySelector(
    ".sin__contenido__presencial"
  );
  const noContentOnline = document.querySelector(".sin__contenido__online");

  // fin de variables

  // filtro modalidad superior
  modalidadBotones.forEach((e, i) => {
    e.addEventListener("click", () => {
      modalidadBotones.forEach((e, i) => {
        modalidadBotones[i].classList.remove("button--active");
        modalidad[i].classList.remove("contenedor__padre--active");
      });
      modalidadBotones[i].classList.add("button--active");
      modalidad[i].classList.add("contenedor__padre--active");
    });
  });

  // fin filtro modalidad superior
  const presencial = arrayPresencial.slice(10);
  presencial.forEach((e) => {
    e.classList.remove("contenedor__hijo__presencial--active");
  });
  console.log(presencial);
  verMasButtonPresencial.addEventListener("click", () => {
    verMasButtonPresencial.style.display = "none";

    arrayPresencial.forEach((e) => {
      e.classList.add("contenedor__hijo__presencial--active");
    });
  });
  const online = arrayOnline.slice(10);
  online.forEach((e) => {
    e.classList.remove("contenedor__hijo__online--active");
  });
  verMasButtonOnline.addEventListener("click", () => {
    verMasButtonOnline.style.display = "none";
    arrayOnline.forEach((e) => {
      e.classList.add("contenedor__hijo__online--active");
    });
  });
  // filtro area presencial

  let arrayGeneralPresencial = arrayPresencial;
  botonesPresencial.forEach((element, index) => {
    element.addEventListener("click", () => {
      if (botonesPresencial[index] === 0) {
        verMasButtonPresencial.style.display = "flex";
      } else {
        verMasButtonPresencial.style.display = "none";
      }
      const categoriasFilter = arrayPresencial.filter((item) =>
        item.classList.contains(categorias[index])
      );
      botonesPresencial.forEach((e) =>
        e.classList.remove("button__landing__presencial--active")
      );
      botonesPresencial[index].classList.add(
        "button__landing__presencial--active"
      );
      noContentPresencial.classList.remove("sin__contenido--active");
      arrayPresencial.forEach((element) => {
        element.classList.remove("contenedor__hijo__presencial--active");
      });
      categoriasFilter.forEach((element) => {
        element.classList.add("contenedor__hijo__presencial--active");
      });
      arrayGeneralPresencial = categoriasFilter;
      submenuPresencial.forEach((e) =>
        e.classList.remove("button__presencial__submenu__item--active")
      );
      submenuPresencial[0].classList.add(
        "button__presencial__submenu__item--active"
      );
    });
  });
  submenuPresencial.forEach((element, index) => {
    element.addEventListener("click", () => {
      const formacionFilter = arrayGeneralPresencial.filter((item) =>
        item.classList.contains(formaciones[index])
      );
      if (botonesPresencial[index] === 0) {
        verMasButtonPresencial.style.display = "flex";
      } else {
        verMasButtonPresencial.style.display = "none";
      }
      if (formacionFilter.length === 0) {
        noContentPresencial.classList.add("sin__contenido--active");
      } else {
        noContentPresencial.classList.remove("sin__contenido--active");
      }
      submenuPresencial.forEach((e) =>
        e.classList.remove("button__presencial__submenu__item--active")
      );
      submenuPresencial[index].classList.add(
        "button__presencial__submenu__item--active"
      );
      arrayGeneralPresencial.forEach((e) => {
        e.classList.remove("contenedor__hijo__presencial--active");
      });
      formacionFilter.forEach((element, i) => {
        element.classList.add("contenedor__hijo__presencial--active");
      });
    });
  });

  // fin filtro areas presencial

  // filtro areas online
  let arrayGeneralOnline = arrayOnline;
  botonesOnline.forEach((element, index) => {
    element.addEventListener("click", () => {
      if (botonesOnline[index] === 0) {
        verMasButtonOnline.style.display = "flex";
      } else {
        verMasButtonOnline.style.display = "none";
      }
      const categoriasFilter = arrayOnline.filter((item) =>
        item.classList.contains(categorias[index])
      );
      botonesOnline.forEach((e) =>
        e.classList.remove("button__landing__online--active")
      );
      botonesOnline[index].classList.add("button__landing__online--active");
      noContentOnline.classList.remove("sin__contenido--active");

      arrayOnline.forEach((element) => {
        element.classList.remove("contenedor__hijo__online--active");
      });
      categoriasFilter.forEach((element) => {
        element.classList.add("contenedor__hijo__online--active");
      });
      arrayGeneralOnline = categoriasFilter;
      submenuOnline.forEach((e) =>
        e.classList.remove("button__online__submenu__item--active")
      );
      submenuOnline[0].classList.add("button__online__submenu__item--active");
    });
  });
  submenuOnline.forEach((element, index) => {
    element.addEventListener("click", () => {
      const formacionFilter = arrayGeneralOnline.filter((item) =>
        item.classList.contains(formaciones[index])
      );
      if (botonesOnline[index] === 0) {
        verMasButtonOnline.style.display = "flex";
      } else {
        verMasButtonOnline.style.display = "none";
      }
      if (formacionFilter.length === 0) {
        noContentOnline.classList.add("sin__contenido--active");
      } else {
        noContentOnline.classList.remove("sin__contenido--active");
      }
      // noContent;
      submenuOnline.forEach((e) =>
        e.classList.remove("button__online__submenu__item--active")
      );
      submenuOnline[index].classList.add(
        "button__online__submenu__item--active"
      );
      arrayGeneralOnline.forEach((e) => {
        e.classList.remove("contenedor__hijo__online--active");
      });
      formacionFilter.forEach((element, i) => {
        element.classList.add("contenedor__hijo__online--active");
      });
    });
    // fin filtro areas online
  });
});
