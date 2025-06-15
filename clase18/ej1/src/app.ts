import express from 'express';
const app = express();
app.use(express.json());
import userRouter from "./routes/userRoutes";


app.use('/users', userRouter);
export default app
