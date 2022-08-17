document.getElementById('btn').addEventListener('click',function main(){
const getBackById=document.getElementById('root');

    
    const bgColor = generateColor();

    getBackById.style.backgroundColor=bgColor;

});

function generateColor(){
    const red=Math.floor(Math.random()*255);
    const green=Math.floor(Math.random()*255);
    const blue=Math.floor(Math.random()*255);

    return `rgb(${red},${green},${blue})`;
}