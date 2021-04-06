import { ProductsComponent } from './components/products/products.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// to do: toda vez que o endereço for "/" ou desconhecido redireciona pra product
const routes: Routes = [{ path: 'product', component: ProductsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
