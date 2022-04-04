// Функция генерации случайных чисел от 0 до 100

function randomNumber (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

//Функция сравнения длины строки с максимальной длиной

function comparLengthString (string, stringMax) {
  return(string.length <= stringMax);
}
comparLengthString ('dfdjhsodzihgf');

export {randomNumber};

export {comparLengthString};
