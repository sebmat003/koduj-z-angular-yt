import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../models/store.models';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Burger',
    price: 30,
    thumbnail: 'burger.jpg',
  },
  {
    id: 2,
    name: 'French Fries',
    price: 10,
    thumbnail: 'fries.jpg',
  },
  {
    id: 3,
    name: 'Pizza',
    price: 45,
    thumbnail: 'pizza.jpg',
  },
  {
    id: 4,
    name: 'Hot-dog',
    price: 15,
    thumbnail: 'hotdog.jpg',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public getAllProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }
}
