import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { CircleAlert, CircleCheck, Plus, Search } from "lucide-react";
import ProductForm from "./product_form";import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProductsDialog = () => {
    return (
        <div className="w-full z-20 flex gap-4 items-center justify-between bg-white sticky py-8 top-[0px]">
            <h1 className="text-2xl font-bold">Produtos</h1>
            <form className="flex">
                <Input
                    type="search"
                    placeholder="Pesquisar produtos..."
                    className="w-96 rounded-tr-none rounded-br-none"
                />
                <Button className="rounded-tl-none rounded-bl-none">
                    <Search size={20} />
                </Button>
            </form>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>
                        <Plus size={20} className="mr-2" />
                        Adicionar nova experi&ecirc;ncia
                    </Button>
                </DialogTrigger>
                <DialogContent className="min-w-[900px]">
                    <DialogHeader>
                        <DialogTitle>Adicionar nova experi&ecirc;ncia</DialogTitle>
                        <DialogDescription>
                            Adicione uma nova experi&ecirc;ncia preenchendo o formulário abaixo.
                        </DialogDescription>
                    </DialogHeader>
                    <Tabs defaultValue="details" className="min-w-full">
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="details">
                                Detalhes
                                <CircleCheck className="h-4 w-4 ml-2 text-green-600" />
                            </TabsTrigger>
                            <TabsTrigger value="gallery">
                                Galeria de Imagens
                                <CircleAlert className="h-4 w-4 ml-2 text-red-600" />
                            </TabsTrigger>
                            <TabsTrigger value="price">
                                Precos e taxas
                                <CircleCheck className="h-4 w-4 ml-2 text-green-600" />
                            </TabsTrigger>
                            <TabsTrigger value="extra">
                                Informacoes Extras
                                <CircleAlert className="h-4 w-4 ml-2 text-red-600" />
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="details">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Detalhes da Experiência</CardTitle>
                                    <CardDescription>Alguma descrição em relação a essa seção</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <ProductForm />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="gallery">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Galeria de Imagens</CardTitle>
                                    <CardDescription>Alguma descrição em relação a essa seção</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <ProductForm />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="price">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Preços e Taxas</CardTitle>
                                    <CardDescription>Alguma descrição em relação a essa seção</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <ProductForm />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="extra">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Informções extra</CardTitle>
                                    <CardDescription>Alguma descrição em relação a essa seção</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <ProductForm />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};
export default ProductsDialog;