function filter() {
    document.getElementById("box-filter").style.display = "block";

}
function cancel() {
    document.getElementById("box-filter").style.display = "none";
 
}
action = "javascript:void(0);"

function up(max) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;

    if (document.getElementById("myNumber").value >= parseInt(max)) {
        document.getElementById("myNumber").value = max;
    }
   

    $("#total").text(parseInt(document.getElementById("moNey").value) * document.getElementById("myNumber").value +parseInt(document.getElementById("moNey2").value) * document.getElementById("myNumber2").value +parseInt(document.getElementById("moNey1").value) * document.getElementById("myNumber1").value )
}
function down(min) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;

    if (document.getElementById("myNumber").value <= parseInt(min)) {
        document.getElementById("myNumber").value = min;
    }
    $("#total").text(parseInt(document.getElementById("moNey").value) * document.getElementById("myNumber").value +parseInt(document.getElementById("moNey2").value) * document.getElementById("myNumber2").value +parseInt(document.getElementById("moNey1").value) * document.getElementById("myNumber1").value )
}
// ----------------------------------------------------------
function up2(max) {
    document.getElementById("myNumber2").value = parseInt(document.getElementById("myNumber2").value) + 1;

    if (document.getElementById("myNumber2").value >= parseInt(max)) {
        document.getElementById("myNumber2").value = max;
    }
    $("#total").text(parseInt(document.getElementById("moNey").value) * document.getElementById("myNumber").value +parseInt(document.getElementById("moNey2").value) * document.getElementById("myNumber2").value +parseInt(document.getElementById("moNey1").value) * document.getElementById("myNumber1").value )
}
function down2(min) {
    document.getElementById("myNumber2").value = parseInt(document.getElementById("myNumber2").value) - 1;

    if (document.getElementById("myNumber2").value <= parseInt(min)) {
        document.getElementById("myNumber2").value = min;
    }
    $("#total").text(parseInt(document.getElementById("moNey").value) * document.getElementById("myNumber").value +parseInt(document.getElementById("moNey2").value) * document.getElementById("myNumber2").value +parseInt(document.getElementById("moNey1").value) * document.getElementById("myNumber1").value )
}

// ----------------------------------------------------------
function up1(max) {
    document.getElementById("myNumber1").value = parseInt(document.getElementById("myNumber1").value) + 1;

    if (document.getElementById("myNumber1").value >= parseInt(max)) {
        document.getElementById("myNumber1").value = max;
    }
    $("#total").text(parseInt(document.getElementById("moNey").value) * document.getElementById("myNumber").value +parseInt(document.getElementById("moNey2").value) * document.getElementById("myNumber2").value +parseInt(document.getElementById("moNey1").value) * document.getElementById("myNumber1").value )
}
function down1(min) {
    document.getElementById("myNumber1").value = parseInt(document.getElementById("myNumber1").value) - 1;

    if (document.getElementById("myNumber1").value <= parseInt(min)) {
        document.getElementById("myNumber1").value = min;
    }
    $("#total").text(parseInt(document.getElementById("moNey").value) * document.getElementById("myNumber").value +parseInt(document.getElementById("moNey2").value) * document.getElementById("myNumber2").value +parseInt(document.getElementById("moNey1").value) * document.getElementById("myNumber1").value )
}
//==========================

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
      console.log(name);
    
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
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
function submit1()
{
    document.getElementById("submit-button").style.display = "block";

}
function modal1()
{
    document.getElementById("successful").style.display = "block";
    document.getElementById("customer-form").style.display = "none";
    document.getElementById("customer").style.margin = "0";
}