"use strict";
let url = new URL('https://api.thecatapi.com/v1/images/search?limit=10');
let showCats = document.querySelector('#cats-picture');
let btn1 = document.getElementById('next-btn');
let btn2 = document.getElementById('pre-btn');
btn1.addEventListener('click', function () {
    const p = fetch(url);
    p.then(Response => {
        return Response.json();
    }).then(catsArray => {
        logCat(catsArray);
    });
});
function logCat(catsArray) {
    showCats.src = catsArray[0].url;
}
