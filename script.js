let corAtual = 'black';
let screen = document.querySelector('#tela');
let contexto = screen.getContext('2d');
let podeDesenhar = false;
let mouseX = 0;
let mouseY = 0;

document.querySelectorAll('.colorArea .color').forEach(item =>{
    item.addEventListener('click' , colorClickEvent);
});
screen.addEventListener('mousedown', mouseDownEvent)
screen.addEventListener('mousemove', mouseMoveEvent)
screen.addEventListener('mousemove', mouseUpEvent)
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    console.log("COR CLICADA: ", color);
    corAtual = color;
    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}
function mouseDownEvent(){
    podeDesenhar = true;
}
function mouseMoveEvent(){
     if (podeDesenhar){
        let pontoX = x - screen.offsetLeft;
        let pontoY = y - screen.offsetTop;

        console.log(pointX, pointY);
     }
}
function mouseUpEvent(){
    podeDesenhar = fals;
}