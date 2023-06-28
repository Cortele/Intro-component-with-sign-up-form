const heroBtn = document.querySelector('.hero-btn');
const inputs = document.querySelectorAll('input');
const errorIcon = document.querySelectorAll('.hero-error');
const errorParagragh = document.querySelectorAll('.hero-error-p');


heroBtn.addEventListener('click', () => {
    inputs.forEach((input) => {
        if (input.value == "") {
            input.className = 'invalid'
            input.style.margin = '0'
            input.placeholder = ""
            errorIcon.forEach((icon) => {
                icon.classList.remove('visible')
            errorParagragh.forEach((paragragh) => {
                paragragh.classList.remove('visible')
            })
            })
        } else {
            return;
        }
    })
})

