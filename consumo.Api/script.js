// Estandar-ECMAScript6- ECMAS6
// Manejo de errores -try -catch

const cargarInformacion = async() => {

}

try {
    const respuesta = await fetch('../json/persona.json');
    const persona = await respuesta.json();
    console.log('persona obtenida',persona) 
    mostrarInfo(persona); 
} catch (error) {
    console.error('Hubo un error inesperado:', error);
    alert('Hubo un error inesperado, intente mas tarde');
}


const cargarApi = async()=> {
try {
    const respuesta = await fetch('https://ghibliapi.vercel.app/films')
    const peliculas = await respuesta.json();
console.log('peliculas obtenidas', peliculas)
} catch (error) {
    console.error('Hubo un error inesperado:', error);
    alert('Hubo un error inesperado, intente mas tarde');
}
}

const mostrarInfo = (persona) => {
    console.log('Vamos a construir un html');
  
    const contenedor = document.getElementById('datos');
  
    contenedor.innerHTML = `
      <h2 class="miNombre">${persona.nombre}</h2>
      <p class="miEdad">Edad: ${persona.edad}</p>
      <div class="misHobbies">
        <h3>Hobbies</h3>
        <li>${persona.hobbies[0]}</li>
        <li>${persona.hobbies[1]}</li>
        <li>${persona.hobbies[2]}</li>
      </div>
    `;
  };
  