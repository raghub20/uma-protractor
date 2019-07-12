/** Model for website navigation items */
export interface NavItem {
    /** Unique identifier used for visibile selection/focus */
    id: number;
    /** Visible label */
    label: string;
    /** Material icon name */
    icon: string;
    /** External navigation url (one of this or route must be specified) */
    externalUrl?: string;
    /** Internal navigation route (one of this or externalUrl must be specified) */
    route?: string;
    /** i18n identifier use for language localization */
    i18nLabel?: string;
}
