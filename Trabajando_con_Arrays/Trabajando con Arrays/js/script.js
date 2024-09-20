// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array, filtra los elementos string y los muestra en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";

  // Filtrar solo los elementos que sean de tipo string
  const stringArray = array.filter((element) => typeof element === "string");

  // Ordenar el array alfabéticamente
  stringArray.sort();

  // Mostrar los elementos en pantalla
  stringArray.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Mostrar el array filtrado y ordenado
  showList(strangeArray);
});