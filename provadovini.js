var readlineSync = require('readline-sync');


/*var v1 = Number.parseFloat(readlineSync.question('Digite qual foi a queda de tensao no terminal da resistencia 1:'));
var r1 = Number.parseFloat(readlineSync.question('Digite o valor da resistencia 1:'));
var r2 = Number.parseFloat(readlineSync.question('Digite o valor da resistencia 2:'));

var meiocalculo = (r1/(r1+r2));
var v = (meiocalculo*v1);

console.log('O valor da fonte de tensão é:', v);


var resposta  = (readlineSync.question('Deseja continuar calculando? (S/N)'));

function resp() {
    switch (resposta) {
    case "S":console.log('como que repito?');
    break;
    case "N": console.log('Calculo encerrado');
    break;
    default: console.log('Nao entendi. Deseja continuar calculando? (S/N)'); 
}
}*/

/*do {
    var v1 = Number.parseFloat(readlineSync.question('Digite qual foi a queda de tensao no terminal da resistencia 1:'));
    var r1 = Number.parseFloat(readlineSync.question('Digite o valor da resistencia 1:'));
    var r2 = Number.parseFloat(readlineSync.question('Digite o valor da resistencia 2:'));

    var meiocalculo = (r1/(r1+r2));
    var v = (meiocalculo*v1);

    console.log('O valor da fonte de tensão é:', v);
    var resposta  = (readlineSync.question('Deseja continuar calculando? (S/N)'));

    switch (resposta) {
        case "S":console.log('como que repito?');
        break;
        case "N": console.log('Calculo encerrado');
        break;
        default: console.log('Nao entendi. Deseja continuar calculando? (S/N)'); 
    }
while (resposta = 'N');
}*/


function calculos() {
    var v1 = Number.parseFloat(readlineSync.question('Digite qual foi a queda de tensao no terminal da resistencia 1:'));
    var r1 = Number.parseFloat(readlineSync.question('Digite o valor da resistencia 1:'));
    var r2 = Number.parseFloat(readlineSync.question('Digite o valor da resistencia 2:'));

    var meiocalculo = (r1/(r1+r2));
    var v = (meiocalculo*v1);

    console.log('O valor da fonte de tensão é:', v);
    var resposta  = (readlineSync.question('Deseja continuar calculando? (S/N)'));
}

calculos();


   

if (resposta === "S" || "N") {
        
    while (resposta = "S") {
        calculos();
    }
    if (resposta = "N") {
        console.log('Calculo encerrado');
    } else {
    if (resposta !== "S" || "N") {
        console.log('Nao entendi a resposta');
    }
    }
    }
    


    