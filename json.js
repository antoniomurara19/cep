const Carro = {
    nome : 'palio',
    motor : '1.6 ',
    cor : 'laranja',
    opcionais : {
        roda : 'roda de liga leve',
        banco : 'couro',
        tracao : '4x4'
    }
}

console.log(Carro)

const valores_string = JSON.stringify(Carro)

console.log(valores_string)