import { http, HttpResponse } from 'msw';
import { products } from '../data/productData';


export const productHandlers = [

    // GET
    http.get('/api/products', () => {
        return HttpResponse.json({
            products
        });
    }),

    // GET
    http.get('/api/product/settings', () => {
        return HttpResponse.json({
            theme: 'dark',
            notifications: true,
        });
    }),
];