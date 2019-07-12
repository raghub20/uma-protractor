import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { Dashboard } from './dashboard.page';

chai.use(chaiAsPromised);
const expect = chai.expect;

let dashboard: Dashboard;

Before(() => {
    dashboard = new Dashboard();
});

Given('I am a user', () => {
    return expect(dashboard.getUser()).to.eventually.equal('user');
});

When('I visit the dashboard', () => {
    return dashboard.get();
});

Then('I see the title', async () => {
    return expect(dashboard.getTitle().getText()).to.eventually.equal('My Dashboard');
});
