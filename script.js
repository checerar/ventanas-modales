console.log('Hello World!')

const btnShowModal = document.querySelectorAll('.show-modal')
const modal = document.querySelector('.modal')
const btnCloseModal = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')

console.log(btnShowModal)
console.log(modal)
console.log(btnCloseModal)
console.log(overlay)

const openModal = function () {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}
btnShowModal.forEach((btn) => btn.addEventListener('click', openModal))
btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

//para que se cierre con la tecla esc:
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})
