// MENÚ PARA CELULAR
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// BUSCADOR DE LOCALIDADES
const locationSearch = document.getElementById("locationSearch");
const locationCards = document.querySelectorAll(".location-card");
const noLocations = document.getElementById("noLocations");

if (locationSearch) {
  locationSearch.addEventListener("input", () => {
    const search = locationSearch.value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    let visible = 0;

    locationCards.forEach(card => {
      const name = card.dataset.name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      const matches = name.includes(search);
      card.hidden = !matches;

      if (matches) visible++;
    });

    if (noLocations) {
      noLocations.hidden = visible !== 0;
    }
  });
}

// DIRECTORIO DE ESTABLECIMIENTOS
const establecimientos = [

  // ARANDAS
  {
    zona: "arandas",
    nombre: "Carnicería La Perla",
    direccion: "Av. Guadalupe 219, Centro, 47180 Arandas, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/k6UvFK7R719ZnSQj9"
  },
  {
    zona: "arandas",
    nombre: "Carnicería Billy",
    direccion: "Calle Dr. Francisco Luna Cuéllar 324, Lagunillas, 47184 Arandas, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/iqE9U8tKoyWiar4v9"
  },
  {
    zona: "arandas",
    nombre: "Carnicería Los Gorditos",
    direccion: "Calle Dr. Francisco Luna Cuéllar 173, Lagunillas, 47180 Arandas, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/z2V36HZgmfHeh2bR9"
  },
  {
    zona: "arandas",
    nombre: "Carnicería El Amigo Jiménez",
    direccion: "Dr. Marcelino Álvarez 2, Hacienda Palomino, 47180 Arandas, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/Ni492H6uPGTuhLRJA"
  },
  {
    zona: "arandas",
    nombre: "Carnicería El Rodeo",
    direccion: "Leona Vicario 250, Centro, 47183 Arandas, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/RVStRbJPScszDSAr6"
  },
  {
    zona: "arandas",
    nombre: "Carnicería Pepe Flores",
    direccion: "Aldama, Cerro Mexiquito 426, 47180 Arandas, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/8tmVseJha5tXrnwJ7"
  },

  // SAN IGNACIO
  {
    zona: "san-ignacio",
    nombre: "Carnicería y Pescadería El Buen Gusto",
    direccion: "San José, 47190 San Ignacio Cerro Gordo, Jalisco",
    tipo: "Carnicería y pescadería",
    mapa: "https://maps.app.goo.gl/1Cufhbu5yhH6iM8Z9"
  },
  {
    zona: "san-ignacio",
    nombre: "Carnicería Cruz",
    direccion: "C. Ramón Corona 5, 47190 San Ignacio Cerro Gordo, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/n64sMmLLRX1C4JuP6"
  },
  {
    zona: "san-ignacio",
    nombre: "Carnicería Orozco",
    direccion: "Liborio Martínez 33, 47190 San Ignacio Cerro Gordo, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/YdroLGCBLgrLyE2G7"
  },
  {
    zona: "san-ignacio",
    nombre: "Carnicería Gonzales",
    direccion: "C. Ramón Corona 98, 47190 San Ignacio Cerro Gordo, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/H66NUZZooUxtP8iL8"
  },

  // ATOTONILCO
  {
    zona: "atotonilco",
    nombre: "Carnicería La Becerrita",
    direccion: "Juárez 49, Centro, 47750 Atotonilco el Alto, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/47NUMnoWgRc3jLdr9"
  },
  {
    zona: "atotonilco",
    nombre: "Carnicería 19 Hermanos",
    direccion: "Av. Independencia Poniente 326, San Felipe, 47750 Atotonilco el Alto, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/oBJhYCJT2UEc765j9"
  },

  // SAN FRANCISCO DE ASÍS
  {
    zona: "san-francisco",
    nombre: "Carnicería y Súper Los Canchola",
    direccion: "C. Hidalgo 190, 47755 San Francisco de Asís, Jalisco",
    tipo: "Carnicería y supermercado",
    mapa: "https://maps.app.goo.gl/4dFJBDaKk1Yjah4K7"
  },

  // AYOTLÁN
  {
    zona: "ayotlan",
    nombre: "Carnicería Ayotlán",
    direccion: "Hidalgo Eje Ote. 194, 47930 Ayotlán, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/39SCfYNGZTxAZtEx7"
  },
  {
    zona: "ayotlan",
    nombre: "Carnicería 6 Hermanos",
    direccion: "González Gallo 177, 47930 Ayotlán, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/vGXksw6xEySW2i3L8"
  },
  {
    zona: "ayotlan",
    nombre: "Carnicería El Güero",
    direccion: "Revolución 2, 47930 Ayotlán, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/34CBYWbnkPJRABpR8"
  },

  // DEGOLLADO
  {
    zona: "degollado",
    nombre: "Carnicería El Piñón",
    direccion: "Álvaro Obregón 62, Centro, 47980 Degollado, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/1aZUArQi672oCVJi7"
  },
  {
    zona: "degollado",
    nombre: "Carnicería Hidalgo",
    direccion: "C. Hidalgo 291, Centro, 47980 Degollado, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/tiEk2P4BrEF1dkK7A"
  },
  {
    zona: "degollado",
    nombre: "Carnicería El Caporal",
    direccion: "C. Hidalgo 10, Centro, 47980 Degollado, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/8ujJ82BxXkwVW9SJ6"
  },
  {
    zona: "degollado",
    nombre: "Carnicería La Suprema",
    direccion: "Emilio Carranza 7, Centro, 47980 Degollado, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/eUBBuxe1JszoGeov8"
  },

  // SANTA ANA PACUECO
  {
    zona: "santa-ana",
    nombre: "Carnicería La Hacienda",
    direccion: "C. Romita 100-Int 48, 36910 Santa Ana Pacueco, Guanajuato",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/4wEBw8ST1yz7YLLC9"
  },

  // SAN MIGUEL EL ALTO
  {
    zona: "san-miguel",
    nombre: "Carnicería El Gordito",
    direccion: "Niños Héroes 177, Lindavista, 47146 San Miguel el Alto, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/qigVQVZNffMkJMAg9"
  },
  {
    zona: "san-miguel",
    nombre: "Carnicería San José",
    direccion: "Lic. Andrés M. Lozano 173, Agua Caliente, 47147 San Miguel el Alto, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/u3sYzjrWfE4qaF5M9"
  },
  {
    zona: "san-miguel",
    nombre: "Carnicería Tecuines",
    direccion: "Álvaro Obregón 252, 47140 San Miguel el Alto, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/Pqzh227VVD4ux27v9"
  },
  {
    zona: "san-miguel",
    nombre: "Carnicería Tecuines 3",
    direccion: "Álvaro Obregón 29, Agua Caliente, 47147 San Miguel el Alto, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/1QrbL8K1wspVraS49"
  },
  {
    zona: "san-miguel",
    nombre: "Carnicería Tecuines 5",
    direccion: "Vicente Guerrero 28, Sagrada Familia, 47144 San Miguel el Alto, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/DrskiP9KPmzum2DE8"
  },

  // CHAPALA, AJIJIC Y SAN ANTONIO TLAYACAPAN
  {
    zona: "chapala",
    nombre: "Carnicería Los Brother",
    direccion: "Chapala Centro, 45900 Chapala, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/AXk5prZ5QcHknZdQ6"
  },
  {
    zona: "chapala",
    nombre: "Carnicería Desales",
    direccion: "C. López Cotilla 239, Chapala Centro, 45900 Chapala, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/VrRGbXH9o4pbbq6M8"
  },
  {
    zona: "chapala",
    nombre: "Carnicería Tlayacapan",
    direccion: "Ramón Corona 127B, 45900 San Antonio Tlayacapan, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/4G1Y6NTZYYUQA3149"
  },
  {
    zona: "chapala",
    nombre: "Carnicería Chapalense",
    direccion: "45922 San Antonio Tlayacapan, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/dyQmLgBFG8JFmtm86"
  },
  {
    zona: "chapala",
    nombre: "Carnicería Tony Plus",
    direccion: "Carretera Chapala-Jocotepec 147, San Antonio Tlayacapan, 45915 Chapala, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/9jVRk32gotsdVnxr9"
  },
  {
    zona: "chapala",
    nombre: "Carnicería La Fuente",
    direccion: "C. Ignacio Zaragoza 67, 45920 Ajijic, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/b2hEbnYSXMTpfhgC7"
  },
  {
    zona: "chapala",
    nombre: "Carnicería y Abarrotes Morones",
    direccion: "45920 Ajijic, Jalisco",
    tipo: "Carnicería y abarrotes",
    mapa: "https://maps.app.goo.gl/F2wBYj6kqU9q3DAo9"
  },

  // TEPATITLÁN
  {
    zona: "tepatitlan",
    nombre: "Carnicería La Gloria 1",
    direccion: "C. Revolución 770, Campestre La Gloria, 47600 Tepatitlán de Morelos, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/as3sutdQAta4KWP17"
  },
  {
    zona: "tepatitlan",
    nombre: "Carnicería La Gloria 2",
    direccion: "Claveles 824, Jardines de Oriente, 47680 Tepatitlán de Morelos, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/3P8vuURdhY5qU8u16"
  },
  {
    zona: "tepatitlan",
    nombre: "Carnicería Gonzales",
    direccion: "C. Bartolo Hernández 52, Centro, 47600 Tepatitlán de Morelos, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/a6u9i7NquZGf83B58"
  },
  {
    zona: "tepatitlan",
    nombre: "Carnicería Progreso",
    direccion: "C. Porfirio Díaz 90, Centro, 47600 Tepatitlán de Morelos, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/z2rA2Tw2KHngmcyA7"
  },
  {
    zona: "tepatitlan",
    nombre: "Carnicería Popeye",
    direccion: "C. San Felipe de Jesús 117, San Gabriel, 47639 Tepatitlán de Morelos, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/LZZWEgAH1uekogKq8"
  },
  {
    zona: "tepatitlan",
    nombre: "Carnicería Jacarandas",
    direccion: "Av. José González Carnicerito 51, Jardines de Tepa, 47680 Tepatitlán de Morelos, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/24ADhDH6EAche8pf9"
  },
  {
    zona: "tepatitlan",
    nombre: "Carnicería Miriam",
    direccion: "Avestruz 641, Las Aguilillas, 47698 Tepatitlán de Morelos, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/A1gRP8WC7V2v6nzK8"
  },
  {
    zona: "tepatitlan",
    nombre: "Carnicería Mi Rancho",
    direccion: "Francisco Sarabia 181, Centro, 47600 Tepatitlán de Morelos, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/24RNNmEeEhT65fnc8"
  },
  {
    zona: "tepatitlan",
    nombre: "Carnicería Esperanza",
    direccion: "Emilio Carranza 180, Centro, 47600 Tepatitlán de Morelos, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/Ar9USmqiBJmyUkY5A"
  },

  // JESÚS MARÍA
  {
    zona: "jesus-maria",
    nombre: "Carnicería La Esquinita",
    direccion: "Centro, Jesús María, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/8NFuyVjNwdcQM2W1A"
  },
  {
    zona: "jesus-maria",
    nombre: "Carnicería Santuario",
    direccion: "Jesús María, Jalisco. Consulta la ubicación exacta en el mapa.",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/8SigeT6zm7kLdsf66"
  },
  {
    zona: "jesus-maria",
    nombre: "Dulcería y Abarrotes Rosy",
    direccion: "Miguel López Aguayo 55-4, Centro, 47950 Jesús María, Jalisco",
    tipo: "Otro punto de venta",
    mapa: "https://maps.app.goo.gl/PHCdzB8gcvJH9CvY9"
  },
  {
    zona: "jesus-maria",
    nombre: "Carnicería La Purísima",
    direccion: "Lic. Alberto Orozco Romero 230, 47950 Jesús María, Jalisco",
    tipo: "Carnicería",
    mapa: "https://maps.app.goo.gl/Xuc1Mse3JBWJnqra9"
  },
  {
    zona: "jesus-maria",
    nombre: "Altos Home",
    direccion: "5 de Febrero 13, local 3, 47950 Jesús María, Jalisco",
    tipo: "Otro punto de venta",
    mapa: "https://maps.app.goo.gl/ggDVMQVS9w2XYutJA"
  }
];

