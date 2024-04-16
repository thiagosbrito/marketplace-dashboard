import useAuthentication from "@/hooks/useAuthentication";

const SignUpPage = () => {
    useAuthentication();
    return <p>Sign-Up Page</p>
};
export default SignUpPage;