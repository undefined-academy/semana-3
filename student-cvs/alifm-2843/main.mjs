// undefined functions
function handleSubmit(event) {
    event.preventDefault();
    console.log("Hello World");
}

const $form = document.querySelector("form");
$form.addEventListener("submit", handleSubmit);


// other functions

//* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}