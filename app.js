const express = require("express")

const app = express()

const port = process.env.port || 3001

//STATIC FOLDER
app.use(express.static('public'))

//CONFIGURE TEMPLATE ENGINEERING
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
    res.render('home')
})

//PORT LISTENING
app.listen(port, () => {
    console.log(`Front server listening to port ${port}`)
})