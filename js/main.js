//Подключение модулей
import './data.js';
import {createFullPhotoElement} from './data.js';

createFullPhotoElement();


//Функция сравнения длины строки с максимальной длиной

function comparLengthString (string, stringMax) {
  return(string.length <= stringMax);
}
comparLengthString ('dfdjhsodzihgf');
