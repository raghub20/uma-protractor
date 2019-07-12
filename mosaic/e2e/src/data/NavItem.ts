import mongoose from 'mongoose';
import { NavItem as INavItem } from '../../../src/app/core/models/nav-item.model';

export class NavItem {
    static getSchema() {
        return new mongoose.Schema({
            id: Number,
            label: String,
            icon: String,
            externalUrl: String,
            route: String,
            i18nLabel: String
        });
    }
    static getData() {
        const navItems: INavItem[] = [];
        navItems.push({
            id: 1,
            label: 'Home',
            icon: 'home',
            externalUrl: null,
            route: 'dashboard',
            i18nLabel: '@@navHome'
        });
        navItems.push({ // Only for testing/demo purposes (currently only a single "real" nav item)
            id: 2,
            label: 'Inbox',
            icon: 'mail',
            externalUrl: null,
            route: 'inbox',
            i18nLabel: '@@navInbox'
        });
        return navItems;
    }
}
