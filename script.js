let corAtual = 'black';
let screen = document.querySelector('#tela');
let contexto = screen.getContext('2d');
let podeDesenhar = false;
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
     if podeDesenhar(){
        
     }
}
function mouseUpEvent(){
    podeDesenhar = false;
}