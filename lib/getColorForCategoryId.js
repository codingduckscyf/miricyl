const getColorForCategoryId = (categoryId) => {
  if (categoryId === 1) {
    return "yellow";
  } else if (categoryId === 2) {
    return "green";
  } else if (categoryId === 3) {
    return "indigo";
  } else {
    return "red";
  }
};

export default getColorForCategoryId;
