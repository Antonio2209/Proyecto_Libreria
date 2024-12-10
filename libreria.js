// Santiago Aguirre Restrepo

// Pablo Cadena Patiño

// Juan Felipe Torres

// Luis Antonio Ramirez

//Descripcion de libros

// Declara la función toggleDescription, que recibe un parámetro llamado button, el cual se espera que sea el botón que el usuario ha hecho clic para alternar la descripción.
function toggleDescription(button) {
//Aquí se define una constante description que almacena el elemento siguiente en el DOM al botón (button). nextElementSibling selecciona el siguiente elemento en el mismo nivel del árbol DOM (hermano inmediato del botón).

//Este elemento description es el que se va a mostrar o ocultar.
    const description = button.nextElementSibling;
    if (description.style.display === "none" || description.style.display === "") {
//Si el elemento description está oculto, estas líneas lo muestran estableciendo display en "block" y actualizan el texto del botón a "Ocultar descripción".
        description.style.display = "block";
        button.textContent = "Ocultar descripción";
        // En el caso contrario (cuando el elemento description ya es visible), se establece display en "none" para ocultarlo y se actualiza el texto del botón a "Ver descripción".
    } else {
        description.style.display = "none";
        button.textContent = "Ver descripción";
    }
}

// Carrito
let contadorCarrito = 0; // Inicializa el contador del carrito en 0

function agregarProducto() {
    contadorCarrito++; // Incrementa el contador en 1 cada vez que se llama a esta función
    actualizarContadorCarrito(); // Llama a la función para actualizar el contador visual en la página
}

function actualizarContadorCarrito() {
    // Busca el elemento con el ID 'cuenta-carrito' y actualiza su texto con el valor de contadorCarrito
    document.getElementById('cuenta-carrito').innerText = contadorCarrito;
}

//Formulario
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event){
    //Limpiar mensajes de error
    document.getElementById("errorUsuario").innerText = '';
    document.getElementById("errorEmail").innerText = '';
    document.getElementById("errorPass").innerText = '';

    //Variables para capturar datos del formulario y errores

    let errores = false;
    let usuario = document.getElementById("usuario").value;
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;

    //Validación Usuario
    let longUsuario = usuario.length;
    if (longUsuario === 0 || longUsuario < 8) {
        document.getElementById("errorUsuario").innerText = 'Debes ingresar un usuario con mínimo 8 caracteres';
        errores = true;
    }

    //Validación correo
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (correo.trim() === "") {
        document.getElementById("errorEmail").innerText = 'El email es obligatorio';
        errores = true;
        
    }else if (!emailRegex.test(correo)){
        document.getElementById("errorEmail").innerText = 'El email no es valido';
        errores = true;
    }
//Validacion contraseña
    let longPass = contrasena.length;
    if (longPass === 0 || longPass < 8) {
        document.getElementById("errorPass").innerText = 'Debes ingresar una contraseña con mínimo 8 caracteres';
        errores = true;
    }


    if (!errores) {
        alert("Perfecto, continua disfrutando");
    }else{
        event.preventDefault();

    }

});

//boton para visualizar contraseña
const botonMostrar = document.getElementById("mostrarPassword");
botonMostrar.addEventListener("mouseover", mostrarPass);

function mostrarPass() {
    let mostrar = document.getElementById("contrasena");
    mostrar.type = "text";

}

botonMostrar.addEventListener("mouseout", ocultarPass);

function ocultarPass() {
    let ocultar = document.getElementById("contrasena");
    ocultar.type = "password";
}

