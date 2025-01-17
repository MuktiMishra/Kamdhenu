import express, {Request, Response} from 'express'
import cors from 'cors'
import userRouter from "./routes/user.router.js";
import adminRouter from "./routes/admin.router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true, limit: '16kb'}));

app.get("/", async (req: Request, res: Response) => {
    res.status(200).json({message: "service is running"})
})

app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter);

export default app;