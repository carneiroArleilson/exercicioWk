import { SaleConfirmComponent } from './components/sales/sale-confirm/sale-confirm.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// to do: toda vez que o endereço for "/" ou desconhecido redireciona pra product
const routes: Routes = [
  { path: 'product', component: ProductsComponent },
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'saleConfirm', component: SaleConfirmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
