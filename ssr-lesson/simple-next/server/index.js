const express = require('express')
const next = require('next')
const PORT = process.env.PORT || 3000

const nextApp = next({
    dev: process.env.NODE_ENV !== 'production'
})

const handle = nextApp.getRequestHandler()

nextApp
    .prepare()
    .then(() => {
        const server = express()

        server.get('/people/:id', (req, res) => {
            const page = '/people'
            const { id } = req.params
            nextApp.render(req, res, page, { id })
        })

        server.get('*', (req, res) => handle(req, res))

        server.listen(PORT, () => console.log(`server is listening on ${PORT} port`))
    })
