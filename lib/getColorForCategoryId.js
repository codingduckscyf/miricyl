const getColorForCategoryId = (categoryId) => {
  switch (categoryId) {
    case 1:
      return "yellow";
    case 2:
      return "green";
    case 3:
      return "indigo";
    default:
      return "red";
  }
};
export default getColorForCategoryId;
