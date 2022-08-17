document.getElementById('btn').addEventListener('click',function(){
	const getBackById=document.getElementById('root');
	const inputField=document.getElementById('output');

	const bgFunc=makeRandomValue();
	inputField.value=bgFunc;

	getBackById.style.backgroundColor=bgFunc;
})
document.getElementById('copy').addEventListener('click',function(){
	const inputField=document.getElementById('output');
	const copyButton = document.getElementById('copy');

	navigator.clipboard.writeText(makeRandomValue());
})

let makeRandomValue=function(){
	const red = Math.floor(Math.random()*255);
	const green = Math.floor(Math.random()*255);
	const blue = Math.floor(Math.random()*255);

	return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}