'use client';
import useAuthentication from "@/hooks/useAuthentication";

const VerifyEmailPage = () => {
    useAuthentication();
    return <p>Verify Email Page</p>
};
export default VerifyEmailPage;