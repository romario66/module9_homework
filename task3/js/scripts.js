'use strict';


const limit = document.querySelector('#limit');
const button = document.querySelector('.j-btn');
const content = document.querySelector('.content');


const getRequest = limit => {
    const request = new XMLHttpRequest();
    request.onload = function() {
        if (request.status === 200) {
            showImages(JSON.parse(request.response));
        }
    }
    request.open('GET', `https://picsum.photos/v2/list?limit=${limit}`);
    request.send();
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


button.addEventListener('click', e => {
    e.preventDefault();
    const isLimitCorrect = checkField(limit);
    if (isLimitCorrect) {
        getRequest(limit.value);
    }
})
