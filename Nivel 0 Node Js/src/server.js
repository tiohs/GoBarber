import http from 'node:http'

// Stateful - armazenamento local em uma variavel 
// Stateless - armazenamento externo em banco de dados qualquer 


// Headers - são informações adicionas para o back ou front fazer o melhor tratamento 

const users = []

const server = http.createServer((req, res) => { 
    const { method , url } = req

    if(method === 'GET' && url === '/users') {
        return res.setHeader('Content-type', 'application/json').end(JSON.stringify(users))
    }
    if(method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'Hamilton Silva',
            content: 'Estou a estudar c'
        });

        return res.writeHead(201).end('Craição de usuário')
    }

    return res.writeHead(404).end();

    
})

server.listen(3333)