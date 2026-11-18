const numeroInicial = +prompt("Digite o número inicial da sequência:");
const quantidadeTermos = +prompt('Digite a quantidade de termos da sequência');

const sequencia = [numeroInicial, numeroInicial];

for (let i = 2; i < quantidadeTermos; i = i + 1) {
  sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
}

console.log(sequencia);
