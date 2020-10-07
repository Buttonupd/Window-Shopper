import { Component, OnInit, OnDestroy } from '@angular/core';
import {Product} from '../../../shared/models/product';
import { Subscription } from 'rxjs/Subscription';
import {ProductService} from '../../../shared/services/product';
import { DataTableResource } from 'angular-4-data-table/src/index';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  subscription : Subscription;
  tableResource: DataTableResource<Product>;
  items : Product[] = [];
  itemCount : number;

  constructor(private productService : ProductService) {
    this.subscription = this.productService.getAll();
    .subscribe( => {
      this.products = products;
      this.initialize(products)

    });
   }
   private initializeTable( products : Product[]) {
     this.tableResource = new DataTableResource(products);
     this.tableResource.query({ offset: 0})
        .then(items => this.items = items);
      this.tableResource.count()
        .then(count => this.itemCount = count)''
   }
   reloadItems(params) {
     if(!this.tableResource) return;
      
     this.tableResource.query(params)
        .then(items => this.items = items)
    
   }
   filter(query:string){
     let filteredProducts = (query)?
        this.products.filter(p => p.title.toLowercase().includes(query.toLocaleLowerCase())) :
        this.products;

      this.initializeTable(filteredProducts);

   }

   ngOnDestroy(){
     this.subscription.unsubscibe();
   }

  ngOnInit(): void {
  }

}
