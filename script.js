//show real products
let products = [
  {
    name: "White Chair",
    headline: "Soft like cloud",
    price: "10000",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Black Chair",
    headline: "Dark",
    price: "15000",
    image:
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYWlyfGVufDB8fDB8fHww",
  },
  {
    name: "Yellow Chair",
    headline: "Yellowish Chair",
    price: "16500",
    image:
      "https://images.unsplash.com/photo-1486946255434-2466348c2166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8fDB8fHww",
  },
];

let popular = [
  {
    name: "Mini White Chair",
    headline: "Soft like cloud",
    price: "1000",
    image:
      "https://plus.unsplash.com/premium_photo-1681031465676-995faaaac5bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNoYWlyfGVufDB8fDB8fHww",
  },
  {
    name: "Mini Black Chair",
    headline: "Dark",
    price: "1500",
    image:
      "https://images.unsplash.com/photo-1554941829-fcef7b298d5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGNoYWlyfGVufDB8fDB8fHww",
  },
  {
    name: "Mini Yellow Chair",
    headline: "Yellowish Chair",
    price: "1650",
    image:
      "https://plus.unsplash.com/premium_photo-1673014201385-115f57893c99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGNoYWlyfGVufDB8fDB8fHww",
  },
];

let cart = [];

function addProduct() {
  let clutter = "";
  products.forEach(function (product, index) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl ">
                <img class="w-full h-full object-cover rounded-xl" src="${product.image}"/>
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2">$${product.price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i
                                data-index="${index}" class="ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;

    document.querySelector(".products").innerHTML = clutter;
  });
}

function addPopulaProduct() {
  let clutter = "";
  popular.forEach(function (pop) {
    clutter += ` <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${pop.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${pop.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${pop.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">$ ${pop.price}</h4>
                    </div>
                </div>`;

    document.querySelector(".populars").innerHTML = clutter;
  });
}

function addtoCart() {
  document
    .querySelector(".products")
    .addEventListener("click", function (details) {
      if (details.target.classList.contains("add")) {
        cart.push(products[details.target.dataset.index]);
        console.log(cart)
      }
    });
}

function showCart() {
  document.querySelector(".carticon").addEventListener("click", function () {
    document.querySelector(".cartexpnd").style.display = "block";

    let clutter = "";
    cart.forEach(function (prod, index) {
      clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
    <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
    <img class="w-full h-full object-cover " src="${prod.image}" />
    </div>            
    <div>
        <h3 class="font-semibold">${prod.name}</h3>
        <h5 class="text-sm font-semibold opacity-80">$${prod.price}</h5>
    </div>
</div>`;
    });

    document.querySelector(".cartexpnd").innerHTML = clutter;
  });


  document.addEventListener("click", function (event) {
    const cartExpnd = document.querySelector(".cartexpnd");
    const cartIcon = document.querySelector(".carticon");

    // Check if the clicked element is not the cartExpnd or the cartIcon
    if (!cartExpnd.contains(event.target) && event.target !== cartIcon) {
        cartExpnd.style.display = "none";
    }
});



}

showCart();
addtoCart();
addProduct();
addPopulaProduct();
// show real popular products
//on click of product add button add it to the cart
