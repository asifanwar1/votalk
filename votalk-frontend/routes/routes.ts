export enum AUTH_ROUTES {
    WELCOME = "Welcome",
    LOGIN = "Login",
    REGISTER = "Register",
    FORGOT_PASSWORD = "ForgotPassword",
    RESET_PASSWORD = "ResetPassword",
    VERIFY_OTP = "VerifyOTP",
}

export enum APP_ROUTES {
    CONVERSATIONS = "Conversations",
    NOTIFICATIONS = "Notifications",
    SETTINGS = "Settings",
    EDIT_PROFILE = "EditProfile",
    CONTACT_US = "ContactUs",
    USER_DETAILS = "UserDetails",
    ABOUT_US = "AboutUs",
    PRIVACY_POLICY = "PrivacyPolicy",
}

export enum TAB_ROUTES {
    HOME = "Home",
    LEARN = "Learn",
    PROGRESS = "Progress",
    CHAT = "Chat",
    MORE = "More",
}

export const AUTH_BASE_PATH = "/(auth)";
export const APP_ROOT_PATH = "/(app)";
export const TABS_BASE_PATH = "/(app)/(tabs)";
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
        CHAT: `${TABS_BASE_PATH}/${TAB_ROUTES.CHAT}`,
        MORE: `${TABS_BASE_PATH}/${TAB_ROUTES.MORE}`,

        // APP ROUTES
        SETTINGS: `${APP_ROOT_PATH}/${APP_ROUTES.SETTINGS}`,
        ABOUT_US: `${APP_ROOT_PATH}/${APP_ROUTES.ABOUT_US}`,
        PRIVACY_POLICY: `${APP_ROOT_PATH}/${APP_ROUTES.PRIVACY_POLICY}`,
        EDIT_PROFILE: `${APP_ROOT_PATH}/${APP_ROUTES.EDIT_PROFILE}`,
        CONTACT_US: `${APP_ROOT_PATH}/${APP_ROUTES.CONTACT_US}`,
        NOTIFICATIONS: `${APP_ROOT_PATH}/${APP_ROUTES.NOTIFICATIONS}`,
        CONVERSATIONS: `${APP_ROOT_PATH}/${APP_ROUTES.CONVERSATIONS}`,
        USER_DETAILS: `${APP_ROOT_PATH}/${APP_ROUTES.USER_DETAILS}`,
    },
} as const;
