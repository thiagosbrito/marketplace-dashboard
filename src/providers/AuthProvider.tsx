'use client';

import { auth } from "@/services/firebase";
import Image from "next/image";
import { createContext, useContext, useEffect, useState } from "react";
// import { Player } from '@lottiefiles/react-lottie-player'
// import AppLoadingAnimation from "../../public/animations/app-loading.json";


const Context = createContext({});

type UserT = {
    user: any;
    isAuthenticated: boolean;
}

const AuthProvider = ({ children }: any) => {
    const [loading, isLoading] = useState<boolean>(true);
    const initialState: UserT = {
        user: null,
        isAuthenticated: false
    }

    const [user, setUser] = useState<UserT>(initialState);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser({
                user,
                isAuthenticated: !!user
            });
            isLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <Context.Provider value={{user, setUser}}>
            {loading && (
                <div className="h-screen flex flex-col w-full justify-center items-center">
                    <Image src="/images/alldrenaline.svg" alt="Alldrenaline" width={150} height={40} />
                    {/* <Player src={AppLoadingAnimation} style={{ height: 240}} autoplay loop></Player> */}
                    <p className="text-xl font-semibold py-4">Carregando...</p>
                </div>
            )}
            {!loading && children}
        </Context.Provider>
    )
}

export const AuthContext = () => useContext(Context);

export default AuthProvider;