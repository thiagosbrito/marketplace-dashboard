import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { CircleUser, Cog, LifeBuoy, LogOut} from "lucide-react";
import useAuthentication from "@/hooks/useAuthentication";
import { AuthContext } from "@/providers/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "@/services/firebase";
const Navbar = () => {
    
    useAuthentication();
    const { user }: any = AuthContext();

    const logout = () => signOut(auth);

    return (
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <Image src="/images/alldrenaline.svg" alt="Logo" width={150} height={30} />
            <div className="flex w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <div className="ml-auto">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                            <CircleUser className="h-5 w-5" />
                            <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel className="flex gap-2 px-4 py-2">
                                <p>
                                    Ol&aacute;, <strong>{user?.user?.email}</strong>
                                </p>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="flex gap-2 px-4 py-2 cursor-pointer">
                                <Cog className="h-5 w-5" />
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex gap-2 px-4 py-2 cursor-pointer">
                                <LifeBuoy className="h-5 w-5" />
                                Support
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="flex gap-2 px-4 py-2 cursor-pointer" onClick={logout}>
                                <LogOut className="h-5 w-5" />
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}

export default Navbar;