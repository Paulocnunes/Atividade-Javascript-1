alert("Saiba qual número é maior");
let Numero1 = window.prompt("Informe o primeiro número.");
let Numero2 = window.prompt("Informe o segundo número.");

let Resultado = Numero1 > Numero2;

if (Resultado) {
    alert('O número' + Numero1 + 'é maior que' + Numero2);
} else if (Numero2 > Numero1) {
    alert('O número' + Numero2 + 'é maior que' + Numero1) + '.';
} else {
    alert('Os números são iguais')
}