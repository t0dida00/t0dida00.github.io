var AddtoCart = document.getElementsByClassName("add-to-cart-button")[0]

AddtoCart.onclick = function () {
    var NameProduct = document.getElementsByClassName("product-title")[0].innerHTML
    var PriceProduct = document.getElementsByClassName("product-price")[0].innerHTML
    var ImageProduct = document.getElementsByClassName("tab-pane active")[0].firstChild
    var Quantity = 0;
    console.log(window.localStorage.getItem(NameProduct))
    if (localStorage.getItem(NameProduct) === null) {
        Quantity = 1;
    }
    else {

        Quantity = parseInt(JSON.parse(localStorage.getItem(NameProduct)).quantity) + 1

    }
    var obj = { name: NameProduct, price: PriceProduct, image: ImageProduct.outerHTML, quantity: Quantity }


    window.localStorage.setItem(NameProduct, JSON.stringify(obj))

    alert("Add to cart successfully !!!")
    location.reload();
}

