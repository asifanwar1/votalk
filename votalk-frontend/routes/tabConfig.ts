import { TAB_ROUTES } from "./routes";

export const BOTTOM_TAB_OPTIONS = {
    [TAB_ROUTES.HOME]: {
        title: "Home",
        icon: {
            0: require("../assets/Home.png"),
            1: require("../assets/HomeSelected.png"),
        },
    },
    [TAB_ROUTES.LEARN]: {
        title: "Learn",
        icon: {
            0: require("../assets/Home.png"),
            1: require("../assets/HomeSelected.png"),
        },
    },
    [TAB_ROUTES.PROGRESS]: {
        title: "Progress",
        icon: {
            0: require("../assets/Home.png"),
            1: require("../assets/HomeSelected.png"),
        },
    },
    [TAB_ROUTES.MORE]: {
        title: "More",
        icon: {
            0: require("../assets/Home.png"),
            1: require("../assets/HomeSelected.png"),
        },
    },
} as const;

export type BottomTabOption =
    (typeof BOTTOM_TAB_OPTIONS)[keyof typeof BOTTOM_TAB_OPTIONS];
