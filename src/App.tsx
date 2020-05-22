import React from 'react';

import { company, personal, team } from './ProductSampleData';
import { Product } from './ProductModel';
import Button from '@material-ui/core/Button';

function ProductHeader({ product }: { product: Product }) {
    return <div>
        <div>{product.name}</div>
        <div>{product.price}</div>
    </div>;
}

function FeatureList({ product }: { product: Product }) {
    return <ul>
        {
            product.features.map((feature, index) => (
                <li key={index}>{feature.description}</li>
            ))
        }
    </ul>;
}

function BuyButton() {
    return <Button variant="contained" color="primary">Buy now</Button>;
}

function ProductCard({ product }: { product: Product }) {
    return <>
        <ProductHeader product={product} />
        <FeatureList product={product} />
        <BuyButton />
    </>;
}

function App() {
    return <>
        {
            [personal, team, company].map((product, index) => (
                <ProductCard key={index} product={product} />
            ))
        }
    </>;
}

export default App;
