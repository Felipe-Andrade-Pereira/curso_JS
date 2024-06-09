let nome = 'felipe';
let cargo = 'vendedor';
let senha_acesso = '123#';

if (nome === 'Sheila' && cargo === 'gerente' && senha_acesso === '123#'){
    console.log('Bem vindo(a), '+nome);
}else if(nome === 'Jorge' && cargo === 'vendedor'){
    console.log('Seu cargo é: '+ cargo + ' Bem vindo (a),' + nome);
}else{
    console.log('Desculpe, você não tem acesso ao sistema!');
}