import express, { NextFunction } from 'express';
import connectDb from './database/mongoDb';
import morgan from 'morgan';
import user from './routes/user'
import cors from 'cors';
import path from 'path';
import { cwd } from 'process';

connectDb()
const app = express();

app.use(express.json());


// app.use("/uploads",express.static(path.join(process.cwd(), 'uploads')));
app.use(express.static(path.join(process.cwd(), 'landing_page')));
app.use("/admin",express.static("landing_page"))
// app.use(express.static("landing_page"))
// app.use("/admin",)
// app.use(express.static(path.join(__dirname, "landing_page")))

const port: Number = 3000;
app.use(morgan("dev"));

const corsOptions = {
	origin: 'http://localhost:4200',
	credentials: true,
	optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/', user);



app.listen(port, (): void => {
	console.log(`server started port:${port}` );
});