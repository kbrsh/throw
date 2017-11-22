var throw = document.getElementById("throw")

throw.innerHTML = window.location.hash.length === 0 ? "This is your Throw. \nIt is a simple  throwaway note that is stored in the URL." : atob(window.location.hash);
window.location.href="/#" + btoa(document.getElementById("throw").innerHTML);

document.getElementById("throw").addEventListener("keyup", function() {
   window.location.hash = btoa(encodeURI(this.innerHTML));
});
