
let categoriasSistema = [];
let carrito = new Carrito([]);

initApp();


function initApp() {
    carga()
    inicioconhtml()
}

function carga() {
    loadCategories();
    showCategories();
    showProducts();
    totalcarrito();
    console.log(categoriasSistema);
}

function loadCategories() {
    const categorias = products.map(element => element.category);
    const categoriasSet = new Set(categorias);
    //------>Spread Operator --->Clase 12
    const categoriasUnicas = [...categoriasSet];

    categoriasSistema = categoriasUnicas.map(element => {
        return {
            id: element,
            nombre: element,
            Descripcion:element,
        }
    })
}

function showCategories() {
    //---> DOOM --->Clase N°8
    const divCategorias = document.getElementById("categoryMenu");
    categoriasSistema.forEach(element => {
        const btn = document.createElement("button");
        btn.classList.add("catBtn");
        btn.innerText = element.nombre;
        

        btn.addEventListener("click", () => {
            showProducts(element.nombre);
        })

        divCategorias.appendChild(btn);
    })

}
//Asignación por defecto: 
//Cuando se invoca sin parámetro, asigna el valor por defecto
function showProducts(categoryName = "") {

    let productsToShow = products;

    if (categoryName !== "") {

        productsToShow = products.filter(product => product.category === categoryName);
    }


    const categoryNode = document.getElementById("categoryName");
    categoryNode.innerText = categoryName.toUpperCase();

    /*productList*/
    const productList = document.getElementById("productList")
    productList.innerHTML = "";
    productsToShow.forEach(product => {
        //--->Destructuring --->Clase 12
        const {img,nombre,precio,id}=product;
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `<img src="${img}">
        <div class="productInfo">
            <div class="productName">
               ${nombre}
            </div>
            <br>
            <span class="productPrice">
                Price:<b> $${precio} </b>
            </span> /
          
        </div>
        <button class="addToList" onclick="addProduct('${id}')">
            Agregar al Carrito
        </button>
        `

        productList.appendChild(div);
    })


}

function addProduct(idProducto) {
    //--->Funciones y Métodos ---> Clases N° 4-7
    const producto = products.find(element => element.id == idProducto);
    carrito.productos.push(producto);
    showCarrito();
}

function showCarrito() {
    const divLista = document.getElementById("productsInCart");
    divLista.innerHTML="";
    carrito.productos.forEach(product => {

        const nodo = document.createElement("div");
        nodo.classList.add("productInList");
        nodo.innerHTML = ` <div class="productImg">
                            <img src="${product.img}">
                            </div>
                            <div class="productName">
                                ${product.nombre}
                            </div>
                            <div class="producPrice">
                                <b>$ ${product.precio} </b>
                            </div>`
        const total = document.getElementById("total");
        const nodos = document.createElement("div");
        nodos.classList.add("totales");
        nodos.innerHTML = ` <div class="total">
                            <b> Sub-Total:${product.precio} </b>
                            </div>`           
                    
        divLista.appendChild(nodo);
                    
        total.appendChild(nodos);

    })
}


/**************************DOOM- CLASE 8**************************/
function inicioconhtml()
{   
    //buscamos segun el ID que colocamos en la clase html (en la etiqueta) e indicamos lo que va a tener.
    const sub_titulo = document.getElementById("informacion");
    sub_titulo.innerText="Harry Potter es una serie de novelas fantásticas escrita por la autora británica J. K. Rowling, en la que se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, durante los años que pasan en el Colegio Hogwarts de Magia y Hechicería.";      
}

//Carrito
function totalcarrito(){

}