const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')


hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('reservation-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateForm()) {
        // Enviar formulario (aquí puedes agregar tu lógica para enviar los datos)
        alert('Reserva enviada exitosamente');
        form.reset();
      }
    });
  
    function validateForm() {
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var checkIn = document.getElementById('check-in').value;
      var checkOut = document.getElementById('check-out').value;
      var guests = document.getElementById('guests').value;
  
      if (name.trim() === '') {
        alert('Por favor, ingresa tu nombre');
        return false;
      }
  
      if (email.trim() === '') {
        alert('Por favor, ingresa tu correo electrónico');
        return false;
      }
  
      if (checkIn.trim() === '') {
        alert('Por favor, selecciona la fecha de entrada');
        return false;
      }
  
      if (checkOut.trim() === '') {
        alert('Por favor, selecciona la fecha de salida');
        return false;
      }
  
      if (guests.trim() === '' || guests <= 0) {
        alert('Por favor, ingresa una cantidad válida de huéspedes');
        return false;
      }
  
      return true;
    }
  });
  


  document.addEventListener('DOMContentLoaded', function() {
    var residence = document.querySelector('.residence');
  
    window.addEventListener('scroll', function() {
      if (isElementInViewport(residence)) {
        residence.classList.add('show');
      }
    });
  
    function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  });
  





const apiKey = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'; // Reemplaza con tu propia API key de OpenWeatherMap

// Función para obtener el clima actual
function obtenerClima(ciudad) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      mostrarClima(data);
    })
    .catch(error => {
      console.error('Error al obtener el clima:', error);
    });
}

// Función para mostrar los datos del clima en el HTML
function mostrarClima(data) {
  const ciudadElement = document.getElementById('ciudad');
  const descripcionElement = document.getElementById('descripcion');
  const temperaturaElement = document.getElementById('temperatura');
  const humedadElement = document.getElementById('humedad');

  ciudadElement.textContent = data.name;
  descripcionElement.textContent = data.weather[0].description;
  temperaturaElement.textContent = `Temperatura: ${Math.round(data.main.temp - 273.15)}°C`;
  humedadElement.textContent = `Humedad: ${data.main.humidity}%`;
}

// Ejemplo de uso
obtenerClima('Buenos Aires'); // Reemplaza 'Ciudad' con el nombre de la ciudad que deseas obtener el clima
