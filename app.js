const express = require('express')
const PORT = process.env.PORT || 3000
const knex = require('./connection')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/v1/snacks', (req, res) => {
    knex('snacks')
    .select('*')
    .then(snacks => res.status(200).json(snacks))
    .catch(res => res.status(500).json({ error: error.message, stack: error.stack }))
})

app.get('/api/v1/snacks/:id', (req, res) => {
    knex('snacks')
      .select('*')
      .where({ id: req.params.id })
      .then(snacks => res.status(200).json(snacks))
      .catch(res => res.status(500).json({ error: error.message, stack: error.stack }))
})

app.post('/api/v1/snacks', (req, res) => {
    knex('snacks')
    .select('*')
    .insert(JSON.stringify(req.body))
    .then(snacks => res.status(200).json(snacks))
    .catch(res => res.status(500).json({ error: error.message, stack: error.stack }))
}

app.delete('/api/v1/snacks/:id', (req, res) => {
    knex.from('snacks')
      .del()
      .where({ id: req.params.id })
      .then(snacks => res.status(204).json({message: `id ${req.params.id} was deleted.`}))
      .catch(res => res.status(500).json({ error: error.message, stack: error.stack }))
})

app.listen(3000, () => console.log(`Listening on ${PORT}`))
