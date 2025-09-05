const categoryContainer = document.getElementById("categories");

const fetchCategory = async () => {
  const url = "https://openapi.programming-hero.com/api/peddy/categories";
  const data = await (await fetch(url)).json();

  data.categories.forEach((category) => {
    const div = document.createElement("div");
    div.classList = "text-xl flex bg-slate-200 p-6 rounded-xl";
    div.innerHTML = `<image class="size-10 block" src="${category.category_icon}"> <button class="block">${category.category}</button>`;
    categoryContainer.appendChild(div);
  });
};

fetchCategory();
