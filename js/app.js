// Ejercicio 1
document.querySelector('#cambiarTexto').textContent = `Texto modificado mediante JS`;

// Ejercicio 2
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = `Parrafo creado con JS`;
document.body.appendChild(nuevoParrafo);

// Ejercicio 3
document.querySelector('#cambiarSrc').addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('#imgCambiar').setAttribute('src', './img/paisaje2.png');
});

// Ejercicio 4
document.querySelector('#eliminarImg').addEventListener('click', event => {
    event.preventDefault();
    const imgEliminar = document.querySelector('#imgEliminar');
    imgEliminar.parentNode.removeChild(imgEliminar);
});

// Ejercicio 5
document.querySelector('#claseDinamica').addEventListener('click', event => {
    document.body.classList.toggle('text-bg-dark');
});

// Ejercicio 6
document.querySelector('#btnAgregarLista').addEventListener('click', event => {
    event.preventDefault();
    const txtAgregarLista = document.querySelector('#txtAgregarLista');
    const nuevoItem = document.createElement('li');
    nuevoItem.classList.add('d-flex');
    nuevoItem.classList.add('justify-content-between');
    nuevoItem.classList.add('mb-3');
    nuevoItem.innerHTML = `${txtAgregarLista.value}<button class="btn btn-danger" onclick="eliminarItem(this)">Eliminar</button>`;
    document.querySelector('#listaDinamica').appendChild(nuevoItem);
    txtAgregarLista.value = '';
});

const eliminarItem = button => {
    const item = button.closest('li');
    item.remove();
}

// Ejercicio 7
const edad =document.querySelector('#edad');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');

document.querySelector('#txtNombre').addEventListener('change', event => {
    nombre.innerHTML = `Nombre: ${event.target.value}`;
});
document.querySelector('#txtApellido').addEventListener('change', event => {
    apellido.innerHTML = `Apellido: ${event.target.value}`;
});
document.querySelector('#txtEdad').addEventListener('change', event => {
    edad.innerHTML = `Edad: ${event.target.value}`;
});

// Ejercicio 8
const elementos = document.body.querySelectorAll('.preguntas');
elementos.forEach(element => {
    element.addEventListener('mouseenter', event => {
        event.target.classList.add('text-bg-info');
    });
});
elementos.forEach(element => {
    element.addEventListener('mouseout', event => {
        event.target.classList.remove('text-bg-info');
    });
});

// Ejercicio 9
const circulo = document.getElementById('circulo');
const context = circulo.getContext("2d");
const centroX = circulo.width / 2;
const centroY = circulo.height / 2;
const radio = 70;

context.beginPath();
context.arc(centroX, centroY, radio, 0, 2 * Math.PI, false);
context.fillStyle = "green";
context.fill();

document.querySelector('#animar').addEventListener('click', event => {
    event.preventDefault();
    const keyframes = [
        { transform: "translate(0, 0)" },
        { transform: "translate(200px, 0)" },
        { transform: "translate(200px, 200px)" },
        { transform: "translate(0, 200px)" },
        { transform: "translate(0,0)"}
      ];
      circulo.animate(keyframes, 4000);
});

// Ejercicio 10
const contenedorPokemon = document.querySelector('.contenedorPokemon');

const fetchPokemon = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
        crearPokemon(data);
        console.log(data);
    });
}

const fetchPokemons = (numero) => {
    for (let index = 1; index <= numero; index++) {
        fetchPokemon(index);
    }
}

const crearPokemon = (pokemon) => {
    
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('card');
    tarjeta.classList.add('text-center');

    const contenedorImagen = document.createElement('div');
    contenedorImagen.classList.add('card-header');

    const imagen = document.createElement('img');
    imagen.classList.add('card-img-top');
    imagen.src = pokemon.sprites.front_default;

    contenedorImagen.appendChild(imagen);

    const numeroPk = document.createElement('div');
    numeroPk.classList.add('card-body');
    numeroPk.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

    const nombrePk = document.createElement('div');
    nombrePk.classList.add('card-footer');
    nombrePk.classList.add('fw-bold');
    nombrePk.classList.add('text-capitalize');
    nombrePk.textContent = pokemon.name;

    tarjeta.appendChild(nombrePk);
    tarjeta.appendChild(contenedorImagen);
    tarjeta.appendChild(numeroPk);

    contenedorPokemon.appendChild(tarjeta);
}

fetchPokemons(80);