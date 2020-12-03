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
window.onpaint = preloadFunc();