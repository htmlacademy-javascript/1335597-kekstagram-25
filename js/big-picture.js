import { createFullPhotoElement } from './data';

const bigPictureContainer = document.querySelector('.big-picture');

bigPictureContainer.classList.remove('hidden');

const fillBigPictureContainer = (element) => {
  const data = createFullPhotoElement(1);
  element.querySelector('.big-picture__img').src = data.url;
  element.querySelector('.likes-count').textContent = data.likes;
  element.querySelector('.comments-count').textContent = data.comments.length;
  element.querySelector('.social__caption').textContent = data.description;

  const commentContainerElement = document.querySelector('.social__comments');

  commentContainerElement.innerHTML = '';

  commentContainerElement.innerHTML = data.comments.map((data) => `
    <li class="social__comment">
      <img class="social__picture" src="${data.avatar}" alt="${data.name}" width="35" height="35">
      <p class="social__text">${data.message}</p>
    </li>
  `).join('');
  return element;
};

fillBigPictureContainer(bigPictureContainer);

document.querySelector('.social__comment-count').classList.add('hidden');
document.querySelector('.comments-loader').classList.add('hidden');

document.querySelector('body').classList.add('modal-open');

const buttonBigPhotoClose = document.querySelector('.big-picture__cancel');

buttonBigPhotoClose.addEventListener(click, function()  {
  bigPictureContainer.classList.add('hidden');
});

document.addEventListener('keydown', function(event) => {
  const key = event.key;
  if (key === "Escape") {
    bigPictureContainer.classList.add('hidden');
  };
});
