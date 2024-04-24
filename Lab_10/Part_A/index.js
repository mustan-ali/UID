var main_container = document.getElementById("main_container")
// main_container.innerHTML = ""
for (var i = 1; i <= 10; i++) {
    main_container.innerHTML += " <div class=product-item> <div class=product-inner" + " id=card" + i + " onclick=add_to_cart(this.id) ><img src=product.png > <h4>Minecraft</h4> <h5>" + Math.floor(Math.random() * 15000) + " Rs</h5></div></div>";
}
function add_to_cart(id) {
    var getProduct = document.getElementById(id)
    getProduct.classList.toggle("highlight")
}