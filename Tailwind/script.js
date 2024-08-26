const container = document.getElementById('photo');
const left = document.getElementById('left');
const right = document.getElementById('right');


right.addEventListener('mouseover',events =>{
    right.style.opacity = 0.5;
})
right.addEventListener('mouseout',events =>{
    right.style.opacity = 1;
})

left.addEventListener('mouseover',events =>{
    left.style.opacity = 0.5;
})
left.addEventListener('mouseout',events =>{
    left.style.opacity = 1;
})