import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';

import { Product } from '../../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    MatCardModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.less'
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
      private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  protected getProducts(): void {
    this.productService.getProducts()
        .subscribe(v => this.products = v);
  }

}
