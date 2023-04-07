const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const he = require('he')
const fs = require('fs')

const loginRouter = require('./routes/login')
const flagRouter = require('./routes/flag')

const app = express()
const port = 8080

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use('/', loginRouter)

app.get('/flag', flagRouter)




app.get('/hidden', (req, res) => {
    if (req.cookies["isLoggedIn"] !== 'true') {
        res.redirect('/login')
        return
    }

    fs.readFile('index.js', 'utf-8', (err, data) => {
        const flag = 'CTF_SDaT{1337hAckEr}'

        if (req.query['reveal'] !== 'key') {
            data = data.replace(/CTF_SDaT{\w+}/i, 'REDACTED')
        }

        res.send('<pre>' + he.encode(data) + '</pre>')
    })
})





app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})