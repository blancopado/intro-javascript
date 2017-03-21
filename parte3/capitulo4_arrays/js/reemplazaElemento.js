var array = [1,2,3,4,5];
// función que elimina el último elemento del array y añado otro
function reemplazaElemento(array, nuevoElemento) {
  array.pop();
  array.push(nuevoElemento);
  return array;
}

reemplazaElemento(array, 50);
