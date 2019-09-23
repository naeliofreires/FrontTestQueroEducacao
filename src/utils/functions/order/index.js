export const orderASC = (value1, value2) => {
  // Negativo - Se o primeiro argumento for menor que o segundo [colocado na frente do segundo]
  if (value1.university.name < value2.university.name) {
    return -1;
  }
  // Positivo - Se o primeiro argumento for maior [colocado atrás do segundo]
  if (value1.university.name > value2.university.name) {
    return 1;
  }
  return 0;
};

export const orderDESC = (value1, value2) => {
  // Negativo - Se o primeiro argumento for menor que o segundo [colocado atrás do segundo]
  if (value1.university.name < value2.university.name) {
    return 1;
  }
  // Positivo - Se o primeiro argumento for maior [colocado na frente do segundo]
  if (value1.university.name > value2.university.name) {
    return -1;
  }
  return 0;
};
