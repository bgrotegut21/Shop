import {
  getStoreItemsArrayByIdsArray,
  getStoreItemById,
  getStoreItemsByCategory,
  getAllStoreItems,
} from './storeapi';

import { describe, it, vi, expect } from 'vitest';

const items = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  },

  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    rating: {
      rate: 4.6,
      count: 400,
    },
  },

  {
    id: 9,
    title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
    price: 64,
    description:
      'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    rating: {
      rate: 3.3,
      count: 203,
    },
  },

  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
    rating: {
      rate: 4.5,
      count: 146,
    },
  },
];

const allItemsUrl = 'https://fakestoreapi.com/products';

describe('storeapi', () => {
  const mockResponseAllItems = { json: () => Promise.resolve(items) };

  const mockResponseId1 = { json: () => Promise.resolve(items[0]) };
  const mockResponseId9 = { json: () => Promise.resolve(items[2]) };
  const mockResponseId19 = { json: () => Promise.resolve(items[3]) };

  const mockResponseElctronicsObject = [items[2]];
  const mockResponseElectronics = {
    json: () => Promise.resolve(mockResponseElctronicsObject),
  };

  global.fetch = vi.fn((url) => {
    if (url === allItemsUrl) return Promise.resolve(mockResponseAllItems);

    if (url === 'https://fakestoreapi.com/products/1')
      return Promise.resolve(mockResponseId1);

    if (url === 'https://fakestoreapi.com/products/9')
      return Promise.resolve(mockResponseId9);

    if (url === 'https://fakestoreapi.com/products/19')
      return Promise.resolve(mockResponseId19);

    if (url === `https://fakestoreapi.com/products/category/electronics`)
      return Promise.resolve(mockResponseElectronics);
  });

  it('getAllItems', async () => {
    const results = await getAllStoreItems();
    expect(results).toBe(items);
  });

  it('getItemById', async () => {
    expect(await getStoreItemById(1)).toBe(items[0]);
    expect(await getStoreItemById(9)).toBe(items[2]);
    expect(await getStoreItemById(19)).toBe(items[3]);
  });

  it('getItemsByCategory', async () => {
    const mockResponseMensObject = [items[0]];
    const mockResponseWomansObject = [items[3]];

    expect(await getStoreItemsByCategory('electronics')).toStrictEqual(
      mockResponseElctronicsObject
    );

    expect(await getStoreItemsByCategory("men's clothing")).toStrictEqual(
      mockResponseMensObject
    );

    expect(await getStoreItemsByCategory("women's clothing")).toStrictEqual(
      mockResponseWomansObject
    );
  });

  it('getItemsById', async () => {
    const ids = [1, 5, 9];
    const ids2 = [19, 9, 1];
    const ids3 = [5, 9, 19];

    const mockIdsResponse1 = [items[0], items[1], items[2]];
    const mockIdsResponse2 = [items[3], items[2], items[0]];
    const mockIdsResponse3 = [items[1], items[2], items[3]];

    expect(await getStoreItemsArrayByIdsArray(ids)).toStrictEqual(
      mockIdsResponse1
    );

    expect(await getStoreItemsArrayByIdsArray(ids2)).toStrictEqual(
      mockIdsResponse2
    );

    expect(await getStoreItemsArrayByIdsArray(ids3)).toStrictEqual(
      mockIdsResponse3
    );
  });
});


√