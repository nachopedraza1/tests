//----------------------------------------------------
//------------------Menus-----------------------------
//----------------------------------------------------
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active")
});

const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", function () {
    menu.classList.toggle("menu-active");
});


//----------------------------------------------------
//------------------Lista de Productos----------------
//----------------------------------------------------
let productos = [
    { id: 1, nombre: "MOTHERBOARD Gigabyte B660M DS3H DDR4 S1700", precio: 30259, img: "../img/productos/mother-1.png", categoria: "motherboard" },
    { id: 2, nombre: "MOTHERBOARD ASROCK Z590 PHANTOM GAMING 4 S1200", precio: 33489, img: "../img/productos/mother-2.png", categoria: "motherboard" },
    { id: 3, nombre: "MOTHERBOARD Gigabyte B660M DS3H DDR4 S1700", precio: 30259, img: "../img/productos/mother-1.png", categoria: "motherboard" },
    { id: 4, nombre: "MOTHERBOARD ASROCK Z590 PHANTOM GAMING 4 S1200", precio: 33489, img: "../img/productos/mother-2.png", categoria: "motherboard" },
    { id: 5, nombre: "MOTHERBOARD Gigabyte B660M DS3H DDR4 S1700", precio: 30259, img: "../img/productos/mother-1.png", categoria: "motherboard" },
    { id: 6, nombre: "MOTHERBOARD ASROCK Z590 PHANTOM GAMING 4 S1200", precio: 33489, img: "../img/productos/mother-2.png", categoria: "motherboard" },

];


//----------------------------------------------------
//------------------Barra de busqueda-----------------
//----------------------------------------------------
let buscador = document.getElementsByClassName("searchTerm");
let resultado = document.getElementsByClassName("subBusqueda");

for (const search of buscador) {
    search.addEventListener("keyup", filtro);
}

function filtro(filters) {
    let search = filters.target;
    let texto = search.value.toLowerCase();
    let filtroProd = productos.filter(producto => producto.nombre.toLowerCase().includes(texto));
    for (const result of resultado) {
        result.innerHTML = "";
        for (const producto of filtroProd) {
            if (filtroProd.length === 0) {
                result.classList.remove("active");
                result.innerHTML = "";
            } else if (texto == "") {
                result.classList.remove("active");
                result.innerHTML = "";
            } else {
                result.classList.add("active");
                result.innerHTML += `<li class ="text-danger"> ${producto.nombre} </li>`
            }
        }
    }
}

//----------------------------------------------------
//------------------Productos-------------------------
//----------------------------------------------------

let productosContainer = document.getElementById("productosContainer");

const mostrarProductos = () => {
    productos.forEach(producto => {
        let div = document.createElement("div");
        div.className = "card col-5 p-0";
        div.innerHTML = `   <div class="p-2">
                                <img src="${producto.img}" class="img-fluid" alt="...">
                            </div>
                            <div class="card-body p-1">
                                <h3 class="card-title">$${producto.precio}</h4>
                                <p class="card-text">${producto.nombre}</p>
                                <button class="btn btn-primary" id="boton${producto.id}">Comprar</button>
                            </div>`;
        productosContainer.append(div);
    });
}

mostrarProductos();

