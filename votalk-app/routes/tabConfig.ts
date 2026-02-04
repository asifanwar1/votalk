import { TAB_ROUTES } from "./routes";

export const BOTTOM_TAB_OPTIONS = {
    [TAB_ROUTES.HOME]: {
        title: "Home",
        icon: {
            0: require("@Assets/icons/bottomTabs/Home.png"),
            1: require("@Assets/icons/bottomTabs/HomeSelected.png"),
        },
    },
    [TAB_ROUTES.LEARN]: {
        title: "Learn",
        icon: {
            0: require("@Assets/icons/bottomTabs/Requests.png"),
            1: require("@Assets/icons/bottomTabs/RequestSelected.png"),
        },
    },
    [TAB_ROUTES.PROGRESS]: {
        title: "Progress",
        icon: {
            0: require("@Assets/icons/bottomTabs/Notebook.png"),
            1: require("@Assets/icons/bottomTabs/NotebookSelected.png"),
        },
    },
    [TAB_ROUTES.MORE]: {
        title: "More",
        icon: {
            0: require("@Assets/icons/bottomTabs/User.png"),
            1: require("@Assets/icons/bottomTabs/UserSelected.png"),
        },
    },
} as const;

export type BottomTabOption =
    (typeof BOTTOM_TAB_OPTIONS)[keyof typeof BOTTOM_TAB_OPTIONS];
