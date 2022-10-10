export async function getCategories() {
  const url = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const json = url.json();
  return json;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && query) {
    const resquestCategoryAndQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}&q=${query}`);
    const json = resquestCategoryAndQuery.json();
    return json;
  } if (categoryId) {
    const resquestCategory = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}`);
    const jsonCategoryId = resquestCategory.json();
    return jsonCategoryId;
  } if (query) {
    const resquestQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const jsonQuery = resquestQuery.json();
    return jsonQuery;
  }
}

export async function getProductById(id) {
  const data = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const json = await data.json();
  return json;
}
