const categoryContainer = document.getElementById("categories");
const petsContianer = document.getElementById("pets-container");

const fetchAllCategory = async () => {
  const url = "https://openapi.programming-hero.com/api/peddy/categories";
  const data = await (await fetch(url)).json();

  data.categories.forEach((category) => {
    const div = document.createElement("div");
    div.classList = "text-xl flex bg-slate-200 active:bg-transparent active:border-2 active:border-slate-500 px-6 active:px-5 py-4 active:py-3 rounded-xl";
    div.innerHTML = `<image class="size-10 block" src="${category.category_icon}"> <button class="block">${category.category}</button>`;
    categoryContainer.appendChild(div);
  });
};

const fetchAllPets = async () => {
  const url = "https://openapi.programming-hero.com/api/peddy/pets";
  const data = await (await fetch(url)).json();

  data.pets.map(({ breed, category, date_of_birth, gender, image, petId, pet_details, pet_name, price, vaccinated_status }) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card bg-base-100 w-auto border-2 border-neutral-200">
        <figure class="px-4 pt-4">
          <img src="${image}" alt="${pet_name}" class="rounded-lg w-full h-60 object-cover" />
        </figure>
        <div class="card-body">
          <h2 class="card-title !text-2xl !font-bold">${pet_name}</h2>
          <div class="text-neutral-600">
            <div class="flex items-center gap-2">
              <i class="hgi hgi-stroke hgi-block-game scale-125 !text-neutral-800"></i>
              <p>Breed: ${breed}</p>
            </div>
            <div class="flex items-center gap-2">
              <i class="hgi hgi-stroke hgi-calendar-02 scale-125 !text-neutral-800"></i>
              <p>Birth: ${date_of_birth}</p>
            </div>
            <div class="flex items-center gap-2">
              <i class="hgi hgi-stroke hgi-aids scale-125 !text-neutral-800"></i>
              <p>Gender: ${gender}</p>
            </div>
            <div class="flex items-center gap-2">
              <i class="hgi hgi-stroke hgi-dollar-square scale-125 !text-neutral-800"></i>
              <p>Price: ${price}</p>
            </div>
          </div>
          <div class="card-actions flex justify-around gap-3">
            <button class="btn btn-outline text-primary"><i class="hgi hgi-stroke hgi-thumbs-up"></i></button>
            <button class="btn btn-outline text-primary">Adopt</button>
            <button onclick="showPetDetailsByID(${petId})" class="btn btn-outline text-primary">Details</button>
          </div>
        </div>
      </div>
    `;

    petsContianer.appendChild(div);
  });
};

const showPetDetailsByID = async (id) => {
  const url = `https://openapi.programming-hero.com/api/peddy/pet/${id}`;
  const data = await (await fetch(url)).json();
  console.log(data);

  const { breed, category } = data.petData;
  data.petdata;

  const div = document.createElement("div");
  div.innerHTML = `
  <dialog class="my_modal_3" class="modal">
  <div class="modal-box">
  <form method="dialog">
  <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
  </form>
  <h3 class="text-lg font-bold">Hello!</h3>
  <p class="py-4">${breed}</p>
  </div>
  </dialog>
  `;
  document.body.appendChild(div);

  my_modal_3.showModal();
};

fetchAllCategory();
fetchAllPets();
