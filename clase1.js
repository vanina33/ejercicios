function imprimirPiramide(numero) {
    let patron = '';
    for (let i = 1; i <= numero; i++) {
      for (let j = 1; j <= i; j++) {
        patron += j + ' ';
      }
      console.log(patron);
      patron = '';
    }
  }
  
  imprimirPiramide(6); // Imprime la pirámide desde 1 hasta 6
  
  
// actividad 2;
function imprimirPiramide(numero) {
    let patron = '';
    for (let i = 1; i <= numero; i++) {
      for (let j = 1; j <= i; j++) {
        patron += j + ' ';
      }
      console.log(patron);
      patron = '';
    }
  }
  
  imprimirPiramide(3); // Imprime la pirámide desde 1 hasta 3
  



