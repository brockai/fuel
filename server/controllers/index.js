const { emailService } = require('../services')

const ERROR500 = 'Internal Server Error'

const email = async (req, res) => {
    try {
        const result = await emailService(req)
        res.status(result.statusCode).json(result.body)
    } catch (e) {
        res.status(500).json({ error: e.message || ERROR500 })
    }
}

module.exports = { email }
