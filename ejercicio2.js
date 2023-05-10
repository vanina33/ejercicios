function elementosComunes(array1, array2) {
    // Filtrar los elementos del primer array que también existen en el segundo array
    const comunes = array1.filter(elemento => array2.includes(elemento));
    return comunes;
  }
  
  // Ejemplo de uso
  const array1 = ['rojo', 'azul', 'amarillo'];
  const array2 = ['blanco', 'negro', 'rojo'];
  const resultado = elementosComunes(array1, array2);
  console.log(resultado); // ["rojo"]
  
  const array3 = [4, 3, true, 'manzana'];
  const array4 = ['pera', 3, false, true, 3, true];
  const resultado2 = elementosComunes(array3, array4);
  console.log(resultado2); // [3, true]