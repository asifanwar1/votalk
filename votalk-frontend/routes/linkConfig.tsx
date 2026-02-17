import {
    User,
    MessageSquare,
    Info,
    Shield,
    Bell,
    Award,
    Mail,
    Settings,
    FileText,
} from "lucide-react-native";
import { ROUTE_PATHS } from "@/routes/routes";

export const MORE_ITEMS = [
    {
        icon: <User size={22} color="#8b5cf6" />,
        label: "Profile",
        route: ROUTE_PATHS.APP.PROFILE,
    },
    {
        icon: <MessageSquare size={22} color="#8b5cf6" />,
        label: "Chat History",
        route: ROUTE_PATHS.APP.CONVERSATIONS,
    },
    {
        icon: <Award size={22} color="#8b5cf6" />,
        label: "Badges",
        route: ROUTE_PATHS.APP.BADGES,
    },
    {
        icon: <Bell size={22} color="#8b5cf6" />,
        label: "Notifications",
        route: ROUTE_PATHS.APP.NOTIFICATIONS,
    },
    {
        icon: <Info size={22} color="#8b5cf6" />,
        label: "About",
        route: ROUTE_PATHS.APP.ABOUT_US,
    },
    {
        icon: <Shield size={22} color="#8b5cf6" />,
        label: "Privacy Policy",
        route: ROUTE_PATHS.APP.PRIVACY_POLICY,
    },
    {
        icon: <FileText size={22} color="#8b5cf6" />,
        label: "Terms of Service",
        route: ROUTE_PATHS.APP.TERMS,
    },
    {
        icon: <Mail size={22} color="#8b5cf6" />,
        label: "Contact Us",
        route: ROUTE_PATHS.APP.CONTACT_US,
    },
    {
        icon: <Settings size={22} color="#8b5cf6" />,
        label: "Settings",
        route: ROUTE_PATHS.APP.SETTINGS,
    },
];
