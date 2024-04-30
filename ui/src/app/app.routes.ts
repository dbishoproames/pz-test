import { Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductEditComponent } from './admin-product-edit/admin-product-edit.component';

export const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'product/:uuid', component: ProductComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'product', component: AdminProductEditComponent },
      { path: 'product/:uuid', component: AdminProductEditComponent },
      { path: '', redirectTo: 'products', pathMatch: 'full' }
    ]
  },
  //{ path: '', redirectTo: '/products', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }  // wildcard route (see https://angular.io/guide/router#setting-up-wildcard-routes)
];
