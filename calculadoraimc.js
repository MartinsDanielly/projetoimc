document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems ="center";
document.body.style.flexDirection = "column";
document.body.style.padding ="0.3%";
document.body.style.backgroundColor ="#FFF";

const header = document.createElement("div");
document.body.appendChild(header);

header.style.background ="#ff33e1"
header.style.height ="100%";
header.style.width ="80%";
header.style.padding ="20% 3%";
header.style. border = "3px solid #fff";
header.style.display ="flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.flexDirection ="column";

const h1 = document.createElement("h1");
h1.textContent ="Calcular IMC";
header.appendChild(h1)
h1.style.fontFamily = "'Chakra Petch', sans-serif";
h1.style.fontSize = "200%";
h1.style.color = "#fff";

const iconReset = document.createElement("img");
header.appendChild(iconReset);
iconReset.src = "reset-icon-.png";
iconReset.style.width = "50px";
iconReset.style.height = "50px";
iconReset.style.position = "absolute";
iconReset.style.right = "26%";
iconReset.style.top = "49%";
iconReset.style.transition = "0.8s";
iconReset.addEventListener("click", function (){
    iconReset.style.transform = "scale(1.2) rotate(180deg)";
    setTimeout(() =>{
        window.location.reload(true);
    },500);
});

 const inputName = document.createElement("input");
inputName.placeholder = "Digite seu nome";
inputName.setAttribute = ("type","text");
inputName.id ="nome";
header.appendChild(inputName);
inputName.style.width = "50%";
inputName.style.margin =".5% 1%";
inputName.style.padding = "1%  1%";
inputName.styleborder = "2px solid #fff";
inputName.style.borderRadius ="5px"
inputName.style.outline ="none"
inputName.style.transition= "0.8s"

inputName.style.fontFamily="'Chakra Petch', sans-serif"
inputName.addEventListener("mouseenter", function(){
inputName.style.backgroundColor = "#fff";
})

const inputIdade = document.createElement("input");
inputIdade.placeholder = "Digite sua idade";
inputIdade.setAttribute = ("type","number");
inputIdade.id ="idade";
header.appendChild(inputIdade);
inputIdade.style.width = "7%";
inputIdade.style.margin =".5% 1%";
inputIdade.style.padding = "1%  1%";
inputIdade.styleborder = "2px solid #000";
inputIdade.style.borderRadius ="5px"
inputIdade.style.outline ="none"
inputIdade.style.transition= "0.8s"
inputIdade.style.fontFamily="'Chakra Petch', sans-serif"
inputIdade.addEventListener("mouseenter", function(){
inputIdade.style.backgroundColor = "#fff";
});

const inputPeso = document.createElement("input");
inputPeso.placeholder = "Digite seu peso";
inputPeso.setAttribute = ("type","text");
inputPeso.id ="peso";
header.appendChild(inputPeso);
inputPeso.style.width = "7%";
inputPeso.style.margin =".5% 1%";
inputPeso.style.padding = "1%  1%";
inputPeso.styleborder = "2px solid #000";
inputPeso.stylehover="#d3d3d3"
inputPeso.style.borderRadius ="5px";
inputPeso.style.outline ="none";
inputPeso.style.transition= "0.8s";
inputPeso.style.fontFamily="'Chakra Petch', sans-serif";
inputPeso.addEventListener("mouseenter", function(){
inputPeso.style.backgroundColor = "#fff";
});

const inputAltura = document.createElement("input");
inputAltura.placeholder = "Digite sua Altura";
inputAltura.setAttribute = ("type","text");
inputAltura.id ="altura";
header.appendChild(inputAltura);
inputAltura.style.width = "7%";
inputAltura.style.margin =".5% 1%";
inputAltura.style.padding = "1%  1%";
inputAltura.style.border = "2px solid #000";
inputAltura.style.borderRadius ="5px";
inputAltura.style.outline ="none";
inputAltura.style.transition= "0.8s";
inputAltura.style.fontFamily="'Chakra Petch', sans-serif";
inputAltura.addEventListener("mouseenter", function(){
inputAltura.style.backgroundColor = "#fff";
});


const inputBtn = document.createElement("button");
inputBtn.textContent="botao"
header.appendChild(inputBtn)


