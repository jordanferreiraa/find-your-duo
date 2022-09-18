//importando dependencia
//const express = require('express');
import express from 'express'

//criando aplicação em si
const app = express()

//criando a primeira rota. localhost:3333/ads
app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'Anúncio 1' },
    { id: 2, name: 'Anúncio 2' },
    { id: 3, name: 'Anúncio 3' },
    { id: 4, name: 'Anúncio 4' },
  ])
})

app.listen(3333)