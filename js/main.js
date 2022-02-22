// Функция генерации случайных чисел от 0 до 100
function randomNumber(min, max){
  if (max>min) {
    const number = Math.random()*(max-min) + min;
    return Math.floor(number);
  }
  console.log('Ошибка!Максимальное число меньше минимального.');
}
randomNumber(0,9);
//Функция сравнения длины строки с максимальной длиной
function comparLengthString (string, stringMax) {
  if (string.length < stringMax) {
    return(true);
  }
  else{
    return(false);
  }
}