// NOMBRES DE LAS ZONAS
const nombresZonas = {
  "arandas": "Arandas, Jalisco",
  "jesus-maria": "Jesús María, Jalisco",
  "san-ignacio": "San Ignacio Cerro Gordo, Jalisco",
  "atotonilco": "Atotonilco el Alto, Jalisco",
  "san-francisco": "San Francisco de Asís, Jalisco",
  "ayotlan": "Ayotlán, Jalisco",
  "degollado": "Degollado, Jalisco",
  "santa-ana": "Santa Ana Pacueco, Guanajuato",
  "san-miguel": "San Miguel el Alto, Jalisco",
  "chapala": "Chapala y alrededores",
  "tepatitlan": "Tepatitlán de Morelos, Jalisco"
};

// MOSTRAR ESTABLECIMIENTOS DE LA ZONA SELECCIONADA
const storeGrid = document.getElementById("storeGrid");
const storeSearch = document.getElementById("storeSearch");
const zoneTitle = document.getElementById("zoneTitle");
const zoneDescription = document.getElementById("zoneDescription");
const resultsCount = document.getElementById("resultsCount");
const noStores = document.getElementById("noStores");

if (storeGrid) {
  const params = new URLSearchParams(window.location.search);
  const zona = params.get("zona") || "arandas";

  const titulo = nombresZonas[zona] || "Puntos de venta";

  zoneTitle.textContent = titulo;

  if (zona === "chapala") {
    zoneDescription.textContent =
      "Establecimientos en Chapala, Ajijic y San Antonio Tlayacapan.";
  } else {
    zoneDescription.textContent =
      "Estos son los establecimientos donde puedes encontrar Birria Mix en esta zona.";
  }

  function mostrarEstablecimientos(busqueda = "") {
    const texto = busqueda
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const filtrados = establecimientos.filter(item => {
      const contenido = (
        item.nombre + " " + item.direccion + " " + item.tipo
      ).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      return item.zona === zona && contenido.includes(texto);
    });

    storeGrid.innerHTML = filtrados.map(item => `
      <article class="store-card">
        <span class="store-type">${item.tipo}</span>
        <h3>${item.nombre}</h3>
        <p class="store-address">${item.direccion}</p>
        <a class="map-link"
           href="${item.mapa}"
           target="_blank"
           rel="noopener">
          Ver ubicación en Google Maps →
        </a>
      </article>
    `).join("");

    if (resultsCount) {
      resultsCount.textContent =
        filtrados.length + (filtrados.length === 1
          ? " establecimiento encontrado"
          : " establecimientos encontrados");
    }

    if (noStores) {
      noStores.hidden = filtrados.length !== 0;
    }
  }

  mostrarEstablecimientos();

  if (storeSearch) {
    storeSearch.addEventListener("input", () => {
      mostrarEstablecimientos(storeSearch.value);
    });
  }
}