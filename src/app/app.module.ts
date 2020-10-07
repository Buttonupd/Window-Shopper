import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/components/product-form/product-form.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { ProductQuantityComponent } from './shared/components/product-quantity/product-quantity.component';
import {environment} from './../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { LoginComponent } from './core/components/login/login.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingModule } from './shopping/shopping.module';
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestore} from '@angular/fire/firestore';
@NgModule({
  declarations: [
    AppComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    ProductFormComponent,
    ProductCardComponent,
    ProductQuantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'login', component: LoginComponent },
    ])  
  ],
  providers: [AdminAuthGuardService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
