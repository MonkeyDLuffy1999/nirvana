



//kitchen button click listener

// let x = document.getElementsByClassName("kitchen-button").length;

// for (i = 0; i < x; i++) {
//     document.getElementsByClassName("kitchen-button")[i].addEventListener("click", function() {
//         alert("click");
//     });
// }



//scroll and position listener

//initial scroll position in y axis
var prevScrollpos = window.pageYOffset;

var headerDiv = document.getElementById("header");
var firstDiv = document.getElementById("first");
var secondDiv = document.getElementById("second");
var thirdDiv = document.getElementById("third");


//scroll event listener


window.onscroll = function() {

    //current scroll position after an scroll
    var currentScrollPos = window.pageYOffset;

    //header or navigation bar toggler
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0px";
    } else {
        document.getElementById("header").style.top = "-150px";
    }

    //set value of initial scroll position to current position after each scroll
    prevScrollpos = currentScrollPos;

    // console.log("currentScrollPos: " + currentScrollPos);
    //   console.log("height of header: "+ headerDiv.offsetHeight);
    //   console.log("height of first: "+ firstDiv.offsetHeight);
    // console.log("height of second: "+ secondDiv.offsetHeight);


    //add class for fade in effect to second div after first scroll
    secondDiv.classList.add("div-fadein");


    //add class for fade in effect to third div after second div fully shows up in the screen
    if (currentScrollPos >= secondDiv.offsetHeight + 150) {
        thirdDiv.classList.add("div-fadein");
    }
}

//an example to get the value of y axis before or top of any element i.e. second div in here
function myFunction() {
    var testDiv = document.getElementById("second");
    document.getElementById("demo").innerHTML = testDiv.offsetTop;

}

function showAddButton() {
    console.log("clicked");
    document.getElementById("new-column").classList.remove("hide");
    document.getElementById("add-button").style.display="none";
    document.getElementById("submit-button").style.visibility="visible";

}
