let expresions= require('./expresiones.json')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  function analizadorSintac(txt) {
    console.log(expresions)
  }
  
  readline.question('Ingrese el texto que desea analizar : ', txt => {
    analizadorSintac(txt);
    readline.close()
  })