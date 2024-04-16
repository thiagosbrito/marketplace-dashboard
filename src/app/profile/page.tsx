'use client';
import useAuthentication from "@/hooks/useAuthentication";

const ProfilePage = () => {
    useAuthentication();
    return (<p>Profile Page</p>);
};
export default ProfilePage;