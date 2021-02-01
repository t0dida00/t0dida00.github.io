
const Mobiles = [
  {
    model: 'Vsmart Joy 3',
    image: 'images/joy3 tim.png',
    ram: 'RAM 8GB',
    rom:'ROM 128GB',
    price: "7.490.000d",
    link:"joy3.html",
    promotion:"",
    filter:[
      "64gb-128gb",
      "3tr"
    ]
  },
  {
    model: 'Vsmart Bee 3',
    image: 'images/bee 3 blue.png',
    ram: 'RAM 2GB',
    rom:'ROM 16GB',
    price: "1.590.000d",
    link:"bee3.html",
    promotion:"",
    filter:[
      "16gb-32gb",
      "1tr"
    ]
  },
  {
    model: 'Vsmart Joy 4',
    image: 'images/joy4 đen.png',
    ram: 'RAM 3GB',
    rom:'ROM 64GB',
    price: "3.290.000d",
    link:"joy4.html",
    promotion:"",
    filter:[
      "64gb-128gb",
      "3tr"
    ]
  },
   {
    model: 'Vsmart Star 3',
    image: 'images/star 3 red.png',
    ram: 'RAM 2GB',
    rom:'ROM 16GB',
    price: "1.990.000d",
    link:"star3.html",
    promotion:"",
    filter:[
      "16gb-32gb",
      "1tr"
    ]
  },
  {
   model: 'Vsmart Active 3',
   image: 'images/fpt act3.jpg',
   ram: 'RAM 6GB',
   rom:'ROM 64GB',
   price: "3.390.000d",
   link:"active3.html",
   promotion:"3.999.000",
   filter:[
    "64gb-128gb",
    "3tr"
  ]
 }
 ,
   {
    model: 'Vsmart Live',
    image: 'images/fpt live.jpg',
    ram: 'RAM 4GB',
    rom:'ROM 64GB',
    price: "3.490.000d",
    link:"live.html",
    promotion:"",
    filter:[
      "64gb-128gb",
      "3tr"
    ]
  }
  ,
   {
    model: 'Vsmart Joy 2+',
    image: 'images/fpt joy2.jpg',
    ram: 'RAM 2GB',
    rom:'ROM 32GB',
    price: "2.490.000d",
    link:"joy2.html",
    promotion:"",
    filter:[
      "16gb-32gb",
      "1tr"
    ]
  }

]

var countClicked=0


function addProductsWInnerHTML() {
 
  var condition= (countClicked*2 < Mobiles.length) ? countClicked + 4 : Mobiles.length
 
  // const productStrings = Mobiles.map(c => prepareSingleProductHTMLString(c.model, c.image, c.ram,c.rom,c.price,c.promotion,c.link));
  // console.log(productStrings)
  // alert("haha")
  // document.querySelector('.row.item').innerHTML += `
  //     ${productStrings.join('')}
  //  `
  for(i=countClicked ; i< condition ; i++)
{
  var productStrings = prepareSingleProductHTMLString(Mobiles[i].model,Mobiles[i].image,Mobiles[i].ram,Mobiles[i].rom,Mobiles[i].price,Mobiles[i].promotion,Mobiles[i].link,Mobiles[i].filter)
  
  document.querySelector('.row.item').innerHTML += `
     ${productStrings} `
}
countClicked= countClicked+ 4;

if(countClicked >Mobiles.length)
{
  
  document.getElementById("load-more").classList.add("deactive");
}
}

function prepareSingleProductHTMLString(model, imagePath, ram,rom,price,promotion,link,filter) {
  
  return `
  <div class="col-lg-3 col-md-4 col-sm-6 col-xm-12 product-item filterDiv ${filter[0]} ${filter[1]} show">

                        <a href="${link}" style="color:black; text-decoration: none;">
                            <div class="card">
                                <div class="avatar">
                                    <img class="card-img-top"  src="./${imagePath}" alt="" id="image">
                                    <div class="overlay">
                                        <div class="text"> <img src="./${imagePath}" alt="Avatar" class="image"></div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title">${model}</h4>
                                    <p class="card-text">${ram}
                                        <span>/</span>
                                        ${rom}
                                    </p>
                                    <p class="card-price">${price}
                                    </p>
                                    <!-- <p class="card-price-promotion">
                                        <span class="money">${promotion}</span>
                                        <span class="card-price-promotion-by-percent">-15%</span>
                                    </p> -->
                                </div>
                            </div>

                        </a>
                    </div>
  `;

}






document.addEventListener("DOMContentLoaded", function () {

  updateCart()

});
function filter() {
  document.getElementById("box-filter").style.display = "block";

}
function cancel() {
  document.getElementById("box-filter").style.display = "none";

}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }

}

function w3AddClass(element, name) {
  var i, arr1, arr2;

  arr1 = element.className.split(" ");

  arr2 = name.split(" ");


  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }

}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");

}
function submit1() {
  document.getElementById("submit-button").style.display = "block";

}

function modal1() {
  var length_localstorage = localStorage.length
  for (let i = 0; i < length_localstorage; i++) {
    console.log(localStorage.key(i))
    if (localStorage.key(i) !== null) {
      localStorage.removeItem(localStorage.key(i));
      i--;
    }
  }

  document.getElementById("successful").style.display = "block";
  document.getElementById("customer-form").style.display = "none";
  document.getElementById("customer").style.margin = "0";
  document.getElementById("badge_index").innerHTML = "0";

}


function updateCart() {
  var total_quantity_in_cart = 0
  for (let i = 0; i < localStorage.length; i++) {
    total_quantity_in_cart = parseInt(JSON.parse(localStorage.getItem(localStorage.key(i))).quantity) + total_quantity_in_cart
  }
  document.getElementById("badge_index").innerHTML = total_quantity_in_cart
}

