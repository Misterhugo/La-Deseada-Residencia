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
  