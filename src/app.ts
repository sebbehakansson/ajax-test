let url: any = new URL('https://api.thecatapi.com/v1/images/search?limit=10');

let showCats: any = document.querySelector('#cats-picture') as HTMLImageElement;
let btn1 = document.querySelector('next-btn') as HTMLButtonElement;
let btn2 = document.querySelector('pre-btn') as HTMLButtonElement;

const p = fetch(url)
    .then(Response => {
        return Response.json();
    }).then(catsArray => {
        logCat(catsArray);
    });

function logCat(catsArray: any) {
     showCats.src = catsArray[0].url;
}

btn1?.addEventListener('click', function() {
});




