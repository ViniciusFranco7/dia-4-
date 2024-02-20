let nome = prompt('seu nome')
let idade = prompt('idade')
let carta = prompt('possui habilitaçao?')
let carro = prompt('possui algum veiculo?')

if(idade === 18 || carta === 'não'){
    console.log('você não pode dirigir!')
} else if (idade === 18 || carta === 'sim' && carro === 'não'){
    console.log('você pode dirigir, mas não tem carro!')
    

} else{(idade === 18 && carta === 'sim' && carro === 'sim')
    console.log('você pode dirigir!')

}