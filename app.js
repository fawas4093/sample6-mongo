const express   =  require('express')

const connectDB = require('./db')

const taskRouter = require('./Routes/taskRouter');
require('dotenv').config()
const app = express()
app.use(express.json())
app.use('/tasks', taskRouter);
connectDB()


app.get('/',(req,res) =>{
    res.send("from task manager API")
})

const port = process.env.PORT||3000
app.listen(port,()=>{
    console.log(`server is listening http://localhost:${port}`)
})