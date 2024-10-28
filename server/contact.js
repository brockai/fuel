const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes')

app.use(express.json({ limit: '50mb' }))
app.options('*', cors())
app.use(cors())
app.use(routes)
// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views'))

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Internal Server Error' })
})
 
// Export for Jest testing
module.exports = app;

// Start production server
if (require.main === module) {
  const port = process.env.EMAIL_PORT || 9002;
  app.listen(port, () => {
    console.log(`Server running in production on port ${port}`)
  })
}
 