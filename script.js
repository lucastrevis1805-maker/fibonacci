const quantidadeTermos = +prompt('Digite a quantidade de termos da sequência');

const sequencia = [0, 1];

for (let i = 2; i < quantidadeTermos; i = i + 1) {
  sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
}

console.log(sequencia);
