import { Routes } from '@angular/router';
import { DashboardComponent } from './private/components/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './public/components/login/login.component';
import { UserListComponent } from './private/components/users/user-list/user-list.component';
import { CreateUserComponent } from './private/components/users/create-user/create-user.component';
import { ProductListComponent } from './private/components/product/product-list/product-list.component';
import { CreateProductComponent } from './private/components/product/create-product/create-product.component';
import { ClientListComponent } from './private/components/clients/client-list/client-list.component';
import { CreateClientComponent } from './private/components/clients/create-client/create-client.component';
import { SalesListComponent } from './private/components/sales/sales-list/sales-list.component';
import { CreateSaleComponent } from './private/components/sales/create-sale/create-sale.component';

export const routes: Routes = [
    {
        path: 'dashboard' , component: DashboardComponent, children: 
        [
            {
                path: 'userList', component: UserListComponent
            },
            {
                path: 'createUser', component: CreateUserComponent
            },
            {
                path: 'productList', component: ProductListComponent
            },
            {
                path: 'createProduct', component: CreateProductComponent
            },
            {
                path: 'clientList', component: ClientListComponent
            },
            {
                path: 'createClient', component: CreateClientComponent
            },
            {
                path: 'saleList', component: SalesListComponent
            },
            {
                path: 'createSale', component: CreateSaleComponent
            },

        ]
    },
    {
        path: 'login' , component: LoginComponent
    },
    {
        path: '**', component: LoginComponent
    }
];