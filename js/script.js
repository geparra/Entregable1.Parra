// 📌 Lista de productos y precios
const menu = [
    { nombre: "Café Americano", precio: 2.5 },
    { nombre: "Capuchino", precio: 3.0 },
    { nombre: "Latte", precio: 3.5 }
];

let pedido = []; // Array para almacenar el pedido

// 📌 Función para mostrar el menú
function mostrarMenu() {
    let mensaje = "Bienvenido a Dream Coffee Shop ☕\n\nMenú disponible:\n";
    
    for (let i = 0; i < menu.length; i++) {
        mensaje += `${i + 1}. ${menu[i].nombre} - $${menu[i].precio}\n`;
    }

    mensaje += "\nIngrese el número del café que desea (o 0 para finalizar):";
    return mensaje;
}

// 📌 Función para tomar pedidos
function tomarPedido() {
    let opcion;
    
    do {
        opcion = parseInt(prompt(mostrarMenu()));

        if (opcion > 0 && opcion <= menu.length) {
            pedido.push(menu[opcion - 1]); // Agrega el producto al pedido
            alert(`${menu[opcion - 1].nombre} agregado al pedido ✅`);
        } else if (opcion !== 0) {
            alert("❌ Opción inválida. Intente nuevamente.");
        }

    } while (opcion !== 0);
}

// 📌 Función para calcular el total del pedido
function calcularTotal() {
    let total = 0;
    
    for (let producto of pedido) {
        total += producto.precio;
    }
    
    return total.toFixed(2); // Redondea a 2 decimales
}

// 📌 Función para mostrar el resumen del pedido
function mostrarResumen() {
    if (pedido.length === 0) {
        alert("No has pedido nada. ¡Hasta luego! ☕");
        return;
    }

    let mensaje = "📝 Resumen de tu pedido:\n";
    
    for (let producto of pedido) {
        mensaje += `- ${producto.nombre} - $${producto.precio}\n`;
    }

    mensaje += `\nTotal a pagar: $${calcularTotal()}`;

    alert(mensaje);
}

// 📌 Iniciar simulador
function iniciarSimulador() {
    alert("¡Bienvenido a Dream Coffee Shop! ☕");
    tomarPedido();
    mostrarResumen();
}

// Llamar a la función principal
iniciarSimulador();

// 📌 Ejecutar el script en la consola del navegado
