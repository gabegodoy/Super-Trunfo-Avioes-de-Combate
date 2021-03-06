var aviao0 = {
    aeronave: 'Northrop T-38 Talon',
    img: "IMAGES/T38-Talon.png", 
    atributos: { 
        'Velocidade Máxima': 1300,
        Empuxo: 3500,
        Carga: 5362,
        Envergadura: 7.70,
        Comprimento: 14.13,
        Autonomia: 1835,
    }
}
var aviao1 = {
    
    aeronave: 'General Dynamics F-16',
    img: "IMAGES/General-Dynamics-F-16.png", 
    atributos: {
        'Velocidade Máxima': 2100,
        Empuxo: 11120,
        Carga: 16057,
        Envergadura: 9.45,
        Comprimento: 14.52,
        Autonomia: 2000,
    }
}
var aviao2 = {
    aeronave: 'Panavia Tornado F-2',
    img: "IMAGES/Panavia-Tornado-F-2.png", 
    atributos: {
        'Velocidade Máxima': 2400,
        Empuxo: 14200,
        Carga: 26490,
        Envergadura: 13.90,
        Comprimento: 18.06,
        Autonomia: 3500,
    }
}
var aviao3 = {
    aeronave: 'McDonnell Douglas RF-4E',
    img: "IMAGES/McDonnell-Douglas-RF-4E.png", 
    atributos: {
        'Velocidade Máxima': 2300,
        Empuxo: 16000,
        Carga: 28030,
        Envergadura: 11.77,
        Comprimento: 19.20,
        Autonomia: 2600,
    }
}
var aviao4 = {
    aeronave: 'Northrop F-5E Tiger',
    img: "IMAGES/Northrop-F-5E-Tiger.png",  
    atributos: {
        'Velocidade Máxima': 1700,
        Empuxo: 4600,
        Carga: 11193,
        Envergadura: 8.13,
        Comprimento: 14.86,
        Autonomia: 2863,
    }  
}
var aviao5 = {
    aeronave: 'McDonnell Douglas F-15 B',
    img: "IMAGES/McDonnell-Douglas-F-15-B.png", 
    atributos: {
        'Velocidade Máxima': 2600,
        Empuxo: 23000,
        Carga: 30000,
        Envergadura: 13.05,
        Comprimento: 19.43,
        Autonomia: 4000,
    }  
}
var aviao6 = {
    aeronave: 'McDonnell Douglas AV-8 B',
    img: "IMAGES/McDonnell-Douglas-AV-8-B.png", 
    atributos: {
        'Velocidade Máxima': 1200,
        Empuxo: 9600, 
        Carga: 13494,
        Envergadura: 9.25,
        Comprimento: 14.12,
        Autonomia: 4800,
    }  
}
var aviao7 = {
    aeronave: 'Dassault Mirage IV',
    img: "IMAGES/Dassault-Mirage-IV.png", 
    atributos: {
        'Velocidade Máxima': 2300,
        Empuxo: 14000, 
        Carga: 31600,
        Envergadura: 11.85,
        Comprimento: 23.50,
        Autonomia: 3500,
    }  
}
var aviao8 = {
    aeronave: 'Saab S-35E Draken',
    img: "IMAGES/Saab-S-35E-Draken.png", 
    atributos: {
        'Velocidade Máxima': 2300,
        Empuxo: 8000, 
        Carga: 12270,
        Envergadura: 9.40,
        Comprimento: 15.35,
        Autonomia: 1500,
    }  
}

var cartas = [aviao0, aviao1, aviao2, aviao3, aviao4, aviao5, aviao6, aviao7, aviao8];
var cartaPc;
var cartaUsuario;

/*     //TESTAR TAMBÉM COMO VARIÁVEL
function geraNum (){
    var numero = parseInt(Math.random()*8)
        return numero    
} */

function geraCarta(){

    var numCartaPc = parseInt(Math.random()*9);
    cartaPc = cartas[numCartaPc]

    var numCartaUsuario = parseInt(Math.random()*9);
    cartaUsuario = cartas[numCartaUsuario]
   
     if (numCartaPc == numCartaUsuario){
          numCartaUsuario = geraCarta()
      }

    document.getElementById("form").style.display = "block";
    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;
    exibirOpcoes ();

    /* exibeImgUsuario (); */
    
}

    
//HTML ON

function exibirOpcoes () {

    var opcoes = document.getElementById('opcoes');
    var opcoesTexto = '';

    for (var atributo in cartaUsuario.atributos){
        opcoesTexto += "<input type= 'radio' name= 'atributo' value='" + atributo + "'>" + '   '  + atributo + ':  ' + cartaUsuario.atributos[atributo] + '<br>'
    }
            opcoes.innerHTML = cartaUsuario.aeronave.bold() + '<div> <img src=' + cartaUsuario.img + '> </div>'  + opcoesTexto 
}    

function exibirOpcoesPc () {
    var opcoesPc = document.getElementById('opcoesPc');
    var opcoesTextoPc = '';

    for (var atributo in cartaPc.atributos){
//PRECISA DE ATENÇAO 
        opcoesTextoPc += atributo + '  ' + cartaPc.atributos[atributo] + '<br>'
    }
            opcoesPc.innerHTML = cartaPc.aeronave.bold() +  '<div> <img src=' + cartaPc.img + '> </div>'  + opcoesTextoPc
}    


function obtemAtributoSelecionado () {
    var radioAtributo = document.getElementsByName('atributo');
    for (var i=0; i < radioAtributo.length; i++){
        if (radioAtributo[i].checked){
            return radioAtributo[i].value
        }
    }
}



function jogar(){

    document.getElementById("result").style.display = "block";
    document.getElementById("opcoesPc").style.display = "inline-block"
    exibirOpcoesPc ();
    var atributoSelecionado = obtemAtributoSelecionado ();
    var result = document.getElementById('result')

    document.getElementById("imagemVs").style.display = "inline-block";

    if (cartaUsuario.atributos[atributoSelecionado] > cartaPc.atributos[atributoSelecionado]){
        result.innerHTML = 'Você ganhou!'
        document.getElementById("result").style.background = "Green"
    }
    else if (cartaPc.atributos[atributoSelecionado] > cartaUsuario.atributos[atributoSelecionado]){
        result.innerHTML = 'Você perdeu'
        document.getElementById("result").style.background = "Red"
    }
    else {
        result.innerHTML = 'Tente novamente'
    }

    document.getElementById("btnJogarNovamente").style.display = "block";

}

function jogarNovamente (){
    geraCarta();
    exibirOpcoes();
    document.getElementById("opcoesPc").style.display = "none";
    document.getElementById("imagemVs").style.display = "none";
    document.getElementById("result").style.display = "none"
    document.getElementById("btnJogarNovamente").style.display = "none";
}
