import server from './services/server.js'

const port = 8080

server.listen(port, () => {
    console.log(`servidor online escuhando en puerto ${port}`)
})