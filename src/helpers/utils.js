export const filteredProducts = (data, sortBy, currentPage) => {
  if (sortBy === "LOWEST") {
    return data
      .sort((a, b) => a.cost - b.cost)
      .slice(currentPage, currentPage + 16);
  }
  if (sortBy === "HIGHEST") {
    return data
      .sort((a, b) => b.cost - a.cost)
      .slice(currentPage, currentPage + 16);
  }
  if (sortBy === "RECENTS") {
    return data
      .sort((a, b) => a._id.localeCompare(b._id))
      .slice(currentPage, currentPage + 16);
  }
};
