// Lista de productos y precios
const menu = [
    { nombre: "Ritmo Tropical", peso: 1000  , precio: 22.50 },
    { nombre: "Sol y Sombra", peso: 1000  , precio: 24.10 },
    { nombre: "Isla Esmeralda", peso: 1000  , precio: 23.50 }
];

console.log(menu);

let pedido = []; // Array para almacenar el pedido

// Función para mostrar el menú
function mostrarMenu() {
    let mensaje = "Bienvenido a Dream Coffee Shop ☕\n\nMenú disponible:\n";
    
    for (let i = 0; i < menu.length; i++) {

        mensaje += `${i + 1}. ${menu[i].nombre} - ${menu[i].peso}g - $${menu[i].precio}\n`;
    }
       
    
    mensaje += "\nIngrese el número del café que desea (o 0 para finalizar):";
    return mensaje;
}

// Función para tomar pedidos
function tomarPedido() {
    let opcion;
    
    do {
        opcion = parseInt(prompt(mostrarMenu()));

        if (opcion > 0 && opcion <= menu.length) {
            pedido.push(menu[opcion - 1]); // Agrega el producto al pedido
            alert(`${menu[opcion - 1].nombre} agregado al pedido ✅`);
        } else if (opcion !== 0) {
            alert("❌ Opción no disponible. Intente nuevamente.");
        }

    } while (opcion !== 0);
}

// Función para calcular el total del pedido
function calcularTotal() {
    let total = 0;
    
    for (let producto of pedido) {
        total += producto.precio;
    }
    
    return Number(total.toFixed(2)); // Redondea a 2 decimales
}

// Función para mostrar el resumen del pedido
function mostrarResumen() {
    if (pedido.length === 0) {
        alert("Lamentamos no hayas pedido nada. ¡Hasta luego! ☕");
        return;
    }

    let mensaje = "📝 Resumen de tu pedido:\n";
    
    for (let producto of pedido) {
        mensaje += `- ${producto.nombre} - ${producto.peso}g - $${producto.precio}\n`;
    }

    mensaje += `\nTotal a pagar: $${calcularTotal()}`;

    alert(mensaje);
}

// Iniciar simulador
function iniciarSimulador() {
    alert("¡Bienvenido a Dream Coffee Shop! ☕");
    tomarPedido();
    mostrarResumen();
}

// Llamar a la función principal
iniciarSimulador();


