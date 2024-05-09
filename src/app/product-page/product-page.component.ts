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
    { id: 2, name: 'Schimbare Filtre Aer' },
    { id: 3, name: 'Revizie Motor' },
    { id: 4, name: 'Segmentare' }
  ];

  selectProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
