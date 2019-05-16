const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
let expresions = require("./expresiones.json");

function analizadorSintac(txt) {
  let tieneExpresion = false;
  expresions.expresiones.forEach(expr => {
    let reg = new RegExp(expr.expresion, "g");
    let match = reg.exec(txt);    
    if (match[0] === match["input"]) {
      console.log(expr.nombre);
      tieneExpresion = true;
    }
  });
  if (!tieneExpresion) {
    console.log("Error: El dato no se reconoce");
  }
}

function getData() {  
  console.log("------------------Menu inicial---------------------3");
  readline.question("Ingrese el texto que desea analizar : ", txt => {
    analizadorSintac(txt);
    readline.close();
  });
}
getData();
