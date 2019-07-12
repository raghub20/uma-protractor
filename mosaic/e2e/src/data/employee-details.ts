import mongoose from 'mongoose';
import { EmployeeDetails as IEmployeeDetails } from '../../../src/app/core/models/employee-details.model';

export class EmployeeDetails {
    static getSchema() {
        return new mongoose.Schema({
            empFirstName: String,
            empLastName: String,
            fileNumber: Number,
            empId: String,
            movePhase: {},
            policyName: String,
            departCity: String,
            departStateProvCanton: String,
            departCountry: String,
            destCity: String,
            destStateProvCanton: String,
            destCountry: String,
            effectiveTransferDate: Date,
            totalCost: String
        });
    }
    static getData() {
        const employeeDetails: IEmployeeDetails[] = [];
        employeeDetails.push({
            'empFirstName': 'Angela',
            'empLastName': 'Rippon',
            'fileNumber': 5018584,
            'empId': '',
            'movePhase': {
                'id': 2,
                'altText' : 'Current Move Phase is 2 of 5: Preparing to Relocate'
            },
            'policyName': 'Long Term Assignment',
            'departCity': 'Swindon',
            'departStateProvCanton': '',
            'departCountry': 'United Kingdom',
            'destCity': 'Lausanne',
            'destStateProvCanton': 'Vaud',
            'destCountry': 'Switzerland',
            'effectiveTransferDate': new Date('5-May-2019'),
            'totalCost': '18028 USD '
        });
        employeeDetails.push({
            'empFirstName': 'James',
            'empLastName': 'Corden',
            'fileNumber': 5018583,
            'empId': '',
            'movePhase': {
                'id': 1,
                'altText' : 'Current Move Phase is 1 of 5: Pre-Policy Call'
            },
            'policyName': 'Long Term Assignment',
            'departCity': 'Swindon',
            'departStateProvCanton': '',
            'departCountry': 'United Kingdom',
            'destCity': 'Glarus',
            'destStateProvCanton': 'Glarus',
            'destCountry': 'Switzerland',
            'effectiveTransferDate': new Date('12-May-2019'),
            'totalCost': '15988 USD '
        });
        employeeDetails.push({
            'empFirstName': 'Suzanne',
            'empLastName': 'Watson',
            'fileNumber': 5018582,
            'empId': '',
            'movePhase': {
                'id': 2,
                'altText': 'Current Move Phase is 2 of 5: Preparing to Relocate'
            },
            'policyName': 'Long Term Assignment',
            'departCity': 'Swindon',
            'departStateProvCanton': '',
            'departCountry': 'United Kingdom',
            'destCity': 'Lucerne',
            'destStateProvCanton': 'Luzern',
            'destCountry': 'Switzerland',
            'effectiveTransferDate': new Date('10-Jun-2019'),
            'totalCost': '32380 USD '
        });
        employeeDetails.push({
            'empFirstName': 'DianazzPatricia',
            'empLastName': 'Teichmann',
            'fileNumber': 3016127,
            'empId': '1697111',
            'movePhase': {
                'id': 4,
                'altText': 'Current Move Phase is 4 of 5: Living in New Location and Ongoing Assignment'
            },
            'policyName': 'Long Term Expat',
            'departCity': 'Mexico City',
            'departStateProvCanton': '',
            'departCountry': 'Mexico',
            'destCity': 'Manaus',
            'destStateProvCanton': '',
            'destCountry': 'Brazil',
            'effectiveTransferDate': new Date('1-Jun-2019'),
            'totalCost': '11754 BRL '
        });
        employeeDetails.push({
            'empFirstName': 'Martine',
            'empLastName': 'McDaniels',
            'fileNumber': 3016124,
            'empId': '437481',
            'movePhase': {
                'id': 3,
                'altText': 'Current Move Phase is 3 of 5: Arriving in New Location'
            },
            'policyName': 'Business Traveler',
            'departCity': 'Stavanger',
            'departStateProvCanton': '',
            'departCountry': 'Norway',
            'destCity': 'Saint John\'s',
            'destStateProvCanton': 'Newfoundland And Labrador',
            'destCountry': 'Canada',
            'effectiveTransferDate': new Date('1-Feb-2019'),
            'totalCost': '3555 USD '
        });
        employeeDetails.push({
            'empFirstName': 'Silvio',
            'empLastName': 'Sommers',
            'fileNumber': 3016121,
            'empId': '',
            'movePhase': {
                'id': 1,
                'altText': 'Current Move Phase is 1 of 5: Pre-Policy Call'
            },
            'policyName': 'International Policy',
            'departCity': 'Rio de Janeiro',
            'departStateProvCanton': '',
            'departCountry': 'Brazil',
            'destCity': 'Golden',
            'destStateProvCanton': 'Colorado',
            'destCountry': 'United States Of America',
            'effectiveTransferDate': new Date('11-Feb-2019'),
            'totalCost': '24762 USD '
        });
        employeeDetails.push({
            'empFirstName': 'Francesa',
            'empLastName': 'Hayes',
            'fileNumber': 3016120,
            'empId': '',
            'movePhase': {
                'id': 4,
                'altText': 'Current Move Phase is 4 of 5: Living in New Location and Ongoing Assignment'
            },
            'policyName': 'Temp Hire',
            'departCity': 'Surrey',
            'departStateProvCanton': '',
            'departCountry': 'United Kingdom',
            'destCity': 'Herzogenaurach',
            'destStateProvCanton': '',
            'destCountry': 'Germany',
            'effectiveTransferDate': new Date('1-Feb-2019'),
            'totalCost': '34258 EUR '
        });
        employeeDetails.push({
            'empFirstName': 'Carmen',
            'empLastName': 'Poetzsch',
            'fileNumber': 3016118,
            'empId': '3030169',
            'movePhase': {
                'id': 1,
                'altText': 'Current Move Phase is 1 of 5: Pre-Policy Call'
            },
            'policyName': 'INTL Pre-Transfer',
            'departCity': 'London',
            'departStateProvCanton': '',
            'departCountry': 'United Kingdom',
            'destCity': 'New York',
            'destStateProvCanton': 'New York',
            'destCountry': 'United States Of America',
            'effectiveTransferDate': new Date('31-Mar-2019'),
            'totalCost': '9452 USD '
        });
        employeeDetails.push({
            'empFirstName': 'Adam',
            'empLastName': 'Hu',
            'fileNumber': 3007390,
            'empId': '128494',
            'movePhase': {
                'id': 5,
                'altText': 'Current Move Phase is 5 of 5: Living in New Location and Settled'
            },
            'policyName': 'CBHT Standard',
            'departCity': 'Tolochenaz',
            'departStateProvCanton': 'Vaud',
            'departCountry': 'Switzerland',
            'destCity': 'Meerbusch',
            'destStateProvCanton': '',
            'destCountry': 'Germany',
            'effectiveTransferDate': new Date('1-Feb-2019'),
            'totalCost': '19749 USD '
        });
        employeeDetails.push({
            'empFirstName': 'Juan',
            'empLastName': 'Arias Alvarez',
            'fileNumber': 3007369,
            'empId': '',
            'movePhase': {
                'id': 2,
                'altText': 'Current Move Phase is 2 of 5: Preparing to Relocate'
            },
            'policyName': 'Local to Local Transfer',
            'departCity': 'Krakow',
            'departStateProvCanton': '',
            'departCountry': 'Poland',
            'destCity': 'Neuchatel',
            'destStateProvCanton': 'Neuchâtel',
            'destCountry': 'Switzerland',
            'effectiveTransferDate': new Date('1-Feb-2019'),
            'totalCost': '46414 USD '
        });
        employeeDetails.push({
            'empFirstName': 'Kimberly',
            'empLastName': 'Lötscher',
            'fileNumber': 2987099,
            'empId': '1325773',
            'movePhase': {
                'id': 2,
                'altText': 'Current Move Phase is 2 of 5: Preparing to Relocate'
            },
            'policyName': 'US Domestic Homeowner',
            'departCity': 'Charlotte',
            'departStateProvCanton': 'North Carolina',
            'departCountry': 'United States Of America',
            'destCity': 'Redmond',
            'destStateProvCanton': 'Washington',
            'destCountry': 'United States Of America',
            'effectiveTransferDate': new Date('26-Nov-2018'),
            'totalCost': '17502 USD '
        });
        return employeeDetails;
    }
}
