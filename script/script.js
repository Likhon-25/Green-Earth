console.log("Hello World");
const categoriesContainer = document.getElementById("categoriesContainer")
const treesContainer = document.getElementById("treeContainer")

async function loadCategories() {
    // async
    const res = await fetch("https://openapi.programming-hero.com/api/categories")
    const data = await res.json()
    // console.log(data);
    // console.log(categoriesContainer);

    data.categories.forEach(category => {
        console.log(category);

        const btn = document.createElement("button");
        btn.className = "btn btn-outline w-full";
        categoriesContainer.appendChild(btn)
        btn.innerText = category.category_name

    });
}

async function loadTrees() {
    const res = await fetch("https://openapi.programming-hero.com/api/plants")
    const data = await res.json()
    console.log(data);
    console.log(loadTrees);

    displayTree(data.plants)
}

function displayTree(trees) {
    console.log(trees);

    trees.forEach(tree => {
        console.log(tree);
        const card = document.createElement("div");
        card.className = "card bg-white shadow-sm";
        card.innerHTML = `
    <div class="rounded-2xl overflow-hidden border border-green-100 bg-white">
        <figure class="relative overflow-hidden h-52">
            <img 
                src="${tree.image}" 
                alt="${tree.name}"
                title="${tree.name}
                class="w-full h-full object-cover"
            />
            <div class="absolute top-3 right-3">
                <span class="badge bg-green-400 text-white border-none px-3 py-1 text-xs font-semibold shadow">
                    ${tree.category}
                </span>
            </div>
        </figure>

        <div class="p-6 space-y-3">
            <h2 class="text-lg font-bold text-gray-800">${tree.name}</h2>
            <p class="text-sm text-gray-500 leading-relaxed line-clamp-2"> ${tree.description}</p>

            <div class="flex justify-between items-center pt-3 border-t border-gray-100">
                <span class="text-xl font-extrabold text-green-400">৳${tree.price}</span>
                <button class="btn btn-sm bg-green-400 border-none text-white rounded-xl px-5">
                    Cart
                </button>
            </div>
        </div>
    </div>
`;
        treesContainer.appendChild(card)
    })
}

loadTrees()
loadCategories()