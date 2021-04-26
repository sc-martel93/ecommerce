import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'


const products = [
    { id: 1, name: 'Pants', description: 'Blue jeans', price: '$8', image: 'https://media.istockphoto.com/photos/skinny-tight-blue-jeans-on-white-background-picture-id173239968?s=612x612' },
    { id: 2, name: 'Shoes', description: 'Driving Shoes', price: '$80', image: 'https://media.istockphoto.com/photos/concept-of-rich-and-poor-in-person-picture-id599141986' }
]



const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>)

}

export default Products