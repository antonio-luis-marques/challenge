import express from 'express'
import { router } from './routes/routes'
import cors from 'cors'; // Importe o pacote cors
import connectDB from './database/mongoose';

const server = express()
connectDB()

server.use(cors({
    origin: '*', // Permite qualquer origem
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

server.use(express.json())
server.use(router)


export {server}