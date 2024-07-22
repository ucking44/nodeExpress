const http = require('http')

const server = http.createServer((req, res) => {
    //res.write("Welcome To Our Home Page!")
    //res.end()
    if(req.url === '/') {
        res.end('Welcome To Our Home Page')
        //res.write('Welcome To Our Home Page')
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
        //res.write('Here is our short history')
    }

    //res.end('Bad URL')
    res.end(`
        <h1>Ooop!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back Home</a>
        `)
})

server.listen(5000)
