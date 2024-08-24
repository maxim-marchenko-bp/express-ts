import express from 'express';
import * as dotenv from 'dotenv';
import { AppDataSource } from "./data-source";
import { userRouter } from './routes/user.routes'
import { roleRouter } from "./routes/role.routes";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user', userRouter);
app.use('/role', roleRouter)

AppDataSource.initialize()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log(error));
