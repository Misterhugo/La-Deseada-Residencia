feriados.js
// https://api.control-z.cl/api/feriados


let url = "https://api.control-z.cl/api/feriados"
$.get(url, function(respuesta) {
    /* te muestra todos los feriados
    console.log(respuesta)
    te muestra un feriado
    respuesta.forEach(function(item) {
      console.log(item)  
    })
    */
   // te muestra el ultimo feriado
   console.log(respuesta [respuesta.lenght -1])
    let feriado = respuesta[respuesta.length -1]
     $("#feriado").text(feriado.nombre + "-" + feriado.fecha)

}, "json")