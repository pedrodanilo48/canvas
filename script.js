let corAtual = 'black';
let screen = document.querySelector('#tela');
document.querySelectorAll('.colorArea .color').forEach(item =>{
    item.addEventListener('click' , colorClickEvent);
});
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    console.log("COR CLICADA: ", color);
    corAtual = color;
    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}