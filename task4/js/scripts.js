'use strict';


const widthField = document.querySelector('#width');
const heightField = document.querySelector('#height');
const button = document.querySelector('.j-btn');
const content = document.querySelector('.content');


const getRequest = (width, height) => {
    return fetch(`https://picsum.photos/${width}/${height}/`)
    .then(response => response.url )
    .catch(error => console.log('Error >> ', new Error(error)))
}


const showImage = url => {
    const image = `<img class="img" src="${url}">`;
    content.innerHTML = image;
}


const checkField = field => {
    if (field.value && isFinite(field.value)) {
        if (+field.value >= 100 && +field.value <= 300) {
            field.classList.remove('incorrect');
            return true
        }
    }
    field.classList.add('incorrect');
    return false;
}


button.addEventListener('click', async e => {
    e.preventDefault();
    const isWidthCorrect = checkField(widthField);
    const isHeightCorrect = checkField(heightField);
    if (isWidthCorrect && isHeightCorrect) {
        showImage(await getRequest(widthField.value, heightField.value));
    }
})
