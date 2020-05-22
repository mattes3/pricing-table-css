import React from 'react';

import { company, personal, team } from './ProductSampleData';
import { Product } from './ProductModel';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        pricingTable: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'rgb(242, 242, 242)',
            justifyContent: 'center',
            padding: theme.spacing(4)
        },
        productCard: {
            display: 'flex',
            flexDirection: 'column',
            marginRight: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            justifyContent: 'space-between'
        },
        productHeader: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        featureList: {
            display: 'flex',
            flexDirection: 'column',
            listStyleType: 'none',
            padding: 0,
            alignItems: 'center'
        },
        buyActions: {
            justifyContent: 'center'
        }
    }),
);


function ProductHeader({ product }: { product: Product }) {
    const classes = useStyles();
    return <div className={classes.productHeader}>
        <Typography variant="h3">{product.name}</Typography>
        <Typography variant="h4">€{product.price}</Typography>
    </div>;
}

function FeatureList({ product }: { product: Product }) {
    const classes = useStyles();
    return <ul className={classes.featureList}>
        {
            product.features.map((feature, index) => (
                <li key={index}>
                    <Typography variant="body1">{feature.description}</Typography>
                </li>
            ))
        }
    </ul>;
}

function BuyButton() {
    return <Button variant="contained" color="primary">Buy now</Button>;
}

function ProductCard({ product }: { product: Product }) {
    const classes = useStyles();
    return <Card className={classes.productCard}>
        <CardContent>
            <ProductHeader product={product} />
            <FeatureList product={product} />
        </CardContent>
        <CardActions className={classes.buyActions}>
            <BuyButton />
        </CardActions>
    </Card>;
}

function App() {
    const classes = useStyles();
    return <div className={classes.pricingTable}>
        {
            [personal, team, company].map((product, index) => (
                <ProductCard key={index} product={product} />
            ))
        }
    </div>;
}

export default App;
