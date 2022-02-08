import * as React from 'react';
import renderer from 'react-test-renderer'
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
    
    test('debe de mostrar el componente correctamente con la imagen personalizada', () => {
        
        const wrapper = renderer.create(
            <ProductImage img={ 'https://soyLaImagen.jpg' } />
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    });

    test('debe de mostrar el componente correctamente con la imagen del producto', () => {
        
        const wrapper = renderer.create(
            <ProductCard product={ product2 } >
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    });
})