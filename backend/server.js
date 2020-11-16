
import path from 'path'
import express  from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import colors from 'colors'
import connectDB from './config/db.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import pickupRoutes from './routes/pickupRoutes.js'
import reportbinRoutes from './routes/reportbinRoutes.js'
import contactRoutes from './routes/contactRoutes.js'
import orderbinRoutes from './routes/orderbinRoutes.js'


dotenv.config()

connectDB()

const app=express()

if (process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('API is running......')
})

app.use('/api/products', productRoutes)
app.use('/api/blogs', blogRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/pickups', pickupRoutes)
app.use('/api/orderbins', orderbinRoutes)
app.use('/api/reportbins', reportbinRoutes)
app.use('/api/contacts', contactRoutes)

app.get('/api/config/paypal', (req,res)=> 
    res.send(process.env.PAYPAL_CLIENT_ID)
)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server runing in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold))