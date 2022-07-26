//select all elements
const openModal = document.querySelector('#open-modal'),
    overlay = document.querySelector('#overlay'),
    closeModal = document.querySelector('#close-modal'),
    modal = document.querySelector('#modal')

//click open modal
openModal.addEventListener('click', () => {
    modal.classList.add('open'),
        overlay.classList.add('open')
})

//click close modal
closeModal.addEventListener('click', closeModalF)
//click overlay to close modal
overlay.addEventListener('click', closeModalF)
//fuction to close modal
function closeModalF() {
    modal.classList.remove('open'),
        overlay.classList.remove('open')
}