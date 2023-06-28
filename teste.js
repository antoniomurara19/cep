const pesquisa = document.getElementById('pesquisa')
const cidade = document.getElementById('cidade')
const bairro = document.getElementById('bairro')
const rua = document.getElementById('rua')
const res = document.getElementById('res').value

pesquisa.addEventListener('click', ()=>{
    const value_cep = document.getElementById('cep').value
    console.log(value_cep)
    const cep = new XMLHttpRequest()
    cep.open('GET', 'https://viacep.com.br/ws/'+value_cep+'/json/')
    cep.send()

    cep.onload = function(){

        let pesq_cep = JSON.parse(cep.responseText)
        console.log(pesq_cep)

        if(pesq_cep.logradouro != ''){
            cidade.setAttribute('value',pesq_cep.localidade);
            rua.setAttribute('value',pesq_cep.logradouro);
            bairro.setAttribute('value',pesq_cep.bairro);
            document.getElementById('estado').value = (pesq_cep.uf)

        }else{
            cidade.setAttribute('value',pesq_cep.localidade);
            document.getElementById('estado').value = (pesq_cep.uf)
            rua.setAttribute('value','');
            bairro.setAttribute('value','');
        } 
    }
})

