"use strict";
let url = new URL('https://api.thecatapi.com/v1/images/search?limit=10');
let showCats = document.querySelector('#cats-picture');
let btn1 = document.querySelector('next-btn');
let btn2 = document.querySelector('pre-btn');
const p = fetch(url)
    .then(Response => {
    return Response.json();
}).then(catsArray => {
    logCat(catsArray);
});
function logCat(catsArray) {
    showCats.src = catsArray[0].url;
}
btn1 === null || btn1 === void 0 ? void 0 : btn1.addEventListener('click', function () {
    btn1.innerHTML = "hej";
});
