import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

export class MockedApi {
    static startApi(instance: number): Promise<any> {
        const baseUrl = '/api/';
        const port = 4003 + instance;
        const app = express();
        const router = express.Router();

        console.log('\x1b[33m%s\x1b[0m', 'Starting Express server...');

        app.use(cors());
        app.use(bodyParser.json());
        app.use('/', router);
        return new Promise((resolve, reject) => {
            app.listen(port, () => {
                console.log('\x1b[32m%s\x1b[0m', `Express server running on port ` + port);
                resolve();
            });
        });
    }
}
