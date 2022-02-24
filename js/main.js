// Функция генерации случайных чисел от 0 до 100
function randomNumber(min, max){
  if (max>min && min>=0) {
    const number = Math.random()*(max-min) + min;
    return Math.floor(number);
  }
  return ('Ошибка!Максимальное число меньше минимального.');
}
randomNumber(0,9);
//Функция сравнения длины строки с максимальной длиной
function comparLengthString (string, stringMax) {
  return(string.length <= stringMax);
}
comparLengthString ();
