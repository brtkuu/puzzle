let index = 1;
let col = 0;
let row = 0;
function randomPuzzle() {
for(let i=1; i<=24; i++){
    const element = document.createElement('div');
    element.classList.add('puzzle');
    element.style.top=`${Math.random()*40+50}vh`;
    element.style.left=`${Math.random()*90}%`;
    const img= document.createElement('img');
    // img.src = './img/img1.jpg';
    // img.style.height= '100%';
    // img.style.width = '100%';
    // img.style.overflow = 'hidden';
    // element.appendChild(img);
    element.style.backgroundImage = 'url(./img/img1.jpg';
    if(i%6==0){
        col = 0;
        row += 100;
    }
    else{
        col += 100;
    }
    console.log(col);
    console.log(row);
    element.style.backgroundPosition = `${col}px ${row}px`;
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
function createWeb(){
    for(let i=1; i<=24; i++){
        const element = document.createElement('div');
        element.style.gridArea = `e${i}`;
        element.style.border = '2px solid black';
        element.style.height = '100%';
        element.style.width = '100%';
        element.id = `${i}`;
        element.addEventListener('mouseover', () => {console.log(element.offsetTop)})
        document.querySelector('.puzzleWeb').appendChild(element);
    }
}
createWeb();
randomPuzzle();

