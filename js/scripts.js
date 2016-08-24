var init = function() {
    document.getElementById("throw").innerHTML = window.location.href.split("/#")[1] ? atob(window.location.href.split("/#")[1]) : "This is your Throw. \nIt is a simple note, that supports basic markdown syntax.\nThe best part? It is all stored in the URL."
    window.location.href="/#" + btoa(document.getElementById("throw").innerHTML);
}



init();

document.getElementById("throw").addEventListener("keyup", function() {
   window.location.href="/#" + btoa(this.innerHTML);
});

document.getElementById("throw").addEventListener("blur", function() {
    this.innerHTML = marka(this.innerHTML);
});