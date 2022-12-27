let corAtual = 'black';
document.querySelectorAll('.colorArea .color').forEach(item =>{
    item.addEventListener('click' , colorClickEvent);
});
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    console.log("COR CLICADA: ", color);
}