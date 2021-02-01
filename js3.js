
var CartItems = document.getElementsByClassName('shopping-cart_product');
var InputClicked = document.getElementsByClassName("input-number");
var InputPrice = document.getElementsByClassName("input_price");
var InputTotalPrice = document.getElementsByClassName("total_price_product");


// Update before load page
document.addEventListener("DOMContentLoaded", function () {
    UpdateCart()

});

//Total 
function UpdateCart() {

    var total_price = 0
    var total_quantity = 0

    for (let i = 0; i < InputClicked.length; i++) {
        total_quantity = total_quantity + parseInt(InputClicked[i].value);
        total_price = total_price + parseInt(InputClicked[i].value) * parseInt(InputPrice[i].value);

    }

    document.getElementById("total").innerHTML = total_price.toLocaleString("fi-FI")
    document.getElementById("badge").innerHTML = total_quantity
    updateCart()
}

function updateCart() {
    var total_quantity_in_cart = 0
    for (let i = 0; i < localStorage.length; i++) {
        total_quantity_in_cart = parseInt(JSON.parse(localStorage.getItem(localStorage.key(i))).quantity) + total_quantity_in_cart
    }
    document.getElementById("badge_index").innerHTML = total_quantity_in_cart

}


//Button Remove

var removeCartItemButtons = document.getElementsByClassName('remove');

removeCartItemButtons.onclick = remove()
function remove() {
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        removeCartItemButtons[i].onclick = function () {
            var NameProduct = document.getElementsByClassName("shopping-cart_product-title");
            console.log(NameProduct[i].innerHTML)

            for (let m = 0; m <= localStorage.length; m++) {
                if (NameProduct[i].innerText == localStorage.key(m)) {
                    localStorage.removeItem(localStorage.key(m));

                }
            }
            CartItems[i].remove();
            UpdateCart()
            location.reload();
            remove()

        }
    }
}

for (let i = 0; i < localStorage.length; i++) {

    addtoCart(localStorage.key(i),
        JSON.parse(localStorage.getItem(localStorage.key(i))).price,
        JSON.parse(localStorage.getItem(localStorage.key(i))).image,
        JSON.parse(localStorage.getItem(localStorage.key(i))).quantity)
}

function addtoCart(title, price, image, quantity) {

    var cartRow = document.createElement('div')
    cartRow.classList.add("row", "shopping-cart_product")
    cartItems = document.getElementsByClassName("list-product-shopping-cart")[0]


    var cartItemNames = cartItems.getElementsByClassName('shopping-cart_product-title')

    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            InputClicked[i].value = parseInt(InputClicked[i].value) + 1;
            InputTotalPrice[i].value = (parseInt(InputPrice[i].value) * parseInt(InputClicked[i].value)).toLocaleString("fi-FI");
            UpdateCart()
            return
        }
    }
    var total_price = parseInt(price) * parseInt(quantity);
    var cartRowContents = `
    <div class="col-lg-2 col-md-6 col-sm-6 col-xs-6 image_product">
    ${image}
</div>
<div class="col-lg-5 col-md-6 col-sm-6 col-xs-6 detail_product">
    <div class=" shopping-cart_product-title "> ${title}</div>
    <div class="row">
        <div class="col-6">
            <div class="shopping-cart_product-price">
                <p>Price</p>
                <input type="text" class="input_price" value="${price}" readonly="" style="border:none;"></div>
        </div>
        <div class="col-6">
            <div class="shopping-cart_product-price ">
                <p>Total</p>
                <input type="text" class="total_price_product" value="${total_price}" readonly="" style="border:none;"></div>
        </div>

    </div>
</div>
<div class="col-lg-5 col-md-12 col-sm-12 col-xs-12 quantity ">

    <div class="form-group">

        <div class="input-group">
            <div class="input-group-btn">
                <button id="down" class="btn btn-danger down" style="width: 40px; "> <img src="images/minus.png" style="width: 15px;">
                </button>
            </div>
            <input type="text" class="form-control input-number" value="${quantity}" size="4" readonly="">
            <div class="input-group-btn">
                <button id="up" class="btn btn-success up" style="width: 40px; "><img src="images/plus.png" style="width: 15px;"></button>
            </div>
            <button class="btn btn-danger remove" style="margin-left: 10px;">
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </div>

    </div>

</div>
    
    `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('remove')[0].onlick = remove()
    cartRow.getElementsByClassName('up')[0].onclick = function () {
        var max = 10;
        InputClicked[i].value = parseInt(InputClicked[i].value) + 1;

        if (InputClicked[i].value >= parseInt(max)) {
            InputClicked[i].value = max;
        }


        InputTotalPrice[i].value = (parseInt(InputPrice[i].value) * parseInt(InputClicked[i].value)).toLocaleString("fi-FI");

        var obj = { name: title, price: price, image: image, quantity: InputClicked[i].value }
        window.localStorage.setItem(title, JSON.stringify(obj))

        UpdateCart()
    }
    cartRow.getElementsByClassName('down')[0].onclick = function () {
        var min = 1;

        InputClicked[i].value = parseInt(InputClicked[i].value) - 1;

        if (InputClicked[i].value <= parseInt(min)) {
            InputClicked[i].value = min;
        }

        InputTotalPrice[i].value = (parseInt(InputPrice[i].value) * parseInt(InputClicked[i].value)).toLocaleString("fi-FI");
        var obj = { name: title, price: price, image: image, quantity: InputClicked[i].value }
        window.localStorage.setItem(title, JSON.stringify(obj))
        UpdateCart()
    }
}

