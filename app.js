
const contatos = require('./module/funcoes.js')

const express          = require('express')
const cors             = require('cors')
const bodyParser       = require('body-parser')


const app = express()



app.use((request, response, next)=>{
  response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET')
    app.use(cors())

    next()


})

// 11955577796


app.get('/v1/whatsapp/dadospessoais/filtro/:number', cors(), async function (request, response){
    let filtro = request.params.number
    let dados = contatos.DadosUsuários(filtro)
    if(dados){
        response.status(200) 
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível localizar nenhum usuário'})
    }

})






app.get('/v1/whatsapp/dados/filtro/:number', cors(), async function (request, response){
    let filtro = request.params.number
    let dados = contatos.DadosConta(filtro)
    if(dados){
        response.status(200) 
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível localizar nenhum usuário'})
    }

})



app.get('/v1/whatsapp/dadoscontato/filtro/:number', cors(), async function (request, response){
    let filtro = request.params.number
    let dados = contatos.DadosContato(filtro)
    if(dados){
        response.status(200) 
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível localizar nenhum usuário'})
    }

})



app.get('/v1/whatsapp/dadosconversa/filtro/:number', cors(), async function (request, response){
    let filtro = request.params.number
    let dados = contatos.DadosConversa(filtro)
    if(dados){
        response.status(200) 
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível localizar nenhum usuário'})
    }

})


app.get('/v1/whatsapp/conversas/filtro/', cors(), async function (request, response){
    let filtro = request.query.number
    let name = request.query.name
    let dados = contatos.getContatosUsuarios(filtro, name)
    if(dados){
        response.status(200) 
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível localizar nenhum usuário'})
    }

})

app.get('/v1/whatsapp/chave/number/', cors(), async function (request, response){
    let filtro = request.query.number
    let name = request.query.name
    let chave = request.query.chave
    let dados = contatos.getPalavraChave(filtro, name, chave)
    if(dados){
        response.status(200) 
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível localizar nenhum usuário'})
    }

})

app.listen('8080', function(){
    console.log("API aguardando requisições...")
})
