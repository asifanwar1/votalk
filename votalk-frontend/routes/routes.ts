export enum AUTH_ROUTES {
    WELCOME = "Welcome",
    LOGIN = "Login",
    REGISTER = "Register",
    FORGOT_PASSWORD = "ForgotPassword",
    RESET_PASSWORD = "ResetPassword",
    VERIFY_OTP = "Otp",
}

export enum APP_ROUTES {
    CONVERSATIONS = "Conversations",
    PROFILE = "Profile",
    BADGES = "Badges",
    NOTIFICATIONS = "Notifications",
    ABOUT_US = "AboutUs",
    PRIVACY_POLICY = "PrivacyPolicy",
    CONTACT_US = "ContactUs",
    SETTINGS = "Settings",
    TERMS = "Terms",
}

export enum TAB_ROUTES {
    HOME = "Home",
    LEARN = "Learn",
    PROGRESS = "Progress",
    SPEAK = "Speak",
    MORE = "More",
}

export const AUTH_BASE_PATH = "/(auth)";
export const APP_ROOT_PATH = "/(main)";
export const TABS_BASE_PATH = "/(main)/(tabs)";
export const TABS_SCREEN = "(tabs)";

export const ROUTE_PATHS = {
    AUTH: {
        WELCOME: `${AUTH_BASE_PATH}/${AUTH_ROUTES.WELCOME}`,
        LOGIN: `${AUTH_BASE_PATH}/${AUTH_ROUTES.LOGIN}`,
        REGISTER: `${AUTH_BASE_PATH}/${AUTH_ROUTES.REGISTER}`,
        FORGOT_PASSWORD: `${AUTH_BASE_PATH}/${AUTH_ROUTES.FORGOT_PASSWORD}`,
        RESET_PASSWORD: `${AUTH_BASE_PATH}/${AUTH_ROUTES.RESET_PASSWORD}`,
        VERIFY_OTP: `${AUTH_BASE_PATH}/${AUTH_ROUTES.VERIFY_OTP}`,
    },
    APP: {
        // TAB ROUTES
        HOME: `${TABS_BASE_PATH}/${TAB_ROUTES.HOME}`,
        LEARN: `${TABS_BASE_PATH}/${TAB_ROUTES.LEARN}`,
        PROGRESS: `${TABS_BASE_PATH}/${TAB_ROUTES.PROGRESS}`,
        SPEAK: `${TABS_BASE_PATH}/${TAB_ROUTES.SPEAK}`,
        MORE: `${TABS_BASE_PATH}/${TAB_ROUTES.MORE}`,

        // APP ROUTES
        CONVERSATIONS: `${APP_ROOT_PATH}/${APP_ROUTES.CONVERSATIONS}`,
        PROFILE: `${APP_ROOT_PATH}/${APP_ROUTES.PROFILE}`,
        BADGES: `${APP_ROOT_PATH}/${APP_ROUTES.BADGES}`,
        NOTIFICATIONS: `${APP_ROOT_PATH}/${APP_ROUTES.NOTIFICATIONS}`,
        ABOUT_US: `${APP_ROOT_PATH}/${APP_ROUTES.ABOUT_US}`,
        PRIVACY_POLICY: `${APP_ROOT_PATH}/${APP_ROUTES.PRIVACY_POLICY}`,
        CONTACT_US: `${APP_ROOT_PATH}/${APP_ROUTES.CONTACT_US}`,
        SETTINGS: `${APP_ROOT_PATH}/${APP_ROUTES.SETTINGS}`,
        TERMS: `${APP_ROOT_PATH}/${APP_ROUTES.TERMS}`,
    },
} as const;
