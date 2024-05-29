//variables 
const form = document.querySelector('.add-product-form');
const nameInput = document.getElementById('product-name');
const priceInput = document.getElementById('price');
const categorySelect = document.getElementById('category');
const messageTextarea = document.getElementById('description');
const submitButton = form.querySelector('button[type="submit"]');

const nameValue = nameInput.value.trim()
const priceValue = priceInput.value.trim();
const categoryValue = categorySelect.value.trim();
const descriptionValue = messageTextarea.value.trim();

// Start of the form validation
document.addEventListener('DOMContentLoaded', function () {
    const errorParagraph = document.createElement('p');
    const errorColor = 'var(--Colors-semantic-error, #e93828)';

    errorParagraph.style.color = 'var(--Colors-semantic-error, #e93828)';
    submitButton.insertAdjacentElement('afterend', errorParagraph);

    function clearErrorStyles() {
        nameInput.style.borderColor = '';
        priceInput.style.borderColor = '';
        categorySelect.style.borderColor = '';
        messageTextarea.style.borderColor = '';
        errorParagraph.innerHTML = '';
    }

    //start of the validation process
    function validateName() {
        if (nameInput.value.trim() === '' || nameInput.value.length < 4 || isNaN(nameInput.value) == false) {
            nameInput.style.borderColor = errorColor;
            return 'Por favor, ingrese un nombre de producto válido.';
        }
        return '';
    }

    function validatePrice() {
        if (priceInput.value.trim() === '' || priceValue.length < 0) {
            priceInput.style.borderColor = errorColor;
            return 'Por favor, ingrese un precio válido.';
        } else{
            return '';
        }
    }

    function validateCategory() {
        if (categorySelect.value === '') {
            categorySelect.style.borderColor = errorColor;
            return 'Por favor, seleccione una categoría.';
        }
        return '';
    }

    function validateMessage() {
        if (messageTextarea.value.trim().length < 30) {
            messageTextarea.style.borderColor = errorColor;
            return 'Por favor, ingrese un mensaje de al menos 30 caracteres.';
        }
        return '';
    }

    function showError(message) {
        errorParagraph.innerHTML = message;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        clearErrorStyles();

        errorMessage = validateName();
        if (errorMessage) {
            showError(errorMessage);
            return;
        }

        errorMessage = validatePrice();
        if (errorMessage) {
            showError(errorMessage);
            return;
        }

        errorMessage = validateCategory();
        if (errorMessage) {
            showError(errorMessage);
            return;
        }

        errorMessage = validateMessage();
        if (errorMessage) {
            showError(errorMessage);
            return;
        }

        errorParagraph.innerHTML = '';
        form.submit();
    });
});

// End of the form add product validation

const productos = [
    {
        id: 1,
        nombre: "Laptop Dell Inspiron",
        precio: 1000,
        descripcion: "Laptop Dell Inspiron con 16GB RAM y 512GB SSD",
        categoria: "Laptops"
    },
    {
        id: 2,
        nombre: "Smartphone Samsung Galaxy S21",
        precio: 800,
        descripcion: "Smartphone Samsung Galaxy S21 con 128GB de almacenamiento",
        categoria: "Smartphones"
    },
    {
        id: 3,
        nombre: "Tablet Apple iPad Pro",
        precio: 1200,
        descripcion: "Apple iPad Pro de 12.9 pulgadas, 256GB",
        categoria: "Tablets"
    },
    {
        id: 4,
        nombre: "Monitor LG UltraWide",
        precio: 300,
        descripcion: "Monitor LG UltraWide de 34 pulgadas, 2560x1080",
        categoria: "Monitores"
    },
    {
        id: 5,
        nombre: "Auriculares Sony WH-1000XM4",
        precio: 350,
        descripcion: "Auriculares inalámbricos con cancelación de ruido",
        categoria: "Auriculares"
    },
    {
        id: 6,
        nombre: "Reloj Inteligente Apple Watch Series 6",
        precio: 500,
        descripcion: "Apple Watch Series 6 con GPS, 44mm",
        categoria: "Relojes Inteligentes"
    },
    {
        id: 7,
        nombre: "Cámara Canon EOS R",
        precio: 1800,
        descripcion: "Cámara sin espejo de fotograma completo, 30.3MP",
        categoria: "Cámaras"
    },
    {
        id: 8,
        nombre: "Impresora HP LaserJet Pro",
        precio: 250,
        descripcion: "Impresora láser monocromática inalámbrica",
        categoria: "Impresoras"
    },
    {
        id: 9,
        nombre: "Router Asus RT-AC86U",
        precio: 200,
        descripcion: "Router Wi-Fi de doble banda con tecnología MU-MIMO",
        categoria: "Routers"
    },
    {
        id: 10,
        nombre: "Teclado Mecánico Corsair K95",
        precio: 200,
        descripcion: "Teclado mecánico RGB con interruptores Cherry MX Speed",
        categoria: "Teclados"
    }
];

//Añadir productos al JSON 
function agregarProducto() {
    const nameValue = nameInput.value.trim();
    const priceValue = parseFloat(priceInput.value.trim());
    const descriptionValue = messageTextarea.value.trim();
    const categoryValue = categorySelect.value.trim();

    const nuevoProducto = {
        id: productos.length + 1,
        nombre: nameValue,
        precio: priceValue,
        descripcion: descriptionValue,
        categoria: categoryValue
    };

    productos.push(nuevoProducto);

    console.log("Producto agregado exitosamente:");
    console.log(JSON.stringify(nuevoProducto, null, 2));

    localStorage.setItem('productos', JSON.stringify(productos));

    form.reset();
}

submitButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    agregarProducto();
});


