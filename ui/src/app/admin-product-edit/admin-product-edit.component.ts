import { Component, OnInit } from '@angular/core';
import { Location, NgIf, NgFor } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { ProductService } from '../product.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-admin-product-edit',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  templateUrl: './admin-product-edit.component.html',
  styleUrl: './admin-product-edit.component.less'
})
export class AdminProductEditComponent implements OnInit {

  product?: Product;
  createMode = false;

  constructor(
      private location: Location,
      private route: ActivatedRoute,
      private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  goBack(): void {
    this.location.back();
  }

  deleteProduct(): void {
    if (this.product && !this.createMode) {
      this.productService.deleteProduct(this.product)
          .subscribe(() => this.goBack());
    }
  }

  saveProduct(): void {
    if (this.product) {
      if (this.createMode) {
        this.productService.createProduct(this.product)
            .subscribe(() => this.goBack());
      } else {
        this.productService.updateProduct(this.product)
            .subscribe(() => this.goBack());
      }
    }
  }

  removePicture(index: number) {
    if (this.product) {
      this.product.pictures = this.product.pictures
          .filter((v, i) => i != index);
    }
  }

  protected getProduct(): void {
    const uuid = this.route.snapshot.paramMap.get('uuid');
    if (!uuid) {
      this.createMode = true;
      this.product = {
        uuid: '',
        productName: '',
        pricePerKilogram: 0,
        pictures: [],
        colour: ''
      };
    } else {
      this.createMode = false;
      this.productService.getProduct(uuid)
          .subscribe(v => this.product = v);
    }
  }

}
