const qrCodeModal = document.querySelector('.qr-code-modal');
const qrCodeButton = document.querySelector('.qr-code');
const qrCodeCloseModal = document.querySelector('.close-modal');

qrCodeButton.addEventListener('click', () => {
  qrCodeModal.classList.remove('visible')
  qrCodeModal.classList.add('visible')
});

qrCodeCloseModal.addEventListener('click', () => {
  qrCodeModal.classList.remove('visible')
});