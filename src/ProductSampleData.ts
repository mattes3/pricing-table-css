import { Product } from './ProductModel';

export const personal: Product = {
    name: "Personal",
    price: 5.0,
    features: [
        { description: "10 GB of storage" },
        { description: "0.5 GB uploads per week" },
    ]
}

export const team: Product = {
    name: "Team",
    price: 50.0,
    features: [
        { description: "100 GB of storage" },
        { description: "5 GB uploads per week" },
        { description: "Automatic backups" },
    ]
}

export const company: Product = {
    name: "Company",
    price: 500.0,
    features: [
        { description: "1000 GB of storage" },
        { description: "50 GB uploads per week" },
        { description: "Automatic backups" },
        { description: "Priority support" },
    ]
}
