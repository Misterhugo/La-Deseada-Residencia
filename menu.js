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
  



  $(document).ready(function() {
    const settings = {
      async: true,
      crossDomain: true,
      url: 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Washington%2CDC%2CUSA&contentType=csv&unitGroup=us&shortColumnNames=0',
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
      }
    };
  
    $.ajax(settings).done(function(response) {
      mostrarClima(response);
    });
  
    function mostrarClima(data) {
      const ciudadElement = document.getElementById('ciudad');
      const descripcionElement = document.getElementById('descripcion');
      const temperaturaElement = document.getElementById('temperatura');
      const humedadElement = document.getElementById('humedad');
  
      // Aquí puedes procesar y mostrar los datos del clima
      console.log(data);
  
      // Actualiza los elementos HTML con los datos del clima
      ciudadElement.textContent = 'Washington, DC, USA'; // Reemplaza con la ciudad correspondiente
      descripcionElement.textContent = 'Descripción del clima'; // Reemplaza con la descripción del clima
      temperaturaElement.textContent = 'Temperatura: 25°C'; // Reemplaza con la temperatura actual
      humedadElement.textContent = 'Humedad: 80%'; // Reemplaza con el valor de humedad
    }
  });
  