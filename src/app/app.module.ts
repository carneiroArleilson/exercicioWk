import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { StructureComponent } from './components/structure/structure.component';
import { ClientsComponent } from './components/clients/clients.component';
import { OrderComponent } from './components/sales/order/order.component';
import { SaleConfirmComponent } from './components/sales/sale-confirm/sale-confirm.component';
import { SaleListComponent } from './components/sales/sale-list/sale-list.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    StructureComponent,
    ClientsComponent,
    OrderComponent,
    SaleConfirmComponent,
    SaleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
