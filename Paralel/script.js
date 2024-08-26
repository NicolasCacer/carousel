const right = document.getElementById('right');
const left = document.getElementById('left');
const display = document.querySelector('.display-image');
const photo = document.querySelector('.photo');
const images = ['../images/image_1.jpg','../images/image_2.jpeg','../images/image_3.jpeg']
let n = 0;

function UpdateButton(button){
    if (button==right){
        if (n==images.length-1){
            right.style.visibility = 'hidden';
        }
        left.style.visibility = 'visible';
    }
    else if (button==left){
        if (n==0){
            left.style.visibility = 'hidden';
        }
        right.style.visibility = 'visible';
    }
}

UpdateButton(left)

right.addEventListener('click',function(){
    if (n < images.length-1){
        photo.classList.add('hidden');
        photo.addEventListener('transitionend',function(){
            n++;
            photo.src = images[n];
            photo.classList.remove('hidden');
            UpdateButton(right);
        },{once:true})
    }
})

left.addEventListener('click',function(){
    if (n > 0){
        photo.classList.add('hidden');
        photo.addEventListener('transitionend',function(){
            n--;
            photo.src = images[n];
            photo.classList.remove('hidden');
            UpdateButton(left);
        },{once:true})
    }
})

right.addEventListener('mouseover',function(){
    right.style.opacity = 0.5;
})
right.addEventListener('mouseout',function(){
    right.style.opacity = 1;
})

left.addEventListener('mouseover',function(){
    left.style.opacity = 0.5;
})
left.addEventListener('mouseout',function(){
    left.style.opacity = 1;
})

