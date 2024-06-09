/*
Listas que guardam mais de um valor (tipo uma variável só que ao invés de armazenar apenas um valor, pode-se armazenar mais)
*/


const alunosTurma1 = ['Fábio', 'Felipe', 'Augusto', 'Maria Lúcia', 'Joaquim'];
let alunosTurma2 = ['Anderson', 'João', 'Joana', 'Maria João'];
var numerosSorteados = [39, 7, 2, 21, 6, 26];


console.log(alunosTurma1);
console.log(alunosTurma2);
console.log(numerosSorteados)

/*Para acessar um item no array(lista): */

const pizzas = ['Frango com catupiry', 'Peperoni', 'Banana', 'Bacon com cheddar', 'Calabresa'];
console.log(pizzas[3])

/*
Para adicionar mais um item no array, basta colocar adicionar o item usando o push() exemplo: pizzas(escarola)
A vantagem de usar o 'push' é que não é necessário saber o último a posição do último item da lista. será adicionado automaticamente no final
*/
pizzas.push('escarola')
console.log(pizzas)
/*
Para substituir um valor de algum indice, basta pega-lo e colocar o novo valor. Exemplo (neste caso será trocado 'Paraná' por 'Pará')
*/ 
const estadosNorte = ['Acre', 'Amapá', 'Amazonas', 'Paraná', 'Rondônia', 'Roraima', 'Tocantins'];
estadosNorte[3] = 'Pará';

console.log(estadosNorte); // 'Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondônia', 'Roraima', 'Tocantins'

/*
-Para se descobrir o tamanho de nosso array, basta utilizar a função length(comprimento)
-podemos usar a função .length-1 para pegar o último valor da lista
*/