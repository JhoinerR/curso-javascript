var selecion;
var maq;
var scoretu;
var scoremaquina;


function resultado (selecion,maq){
var aleatorio = Math.floor((Math.random() * (3 - 1 + 1)) + 1);

if (aleatorio ==1) {
        maq = "tijera";
    }else if (aleatorio ==2) {
        maq = "papel";
    }else{
        maq = "piedra";
    }
if (selecion =="tijera" && maq =="papel") {
console.log("has GANADO XD usaste "+selecion+" la maquina uso "+maq);
scoretu =1;
scoremaquina =0;
return("has GANADO XD usaste "+selecion+" la maquina uso "+maq);
}else if (selecion =="papel" && maq =="piedra") {
    console.log("has GANADO XD usaste "+selecion+" la maquina uso "+maq);
    scoretu =1;
scoremaquina =0;
    return("has GANADO XD usaste "+selecion+" la maquina uso "+maq);
}else if (selecion =="piedra" && maq =="tijera") {
    console.log("has GANADO XD usaste "+selecion+" la maquina uso "+maq);
    scoretu =1;
scoremaquina =0;
    return("has GANADO XD usaste "+selecion+" la maquina uso "+maq);
}else if (selecion == maq){
    console.log("has EMPATADO -.-'' usaste "+selecion+" la maquina uso "+maq);
    scoretu =0;
    scoremaquina =0;
    return("has EMPATADO -.-'' usaste "+selecion+" la maquina uso "+maq);
}else{
    console.log("has PERDIDO =( usaste "+selecion+" la maquina uso "+maq);
    scoretu =0;
    scoremaquina =1;
    return("has PERDIDO =( usaste "+selecion+" la maquina uso "+maq);
}

}; 

function juego(){
    var input = document.getElementById("seleccion");
    var input2 = input.value;
    var play = resultado(input2,input2);
    document.getElementById("resul").textContent = play;
    // alert(play);
    var scoretu1 = document.getElementById("scoretu");
    scoretu1 = scoretu1.value;
    scoretu1 = scoretu1 +++ scoretu;
    document.getElementById("scoretu").value = scoretu1;
    var scoremaquina1 = document.getElementById("scoremaquina");
    scoremaquina1 = scoremaquina1.value;
    scoremaquina1 = scoremaquina1 +++ scoremaquina;
    document.getElementById("scoremaquina").value = scoremaquina1;
}
