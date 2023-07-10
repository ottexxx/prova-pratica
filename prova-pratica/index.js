// Atividade 02
//  const url = require('url')

// const urlObject = {
//     root: '',
//     dir: 'https://al.senai.br/cursos/tecnico-em-informatica-para-internet',
//     base: 'planodecurso.pdf',
//     ext:'pdf',
//     name: 'planodecurso',
// }

// console.log(urlObject)

// Atividade 03

// const address = 'https://nodejs.org/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf'

// const parseUrl = new url.URL(address)

// console.log(parseUrl)

// console.log('protocol: ', parseUrl.protocol, '\n', 'slashes: true,', '\n', 'auth: null,', '\n', 'host: ',parseUrl.host, '\n', 'port: null', '\n', 'hostname: ',parseUrl.host, '\n','\n',parseUrl.href, '\n', parseUrl.searchParams, '\n', parseUrl.hash)

// Atividade 04

// const fs = require('fs')

// const arqAntigo = 'novo.txt'
// const arqNovo = 'aqvnovo.txt'
 
// fs.rename(arqAntigo, arqNovo, function(err){
//     if(err){
//         console.log(err)
//         return
//     }

//     console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}`)
// })

// Atividade 05

// const os = require('os')
// console.log(os.cpus())
