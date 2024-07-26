const suma = (valor1, valor2) => {
  if (isNaN(valor1) || isNaN(valor2))
    return "El tipo del parámetro tiene que ser numérico.";
  return valor1 + valor2;
};

const resta = (valor1, valor2) => {
  if (isNaN(valor1) || isNaN(valor2))
    return "El tipo del parámetro tiene que ser numérico.";
  return valor1 - valor2;
};

const division = (valor1, valor2) => {
  if (isNaN(valor1) || isNaN(valor2))
    return "El tipo del parámetro tiene que ser numérico.";

  if (valor2 === 0) return "No se puede divir por cero";
  return valor1 / valor2;
};

const multi = (valor1, valor2) => {
  if (isNaN(valor1) || isNaN(valor2))
    return "El tipo del parámetro tiene que ser numérico.";

  return valor1 * valor2;
};
