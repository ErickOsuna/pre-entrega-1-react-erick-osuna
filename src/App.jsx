import nombreRandom from "./App.module.css";

function App() {

  console.log("Hola REACT!!!");

  // Operador condicional Ternario
  console.log("Operador condicional Ternario");

  console.log("\n");

  const a = 10;
  const b = 11;

  if (a > b) {
    console.log("A es Mayor que B");
  } else {
    console.log("A es menor que B");
  }

  // Ahora con operador ternario se haría así...

  a > b ? console.log("A es Mayor que B   TERNARIO   ") : console.log("A es menor que B   TERNARIO");

  console.log("\n");

  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

  console.log("\n");

  // Desestructuración
  console.log("Desestructuración");

  console.log("\n");


  const obj = {
    nombre: "Erick",
    apellido: "Osuna",
    edad: 35,
    clase: "React"
  }

  // La forma tradicional de acceder a los elementos de un objeto....

  console.log(obj.nombre + " " + obj.apellido);
  console.log(`${obj.nombre} ${obj.apellido}`);

  // Con la desestructuración quedaría de esta forma...

  const { nombre, apellido } = obj; // Aquí estaría el objeto desestruturado.... 
  // Sirve para acceder SOLAMENTE a los elementos que se piden dentro de las llaves... Muy funcional para las API's.

  console.log(nombre + " " + apellido);
  console.log(`${nombre} ${apellido}`);

  // La desestructuración también funciona con ARRAYS...

  const arr = [1, 2, 3, 4, 5, 6];

  // La forma tradicional de acceder a los elementos de un array....

  console.log(arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3] + " " + arr[4] + " " + arr[5]);
  console.log(`${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} ${arr[5]}`);

  // Con la desestructuración quedaría de esta forma...

  const [posicion1, posicion2, posicion3, posicion4, posicion5, posicion6] = arr;

  console.log(posicion1 + " " + posicion2 + " " + posicion3 + " " + posicion4 + " " + posicion5 + " " + posicion6);
  console.log(`${posicion1} ${posicion2} ${posicion3} ${posicion4} ${posicion5} ${posicion6}`);

  console.log("\n");

  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

  console.log("\n");

  // Operador Spread
  console.log("Operador Spread");

  console.log("\n");

  // Se usa para acceder a todos los elementos de un array...

  const arr2 = ["A", "B", "C", "D", "E", "F"];

  // La forma tradicional de acceder a los elementos de un array....

  console.log(arr2[0] + " " + arr2[1] + " " + arr2[2] + " " + arr2[3] + " " + arr2[4] + " " + arr2[5]);
  console.log(`${arr2[0]} ${arr2[1]} ${arr2[2]} ${arr2[3]} ${arr2[4]} ${arr2[5]}`);

  // Con el Operador Spread...

  console.log(...arr2 + "   OPERADOR SPREAD");

  console.log("\n");

  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

  console.log("\n");

  // Parámetros REST
  console.log("Parámetros REST");

  console.log("\n");

  // Permiten representar un número indefinido de argumentos o parámetros de una función como un ARRAY...

  function miLista(a, b) {
    console.log("Parámetros:");
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("Resto de elementos de la lista: ", arguments); // arguments es una palabra reservada de JS para ver el resto de Elementos del Array
    console.log("Tamaño: " + arguments.length);
    console.log(arguments[2]);
  }

  miLista("Pera", "Manzana", "Mango", "Aguacate", "Papaya", "Maracuyá", "Graifú");

  console.log("\n");

  // Aplicando los PARÁMETROS REST

  function miLista2(a, b, ...otrosElementos) {
    console.log("Parámetros:");
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("Resto de elementos de la lista: ", otrosElementos); // arguments es una palabra reservada de JS para ver el resto de Elementos del Array
    console.log("Tamaño: " + otrosElementos.length);
    console.log(otrosElementos[2]);
  }

  miLista2("Pera", "Manzana", "Mango", "Aguacate", "Papaya", "Maracuyá", "Melocotón");


const styles = {
  color: "blue",
  fontSize: "3rem",
  margin: "2rem",
  padding: "2rem"
}

const isGreen = false;



  return (
    <div>
      <p style = {styles} >Estilo en Línea desde una Constante</p>
      <p style = {{color:"red", fontSize: "3rem", padding: "2rem", margin: "2rem"}} >Estilo en línea directo</p>
      <p className= {nombreRandom.green} >Estilo Importado desde el archivo APP.MODULE.CSS</p>
      <p className= {isGreen ? nombreRandom.green : nombreRandom.purple} >Estilo Importado desde el archivo APP.MODULE.CSS con Operador Ternario</p>
      <button onClick={()=>{console.log("Haz Hecho Click en el BOTÓN!!!!");}}>HAZ CLICK ACÁ!</button>
    </div>
  );
}

export default App;
