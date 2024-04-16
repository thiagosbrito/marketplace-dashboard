'use client';

import { ColumnDef } from '@tanstack/react-table';
import ProductDropdownActionMenu from './dropdown-action-menu';

export type Product = {
    // id: string;
    // name: string;
    // description: string;
    // price: number;
    // dealPrice: number;
    // slug: string;
    // status: 'approved' | 'pending' | 'rejected';
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number,
    }
}


export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: 'title',
        header: 'Title',
    },
    {
        accessorKey: 'price',
        header: 'Price',
    },
    // {
    //     accessorKey: 'description',
    //     header: 'Description',
    // },
    {
        accessorKey: 'category',
        header: 'Category',
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({row}) => {
            const product = row.original;
            return <ProductDropdownActionMenu product={product} />;
        }
    }

];