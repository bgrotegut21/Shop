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

    const items = await response.json();

    // console.log(items, 'the current ');

    return {
      title: items[0].category,
      items,
    };
  }

  const rawResults = await getAllStoreItems();
  const items = rawResults.filter((item) => item.category === category);

  if (items.length === 0) throw new Error('Category does not exist');

  return {
    title: items[0].category,
    items,
  };
};

const getStoreItemsArrayByIdsArray = async (arrayOfIds) => {
  const results = await getAllStoreItems();

  return arrayOfIds.map((id) => {
    const item = results.find((resultObject) => resultObject.id === id);
    return item;
  });
};

const getStoreItemsByQuery = async (query) => {
  const rawResults = await getAllStoreItems();

  const results = rawResults.filter((item) => {
    const lowerText = item.title.toLowerCase();
    const lowerQuery = query.toLowerCase();

    return lowerText.includes(lowerQuery);
  });

  const numberOfResults = results.length;

  return {
    title: `${numberOfResults} results for "${query}"`,
    items: results,
  };
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
  getStoreItemsByQuery,
};
