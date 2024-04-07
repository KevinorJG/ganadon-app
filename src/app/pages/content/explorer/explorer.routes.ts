import { Routes } from '@angular/router';
import { ExplorerPage } from './explorer.page';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/app/products',
        pathMatch: 'full',
    },
    {
        path: '',
        component: ExplorerPage,
        children: [
            {
                path: 'products',
                loadComponent: () => import('../products/products.page').then((p) => p.ProductsPage)
            },
            {
                path: 'options',
                loadComponent: () => import('../options/options.page').then((p) => p.OptionsPage)
            },
            {
                path: '',
                redirectTo: '/app/products',
                pathMatch: 'full',
            }
        ]
    },
    
]