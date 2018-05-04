const express = require('express')
const PORT = process.env.PORT || 3000
const knex = require('./connection')

const app = express()

app.get('/api/v1/snacks', (req, res) => {
    knex.from('snacks')
    .then(snacks => res.status(200).json(snacks))
    .catch(res => res.status(500).json({ error: error.message, stack: error.stack }))
})

app.listen(3000, () => console.log(`Listening on ${PORT}`))