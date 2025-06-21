function scrollToElement(elementSelector, instance = 0) {

const elements = document.querySelectorAll(elementSelector);

if (elements.length > instance){
    elements[instance].scrollIntoView({ behavior: 'smooth'});
}

}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");

link1.addEventListener('click', () => {
    scrollToElement('#historia');
});

link2.addEventListener('click', () => {
    scrollToElement('#origem');
});

link3.addEventListener('click', () => {
    scrollToElement('#posicoes');
});

link4.addEventListener('click', () => {
    scrollToElement('#times');
});

link5.addEventListener('click', () => {
    scrollToElement('#regras');
});