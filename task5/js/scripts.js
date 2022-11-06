'use strict';


const pageField = document.querySelector('#page');
const limitField = document.querySelector('#limit');
const button = document.querySelector('.j-btn');
const content = document.querySelector('.content');


const getRequest = (page, limit) => {
    return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    .then(response => response.json())
    .then(data => {
        window.localStorage.setItem('images', JSON.stringify(data))
        return data;
    })
    .catch(error => console.log('Error >> ', new Error(error)))
}


const showImages = images => {
    let result = '';
    images.forEach(image => {
        result += `<img class="image" src="${image.download_url}">`
    })
    content.innerHTML = result;
}


const checkField = field => {
    if (field.value && isFinite(field.value)) {
        if (+field.value >= 1 && +field.value <= 10) {
            field.classList.remove('incorrect');
            return true
        }
    }
    field.classList.add('incorrect');
    return false;
}


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.images) {
        showImages(JSON.parse(localStorage.images));
    }
})


button.addEventListener('click', async e => {
    e.preventDefault();
    const isPageCorrect = checkField(pageField);
    const isLimitCorrect = checkField(limitField);
    if (isPageCorrect && isLimitCorrect) {
        showImages(await getRequest(pageField.value, limitField.value));
    }
})
