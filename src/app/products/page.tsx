import Image from "next/image";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ProductsDialog from "./dialog";



async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products');

    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }

    return res.json();
}

interface Product {
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

const ProductsPage = async () => {
    const products: Array<Product> = await getProducts();
    
    return (
        // nice and modern tailwind table section using shadcn table
        <div className="flex flex-col">
            <ProductsDialog />
            <div className="overflow-x-auto">
                <DataTable columns={columns} data={products} />
            </div>
        </div>
    );
}

export default ProductsPage;