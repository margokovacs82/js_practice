'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const btnsOpenModule = document.querySelectorAll('.show-modal');

//modál megnyitása
function openModal() {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
for (let i = 0; i < btnsOpenModule.length; i++) {
  btnsOpenModule[i].addEventListener('click', openModal);
}

//x-gombra bezár
function closeModal() {
  console.log('close button clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//escape-re bezár
function keypressfunct(event) {
  console.log(event);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
}
document.addEventListener('keydown', keypressfunct);