inputBtn.addEventListener("mouseenter", function (){
    inputBtn.style.backgroundColor = "#d3d3d3";
    inputBtn.style.transform = "scale(1.05)"
});
inputBtn.addEventListener("mouseleave", function (){
    inputBtn.style.backgroundColor = "#1111";
    inputBtn.style.transform = "scale(1)"
});


const ul = document.createElement("ul");
ul.style.width = "80%";
document.body.appendChild(ul);

inputBtn.addEventListener("click", function() {
    const no = document.getElementById("nome").value;
    const p = document.getElementById("peso").value;
    const al = document.getElementById("altura").value;
    const idade = document.getElementById("idade").value;
    const imc = (p/(al*al)).toFixed(1);


    if (!no && !p && !al && !idade) {
        return
    }
    let corDeFundo = '';


    if (imc < 18.5) {
        corDeFundo = '#1E90FF';
    } else if (imc <= 25) {
        corDeFundo = '#00FF00';
    } else if (imc <= 30) {
        corDeFundo = '#FFFF00';
    } else if (imc <= 35) {
        corDeFundo = '#FF8C00';
    } else if (imc <= 40) {
        corDeFundo = '#FF0000';
    } else {
        corDeFundo = '#8B0000';
    }


    const div = document.createElement("div");
    div.style.backgroundColor = corDeFundo;
    const pNnome = document.createElement("p");
    pNnome.textContent = no;
    const pIdade = document.createElement("p");
    pIdade.textContent = idade;
    const pImc = document.createElement("p");
    pImc.textContent = imc;
    div.appendChild(pNnome);
    div.appendChild(pIdade);
    div.appendChild(pImc);
    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';
   
    const li = document.createElement("li");
    li.style.marginTop = "10px";
    li.appendChild(div);
    ul.appendChild(li);
})


const legenda = document.createElement("footer");
header.appendChild(legenda);
legenda.style.width = "100%";
legenda.style.display = "flex";
legenda.style.justifyContent = "space-around";
legenda.style.alignItems = "center";
legenda.style.fontFamily = "'Chakra Petch', sans-serif";
legenda.style.flexDirection = "row";
legenda.style.marginTop = "50px";


const pesobaixo = document.createElement("div");
legenda.appendChild(pesobaixo);
pesobaixo.textContent = "Abaixo do peso";
pesobaixo.style.backgroundColor = "#1E90FF";
pesobaixo.style.width = "10%";
pesobaixo.style.margin = "1% .5%";
pesobaixo.style.padding = ".5% .2%";
pesobaixo.style.border = "2px solid #1E90FF";
pesobaixo.style.borderRadius = "5px";
pesobaixo.style.textAlign = "center";

const pesoNormal = document.createElement("div");
legenda.appendChild(pesoNormal);
pesoNormal.textContent = "Peso Normal";
pesoNormal.style.backgroundColor = "#00FF00";
pesoNormal.style.width = "10%";
pesoNormal.style.margin = ".5% .5%";
pesoNormal.style.padding = ".5% .2%";
pesoNormal.style.border = "2px solid #00FF00";
pesoNormal.style.borderRadius = "5px";
pesoNormal.style.textAlign = "center";

const sobrePeso = document.createElement("div");
legenda.appendChild(sobrePeso);
sobrePeso.textContent = "Obesidade leve";
sobrePeso.style.backgroundColor = "#FFFF00";
sobrePeso.style.width = "10%";
sobrePeso.style.margin = ".5% .5%";
sobrePeso.style.padding = ".5% .2%";
sobrePeso.style.border = "2px solid  #FFFF00";
sobrePeso.style.borderRadius = "5px";
sobrePeso.style.textAlign = "center";

const moderada = document.createElement("div");
legenda.appendChild(moderada);
moderada.textContent = "obesidade moderada";
moderada.style.backgroundColor = "#D2691E";
moderada.style.width = "13%";
moderada.style.margin = ".5% .5%";
moderada.style.border = "2px solid #D2691E";
moderada.style.padding = ".5% .2%";
moderada.style.borderRadius = "5px";
moderada.style.textAlign = "center";

const morbida = document.createElement("div");
legenda.appendChild(morbida);
morbida.textContent = "obesidade morbida"
morbida.style.backgroundColor = "#FF0000";
morbida.style.width = "13%";
morbida.style.margin = ".5% .5%";
morbida.style.border = "2px solid #FF0000";
morbida.style.padding = ".5% .2%";
morbida.style.borderRadius = "5px";
morbida.style.textAlign = "center";