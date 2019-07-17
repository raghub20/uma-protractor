import mongoose from 'mongoose';
import { NavItem } from '../data/NavItem';
import { EmployeeDetails } from '../data/employee-details';
import { AggregationView } from '../data/aggregation-view';

export class MockedData {
    static insertData (instance: number): Promise<any> {
        console.log('\x1b[33m%s\x1b[0m', 'Creating mocked data...');
        let port: number = 3002 + instance;
        //mongoose.connect('mongodb://localhost:' + port + '/mosaic', { useNewUrlParser: true });
        // tslint:disable-next-line: prefer-const
        let data = [];
        // Employee data collection
        const employeeDetailsCol = mongoose.model('EmployeeDetails', EmployeeDetails.getSchema(), 'EmployeeDetails');
        data.push(employeeDetailsCol.insertMany(EmployeeDetails.getData()).then((docs) => {
            console.log('\x1b[33m%s\x1b[0m', 'Inserting Employee Details...');
            console.log('\x1b[36m%s\x1b[0m', docs); // Output data (can normally comment out)
        }));

         // Aggregation View collection
        const AggregationViewCol = mongoose.model('AggregationView', AggregationView.getSchema(),'AggregationView');
        data.push(AggregationViewCol.insertMany(AggregationView.getData()).then(docs => {
            console.log('\x1b[33m%s\x1b[0m', 'Inserting Aggregation View data');
            console.log('\x1b[36m%s\x1b[0m', docs); // Output data (can normally comment out)
            })
        );
        // NavItems
        const navItemsCol = mongoose.model('NavItem', NavItem.getSchema(), 'NavItems');
        data.push(navItemsCol.insertMany(NavItem.getData()).then((docs) => {
            console.log('\x1b[33m%s\x1b[0m', 'Inserting NavItems...');
            console.log('\x1b[36m%s\x1b[0m', docs); // Output data (can normally comment out)
        }));
        
        return Promise.all(data).then(() => {
            console.log('\x1b[32m%s\x1b[0m', 'Data successfully created.');
        });
    }
}
