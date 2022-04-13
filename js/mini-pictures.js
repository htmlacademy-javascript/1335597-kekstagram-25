import { createFullPhotoElement } from './data';

const picturesList = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarPictures = createFullPhotoElement(10);

const fragmentList = document.createDocumentFragment();

similarPictures.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src=url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  fragmentList.appendChild(pictureElement);
});

picturesList.appendChild(fragmentList);
