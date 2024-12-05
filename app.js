//capturamos el body y la columna acciones
var body = document.getElementById("body");
console.log(body);

var celdaAcciones = document.getElementById("accion")

// Array con 5 filas de datos ya ingresados 
const array =[
    {"Id": 1, 
    "Nombre": "Pedro",
    "Apellido": "gonzales",
    "Identificacion" : 12222},

    {"Id": 2, 
    "Nombre": "Maria",
    "Apellido": "Perez",
    "Identificacion" : 122242},
    
    {"Id": 3, 
    "Nombre": "Juan",
    "Apellido": "nrique",
    "Identificacion" : 77676767},
    
    {"Id": 4, 
      "Nombre": "Pepe",
      "Apellido": "caballos",
      "Identificacion" : 5484585},

    {"Id": 5, 
      "Nombre": "Pepe",
      "Apellido": "caballos",
      "Identificacion" : 5484585}
]


// vamos a recorrer el arreglo y agregar las filas y columnas necesarias 
// forEach para iterar el array
//appenChild agrega un nuevo nodo debajo del padre

array.forEach((dato) => {
    const fila = 
    document.createElement('tr');
    fila.innerHTML = `
      <td>${dato.Id}</td>
      <td>${dato.Nombre}</td>
      <td>${dato.Apellido}</td>
      <td>${dato.Identificacion}</td>
    `;
    tablaTrabajo.appendChild(fila); 
});

//creando una nueva columna 
const tabla = document.querySelector('table');
const filas = tabla.querySelectorAll('tr');

//creando botones dentro de la nueva columna 
filas.forEach((fila, indice) => {
  if (indice>0) {
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = 'Eliminar';
  fila.appendChild(btnEliminar);

  const btnActualizar = document.createElement("button");
  btnActualizar.textContent = 'Actualizar';
  fila.appendChild(btnActualizar);
  }
  
});
//btn de nuevo
btnNuevo = document.createElement("button");
btnNuevo.textContent = "Nuevo";
body.appendChild(btnNuevo);

/*function btnNuevo(){
  
}
btnNuevo.onclick = function(){
  Nuevo();
}
*/


/* 
function Eliminar(){
  tablaTrabajo.remove();
}

btnEliminar.onclick = function(){
  Eliminar();
}*/






// columna acciones y creacion de botones 
//let acciones = document.getElementById("accionBotones")
//btonActualizar = document.createElement("button")


// Estilos 

/*tablaTrabajo.style.width = 80%;
tablaTrabajo.style.margin = 40px auto;
tablaTrabajo.style.border-collapse = collapse;
tablaTrabajo.style.text-align ="center";*/
   

  

 