const categoryItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((categoryItem) => {
  const categoryName = categoryItem.firstElementChild.textContent;
  const subcategoryCount = categoryItem.lastElementChild.childElementCount;
//Audit
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${subcategoryCount}`);
});




