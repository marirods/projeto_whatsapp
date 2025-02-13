const contatos = require('./contatos.js')
const listaContatos = contatos.contatos['whats-users']


const DadosUsuários = function(number){
    let numberUser = number
    let informacoesUsuario = {id: '', account: '', start: '', end: '', number: ''}
    

    listaContatos.forEach(function(usuarios){
        if(numberUser == usuarios.number){
            informacoesUsuario.id = usuarios.id
            informacoesUsuario.account = usuarios.account
            informacoesUsuario.start = usuarios['created-since'].start
            informacoesUsuario.end = usuarios['created-since'].end
            informacoesUsuario.number = usuarios.number

        }
        
    })

    return informacoesUsuario
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

console.log(DadosContato('11955577796'))

// const MatriculaAlunos = function(matricula){
//         let entradaMatricula = String(matricula).toUpperCase()
//         let informacoesAluno = {nome: '', foto: '', matricula:'', sexo: ''}
    
//         listaAlunos.forEach(function(dadosMatricula){
//             if (String(dadosMatricula.matricula).toUpperCase() == entradaMatricula){
//                 informacoesAluno.nome = dadosMatricula.nome
//                 informacoesAluno.foto = dadosMatricula.foto
//                 informacoesAluno.matricula = dadosMatricula.matricula
//                 informacoesAluno.sexo = dadosMatricula.sexo
    
            
//             }
//         })
    
//         return informacoesAluno
//     } 


//console.log(ListaDeCursos())


// const AlunosMatriculados = function(){
//     let dadosAlunos = { aluno: listaAlunos}
//     return dadosAlunos
// }

// //console.log(AlunosMatriculados())


// const MatriculaAlunos = function(matricula){
//     let entradaMatricula = String(matricula).toUpperCase()
//     let informacoesAluno = {nome: '', foto: '', matricula:'', sexo: ''}

//     listaAlunos.forEach(function(dadosMatricula){
//         if (String(dadosMatricula.matricula).toUpperCase() == entradaMatricula){
//             informacoesAluno.nome = dadosMatricula.nome
//             informacoesAluno.foto = dadosMatricula.foto
//             informacoesAluno.matricula = dadosMatricula.matricula
//             informacoesAluno.sexo = dadosMatricula.sexo

        
//         }
//     })

//     return informacoesAluno
// } 

// //console.log(MatriculaAlunos('20151001004'))


// const AlunosCurso = function(curso){
//     let entradaMatricula = String(curso).toUpperCase()
//     let informacoesCurso = {nomeAluno: [], curso: entradaMatricula}

//     listaAlunos.forEach(function(dadosMatricula){
//       dadosMatricula.curso.forEach(function(informacoes){
//         if(String(informacoes.sigla).toUpperCase() == entradaMatricula){
//             informacoesCurso.nomeAluno.push(dadosMatricula)
//         }
//       })
//     })
//     return informacoesCurso
// }

// //console.log(AlunosCurso('DS'))

// const StatusAlunos =  function(status){
//     let entradaMatricula = String(status).toUpperCase()
//     let statusinformacoes = {nomeAluno: [], curso: entradaMatricula}

//     listaAlunos.forEach(function(dados){
//         if(entradaMatricula = dados.status){
//             statusinformacoes.nomeAluno.push(dados)
//         }
        

        
//     })

//     return statusinformacoes
// }
// //console.log(StatusAlunos('Cursando'))


// const StatusAlunosCurso = function(status, nomeCurso){
//     let entradaMatricula = String(status).toUpperCase()
//     let nome = String(nomeCurso).toUpperCase()
//     let statusinformacoes = {nomeAluno: [], curso: nome}


//     listaAlunos.forEach(function(dados){

//         dados.curso.forEach(function(cursos){
//             if(cursos.sigla == nomeCurso){
//                 cursos.disciplinas.forEach(function(disciplina){
//                     if(String(disciplina.status).toUpperCase() == entradaMatricula){
//                         statusinformacoes.nomeAluno.push(dados)
//                     } 
//                 })
//             }
//         })
//     })
//     return statusinformacoes

    
// }


// console.log(StatusAlunosCurso('Reprovado', 'RDS'))


// const AnoConclusao = function(curso, ano){
//     let entradaMatricula = String(curso).toUpperCase()
//     let statusinformacoes = {nomeAluno: [], curso: entradaMatricula}

//     listaAlunos.forEach(function(dados){
//         dados.curso.forEach(function(cursos){
//             if(cursos.sigla == entradaMatricula){
//                 if(cursos.conclusao == ano){
//                     statusinformacoes.nomeAluno.push(dados)
//                 }
//             }
//         })
//     })
//     return statusinformacoes

// }

// //console.log(AnoConclusao('DS', '2022'))


// const StatusFiltro = function(statusA, statusAC, nomeCurso, Ano){
//     let filtrar = false
//     if(statusA){
//         filtrar = StatusAlunos(statusA)
//     }else if(nomeCurso && statusAC && !Ano){
//         filtrar = StatusAlunosCurso(statusAC, nomeCurso)
//     }else if(Ano && nomeCurso && !statusAC){
//         filtrar = AnoConclusao(nomeCurso, Ano)
//     }

//     return filtrar
// }

// console.log(StatusFiltro("Finalizado","","",""));


module.exports = {
    DadosUsuários,
    DadosConta,
    DadosContato
}