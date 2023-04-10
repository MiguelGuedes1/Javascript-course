const prompt = require('prompt-sync')();

var n
var i

do {
    n=Number(prompt("Quantos alunos tem a sua turma: "))
    console.log("O numero maximo de alunos é 10")
} while (n<1||n>10);


var notas = [];

for(var i=0;i<n;i++){
    notas[i]=Number(prompt(`Diga quanto tirou no ${i+1} teste: `))
}

console.log(`As notas inseridas foram ${notas}`)







