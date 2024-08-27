const photo = document.getElementById('photo');
const left = document.getElementById('left');
const right = document.getElementById('right');

const images = ['../images/image_1.jpg','../images/image_2.jpeg','../images/image_3.jpeg']
let index = 0;

function UpdateButtons(){
    if (index == 0){
        left.style.opacity = 0;
    }
    else if (index == images.length-1){
        right.style.opacity = 0;
    }
    else {
        right.style.opacity = 1;
        left.style.opacity = 1;
    }
}
UpdateButtons();

right.addEventListener('click', function(){
    if (index <images.length-1){
        photo.style.opacity = 0;
        photo.addEventListener('transitionend', function(){
            index++;
            photo.src = images[index];
            photo.style.opacity = 1;
            UpdateButtons();
        },{once:true})
    }
});

left.addEventListener('click', function(){
    if (index > 0){
        photo.style.opacity = 0;
        photo.addEventListener('transitionend', function(){
            index--;
            photo.src = images[index];
            photo.style.opacity = 1;
            UpdateButtons();
        },{once:true})
    }
});