/*exemplo 1 do 'for' */

let numero = 4;

for (let contador = 1/*expressão inicial*/; contador <= 10/*enquanto 'contador'for menor ou igual a 10, vai entrar no 'for'*/ ; contador = contador + 1 /*enquanto entrar no'for' o programa fará 'contador' mais 1 até chegar no 10*/){
    console.log(contador * numero)
}


/*exemplo 2 do 'for' */

const listaDeCompras = [
'maçã',
'gengibre',
'miojo',
'biscoito/bolacha',
'banana',
'feijão carioquinha',
'pasta de dente',
];
const carrinho = [];

for(let posicaoNaLista = 0; posicaoNaLista < listaDeCompras.length;posicaoNaLista = posicaoNaLista + 1 ){
    if (listaDeCompras[posicaoNaLista] === 'maçã' || listaDeCompras[posicaoNaLista] === 'banana'){
        carrinho.push(listaDeCompras[posicaoNaLista]);
    }
}
console.log(carrinho)

