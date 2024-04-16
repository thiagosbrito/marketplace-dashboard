'use client';
import Navbar from "../layout/navbar"
import Sidebar from "../layout/sidebar"
import { ReactNode } from "react";
import { auth } from "@/services/firebase";
import { AuthContext } from "@/providers/AuthProvider";



const Dashboard = ({ children }: { children: ReactNode}) => {
    const { user }:any = AuthContext();
    
    if (!user.isAuthenticated) return children;
    return (
        <div className="flex h-screen w-full flex-col overflow-hidden">
            <Navbar />
            <div className="w-full h-full screen flex">
                <Sidebar />
                <main className="flex flex-1 flex-col gap-4 px-4 md:gap-8 md:px-8 overflow-y-auto">
                    { children }
                </main>
            </div>
        </div>
    )
    
}

export default Dashboard;