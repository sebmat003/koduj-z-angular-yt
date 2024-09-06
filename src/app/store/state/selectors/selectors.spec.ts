import { convertArrayToEntityState } from './../../utils/utils';
import { EntityState } from '@ngrx/entity';
import { Product } from '../../models/store.models';
import {
  selectAllProducts,
  selectProductsLength,
  selectSumOfAllProducts,
} from './selectors';
import { mockProducts } from '../../testing/product-testing.data';

describe('Product selectors', () => {
  let productEntityState: EntityState<Product> =
    convertArrayToEntityState(mockProducts);

  it('should select all products', () => {
    const result = selectAllProducts.projector(productEntityState);

    expect(result).toEqual(mockProducts);
  });

  it('should return number of products', () => {
    const result = selectProductsLength.projector(productEntityState);

    expect(result).toEqual(2);
  });

  it('should return sum of all products', () => {
    const result = selectSumOfAllProducts.projector(productEntityState);

    expect(result).toEqual(300);
  });
});
