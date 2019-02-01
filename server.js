const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


// var port = process.env.port || 4000;
const PORT = process.env.PORT || 8080



let array = ["JOG", "BOX", "MAZE", "QUIZ", "ALIVE", "LARGE", "DANCE", "BLACK", "CROWN", "BISHOP", "AUTHOR", "NATURE", "ADVICE", "CASTLE", "LAWYER"]
let min = 0
let max = array.length


let count = 0
let filePath = path.join(__dirname, 'static')
let f = path.join(__dirname, 'game')


app.use('/', express.static(filePath))


app.use('/game', express.static(f))




app.get('/getData', (req, res) => {

    if (count == max) {
        res.send({
            word: "",
            count: count + 1
        })
    } else {
        res.send({
            word: array[count],
            count: count + 1
        })

    }
    count++

})






app.listen(PORT, () => {
    console.log('listening on port : http://localhost:' + PORT)
})
