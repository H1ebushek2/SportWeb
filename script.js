var myModal = document.getElementById('enrol');
var mainButton = document.getElementById('openModal');
var mySelect = document.getElementById('tariffSelect');
var myForm = document.getElementById('leadForm');

function showWindow() {
    myModal.classList.add('active');
}

function closeModal() {
    myModal.classList.remove('active');
}

mainButton.onclick = function() {
    showWindow();
}

function chooseTariff(name) {
    showWindow();
    mySelect.value = name;
}

myForm.onsubmit = function(event) {
    event.preventDefault();
    alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
    closeModal();
    myForm.reset();
}