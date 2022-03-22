import {randomNumber} from './util.js';

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

  const createAvatarLink = `img/avatar-${randomNumber(1, 6)}.svg`;

  const createCommentAutor = randomNumber(0, messageName.length-1);

  const createMessageIndex = randomNumber(0, messageText.length-1);

  return {
    id: lastIdComment,
    avatar: createAvatarLink,
    message: messageText[createMessageIndex ],
    name: messageName[createCommentAutor],
  };
};

const createDescriptionPhoto = (i) => {

  const randomDescriptionIndex = randomNumber(0, photoText.length-1);

  const createDescriptionUrl = `photos/${i}.jpg`;

  return {
    id: i,
    url: createDescriptionUrl,
    description: photoText[randomDescriptionIndex],
    likes: randomNumber(15, 200),
    comments: Array.from({length: 2}, createCommentPhoto),
  };
};

const createFullPhotoElement = () =>{

  const descriotionPhoto = [];

  for(let i=0; i<24; i++) {
    descriotionPhoto[i] = createDescriptionPhoto(i);
  }
  return descriotionPhoto;
};

createFullPhotoElement();

export {createFullPhotoElement};
