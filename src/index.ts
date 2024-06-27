import express, { Application, Request, Response } from 'express';
require('dotenv').config();
const app: Application =express()
const port = 3000
const syncDatabase = require ('./db/sync');

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to the restaurant API! \n Endpoints available at http://localhost:${port}/api/v1` })
})

try {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
} catch (error: unknown) {
    const errorMessage = (error as Error).message;
    console.log(`Error occurred: ${errorMessage}`)
}

//
import router from './routes';
app.use(router);



