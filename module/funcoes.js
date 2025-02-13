const contatos = require('./contatos.js')
const listaContatos = contatos.contatos['whats-users']


const DadosUsuários = function(number){
    let numberUser = number
    let informacoesUsuario = {id: '', account: '', start: '', end: '', number: ''}
    let status = false

    listaContatos.forEach(function(usuarios){
        console.log(usuarios.number)
        console.log(`NumberUse --> ${numberUser}`)

        if(numberUser == usuarios.number){
            status = true
            informacoesUsuario.id = usuarios.id
            informacoesUsuario.account = usuarios.account
            informacoesUsuario.start = usuarios['created-since'].start
            informacoesUsuario.end = usuarios['created-since'].end
            informacoesUsuario.number = usuarios.number

        }
        
    })

    if(status){
        return informacoesUsuario
    }else{
        return false
    }

    
}

//console.log(DadosUsuários('11955577796'))

const DadosConta = function(number){
    let numberUser = number 
    let informacoesUsuario = {nickname: '', profileImage: '', background: ''}

    listaContatos.forEach(function(conta){
        if(numberUser == conta.number){
            informacoesUsuario.nickname = conta.nickname
            informacoesUsuario.profileImage = conta['profile-image']
            informacoesUsuario.background = conta.background


        }
    })

    return informacoesUsuario
}

//console.log(DadosConta('11955577796'))


const DadosContato = function(number){
    let numberUser = number
    let lista = {lista: []}

    listaContatos.forEach(function(dados){
        if(numberUser == dados.number){
            dados.contacts.forEach(function(contato){
                let informacoesUsuario = {name: '', description: '', image: ''}
                informacoesUsuario.name = contato.name
                informacoesUsuario.description = contato.description
                informacoesUsuario.image = contato.image

                lista.lista.push(informacoesUsuario)
            })
           
        }
    })

    return lista
}

//console.log(DadosContato('11955577796'))


const DadosConversa = function(number){
    let numberUser = number
    let lista = {lista: []}

    listaContatos.forEach(function(dados){
        if(numberUser == dados.number){
            lista.lista = dados.contacts
        }
    })
    return lista
}

//console.log(DadosConversa('11955577796'))



const getContatosUsuarios = function(number, Contato) {
    let numberUser = number
    let dados = {number: number, messages: [] }
    let status = false

    listaContatos.forEach(function(user) {
        if (numberUser == dados.number) {
            user.contacts.forEach(function(contatos) {
                if (contatos.name == Contato) {
                    dados.messages = contatos.messages;
                    status = true
                }
            });
        }
    });

    return dados;
}


//console.log(getContatosUsuarios('11955577796' , 'Ana Maria'));


const getPalavraChave = function(number, contato, PalavraChave){
    let numberUser = number;
    let dad0s = {number: numberUser, messages: [] };
    let status = false

    listaContatos.forEach(function(dados){
        if (numberUser == dados.number){
            dados.contacts.forEach(function(contact){
                if (contact.name == contato){
                    contact.messages.forEach(function(message){
                        if (message.content.includes(PalavraChave)){
                            dad0s.messages.push(message.content)
                            status = true
                        }
                    })
                }
                
            })
            
        }
    })
    return status ? dad0s : status
}

//console.log(getPalavraChave('11987876567', 'Ana Maria', 'you' ))
        
    


module.exports = {
    DadosUsuários,
    DadosConta,
    DadosContato,
    DadosConversa,
    getContatosUsuarios, 
    getPalavraChave
}
