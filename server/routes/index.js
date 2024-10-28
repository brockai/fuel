const express = require('express')
const VerifyAPIKey = require('../helper');
const { email, key } = require('../controllers')

const router = express.Router()

router.get('/key', key)

router.post('/email', VerifyAPIKey, email)

module.exports = router