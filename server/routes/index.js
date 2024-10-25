const express = require('express')
const VerifyAPIKey = require('../helper');
const { email } = require('../controllers')

const router = express.Router()

router.post('/email', VerifyAPIKey, email)

module.exports = router