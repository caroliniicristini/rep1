var slides = new Array("imgs/s1.jpg","imgs/s2.jpg");

var tam=slides.length;
var satual=1;
var tmpSlider;


function trocaAutomatica(){
    satual++;
    if(satual >= tam){
        satual=0;
    }
    document.getElementById("dvSlider").style.backgroundImage="url('"+slides[satual]+"')";
}


function iniciaSlider(){
    document.getElementById("dvSlider").style.backgroundImage="url('"+slides[satual]+"')";
    tmpSlider=setInterval(trocaAutomatica,3000);
}

function parar(){
    clearInterval(tmpSlider);
}	

function troca(dir){
    satual+=dir;
    if(satual < 0){
        satual=1;
    }else if(satual >= tam){
        satual=0;
    }
    document.getElementById("dvSlider").style.backgroundImage="url('"+slides[satual]+"')";
    clearInterval(tmpSlider);
    tmpSlider=setInterval(trocaAutomatica,3000);				
}
//segundo slider

var slides1 = new Array("imgs/s1.jpg","imgs/s2.jpg");

var tam1=slides1.length;
var satual1=1;
var tmpSlider1;


function trocaAutomatica1(){
    satual1++;
    if(satual1 >= tam1){
        satual1=0;
    }
    document.getElementById("dvSlider1").style.backgroundImage="url('"+slides1[satual1]+"')";
}
function iniciaSlider1(){
    document.getElementById("dvSlider1").style.backgroundImage="url('"+slides1[satual1]+"')";
    tmpSlider=setInterval(trocaAutomatica,3000);
}
function troca(dir){
    satual1+=dir;
    if(satual1 < 0){
        satual=1;
    }else if(satual1 >= tam1){
        satual1=0;
    }
    document.getElementById("dvSlider1").style.backgroundImage="url('"+slides1[satual1]+"')";
    clearInterval(tmpSlider1);
    tmpSlider1=setInterval(trocaAutomatica1,3000);				
}
function mostrar(e) {
    var tipo = e.parentNode.querySelector("[name='senha']");
    if (tipo.type == "password") {
      tipo.type = "text";
    } else {
      tipo.type = "password";
    }

    tipo.type = tipo.type; //aplica o tipo que ficou no primeiro campo

    if (e.classList.contains("glyphicon-eye-open")) { //se tem olho aberto
      e.classList.remove("glyphicon-eye-open"); //remove classe olho aberto
      e.classList.add("glyphicon-eye-close"); //coloca classe olho fechado
    } else { //senão
      e.classList.remove("glyphicon-eye-close"); //remove classe olho fechado
      e.classList.add("glyphicon-eye-open"); //coloca classe olho aberto
    }

  }
  new Vue({
    render: (h) => h(App),
    mounted() {
      AOS.init()
    },
  }).$mount('#app')