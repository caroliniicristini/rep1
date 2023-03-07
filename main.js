var slides = new Array("imgs/s1.jpg","imgs/s2.jpg");

var tam = slides.length;
var satual=1;
var tmpSlider;


function trocaAutomatica(){
    satual++;
    if(satual >= tam){
        satual = 0;
    }
    document.getElementById("dvSlider").style.backgroundImage="url('"+slides[satual]+"')";
}
function iniciaSlider(){
    document.getElementById("dvSlider").style.backgroundImage="url('"+slides[satual]+"')";
    tmpSlider = setInterval(trocaAutomatica, 3000);
}

function parar(){
    clearInterval(tmpSlider);
}	

function troca(dir){
    satual += dir;
    if(satual < 0){
        satual = 1;
    }else if(satual >= tam){
        satual = 0;
    }
    document.getElementById("dvSlider").style.backgroundImage="url('"+slides[satual]+"')";
    clearInterval(tmpSlider);
    tmpSlider=setInterval(trocaAutomatica,3000);				
}
function clickMenu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    }else{
        itens.style.display = 'block'

    }
}
function tamanho(){
    if(window.innerWidth >= 768){
        itens.style.display = 'block';
    }else{
        itens.style.display = 'none'
    }
}
window.id = 0;
function mod(e){

    let modal = document.querySelector('.modal1')
    modal.style.display = 'block';

    window.id = e;
    console.log(e)
}
function ok(){
    alert(Window.id)
}
function fec(){
    
    let fec = document.querySelector('.modal1')
    fec.style.display = 'none';
}
var aluno = {
    nome: "José",
    turma: "8º ano",
    notas: [ 10, 9, 7.5, 5]
}
