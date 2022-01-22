const express = require('express')
const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const pool = require('./configs/dbconfigs')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Handle Product GET route for all Products
app.get('/product/', (req, res) => {
  const query = 'SELECT p.id, p.name, p.url_image, p.price, c.name AS category FROM product p JOIN category c ON (c.id = p.category) ORDER BY p.category'
  pool.query(query, (err, results, fields) => {
    if (err) {
      const response = { data: null, message: err.message, }
      res.send(response)
    }

    const Product = [...results]
    const response = {
      statusCode: 200,
      data: Product,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': false,
      },
      message: 'All Product successfully retrieved.',
    }
    res.send(response)
  })
})

// Handle Product GET route for specific Product
app.get('/product/:id', (req, res) => {
  const id = '"%'+req.params.id+'%"'
  const query = `SELECT id, name, url_image, price, category FROM product WHERE name LIKE ${id}`
  pool.query(query, (err, results, fields) => {
    if (err) {
      const response = { data: null, message: err.message, }
      res.send(response)
    }

    const Product = [...results]
    const response = {
      statusCode: 200,
      data: Product,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': false,
      },
      message: `Search for retrieved product successfully.`,
    }
    res.status(200).send(response)
  })
})

// Handle Category GET route for specific Category
app.get('/category/:id', (req, res) => {
    const id = req.params.id
    const query = `SELECT id, name, url_image, price, category FROM product WHERE category=${id}`
    pool.query(query, (err, results, fields) => {
      if (err) {
        const response = { data: null, message: err.message, }
        res.send(response)
      }
  
      const Category = [...results]
      const response = {
        statusCode: 200,
        data: Category,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': false,
        },
        message: `Search for retrieved category successfully.`,
      }
      res.status(200).send(response)
    })
  })

// Handle Category GET route for Category
app.get('/category/', (req, res) => {
    const query = `SELECT id, name FROM category`
    pool.query(query, (err, results, fields) => {
      if (err) {
        const response = { data: null, message: err.message, }
        res.send(response)
      }
  
      const Category = [...results]
      const response = {
        statusCode: 200,
        data: Category,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': false,
        },
        message: `All Category successfully retrieved.`,
      }
      res.status(200).send(response)
    })
  })

  
// Handle in-valid route
app.all('*', function(req, res) {
  const response = { data: null, message: 'Route not found!!' }
  res.status(400).send(response)
})

// wrap express app instance with serverless http function
module.exports.handler = serverless(app)