import { Component, Inject, OnInit } from '@angular/core';
import { Location, NgIf, NgFor, DecimalPipe } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { ProductService } from '../product.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.less'
})
export class ProductComponent implements OnInit {

  product?: Product;

  constructor(
      private location: Location,
      private route: ActivatedRoute,
      private productService: ProductService,
      private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  goBack(): void {
    this.location.back();
  }

  openPriceByWeightDialog(): void {
    if (this.product) {
      let dialogConfig: MatDialogConfig<PriceByWeightDialogData> = {
        data: {
          pricePerKilogram: this.product.pricePerKilogram,
          weightInKilograms: 1
        }
      };
      this.dialog.open(PriceByWeightDialog, dialogConfig);
    }
  }

  protected getProduct(): void {
    const uuid = this.route.snapshot.paramMap.get('uuid')/* || ''*/;
    if (uuid) {
      this.productService.getProduct(uuid)
          .subscribe(v => this.product = v);
    } else {
      // TODO: error message
      this.product = undefined;
    }
  }

}

export interface PriceByWeightDialogData {
  pricePerKilogram: number;
  weightInKilograms: number;
}

@Component({
  selector: 'dialog-price-by-weight',
  standalone: true,
  imports: [
    DecimalPipe,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './price-by-weight-dialog.component.html',
  styleUrl: './price-by-weight-dialog.component.less'
})
export class PriceByWeightDialog {

  constructor(
      public dialogRef: MatDialogRef<PriceByWeightDialog>,
      @Inject(MAT_DIALOG_DATA) public data: PriceByWeightDialogData) {
  }

}
