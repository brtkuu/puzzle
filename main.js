let index = 1;
function randomPuzzle() {
for(let i=1; i<=24; i++){
    const element = document.createElement('div');
    element.classList.add('puzzle');
    element.style.top=`${Math.random()*40+50}vh`;
    element.style.left=`${Math.random()*90}%`;
    document.querySelector('.conteiner').appendChild(element);
    let mouseIsDown = false;    
element.addEventListener('mousedown', ()=>{
    mouseIsDown=!mouseIsDown;
    element.style.backgroundColor='grey';
    element.style.zIndex=`${index}`;
    index++;
    // element.style.transform = 'translate(-50%, -50%)';
})
element.addEventListener('mouseup', ()=>{
    mouseIsDown=!mouseIsDown;
    element.style.backgroundColor='black'
})
element.addEventListener('mousemove',(e)=>{
    console.log(e);
    if(mouseIsDown){
    let divX = e.clientX;
    let divY = e.clientY;
    element.style.transform = 'translate(-50%, -50%)';
    element.style.top=`${divY}px`;
    element.style.left=`${divX}px`;
    }
})

}
}

randomPuzzle();

