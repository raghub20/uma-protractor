import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { MockedData } from './mocked-data';
import { MockedApi } from './mocked-api';

export class MockedSetup {
    mongod: MongoMemoryServer;

    async startMockedApi(instance: number): Promise<any> {
      console.log('\x1b[33m%s\x1b[0m', `Starting mongo-memory-server...`);
      this.mongod = new MongoMemoryServer(
        {
          instance: {
            port: 3003 + instance,
            dbName: 'a7new'
          }
        }
      );
      return this.mongod.getConnectionString().then(async (mongoUri) => {
        const mongooseOpts = { useNewUrlParser: true };
        mongoose.connection.on('error', (e) => {
          if (e.message.code === 'ETIMEDOUT') {
            console.log('\x1b[31m%s\x1b[0m', e);
            mongoose.connect(mongoUri, mongooseOpts);
          }
          console.log('\x1b[31m%s\x1b[0m', e);
        });
        await mongoose.connect(mongoUri, mongooseOpts).then(async () => {
          console.log('\x1b[32m%s\x1b[0m', `MongoDB successfully connected to ${mongoUri}`);
          await MockedData.insertData(instance);
          await MockedApi.startApi(instance);
        });
      });
    }
    
    async stopMockedApi(): Promise<any> {
      console.log('\x1b[33m%s\x1b[0m', `\nStopping mongo-memory-server...`);
      return mongoose.disconnect().then(() => this.mongod.stop());
    }
}
