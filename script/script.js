const categoriesContainers = document.getElementById("categoriesContainers");
const treesContainer = document.getElementById("treeContainer");
const loadingSpinner = document.getElementById("loadingSpinner");

function shoLoading() {
  loadingSpinner.classList.remove("hidden");
  loadingSpinner.classList.add("flex");
  treesContainer.innerHTML = "";
}
function hideLoading() {
  loadingSpinner.classList.add("hidden");
}

async function loadCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/categories",
  );
  const data = await res.json();
  // console.log(data);
  // console.log(categoriesContainers);
  data.categories.forEach((category) => {
    // console.log(category);
    const btn = document.createElement("button");
    btn.className = "btn btn-outline w-full";
    btn.textContent = category.category_name;
    btn.onclick = () => selectCategory(category.id, btn);
    categoriesContainers.appendChild(btn);
  });
}

async function selectCategory(categoryId, btn) {
  console.log(categoryId, btn);
  shoLoading();

  const allButton = document.querySelectorAll(
    "#categoriesContainers button, #allTreesbtn",
  );

  console.log(allButton);
  allButton.forEach((btn) => {
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-outline");
  });
  btn.classList.add("btn-primary");
  btn.classList.remove("btn-outline");

  const res = await fetch('https://openapi.programming-hero.com/api/category/${categoryId}')
  const data = await res.json();
  console.log(data);
}

async function loadTrees() {
  shoLoading();
  const res = await fetch("https://openapi.programming-hero.com/api/plants");
  const data = await res.json();
  // console.log(data);
  hideLoading();
  displayTrees(data.plants);
}
function displayTrees(trees) {
  // console.log(trees);
  trees.forEach((tree) => {
    // console.log(tree);
    const card = document.createElement("div");
    card.className = "card bg-white shadow-sm";
    card.innerHTML = ` <figure>
                <img class="h-48 w-full object-cover"
                  src=${tree.image}
                  alt=${tree.name}
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">${tree.name}</h2>
                <p class="line-clamp-2">${tree.description}</p>

                <div class="badge badge-success badge-outline">${tree.category}</div>

                <div class="flex justify-between items-center ">
                  <h2 class="font-bold text-xl text-[#4ade80]">$${tree.price}</h2>
                  <button class="btn btn-primary bg-[#4ade80]">Cart</button>
                </div>
              </div>`;
    treesContainer.appendChild(card);
  });
}
loadCategories();
loadTrees();

// const categoriesContainer = document.getElementById("categoriesContainer")
// const treesContainer = document.getElementById("treeContainer")
// const loadingSpinner = document.getElementById("loadingSpinner")

// async function loadCategories() {
//     // async
//     const res = await fetch("https://openapi.programming-hero.com/api/categories")
//     const data = await res.json()
//     // console.log(data);
//     // console.log(categoriesContainer);

//     data.categories.forEach(category => {
//         // console.log(category);

//         const btn = document.createElement("button");
//         btn.className = "btn btn-outline w-full";
//         categoriesContainer.appendChild(btn)
//         btn.innerText = category.category_name

//         btn.onclick=()=>selectCategory(category.id, btn)
//         categoriesContainer.appendChild(btn)
//     });
// }

// async function  selectCategory(categoryID, btn) {
//     console.log(categoryID, btn);
//     shoLoading();
//     btn.classList.add("btn-primary")
// }

// function shoLoading() {
//     loadingSpinner.classList.remove("hidden");
//     loadingSpinner.classList.add("flex")
//     treesContainer.innerHTML = "";
// }
// function hideLoading() {
//     loadingSpinner.classList.add("hidden");
// }
// async function loadTrees() {
//     shoLoading()
//     const res = await fetch("https://openapi.programming-hero.com/api/plants")
//     const data = await res.json()
//     hideLoading()
//     // console.log(data);
//     // console.log(loadTrees);

//     displayTree(data.plants)
// }

// function displayTree(trees) {
//     // console.log(trees);

//     trees.forEach(tree => {
//         // console.log(tree);
//         const card = document.createElement("div");
//         card.className = "card bg-white shadow-sm";
//         card.innerHTML = `
//     <div class="rounded-2xl overflow-hidden border border-green-100 bg-white">
//         <figure class="relative overflow-hidden h-52">
//             <img
//                 src="${tree.image}"
//                 alt="${tree.name}"
//                 title="${tree.name}
//                 class="w-full h-full object-cover"
//             />
//             <div class="absolute top-3 right-3">
//                 <span class="badge bg-green-400 text-white border-none px-3 py-1 text-xs font-semibold shadow">
//                     ${tree.category}
//                 </span>
//             </div>
//         </figure>

//         <div class="p-6 space-y-3">
//             <h2 class="text-lg font-bold text-gray-800">${tree.name}</h2>
//             <p class="text-sm text-gray-500 leading-relaxed line-clamp-2"> ${tree.description}</p>

//             <div class="flex justify-between items-center pt-3 border-t border-gray-100">
//                 <span class="text-xl font-extrabold text-green-400">৳${tree.price}</span>
//                 <button class="btn btn-sm bg-green-400 border-none text-white rounded-xl px-5">
//                     Cart
//                 </button>
//             </div>
//         </div>
//     </div>
// `;
//         treesContainer.appendChild(card)
//     })
// }

// loadTrees()
// loadCategories()
