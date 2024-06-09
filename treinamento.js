const numerosSorteados = ['azul', 'vermelho', 'preto', 'rosa', 'dourado', 'verde', 'cinza', 'transparente'];
const numerosEscolhidos = ['branco', 'marrom', 'rosa', 'dourado', 'verde', 'cinza', 'transparente'];
let contador=0;

for(let index = 0;index < numerosEscolhidos.length; index = index +1){
    for(let indexNum = 0; indexNum < numerosEscolhidos.lenght; indexNum = indexNum + 1){
        if (numerosSorteados[indexNum] === numerosEscolhidos[indexNum]){
            contador = contador + 1;
        }
    }
}
console.log(contador);

/*------------------------------------------------------------------------------------------------------ */



