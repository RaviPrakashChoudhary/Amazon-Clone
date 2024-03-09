const images = document.querySelectorAll('.slider ul img');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

let n =0;

function changeSlide() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none'
    }
    images[n].style.display = 'block'

}
changeSlide();

previous.addEventListener('click',(e)=>{
    if(n>0){
        n--
    }else{
        n=images.length-1;
    }
    changeSlide();
})
next.addEventListener('click',(e)=>{
    if(n<images.length-1){
        n++
    }else{
        n=0;
    }
    changeSlide();
})

//Products Slider

const productsprevious=document.querySelector('.productsprevious');
const productsnext=document.querySelector('.productsnext');
const products=document.querySelectorAll('.products');

for(const items of products){
    items.addEventListener('wheel', (e)=>{
        e.preventDefault();
        items.scrollLeft+= e.deltaY;
    })
}

