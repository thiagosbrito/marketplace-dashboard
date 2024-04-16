import { DocumentData } from "firebase/firestore";
import { Address } from "./address";

export interface Provider extends DocumentData {
    name: string;
    company_legal_number: string;
    company_legal_name: string;
    address: Address;
    logo_url: string;
}