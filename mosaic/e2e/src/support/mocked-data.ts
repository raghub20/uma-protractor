import mongoose from 'mongoose';

export class MockedData {
    static insertData (instance: number): Promise<any> {
        console.log('\x1b[33m%s\x1b[0m', 'Creating mocked data...');
        let port: number = 3003 + instance;
        mongoose.connect('mongodb://localhost:' + port + '/alpha', { useNewUrlParser: true });
        let data = [];

        return Promise.all(data).then(() => {
            console.log('\x1b[32m%s\x1b[0m', 'Data successfully created.');
        });
    }
}
