const express =require('express')
const app= express()
const router= require('./router/userRouter')

const cors=require('cors')
app.use(cors({
    origin:[
        "http://127.0.0.1:8080",
        "http://localhost:8080",
        'http://172.20.10.3:8080',
        "http://localhost:8081/",
        "http://192.168.31.163:8081/"
    ],
    credentials:true,
}))


app.use(router)
app.listen(8079)
