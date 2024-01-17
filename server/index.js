const express = require('express')
const app = express()
const mysql= require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.listen(3002, ()=>{
    console.log("server is running on port 3002")
})


const db= mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'agrodb'
})


app.post('/register', (req, res) =>{
    const sentEmail = req.body.email;
    const sentUserName = req.body.username;
    const sentPassword = req.body.password;
    



    const SQL = 'INSERT INTO users (email, username, password) Values(?,?,?)'

    const Values =[sentEmail, sentUserName, sentPassword]


    db.query(SQL, Values, (err, results) =>{
        if(err){
            res.send(err)
        }
        else{
            console.log('User inserted successfully!')
            res.send({message: "user added"})
        }
    })
})