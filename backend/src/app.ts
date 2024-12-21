import express from 'express'
import cors from 'cors'
import userRouter from "./routes/user.router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true, limit: '16kb'}));

app.use('/api/user', userRouter)

export default app;