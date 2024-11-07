const getAllStoreItems = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const results = await response.json();

  return results;
};

const getStoreItemsByCategory = async (category) => {
  if (category === 'jewelery' || category === 'electronics') {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );

    const result = await response.json();
    return result;
  }

  const results = await getAllStoreItems();

  return results.filter((item) => item.category === category);
};

const getStoreItemsArrayByIdsArray = async (arrayOfIds) => {
  const results = await getAllStoreItems();

  return arrayOfIds.map((id) => {
    const item = results.find((resultObject) => resultObject.id === id);
    return item;
  });
};

const getStoreItemById = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const result = await response.json();
  return result;
};

export {
  getStoreItemsArrayByIdsArray,
  getStoreItemById,
  getStoreItemsByCategory,
  getAllStoreItems,
};
