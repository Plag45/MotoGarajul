import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  constructor(private router: Router) {}

  products = [
    { id: 1, name: 'Schimbare Ulei' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' }
  ];

  selectProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
