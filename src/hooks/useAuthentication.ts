import { DASHBOARD_ROUTE, FORGET_PASSWORD_ROUTE, RESET_PASSWORD_ROUTE, SIGNIN_ROUTE, SIGNUP_ROUTE, VERIFY_EMAIL_ROUTE } from "@/constants/routes";
import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const GUEST_ROUTES = [
    SIGNIN_ROUTE,
    SIGNUP_ROUTE,
    FORGET_PASSWORD_ROUTE,
    RESET_PASSWORD_ROUTE,
    VERIFY_EMAIL_ROUTE
];

const useAuthentication = () => {

    const { user }: any = AuthContext();
    const userInfo = user?.user || null;
    const router = useRouter();
    const currentRoute = window.location.pathname;

    useEffect(() => {

        if (!userInfo && !GUEST_ROUTES.includes(currentRoute)) {
            router.push(SIGNIN_ROUTE);
        }

        if (userInfo && GUEST_ROUTES.includes(currentRoute)) {
            router.push(DASHBOARD_ROUTE);
        }

    }, [userInfo, currentRoute, router]);

};

export default useAuthentication;