import { AsyncStorage } from 'react-native';

import { UNKNOWN, EXISTS, SUCCESS } from '../const/storageResult';
import { PRODUCTS } from '../const/products';

const BASE_STORAGE_PATH = '@SpectraPure';

class SyncStorage {
  static async setProduct(productId) {
    const productIds = await SyncStorage.getProducts();
    if (productIds.includes(productId)) {
      return EXISTS;
    }

    if (PRODUCTS[productId] === undefined) {
      return UNKNOWN;
    }

    productIds.unshift(productId);
    await AsyncStorage.setItem(`${BASE_STORAGE_PATH}:productIds`, JSON.stringify(productIds));
    return SUCCESS;
  }

  static async getProducts() {
    const ids = await AsyncStorage.getItem(`${BASE_STORAGE_PATH}:productIds`);
    
    const productIds = ids ? JSON.parse(ids): [];
    return productIds;
  }

  static async deleteProduct(idToBeRemoved) {
    let idsAfterFilter = [];
    const productIds = await SyncStorage.getProducts();

    idsAfterFilter = productIds.filter(id => id !== idToBeRemoved);
    await AsyncStorage.setItem(`${BASE_STORAGE_PATH}:productIds`, JSON.stringify(idsAfterFilter));

    return idsAfterFilter;
  }
}

export { SyncStorage }