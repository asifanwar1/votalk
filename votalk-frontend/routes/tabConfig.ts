import { TAB_ROUTES } from "./routes";

export const BOTTOM_TAB_OPTIONS = {
    [TAB_ROUTES.HOME]: {
        title: "Home",
    },
    [TAB_ROUTES.LEARN]: {
        title: "Learn",
    },
    [TAB_ROUTES.SPEAK]: {
        title: "Speak",
    },
    [TAB_ROUTES.PROGRESS]: {
        title: "Progress",
    },
    [TAB_ROUTES.MORE]: {
        title: "More",
    },
} as const;

export type BottomTabOption =
    (typeof BOTTOM_TAB_OPTIONS)[keyof typeof BOTTOM_TAB_OPTIONS];
