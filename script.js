const categoryContainer = document.getElementById("categories");
const petsContianer = document.getElementById("pets-container");

const fetchAllCategory = async () => {
  const url = "https://openapi.programming-hero.com/api/peddy/categories";
  const data = await (await fetch(url)).json();

  data.categories.forEach((category) => {
    const div = document.createElement("div");
    div.classList = "text-xl flex bg-slate-200 p-6 rounded-xl";
    div.innerHTML = `<image class="size-10 block" src="${category.category_icon}"> <button class="block">${category.category}</button>`;
    categoryContainer.appendChild(div);
  });
};

const fetchAllPets = async () => {
  const url = "https://openapi.programming-hero.com/api/peddy/pets";
  const data = await (await fetch(url)).json();

  data.pets.map((pet) => {
    console.log(pet);

    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card bg-base-100 w-auto border-2 border-neutral-200">
        <figure class="px-4 pt-4">
          <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" class="rounded-lg" />
        </figure>
        <div class="card-body">
          <h2 class="card-title !text-2xl !font-bold">${name}</h2>
          <div class="text-neutral-600">
            <div class="flex items-center gap-2">
              <i class="hgi hgi-stroke hgi-block-game scale-125 !text-neutral-800"></i>
              <p>Breed:</p>
            </div>
            <div class="flex items-center gap-2">
              <i class="hgi hgi-stroke hgi-calendar-02 scale-125 !text-neutral-800"></i>
              <p>Birth:</p>
            </div>
            <div class="flex items-center gap-2">
              <i class="hgi hgi-stroke hgi-aids scale-125 !text-neutral-800"></i>
              <p>Gender:</p>
            </div>
            <div class="flex items-center gap-2">
              <i class="hgi hgi-stroke hgi-dollar-square scale-125 !text-neutral-800"></i>
              <p>Price:</p>
            </div>
          </div>
          <div class="card-actions flex justify-around gap-3">
            <button class="btn btn-outline text-primary"><i class="hgi hgi-stroke hgi-thumbs-up"></i></button>
            <button class="btn btn-outline text-primary">Adopt</button>
            <button class="btn btn-outline text-primary">Details</button>
          </div>
        </div>
      </div>
    `;

    petsContianer.appendChild(div);
  });
};

fetchAllCategory();
fetchAllPets();
