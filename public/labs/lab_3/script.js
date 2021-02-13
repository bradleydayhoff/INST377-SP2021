/* Put your javascript in here */



let width = 130; 
let count = 3; 

let ulist = carousel.querySelector('ul');
let photos = carousel.querySelectorAll('li');

let position = 0; 

carousel.querySelector('.prev').onclick = function() {

    position += width * count;
    position = Math.min(position, 0)
    ulist.style.marginLeft = position + 'px';

};

carousel.querySelector('.next').onclick = function() {
    position -= width * count;
    position = Math.max(position, -width * (photos.length - count));
    ulist.style.marginLeft = position + 'px';
};