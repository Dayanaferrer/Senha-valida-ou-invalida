const input = require ("readline-sync");

const senha = input.question ('-------Digite a senha valida: ')

if (senha == 1234){
    console.log ('-------ACESSO PERMITIDO ------- ')
}else if (senha != 1234){
    console.log ('-------ACESSO NEGADO ------')
}