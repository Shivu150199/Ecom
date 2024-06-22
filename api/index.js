import express from 'express'
import dotenv from 'dotenv'
import authRoute from './routes/auth.route.js'
import mongoose from 'mongoose'
// import connection from './config/db.js'

dotenv.config()

const app=express()
const port=process.env.PORT||3000



app.use((err,req,res,next)=>{
    const status=err.statusode||500
    const message=err.message||'internal server error'
res.status(status).json({
    success:false,
    message,
    status
})

})


app.use('/api/v1/auth',authRoute)
const connection=mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('database connected')
})

app.listen(port,async()=>{
    await connection
    console.log('app is listening on '+port+" number")
})