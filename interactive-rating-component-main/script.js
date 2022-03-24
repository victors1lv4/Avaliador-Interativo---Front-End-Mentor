let window2 = document.getElementById('second-window');
window2.style.display = 'none';
let options = document.querySelectorAll('.btn');

//Selecionar o botão

options.forEach((option) => {
    option.addEventListener('click', () => {
        options.forEach((option) => {
            option.classList.remove('active');
        });
        option.classList.add('active');
    });
});
let button = document.querySelector('button.submit');
button.addEventListener('click', submit);
function submit() {
    let window1 = document.getElementById('first-window');
    let text = document.querySelector('.text-write');
    window1.remove();
    window2.style.display = 'block';

    //Verifica qual botão foi selecionado

    options.forEach((option) => {
        if (option.classList.contains('active')) {
            let rated = option.textContent.trim();
            text.innerHTML = `Você selecionou ${rated} de 5`;
        }
    });
}
