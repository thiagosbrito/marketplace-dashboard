import { Calendar, ChevronRight, ClipboardList, Gauge, LifeBuoy, PackagePlus, ReceiptTextIcon, Settings2 } from "lucide-react"
import { Button } from "../ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { Separator } from "../ui/separator"
import { redirect, useRouter } from "next/navigation"

const Sidebar = () => {
    const router = useRouter();
    return (
        <aside className="left-0 z-20 flex flex-col border-r max-h-[calc(100vh-60px)]">
            <nav className="grid gap-1 p-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                className="rounded-lg gap-3 justify-start hover:bg-muted active:bg-primary active:text-slate-100"
                                aria-label="Dashboard"
                                onClick={() => { router.push("/dashboard") }}
                            >
                                <Gauge className="size-5" />
                                <span className="hidden md:inline-block">Dashboard</span>
                                <ChevronRight className="hidden md:inline-block ml-auto size-5" />
                                
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={5}>
                            Dashboard
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                className="rounded-lg gap-3 justify-start hover:bg-muted"
                                aria-label="Pedidos"
                                onClick={() => { router.push("/orders") }}
                            >
                                <ClipboardList className="size-5" />
                                <span className="hidden md:inline-block">Pedidos</span>
                                <ChevronRight className="ml-auto size-5 hidden md:inline-block" />
                                
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={5}>
                            Pedidos
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                className="rounded-lg hover:bg-muted gap-3 justify-start"
                                aria-label="Produtos"
                                onClick={() => { router.push("/products") }}
                            >
                                <PackagePlus className="size-5" />
                                <span className="hidden md:inline-block">Produtos</span>
                                <ChevronRight className="ml-auto size-5 hidden md:inline-block" />
                                
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={5}>
                            Produtos
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                className="rounded-lg hover:bg-muted gap-3 justify-start"
                                aria-label="Agenda"
                                onClick={() => { router.push("/agenda") }}
                            >
                                <Calendar className="size-5" />
                                <span className="hidden md:inline-block">Agenda</span>
                                <ChevronRight className="ml-auto size-5 hidden md:inline-block" />
                                
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={5}>
                            Agenda
                        </TooltipContent>
                    </Tooltip>

                </TooltipProvider>
            </nav>
            <Separator className="mt-auto" />
            <nav className="grid gap-1 p-2 bg-slate-50">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                className="rounded-lg gap-3 justify-start hover:bg-muted"
                                aria-label="Configurações"
                                onClick={() => { router.push("/settings") }}
                            >
                                <Settings2 className="size-5" />
                                <span className="hidden md:inline-block">Configurações</span>
                                <ChevronRight className="ml-auto size-5 hidden md:inline-block" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={5}>
                            Configurações
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                className="rounded-lg hover:bg-muted gap-3 justify-start"
                                aria-label="Ajuda"
                                onClick={() => { router.push("/help") }}
                            >
                                <LifeBuoy className="size-5" />
                                <span className="hidden md:inline-block">Ajuda</span>
                                <ChevronRight className="ml-auto size-5 hidden md:inline-block" />
                                
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={5}>
                            Ajuda
                        </TooltipContent>
                    </Tooltip>
                    {/* <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                className="rounded-lg hover:bg-muted gap-3 justify-start"
                                aria-label="Termos e Políticas"
                            >
                                <ReceiptTextIcon className="size-5" />
                                <span className="hidden md:inline-block">Termos e Políticas</span>
                                <ChevronRight className="ml-auto size-5 hidden md:inline-block" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={5}>
                            Termos e Políticas
                        </TooltipContent>
                    </Tooltip> */}
                </TooltipProvider>
            </nav>
        </aside>
    )
}
export default Sidebar;