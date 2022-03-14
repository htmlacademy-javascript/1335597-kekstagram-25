// Функция генерации случайных чисел от 0 до 100

function randomNumber (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

randomNumber(0,9);

//Функция сравнения длины строки с максимальной длиной

function comparLengthString (string, stringMax) {
  return(string.length <= stringMax);
}
comparLengthString ();

const photoText = [
  'Море',
  'Горы',
  'Цветочки',
  'Солнышко',
  'Лес',
  'Пикник',
  'Котики',
  'Ежики',
  'Собачки',
  'Детки',
];

const messageText = [
  'Всё отлично!',
  'В целом всё неплохо.',
  'Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const messageName = [
  'Витя',
  'Олеся',
  'Лена',
  'Ваня',
  'Саня',
  'Сева',
  'Вика',
  'Таня',
  'Зина',
  'Паша',
  'Аня',
];

let lastIdComment = 0;

const createCommentPhoto = () => {

  lastIdComment++;

  const createAvatarLink = 'img/avatar-' + randomNumber(1, 6) +'.svg';

  const createCommentAutor = randomNumber(0, massageName.length-1);

  return {
    id: lastIdComment,
    avatar: createAvatarLink,
    message: randomNumber,
    name: createCommentAutor,
  };
};

const createDescriptionPhoto = () => {

  const randomDescriptionIndex = randomNumber(0, photoText.length-1);

  const createDescriptionUrl = 'photos/' + i + '.jpg';

  return {
    id: i,
    url: createDescriptionUrl,
    description: photoText[randomDescriptionIndex],
    likes: randomNumber(15, 200),
    comments: createCommentPhoto (),
  };
};

let descriotionPhoto = [];

for(let i=1; i<25; i++) {
  descriotionPhoto[i] = createDescriptionPhoto();
};
