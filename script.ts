const url = new URL('https://api.thecatapi.com/v1/images/search?limit=10');

let showCats = document.querySelector('cats-picture') as HTMLParagraphElement;

const p = fetch(url)
    .then(Response => {
        return Response.json();
    }).then(catsArray => {
        logCat(catsArray);
    });

function logCat(cats: any) {
     showCats = cats[0];
}






