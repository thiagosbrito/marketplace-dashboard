'use client';
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthCredentialsValidator, TAuthCredentialsValidator } from "@/lib/validators/account-credentials-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { OctagonX } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";
import { useRouter } from "next/navigation";
import useAuthentication from "@/hooks/useAuthentication";
import { DASHBOARD_ROUTE } from "@/constants/routes";

const SignInPage = () => {
    
    const { 
        register,
        handleSubmit,
        formState: { errors } 
    } = useForm<TAuthCredentialsValidator>({
        resolver: zodResolver(AuthCredentialsValidator)
    })

    const router = useRouter();
    
    useAuthentication();

    const onSubmit = async ({email, password}: TAuthCredentialsValidator) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
                router.push(DASHBOARD_ROUTE);
            })
            .catch((e) => {
                console.log(e)
            });
    }



    return (
        <div className="w-full lg:grid lg:grid-cols-2 h-screen">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold py-3">Login</h1>
                        <p className="text-balance text-muted-foreground">
                            Digite suas credenciais para acessar o painel
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        {...register('email')} 
                                        placeholder="seu@email.com"
                                    />
                                    {errors?.email && (
                                        <p className="text-sm text-red-500 rounded-md px-2 py-1 flex gap-2 items-center border border-solid border-red-500 transition-all ease-in"> 
                                            <OctagonX className="w-4 h-4 inline-block" />
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Senha</Label>
                                        <Link
                                            href="/forgot-password"
                                            className="ml-auto inline-block text-sm underline"
                                        >
                                            Esqueceu sua senha?
                                        </Link>
                                    </div>
                                    <Input
                                        id="password"
                                        {...register('password')}
                                        autoComplete="off"
                                        type="password"
                                    />
                                    {errors?.password && (
                                        <p className="text-sm text-red-500 rounded-md px-2 py-1 flex gap-2 items-center border border-solid border-red-500 transition-all ease-in"> 
                                        <OctagonX className="w-4 h-4 inline-block" />
                                        {errors.password.message}
                                    </p>
                                    )}
                                </div>
                                <Button type="submit" className="w-full">
                                    Entrar
                                </Button>
                            <Button variant="outline" className="w-full">
                                Login Entrar com Google
                            </Button>
                        </div>
                    </form>
                    <div className="mt-4 text-center text-sm">
                        N&atilde;o tem uma conta?{" "}
                        <Link href="#" className="underline">
                            Cadastre-se
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:flex lg:flex-col lg:items-center lg:justify-center">
                <Image
                    src="/images/alldrenaline.svg"
                    alt="Image"
                    width="200"
                    height="80"
                    className="align-middle"
                />

                <h3 className="text-xl text-muted-foreground">
                    Welcome to Alldrenaline Dashboard
                </h3>

        
            </div>
        </div>
    )
}

export default SignInPage;