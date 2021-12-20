


function getItems() {
db.collection("Items").get().then((querySnapshot) => {
    let items = [];
    querySnapshot.forEach((doc) => {
        items.push({
            id: doc.id,
            image: doc.data().image,
            make: doc.data().make,
            name: doc.data().name,
            price: doc.data().price,
            rating: doc.data().rating,
        })
      
    });
    generateItems(items)

});
}

function addToCart(item) {
    console.log(item);
    db.collection("cart-items").doc(item.id)
    .doc(item.id).set({
        image: item.image,
        make: item.make,
        name: item.name,
        rating: item.rating,
        price: item.price,
        quantity:

    })
}

function generateItems(items) {
    items.forEach ((items) => {
        let doc = document.createElement('div');
        doc.classList.add("main-product", "mr-5",);
        doc.innerHTML = ``

        itemsHTML += ` 
        <div class="main-products">
        <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
            <img class="w-full h-full object-contain"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.c0x1VZXCMsJ11FrArxW63QHaEK%26pid%3DApi&f=1"
                alt="">
        </div>
        <div class="product-name text-gray-700 font-bold mt-2 text-sm">
        ${items.name}
            Nintendo Switch(2019)
        </div>
        <div class="product-make text-green-700 font-bold">
        ${items.make}
            Nintendo
        </div>
        <div class="product-rating text-yellow-700 font-bold my-1">
            ⭐⭐⭐⭐⭐ 4.5 ${items.rating}
        </div>
        <div class="product-price font-bold text-gray-700 text-lg">
        ${items.price}
            $290.00
        </div>
        <div class="add-to-cart mb-2 mt-2 w-28 flex items-center justify-center bg-yellow-400 rounded text-black font-bold text-sm cursor-pointer 
hover:bg-yellow-600">
Add To Cart
</div>
    `
     
    let addToCartEl = document.createElement("div")
    addToCartEl.classList.add("hover:bg-yellow-600", "cursor-pointer", "product-add", "h-8", "w-28", "rounded", "bg-yellow-500", "text-white", "text-md", "flex", "justify-center", "items-center");
    addToCartEl.innerText = "Add-to-cart";
    addToCartEl.addEventListener("click")
    doc.appendChild(addToCartEl);
    document.querySelector(".main-section-products").appendChild(doc);


    })

    document.querySelector('.main-section-products').innerHTML = itemsHTML;
}

getItems();