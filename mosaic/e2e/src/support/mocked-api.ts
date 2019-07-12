import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

export class MockedApi {
    static startApi(instance: number): Promise<any> {
        const baseUrl = '/api/';
        const port = 4002 + instance;
        const app = express();
        const router = express.Router();

        console.log('\x1b[33m%s\x1b[0m', 'Starting Express server...');

        // NavItem
        const NavItem = mongoose.model('NavItem');
        router.route(baseUrl + 'nav-items').get((req, res) => {
            NavItem.find((e, docs) => {
                if (e) {
                    console.log('\x1b[31m%s\x1b[0m', e);
                } else {
                    res.json(docs);
                }
            });
        });

        // employee Details
        const EmployeeDetails = mongoose.model('EmployeeDetails');
        router.route(baseUrl + 'employeeDetails').get((req, res) => {
            EmployeeDetails.find( (e, docs) => {
                if (e) {
                    console.log('\x1b[31m%s\x1b[0m', e);
                } else {
                    res.json(docs);
                }
            });
        });
        
        //Aggregation View
        const AggregationView = mongoose.model('AggregationView');
        router.route(baseUrl + 'aggregationView').get((req, res) => {
        AggregationView.find((e, docs) => {
            if (e) {
            console.log('\x1b[31m%s\x1b[0m', e);
            } else {
            res.json(docs);
            }
        });
        });

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
