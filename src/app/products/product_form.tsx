'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import OrSeparator from '@/components/layout/or-separator';
import ImagesUpload from '@/components/forms/ImagesUpload';

const productsFormSchema = z.object({
    name: z.string({ required_error: 'O nome é um campo obrigatório'}).min(2, 'Nome é muito curto, pro favor verifique').max(80, 'Nome é muito longo, por favor verifique'),
    price: z.number({ required_error: 'O preço é um campo obrigatório'}).min(0.001),
    description: z.string({ required_error: 'A descrição é um campo obrigatório'}).min(10).max(500),
    gallery: z.array(z.object({
        imageUrl: z.string(),
        alt: z.string(),
        thumbnailUrl: z.string()
    })).min(1, 'Pelo menos uma imagem é necessária'),
    category: z.string({ required_error: 'A categoria é um campo obrigatório'}),
    subcategory: z.string({ required_error: 'A sub-categoria é um campo obrigatório'}),
    stock: z.number().min(0, 'Valores negativos não são permitidos'),
    countInStock: z.number().min(0, 'Valores negativos não são permitidos'),
    isFeatured: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
});

const ProductForm = () => {
    const productForm = useForm<z.infer<typeof productsFormSchema>>({
        resolver: zodResolver(productsFormSchema),
        defaultValues: {
            name: '',
            price: 0,
            description: '',
            gallery: [],
            category: '',
            stock: 0,
            countInStock: 0,
            isFeatured: false,
            createdAt: new Date(),
            updatedAt: undefined
        }
    });

    const onSubmit = (values: z.infer<typeof productsFormSchema>) => {
        console.log(values);
    }

    return (
        <Form {...productForm}>
            <form onSubmit={productForm.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={productForm.control} name='name' render={({ field }) => (
                    <FormItem>
                        <FormLabel>Nome:</FormLabel>
                        <FormControl>
                            <Input placeholder='Nome da experi&ecirc;ncia' {...field} />
                        </FormControl>
                    </FormItem>
                )} />
                <FormField control={productForm.control} name='description' render={({ field }) => (
                    <FormItem>
                        <FormLabel>Descrição:</FormLabel>
                        <FormControl>
                            <Textarea placeholder='Descrição da experi&ecirc;ncia' {...field} />
                        </FormControl>
                    </FormItem>
                )} />
                <div className="grid grid-cols-2 gap-x-4">
                    <FormField control={productForm.control} name='category' render={({ field }) => (
                        <FormItem>
                            <FormLabel>Categoria:</FormLabel>
                            <FormControl>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione uma categoria" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {/* <SelectItem value="">Selecione uma categoria</SelectItem> */}
                                            <SelectItem value="blueberry">Terra</SelectItem>
                                            <SelectItem value="apple">Fogo</SelectItem>
                                            <SelectItem value="banana">Ar</SelectItem>
                                            <SelectItem value="grapes">&Aacute;gua</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                        </FormItem>
                    )} />
                    <FormField control={productForm.control} name='subcategory' render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sub-categoria:</FormLabel>
                            <FormControl>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione uma sub-categoria" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {/* <SelectItem value="">Selecione uma categoria</SelectItem> */}
                                            <SelectItem value="blueberry">Terra</SelectItem>
                                            <SelectItem value="apple">Fogo</SelectItem>
                                            <SelectItem value="banana">Ar</SelectItem>
                                            <SelectItem value="grapes">&Aacute;gua</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                        </FormItem>
                    )} />
                </div>
                {/* <ImagesUpload /> */}
            </form>
        </Form>
    );
    
};

export default ProductForm;